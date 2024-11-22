import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
