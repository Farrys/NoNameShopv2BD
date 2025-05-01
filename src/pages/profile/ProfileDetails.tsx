import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function ProfileDetails() {
  const { user, updateProfile } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return;
    }
    
    if (!formData.email.trim()) {
      toast.error('Email is required');
      return;
    }
    
    // Save changes
    updateProfile({
      name: formData.name,
      email: formData.email,
      avatar: formData.avatar,
    });
    
    setIsEditing(false);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-medium">Profile Details</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-primary hover:underline text-sm font-medium"
          >
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-1">
                Avatar URL (optional)
              </label>
              <input
                id="avatar"
                name="avatar"
                type="text"
                value={formData.avatar}
                onChange={handleChange}
                className="input w-full"
                placeholder="https://example.com/avatar.jpg"
              />
              {formData.avatar && (
                <div className="mt-2">
                  <p className="text-xs text-gray-500 mb-1">Preview:</p>
                  <img
                    src={formData.avatar}
                    alt="Avatar preview"
                    className="w-16 h-16 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
              )}
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    name: user?.name || '',
                    email: user?.email || '',
                    avatar: user?.avatar || '',
                  });
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Name</h3>
              <p className="mt-1 font-medium">{user?.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1">{user?.email}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
              <p className="mt-1">June 15, 2025</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}