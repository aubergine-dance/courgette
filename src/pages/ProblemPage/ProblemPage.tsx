import { Outlet } from 'react-router-dom';

const ProblemPage = () => {
  return (
    <div>
      <p>Problem Page</p>
      <Outlet />
    </div>
  );
};

export default ProblemPage;
