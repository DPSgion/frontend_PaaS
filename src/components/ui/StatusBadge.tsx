type StatusType = 'Success' | 'Failed' | 'Running' | 'Stopped' | 'Crashed' | 'Building';

interface StatusBadgeProps {
  status: StatusType;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusStyles: Record<StatusType, string> = {
    Success: 'bg-green-100 text-green-700 border-green-200',
    Failed: 'bg-red-100 text-red-700 border-red-200',
    Running: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Stopped: 'bg-gray-100 text-gray-700 border-gray-200',
    Crashed: 'bg-red-100 text-red-700 border-red-200',
    Building: 'bg-orange-100 text-orange-700 border-orange-200',
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-medium border rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
};