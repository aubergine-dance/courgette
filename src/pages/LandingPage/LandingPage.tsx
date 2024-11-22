import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigateProblemPage = () => {
    navigate('/problems/1');
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-20">
        <p className="text-5xl font-extrabold">문제 출제부터 검수까지 한 번에, 어버진 댄스</p>
        <Button className="w-fit text-xl" onClick={handleNavigateProblemPage}>
          문제 만들기
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
