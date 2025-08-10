import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Upload } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  discount_price: number | null;
  category: string;
  images: string[];
  brand: string;
  stock: number;
  colors: string[] | null;
  sizes: string[] | null;
  tags: string[] | null;
  featured: boolean;
  bestseller: boolean;
  new_arrival: boolean;
}

interface AdminProductFormProps {
  product?: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const categories = [
  'clothing',
  'electronics',
  'footwear',
  'cosmetics',
  'accessories',
  'furniture',
  'books'
];

export default function AdminProductForm({ product, isOpen, onClose, onSave }: AdminProductFormProps) {
  const [formData, setFormData] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    discount_price: null,
    category: 'clothing',
    images: [''],
    brand: '',
    stock: 0,
    colors: null,
    sizes: null,
    tags: null,
    featured: false,
    bestseller: false,
    new_arrival: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [colorInput, setColorInput] = useState('');
  const [sizeInput, setSizeInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      // Reset form for new product
      setFormData({
        name: '',
        description: '',
        price: 0,
        discount_price: null,
        category: 'clothing',
        images: [''],
        brand: '',
        stock: 0,
        colors: null,
        sizes: null,
        tags: null,
        featured: false,
        bestseller: false,
        new_arrival: false
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
               type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImage = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImage = (index: number) => {
    if (formData.images.length > 1) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, images: newImages }));
    }
  };

  const addColor = () => {
    if (colorInput.trim()) {
      const colors = formData.colors || [];
      if (!colors.includes(colorInput.trim())) {
        setFormData(prev => ({ 
          ...prev, 
          colors: [...colors, colorInput.trim()] 
        }));
      }
      setColorInput('');
    }
  };

  const removeColor = (color: string) => {
    if (formData.colors) {
      const newColors = formData.colors.filter(c => c !== color);
      setFormData(prev => ({ 
        ...prev, 
        colors: newColors.length > 0 ? newColors : null 
      }));
    }
  };

  const addSize = () => {
    if (sizeInput.trim()) {
      const sizes = formData.sizes || [];
      if (!sizes.includes(sizeInput.trim())) {
        setFormData(prev => ({ 
          ...prev, 
          sizes: [...sizes, sizeInput.trim()] 
        }));
      }
      setSizeInput('');
    }
  };

  const removeSize = (size: string) => {
    if (formData.sizes) {
      const newSizes = formData.sizes.filter(s => s !== size);
      setFormData(prev => ({ 
        ...prev, 
        sizes: newSizes.length > 0 ? newSizes : null 
      }));
    }
  };

  const addTag = () => {
    if (tagInput.trim()) {
      const tags = formData.tags || [];
      if (!tags.includes(tagInput.trim())) {
        setFormData(prev => ({ 
          ...prev, 
          tags: [...tags, tagInput.trim()] 
        }));
      }
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    if (formData.tags) {
      const newTags = formData.tags.filter(t => t !== tag);
      setFormData(prev => ({ 
        ...prev, 
        tags: newTags.length > 0 ? newTags : null 
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        toast.error('Название товара обязательно');
        return;
      }

      if (!formData.description.trim()) {
        toast.error('Описание товара обязательно');
        return;
      }

      if (formData.price <= 0) {
        toast.error('Цена должна быть больше 0');
        return;
      }

      if (formData.stock < 0) {
        toast.error('Количество на складе не может быть отрицательным');
        return;
      }

      // Filter out empty images
      const validImages = formData.images.filter(img => img.trim() !== '');
      if (validImages.length === 0) {
        toast.error('Добавьте хотя бы одно изображение');
        return;
      }

      const productData = {
        ...formData,
        images: validImages,
        discount_price: formData.discount_price || null
      };

      if (product?.id) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', product.id);

        if (error) throw error;
        toast.success('Товар обновлен успешно');
      } else {
        // Create new product
        const { error } = await supabase
          .from('products')
          .insert([productData]);

        if (error) throw error;
        toast.success('Товар создан успешно');
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Ошибка сохранения товара');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              {product ? 'Редактировать товар' : 'Добавить новый товар'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Основная информация</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название товара *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Описание *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="input w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Цена *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Цена со скидкой
                  </label>
                  <input
                    type="number"
                    name="discount_price"
                    value={formData.discount_price || ''}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    className="input w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Категория *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Бренд *
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Количество на складе *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  min="0"
                  className="input w-full"
                  required
                />
              </div>
            </div>

            {/* Images and Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Изображения и опции</h3>
              
              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Изображения товара *
                </label>
                {formData.images.map((image, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      placeholder="URL изображения"
                      className="input flex-grow"
                    />
                    {formData.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="btn btn-outline p-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addImage}
                  className="btn btn-outline flex items-center"
                >
                  <Plus size={16} className="mr-1" />
                  Добавить изображение
                </button>
              </div>

              {/* Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Доступные цвета
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={colorInput}
                    onChange={(e) => setColorInput(e.target.value)}
                    placeholder="Добавить цвет"
                    className="input flex-grow"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addColor())}
                  />
                  <button
                    type="button"
                    onClick={addColor}
                    className="btn btn-outline"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.colors?.map(color => (
                    <span
                      key={color}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-sm"
                    >
                      {color}
                      <button
                        type="button"
                        onClick={() => removeColor(color)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Доступные размеры
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                    placeholder="Добавить размер"
                    className="input flex-grow"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSize())}
                  />
                  <button
                    type="button"
                    onClick={addSize}
                    className="btn btn-outline"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.sizes?.map(size => (
                    <span
                      key={size}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-sm"
                    >
                      {size}
                      <button
                        type="button"
                        onClick={() => removeSize(size)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Теги
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Добавить тег"
                    className="input flex-grow"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="btn btn-outline"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags?.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Flags */}
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Рекомендуемый товар
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="bestseller"
                    checked={formData.bestseller}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Хит продаж
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="new_arrival"
                    checked={formData.new_arrival}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Новинка
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline"
              disabled={isLoading}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Сохранение...' : (product ? 'Обновить товар' : 'Создать товар')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}