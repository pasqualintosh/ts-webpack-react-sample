import React from 'react';
import { useUserDataProviderContext } from '../../providers/UserDataProvider';
import { Job } from '../../types/app.d.type';

interface IProps {
  whichJsx: string;
  setWichJsx: (param: string) => void;
}

const DrivingLicense: React.FC<IProps> = ({
  whichJsx,
  setWichJsx,
}): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();
  const [license, setLicense] = React.useState<Job>('yes');

  const setAndContinue = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    param: Job,
  ): void => {
    const currentData = getCurrentData();
    setLicense(param);
    setCurrentData({ ...currentData, driving_license: param });
    setWichJsx(param == 'yes' ? 'driving_license_details' : 'residence');
  };

  if (whichJsx != 'driving_license') return <></>;

  return (
    <>
      <p className={'strong'}>Do you have an Italian Driving License?</p>
      <span className="submit-btn yes-no-btn">
        <span
          className={license === 'yes' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'yes')}>
          YES
        </span>
        <span
          className={license === 'no' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'no')}>
          NO
        </span>
      </span>
    </>
  );
};

export default DrivingLicense;
