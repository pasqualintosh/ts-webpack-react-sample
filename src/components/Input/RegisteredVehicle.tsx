import React from 'react';
import { useUserDataProviderContext } from '../../providers/UserDataProvider';
import { Job } from '../../types/app.d.type';

interface IProps {
  whichJsx: string;
  setWichJsx: (param: string) => void;
}

const RegisteredVehicle: React.FC<IProps> = ({
  whichJsx,
  setWichJsx,
}): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();
  const [registered, setRegistered] = React.useState<Job>('yes');

  const setAndContinue = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    param: Job,
  ): void => {
    const currentData = getCurrentData();
    setRegistered(param);
    setCurrentData({ ...currentData, registered_vehicle: param });

    console.log(param == 'yes' ? 'vehicle_details' : 'residence');
    console.log(getCurrentData());

    setWichJsx(param == 'yes' ? 'vehicle_details' : 'residence');
  };

  if (whichJsx != 'registered_vehicle') return <></>;

  return (
    <>
      <p className={'strong'}>Do you have a vehicle registered in Italy?</p>
      <span className="submit-btn yes-no-btn">
        <span
          className={registered === 'yes' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'yes')}>
          YES
        </span>
        <span
          className={registered === 'no' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'no')}>
          NO
        </span>
      </span>
    </>
  );
};

export default RegisteredVehicle;
