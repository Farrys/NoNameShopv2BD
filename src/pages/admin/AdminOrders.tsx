import { useState, useEffect } from 'react';
import { 
  Search, 
  Eye, 
  Download,
  Filter,
  Calendar,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { formatPrice } from '../../lib/utils';
import { exportOrdersToPDF, exportOrdersToExcel, exportOrderToPDF } from '../../lib/export';
import toast from 'react-hot-toast';

interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  payment_method: string;
  shipping_address: any;
  created_at: string;
  updated_at: string;
  users: {
    name: string;
    email: string;
  };
  order_items: {
    id: string;
    quantity: number;
    price: number;
    color: string | null;
    size: string | null;
    products: {
      name: string;
      images: string[];
    };
  }[];
}

const statusIcons = {
  pending: Clock,
  processing: Package,
  shipped: Truck,
  delivered: CheckCircle,
  canceled: XCircle
};

const statusColors = {
  pending: 'bg-gray-100 text-gray-800',
  processing: 'bg-yellow-100 text-yellow-800',
  shipped: 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800',
  canceled: 'bg-red-100 text-red-800'
};

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  
  useEffect(() => {
    fetchOrders();
  }, []);
  
  useEffect(() => {
    filterOrders();
  }, [orders, searchQuery, selectedStatus]);
  
  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          users (name, email),
          order_items (
            id,
            quantity,
            price,
            color,
            size,
            products (name, images)
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Ошибка загрузки заказов');
    } finally {
      setIsLoading(false);
    }
  };
  
  const filterOrders = () => {
    let filtered = orders;
    
    if (searchQuery) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.users?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.users?.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedStatus) {
      filtered = filtered.filter(order => order.status === selectedStatus);
    }
    
    setFilteredOrders(filtered);
  };
  
  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);
      
      if (error) throw error;
      
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus as any } : order
      ));
      
      toast.success('Статус заказа обновлен');
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Ошибка обновления статуса');
    }
  };
  
  const handleExportOrders = () => {
    const exportData = filteredOrders.map(order => ({
      id: order.id,
      user_name: order.users?.name || 'Unknown',
      user_email: order.users?.email || 'Unknown',
      status: order.status,
      total: order.total,
      created_at: order.created_at,
      items: order.order_items.map(item => ({
        product_name: item.products?.name || 'Unknown',
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        size: item.size
      })),
      shipping_address: order.shipping_address
    }));
    
    exportOrdersToPDF(exportData);
    toast.success('Заказы экспортированы в PDF');
  };
  
  const handleExportSingleOrder = (order: Order) => {
    const exportData = {
      id: order.id,
      user_name: order.users?.name || 'Unknown',
      user_email: order.users?.email || 'Unknown',
      status: order.status,
      total: order.total,
      created_at: order.created_at,
      items: order.order_items.map(item => ({
        product_name: item.products?.name || 'Unknown',
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        size: item.size
      })),
      shipping_address: order.shipping_address
    };
    
    exportOrderToPDF(exportData);
    toast.success('Заказ экспортирован в PDF');
  };
  
  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Управление заказами</h1>
        <button
          onClick={handleExportOrders}
          className="btn btn-primary flex items-center"
        >
          <Download size={18} className="mr-2" />
          Экспорт заказов
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск заказов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10 w-full"
              />
            </div>
          </div>
          
          <div className="md:w-48">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="input w-full"
            >
              <option value="">Все статусы</option>
              <option value="pending">В ожидании</option>
              <option value="processing">Обработка</option>
              <option value="shipped">Отправлен</option>
              <option value="delivered">Доставлен</option>
              <option value="canceled">Отменен</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Заказ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Клиент
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Сумма
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дата
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const StatusIcon = statusIcons[order.status];
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          #{order.id.substring(0, 8)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.order_items.length} товар(ов)
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.users?.name || 'Unknown User'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.users?.email || 'No email'}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <StatusIcon size={16} className="mr-2" />
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                          className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${statusColors[order.status]}`}
                        >
                          <option value="pending">В ожидании</option>
                          <option value="processing">Обработка</option>
                          <option value="shipped">Отправлен</option>
                          <option value="delivered">Доставлен</option>
                          <option value="canceled">Отменен</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowOrderModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Просмотр заказа"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleExportSingleOrder(order)}
                          className="text-green-600 hover:text-green-900"
                          title="Экспорт в PDF"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Заказы не найдены</h3>
            <p className="text-gray-500">
              {searchQuery || selectedStatus 
                ? 'Попробуйте изменить фильтры поиска'
                : 'Заказы появятся здесь после их создания'
              }
            </p>
          </div>
        )}
      </div>
      
      {/* Order Details Modal */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Детали заказа #{selectedOrder.id.substring(0, 8)}
                </h2>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium mb-2">Информация о клиенте</h3>
                  <p><strong>Имя:</strong> {selectedOrder.users?.name}</p>
                  <p><strong>Email:</strong> {selectedOrder.users?.email}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Информация о заказе</h3>
                  <p><strong>Статус:</strong> {selectedOrder.status}</p>
                  <p><strong>Способ оплаты:</strong> {selectedOrder.payment_method}</p>
                  <p><strong>Дата:</strong> {new Date(selectedOrder.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              
              {selectedOrder.shipping_address && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Адрес доставки</h3>
                  <p>{selectedOrder.shipping_address.street}</p>
                  <p>{selectedOrder.shipping_address.city}, {selectedOrder.shipping_address.state} {selectedOrder.shipping_address.zipCode}</p>
                  <p>{selectedOrder.shipping_address.country}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Товары</h3>
                <div className="space-y-3">
                  {selectedOrder.order_items.map((item) => (
                    <div key={item.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        {item.products?.images?.[0] && (
                          <img 
                            src={item.products.images[0]} 
                            alt={item.products.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="ml-4 flex-grow">
                        <p className="font-medium">{item.products?.name}</p>
                        <div className="text-sm text-gray-500">
                          {item.color && <span>Цвет: {item.color}</span>}
                          {item.color && item.size && <span className="mx-2">|</span>}
                          {item.size && <span>Размер: {item.size}</span>}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price)}</p>
                        <p className="text-sm text-gray-500">Кол-во: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Подытог:</span>
                  <span>{formatPrice(selectedOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Доставка:</span>
                  <span>{formatPrice(selectedOrder.shipping)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Налог:</span>
                  <span>{formatPrice(selectedOrder.tax)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Итого:</span>
                  <span>{formatPrice(selectedOrder.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}