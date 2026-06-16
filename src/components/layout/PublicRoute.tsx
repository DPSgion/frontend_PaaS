import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  // Kiểm tra vé trong túi
  const token = localStorage.getItem('paas_token');

  // Nếu ĐÃ CÓ token (đã đăng nhập), lập tức đá ngược về trang chủ nội bộ
  if (token) {
    return <Navigate to="/" replace />;
  }

  // Nếu CHƯA CÓ token, cho phép render trang Login
  return <Outlet />;
};