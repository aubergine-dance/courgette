import { Link } from 'react-router-dom';

const ProblemPage = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col">
        <p className="text-xl font-bold">Problem Menu</p>
        <ul>
          <li>
            <Link to={'statements'}>Statements</Link>
          </li>
          <li>Checker</li>
          <li>Validator</li>
          <li>Tests</li>
          <li>Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemPage;
