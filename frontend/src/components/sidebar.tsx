"use client";

import React, { useState } from 'react';
import { Upload, Settings, History, ChevronDown, FileType } from 'lucide-react';
import UserProfile from '../app/account/page';
import Converter from '../app/converter/page';
import HistorySection from '../app/history/page';
import NavItem from './NavItem';

const Sidebar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div className="w-60 border-r flex flex-col">
      <UserProfile />
      <nav className="flex-1 text-sm">
        <NavItem icon={Upload} label="Upload Files" onClick={() => {}} />
        <NavItem icon={FileType} label="Convert Files" onClick={() => {}} />
        <HistorySection
          isOpen={isHistoryOpen}
          onToggle={() => setIsHistoryOpen(!isHistoryOpen)}
        />
        <NavItem icon={Settings} label="Settings" onClick={() => {}} />
      </nav>
    </div>
  );
};

export default Sidebar;
