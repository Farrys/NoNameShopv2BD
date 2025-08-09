import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

export interface ExportOrder {
  id: string;
  user_name: string;
  user_email: string;
  status: string;
  total: number;
  created_at: string;
  items: {
    product_name: string;
    quantity: number;
    price: number;
    color?: string;
    size?: string;
  }[];
  shipping_address: any;
}

export interface ExportProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discount_price?: number;
  stock: number;
  rating: number;
  featured: boolean;
  bestseller: boolean;
  new_arrival: boolean;
  created_at: string;
}

// Export orders to PDF
export const exportOrdersToPDF = (orders: ExportOrder[]) => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.text('Orders Report', 14, 22);
  
  // Date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
  
  // Table data
  const tableData = orders.map(order => [
    order.id.substring(0, 8),
    order.user_name,
    order.status,
    `$${order.total.toFixed(2)}`,
    new Date(order.created_at).toLocaleDateString(),
    order.items.length.toString()
  ]);
  
  autoTable(doc, {
    head: [['Order ID', 'Customer', 'Status', 'Total', 'Date', 'Items']],
    body: tableData,
    startY: 35,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [37, 99, 235] }
  });
  
  doc.save('orders-report.pdf');
};

// Export single order to PDF
export const exportOrderToPDF = (order: ExportOrder) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('Order Invoice', 14, 22);
  
  // Order info
  doc.setFontSize(12);
  doc.text(`Order ID: ${order.id}`, 14, 35);
  doc.text(`Date: ${new Date(order.created_at).toLocaleDateString()}`, 14, 42);
  doc.text(`Status: ${order.status.toUpperCase()}`, 14, 49);
  
  // Customer info
  doc.text('Customer Information:', 14, 63);
  doc.setFontSize(10);
  doc.text(`Name: ${order.user_name}`, 14, 70);
  doc.text(`Email: ${order.user_email}`, 14, 77);
  
  // Shipping address
  if (order.shipping_address) {
    doc.text('Shipping Address:', 14, 91);
    doc.text(`${order.shipping_address.street}`, 14, 98);
    doc.text(`${order.shipping_address.city}, ${order.shipping_address.state} ${order.shipping_address.zipCode}`, 14, 105);
    doc.text(`${order.shipping_address.country}`, 14, 112);
  }
  
  // Items table
  const itemsData = order.items.map(item => [
    item.product_name,
    item.quantity.toString(),
    `$${item.price.toFixed(2)}`,
    item.color || '-',
    item.size || '-',
    `$${(item.quantity * item.price).toFixed(2)}`
  ]);
  
  autoTable(doc, {
    head: [['Product', 'Qty', 'Price', 'Color', 'Size', 'Total']],
    body: itemsData,
    startY: 125,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [37, 99, 235] }
  });
  
  // Total
  const finalY = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.text(`Total: $${order.total.toFixed(2)}`, 14, finalY);
  
  doc.save(`order-${order.id.substring(0, 8)}.pdf`);
};

// Export products to Excel
export const exportProductsToExcel = (products: ExportProduct[]) => {
  const worksheet = XLSX.utils.json_to_sheet(products.map(product => ({
    'Product ID': product.id,
    'Name': product.name,
    'Brand': product.brand,
    'Category': product.category,
    'Price': product.price,
    'Discount Price': product.discount_price || '',
    'Stock': product.stock,
    'Rating': product.rating,
    'Featured': product.featured ? 'Yes' : 'No',
    'Bestseller': product.bestseller ? 'Yes' : 'No',
    'New Arrival': product.new_arrival ? 'Yes' : 'No',
    'Created At': new Date(product.created_at).toLocaleDateString()
  })));
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
  
  XLSX.writeFile(workbook, 'products-export.xlsx');
};

// Export orders to Excel
export const exportOrdersToExcel = (orders: ExportOrder[]) => {
  const worksheet = XLSX.utils.json_to_sheet(orders.map(order => ({
    'Order ID': order.id,
    'Customer Name': order.user_name,
    'Customer Email': order.user_email,
    'Status': order.status,
    'Total': order.total,
    'Items Count': order.items.length,
    'Created At': new Date(order.created_at).toLocaleDateString()
  })));
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
  
  XLSX.writeFile(workbook, 'orders-export.xlsx');
};

// Export to JSON
export const exportToJSON = (data: any[], filename: string) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// Export to CSV
export const exportToCSV = (data: any[], filename: string) => {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Escape commas and quotes
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(',')
    )
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};