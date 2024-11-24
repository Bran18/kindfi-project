import type React from 'react';

// Benefit Item Component
interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

export const BenefitItem = ({ icon, text, isActive = false }: BenefitItemProps) => (
  <div className={`flex items-center gap-3 p-3 transition-colors rounded-lg
    ${isActive ? 'bg-teal-50' : 'hover:bg-gray-50'}`}>
    <div className="text-teal-600">
      {icon}
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);