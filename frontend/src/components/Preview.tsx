'use client'

import { useState } from 'react'
import { File } from 'lucide-react'

export function FilePreview() {
  // This would typically come from your file upload component
  const [files, setFiles] = useState([
    { name: 'document.pdf', size: '2.5 MB' },
    { name: 'image.jpg', size: '1.2 MB' },
  ])

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
            <File className="w-5 h-5 text-gray-500" />
            <span className="flex-1">{file.name}</span>
            <span className="text-sm text-gray-500">{file.size}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

