import React from 'react';
import { Link } from 'react-router-dom';
import { modifyPdf } from './ManagePdf';

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
              <p>Comune di Palermo</p>
              <p>Servizio Anagrafe</p>
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
          flexDirection: 'column',
        }}>
        {children}

        <div id={'download'}>
          <span onClick={() => modifyPdf()}>Scarica</span>
        </div>
      </span>
    </>
  );
};

export default Layout;
