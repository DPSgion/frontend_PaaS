// src/features/admin/pages/SystemOverview.tsx
export const SystemOverview = () => {
  return (
    <div>
      {/* Page Header (Hợp lý hơn wireframe, luôn có tiêu đề trang rõ ràng) */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">System Overview</h2>
        <p className="text-gray-600">Monitor overall cluster health and infrastructure status.</p>
      </div>

      {/* Nội dung mẫu bằng Card (Đây mới là thứ làm giao diện đẹp lên) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[ {title: 'Active Clusters', value: '12'}, {title: 'Total nodes', value: '148'}, {title: 'CPU Usage', value: '68%'}, {title: 'Memory Usage', value: '72%'} ].map(stat => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-sm font-medium text-gray-500 mb-1">{stat.title}</div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex items-center justify-center text-gray-400">
        Chart or Table Content Here
      </div>
    </div>
  );
};