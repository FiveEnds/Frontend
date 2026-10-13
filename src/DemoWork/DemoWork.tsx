import React, { useState } from 'react';
import { VladyslavLozynskyi } from './VladyslavLozynskyi';
import { VladyslavChuikov } from './VladyslavChuikov';
import { VladyslavPetrovskyi } from './VladyslavPetrovskyi';
import { Alexandr } from './Alexandr';
import { Tymofii } from './Tymofii';

const teamWork = [
  { name: 'Vladyslav Lozynskyi', component: <VladyslavLozynskyi /> },
  { name: 'Alexandr', component: <Alexandr /> },
  { name: 'Tymofii', component: <Tymofii /> },
  { name: 'Vladyslav Petrovskyi', component: <VladyslavPetrovskyi /> },
  { name: 'Vladyslav Chuikov', component: <VladyslavChuikov /> },
];

export const DemoWork: React.FC = () => {
  const [activeName, setActiveName] = useState<string | null>(null);

  const toggleMember = (name: string) => {
    setActiveName(activeName === name ? null : name);
  };

  return (
    <div className="flex flex-col gap-4">
      {teamWork.map((item, index) => (
        <div
          key={index}
          className="border-b pb-6"
        >
          <button
            type="button"
            className="text-xl font-bold text-left w-full py-2 cursor-pointer flex justify-between items-center hover:text-blue-600 transition-colors"
            onClick={() => toggleMember(item.name)}
          >
            <span>{item.name}</span>
            <span>{activeName === item.name ? '▲' : '▼'}</span>
          </button>

          {activeName === item.name && (
            <div className="mt-4 pt-2">{item.component}</div>
          )}
        </div>
      ))}
    </div>
  );
};
