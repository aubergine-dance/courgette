import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-20">
        <p className="text-5xl font-extrabold">유효하지 않은 페이지입니다</p>
        <Button className="w-fit text-xl" onClick={handleNavigateHome}>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
