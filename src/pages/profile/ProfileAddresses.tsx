import { useState } from 'react';
import { Check, Plus, MapPin, Trash2, Edit, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Address } from '../../types';

export default function ProfileAddresses() {
  const { user, addAddress, updateAddress, removeAddress, setDefaultAddress } = useAuth();
  
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Address, 'id'>>({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    isDefault: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress(formData);
    setIsAdding(false);
    resetForm();
  };
  
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateAddress({ id: isEditing, ...formData });
      setIsEditing(null);
      resetForm();
    }
  };
  
  const handleEdit = (address: Address) => {
    setFormData({
      name: address.name,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country,
      isDefault: address.isDefault,
    });
    setIsEditing(address.id);
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      isDefault: false,
    });
  };
  
  const cancelForm = () => {
    setIsAdding(false);
    setIsEditing(null);
    resetForm();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-medium">My Addresses</h2>
        {!isAdding && !isEditing && (
          <button
            onClick={() => setIsAdding(true)}
            className="btn btn-sm btn-outline flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Add New Address
          </button>
        )}
      </div>
      
      <div className="p-6">
        {isAdding || isEditing ? (
          <form onSubmit={isEditing ? handleEditSubmit : handleAddSubmit} className="max-w-xl">
            <h3 className="font-medium mb-4">
              {isEditing ? 'Edit Address' : 'Add New Address'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Address Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Home, Work, etc."
                  required
                />
              </div>
              
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  id="street"
                  name="street"
                  type="text"
                  value={formData.street}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="123 Main St, Apt 4B"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State / Province
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  id="isDefault"
                  name="isDefault"
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isDefault" className="text-sm text-gray-700">
                  Set as default address
                </label>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button
                type="submit"
                className="btn btn-primary"
              >
                {isEditing ? 'Update Address' : 'Add Address'}
              </button>
              <button
                type="button"
                onClick={cancelForm}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            {user?.addresses && user.addresses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.addresses.map(address => (
                  <div 
                    key={address.id} 
                    className="border rounded-lg p-4 relative"
                  >
                    {address.isDefault && (
                      <div className="absolute top-3 right-3 flex items-center text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        <Check size={12} className="mr-1" />
                        Default
                      </div>
                    )}
                    
                    <h3 className="font-medium mb-2">{address.name}</h3>
                    <div className="text-gray-600 mb-4">
                      <p>{address.street}</p>
                      <p>
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p>{address.country}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(address)}
                        className="btn btn-sm btn-outline flex items-center"
                      >
                        <Edit size={14} className="mr-1" />
                        Edit
                      </button>
                      
                      {!address.isDefault && (
                        <>
                          <button
                            onClick={() => setDefaultAddress(address.id)}
                            className="btn btn-sm btn-outline flex items-center"
                          >
                            <Check size={14} className="mr-1" />
                            Set as Default
                          </button>
                          
                          <button
                            onClick={() => removeAddress(address.id)}
                            className="btn btn-sm btn-outline flex items-center text-red-500 hover:bg-red-50"
                          >
                            <Trash2 size={14} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No addresses yet</h3>
                <p className="text-gray-500 mb-6">
                  Add your first address to make checkout faster.
                </p>
                <button 
                  onClick={() => setIsAdding(true)}
                  className="btn btn-primary"
                >
                  <Plus size={16} className="mr-1" />
                  Add an Address
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}