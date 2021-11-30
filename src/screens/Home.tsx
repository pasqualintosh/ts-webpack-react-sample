import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {}
interface IState {}

const Home: React.FC<IProps> = (): JSX.Element => {
  React.useEffect(() => {}, []);

  return (
    <div id={'welcome'}>
      <h3>Welcome to the Comune di Palermo online registry office</h3>
      <p>
        With this tool, you will be able to fill in the residence application
        document
      </p>
      <Link to={'/form'}>
        <span className={'lets-start-btn'}>Let’s Start</span>
      </Link>
      <span className={'welcome-image'}></span>
    </div>
  );
};

export default Home;
