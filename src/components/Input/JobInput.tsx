import React, { Dispatch, SetStateAction } from 'react';
import { useUserDataProviderContext } from '../../providers/UserDataProvider';
import { IFormInput, Job } from '../../types/app.d.type';

interface IProps {
  whichJsx: string;
  setWichJsx: Dispatch<SetStateAction<string>>;
}

const JobInput: React.FC<IProps> = ({ whichJsx, setWichJsx }): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();

  const [job, setJob] = React.useState<Job>('yes');

  const setAndContinue = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    param: Job,
  ): void => {
    const currentData = getCurrentData();
    setJob(param);
    setCurrentData({ ...currentData, job: param });
    setWichJsx('profession');
  };

  if (whichJsx != 'job') return <></>;

  return (
    <>
      <span className="submit-btn yes-no-btn">
        <span
          className={job === 'yes' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'yes')}>
          YES
        </span>
        <span
          className={job === 'no' ? 'yes-no-btn-white' : ''}
          onClick={event => setAndContinue(event, 'no')}>
          NO
        </span>
      </span>
    </>
  );
};

export default JobInput;
