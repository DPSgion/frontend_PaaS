import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

import { DevDashboard } from '../features/developer/DevDashboard';

import { SystemOverview } from '../features/admin/SystemOverview';
// import { UsersManagement } from '../features/admin/pages/UsersManagement';
// import { AllProjects } from '../features/admin/pages/AllProjects';
// import { AuditLogs } from '../features/admin/pages/AuditLogs';

// Mock Pages (Bạn sẽ tạo các file thật trong thư mục features sau)
const MyProjects = () => <div>My Projects Content</div>;
const UsersManagement = () => <div>Users Management Content</div>;
const AllProjects = () => <div>All Projects Content</div>;
const AuditLogs = () => <div>Audit Logs Content</div>;

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Personal Space Routes */}
          <Route path="/" element={<DevDashboard />} />
          <Route path="/my-projects" element={<MyProjects />} />
          
          {/* Admin Routes */}
          <Route path="/admin/overview" element={<SystemOverview />} />
          <Route path="/admin/users-management" element={<UsersManagement />} />
          <Route path="/admin/all-projects" element={<AllProjects />} />
          <Route path="/admin/audit-logs" element={<AuditLogs />} />
          {/* ... các route admin khác */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};