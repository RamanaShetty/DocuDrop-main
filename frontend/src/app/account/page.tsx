import React from 'react';
import { User } from 'lucide-react';

const UserProfile = () => (
  <div className="p-3 border-b">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
        <User size={14} className="text-blue-600" />
      </div>
      <div className="text-sm">
        <div className="font-medium text-red-900">John Doe</div>
        <div className="text-gray-500 text-xs">john@university.edu</div>
      </div>
    </div>
  </div>
);

export default UserProfile;
