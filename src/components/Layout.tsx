import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {}
interface IState {}

const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <>
      <header id={'header'}>
        <ul>
          <li>
            <p>Comune di Palermo</p>
          </li>
          <li>
            <p>ITA</p>
            {/* <Link to={'/'}>lingua</Link> */}
          </li>
        </ul>
        <span id={'header-container'}>
          <span id={'header-container-logo'}>
            <span id={'logo'}>logo</span>
            <span id={'header-container-service'}>
              <p>comune di palermo</p>
              <p>servizio anagrafe</p>
            </span>
          </span>
        </span>
      </header>
      <span
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </span>
    </>
  );
};

export default Layout;
