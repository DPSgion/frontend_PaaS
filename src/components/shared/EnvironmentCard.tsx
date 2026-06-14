// src/components/shared/EnvironmentCard.tsx
import { StatusBadge } from '../ui/StatusBadge';

interface EnvironmentCardProps {
  status: 'Building' | 'Crashed' | 'Running' | 'Stopped' | 'Success' | 'Failed';
  domain: string;
  branch: string;
  time: string;
}

export const EnvironmentCard = ({ status, domain, branch, time }: EnvironmentCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group h-full">
      {/* Góc trên: Badge trạng thái */}
      <div className="mb-5">
        <StatusBadge status={status} />
      </div>
      
      {/* Thông số kỹ thuật */}
      <div className="space-y-3.5 text-sm">
        <div className="flex items-center">
          <span className="text-gray-500 w-16">Domain:</span>
          <span className="text-gray-900 font-medium truncate group-hover:text-indigo-600 transition-colors">
            {domain}
          </span>
        </div>
        
        {/* Branch được làm nổi bật cực mạnh ở đây */}
        <div className="flex items-center">
          <span className="text-gray-500 w-16 text-sm">Branch:</span>
          <span className="font-mono text-sm font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-200 shadow-sm">
            {branch}
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-gray-500 w-16">Time:</span>
          <span className="text-gray-500">{time}</span>
        </div>
      </div>
    </div>
  );
};