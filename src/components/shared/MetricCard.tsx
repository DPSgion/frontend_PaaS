import { FiArrowRight } from 'react-icons/fi';

interface MetricCardProps {
  title: string;
  value: number | string;
  titleColor?: string; // Để đổi màu chữ "Running" thành xanh, "Crashed" thành đỏ...
  extraNote?: React.ReactNode; // Dành cho cái box cam (+1 building)
}

export const MetricCard = ({ title, value, titleColor = 'text-gray-900', extraNote }: MetricCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-sm font-semibold ${titleColor}`}>{title}</h3>
        <FiArrowRight className="text-gray-400" />
      </div>
      <div className="flex items-end gap-3">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
        {extraNote && <div>{extraNote}</div>}
      </div>
    </div>
  );
};