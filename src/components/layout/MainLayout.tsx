// src/components/layout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans antialiased text-gray-900 bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        {/* Vùng không gian chính: Nền gray-100 để nổi bật nội dung */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-gray-100">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};