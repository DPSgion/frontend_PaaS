import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  // Đổi paas_token thành paas_user
  const user = localStorage.getItem('paas_user');

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};