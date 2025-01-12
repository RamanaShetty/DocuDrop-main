import React from 'react';
import { Upload } from 'lucide-react';

const UploadArea = () => (
  <div className="w-full max-w-lg">
    <div className="border border-dashed border-gray-200 rounded-lg p-8 text-center">
      <div className="mb-4">
        <Upload className="w-8 h-8 mx-auto text-gray-400" />
      </div>
      <div className="text-sm">
        Drop your files here
        <span className="text-gray-400 mx-2">or</span>
        <button className="text-blue-500 hover:text-blue-600">
          browse files
        </button>
      </div>
    </div>
  </div>
);

export default UploadArea;