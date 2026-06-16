// src/components/layout/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  // Kiểm tra xem đã có token trong LocalStorage chưa
  const token = localStorage.getItem('paas_token');

  // Nếu không có token, đá văng ra trang login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Nếu có token, cho phép render các Component con (hệ thống bên trong)
  return <Outlet />;
};