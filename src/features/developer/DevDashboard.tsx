// src/features/developer/DevDashboard.tsx
import { StatusBadge } from '../../components/ui/StatusBadge';
import { MetricCard } from '../../components/shared/MetricCard';

// 1. Cập nhật dữ liệu giả (Mock Data) phần Logs bao gồm cả ngày và giờ
const mockRecentDeploys = [
  { id: 1, name: 'Cupzone Backend', status: 'Success', commitSha: 'a1b2c3d', commitTitle: 'fix: jwt token expiry', time: '10 mins ago' },
  { id: 2, name: 'AI English Master', status: 'Failed', commitSha: 'f4e5d6c', commitTitle: 'feat: add whisper integration', time: '2 hours ago' },
];

const mockLogs = [
  { datetime: '14/06/2026 14:32:01', event: 'Container cupzone-api started successfully on port 8080.' },
  { datetime: '14/06/2026 12:15:45', event: 'Build failed for ai-english-web: Missing dependency "axios".' },
  { datetime: '13/06/2026 09:00:12', event: 'System clear 2GB garbage logs.' },
];

export const DevDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header & Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Good Morning, Phuong 👋</h2>
        <p className="text-gray-500 mt-1">Here's what's happening with your apps today.</p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard title="Total" value={4} />
        
        {/* Tăng kích thước khu vực hiển thị trạng thái đang build (+1 🕒) */}
        <MetricCard 
          title="Running" 
          value={1} 
          titleColor="text-emerald-600"
          extraNote={
            <div 
              className="flex items-center gap-1.5 text-sm font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-lg animate-pulse"
              title="Project is building..."
            >
              <span>+1</span>
              <span className="text-base">🕒</span>
            </div>
          } 
        />
        
        <MetricCard title="Stopped" value={1} />
        <MetricCard title="Crashed" value={1} titleColor="text-red-600" />
      </div>

      {/* Recent Deployed Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-800">Recent Deployments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Commit</th>
                <th className="px-6 py-3 text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockRecentDeploys.map((deploy) => (
                <tr key={deploy.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{deploy.name}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={deploy.status as 'Success' | 'Failed'} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 mr-2">
                      {deploy.commitSha}
                    </span>
                    {deploy.commitTitle}
                  </td>
                  <td className="px-6 py-4 text-right text-gray-500">{deploy.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logs Box */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-800">Logs</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left font-mono text-gray-600">
            <tbody>
              {mockLogs.map((log, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  {/* Nới rộng độ rộng cột (w-44) để hiển thị vừa vặn cả ngày và giờ */}
                  <td className="px-6 py-3 w-44 text-gray-400 align-top whitespace-nowrap">{log.datetime}</td>
                  <td className="px-6 py-3 text-gray-800">{log.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};