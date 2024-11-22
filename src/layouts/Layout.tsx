import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main className="h-[calc(100vh-64px)] p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
