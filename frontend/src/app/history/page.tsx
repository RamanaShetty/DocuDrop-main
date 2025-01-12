// import React from 'react';
// import { History, ChevronDown } from 'lucide-react';
// import { FileText } from 'lucide-react';
// interface HistoryItemProps {
//     filename: string;
//     date: string;
//     status: 'Completed' | 'Processing' | 'Failed';
//   }
  

//   const HistoryItem: React.FC<HistoryItemProps> = ({ filename, date, status }) => (
//     <div className="px-3 py-2 hover:bg-gray-50">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <FileText size={14} className="text-gray-400" />
//           <span className="truncate text-xs">{filename}</span>
//         </div>
//         <span
//           className={`text-xs px-1.5 py-0.5 rounded-full ${
//             status === 'Completed' ? 'bg-green-50 text-green-600' :
//             status === 'Processing' ? 'bg-blue-50 text-blue-600' :
//             'bg-red-50 text-red-600'
//           }`}
//         >
//           {status}
//         </span>
//       </div>
//       <div className="text-xs text-gray-400 ml-6 mt-1">{date}</div>
//     </div>
//   );

// interface HistorySectionProps {
//     isOpen: boolean;
//     onToggle: () => void;
//   }
  

// const HistorySection: React.FC<HistorySectionProps> = ({ isOpen, onToggle }) => {
//   const mockHistory = [
//     { id: 1, filename: 'Assignment.pdf', date: '2025-01-01', status: 'Completed' },
//     { id: 2, filename: 'Notes.docx', date: '2024-12-31', status: 'Processing' },
//     { id: 3, filename: 'Report.pdf', date: '2024-12-30', status: 'Failed' }
//   ];

//   return (
//     <div>
//       <button 
//         onClick={onToggle}
//         className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between"
//       >
//         <div className="flex items-center space-x-2">
//           <History size={14} />
//           <span>History</span>
//         </div>
//         <ChevronDown 
//           size={14}
//           className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
//         />
//       </button>
      
//       <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
//         {mockHistory.map(item => (
//           <HistoryItem filename="Assignment.pdf" date="2025-01-01" status="Completed"/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HistorySection;
// {/* <HistoryItem filename="Assignment.pdf" date="2025-01-01" status="Completed" /> */}
// src/app/history/History.tsx
import React from 'react';
import { History, ChevronDown, FileText } from 'lucide-react';

interface HistoryItemProps {
  id: number;
  filename: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Failed';
}

const HistoryItem = ({ id, filename, date, status }: HistoryItemProps) => (
  <div className="px-3 py-2 hover:bg-gray-50">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FileText size={14} className="text-gray-400" />
        <span className="truncate text-xs">{filename}</span>
      </div>
      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
        status === 'Completed' ? 'bg-green-50 text-green-600' :
        status === 'Processing' ? 'bg-blue-50 text-blue-600' :
        'bg-red-50 text-red-600'
      }`}>
        {status}
      </span>
    </div>
    <div className="text-xs text-gray-400 ml-6 mt-1">
      {date}
    </div>
  </div>
);

interface HistorySectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HistorySection = ({ isOpen, onToggle }: HistorySectionProps) => {
  const mockHistory: HistoryItemProps[] = [
    { id: 1, filename: 'Assignment.pdf', date: '2025-01-01', status: 'Completed' },
    { id: 2, filename: 'Notes.docx', date: '2024-12-31', status: 'Processing' },
    { id: 3, filename: 'Report.pdf', date: '2024-12-30', status: 'Failed' }
  ];

  return (
    <div>
      <button 
        onClick={onToggle}
        className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <History size={14} />
          <span>History</span>
        </div>
        <ChevronDown 
          size={14}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        {mockHistory.map((item) => (
          <HistoryItem 
            key={item.id}
            id={item.id}
            filename={item.filename}
            date={item.date}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default HistorySection;