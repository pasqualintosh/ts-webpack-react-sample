import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { useUserDataProviderContext } from '../providers/UserDataProvider';
import { CitizenEnum, IFormInput } from '../types/app.d.type';
import {
  CitizenOption,
  EuFemStatusOption,
  EuStatusOption,
  NonEuStatusOption,
} from '../types/options';

const Form: React.FC = (): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const [whichJsx, setWichJsx] = React.useState('');

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const currentData = getCurrentData();

    Object.keys(data).map(k => {
      setCurrentData({ ...currentData, [k]: data[k].value });
    });

    if (data.citizen?.value.includes(CitizenEnum.eu_female))
      setWichJsx('citizen_female');
    if (data.citizen?.value.includes(CitizenEnum.italian))
      setWichJsx('citizen_italian');
    if (data.citizen?.value.includes(CitizenEnum.non_eu)) setWichJsx('non_eu');
  };

  const citizenType = (): JSX.Element => (
    <>
      <label id={'citizen'}>Select your Citizenship</label>
      <Controller
        name="citizen"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={CitizenOption} />
        )}
      />
    </>
  );

  const nonEuStatus = (): JSX.Element => (
    <>
      <label id={'non_eu_status'}>What’s your status?</label>
      <Controller
        name="non_eu_status"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={NonEuStatusOption} />
        )}
      />
    </>
  );

  const euStatus = (): JSX.Element => (
    <>
      <label id={'eu_status'}>What’s your status?</label>
      <Controller
        name="eu_status"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={EuStatusOption} />
        )}
      />
    </>
  );

  const euFemStatus = (): JSX.Element => (
    <>
      <label id={'eu_fem_status'}>What’s your status?</label>
      <Controller
        name="eu_fem_status"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={EuFemStatusOption} />
        )}
      />
    </>
  );

  return (
    <div id={'form-wrapper'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {whichJsx == '' && citizenType()}
        {whichJsx == 'non_eu' && nonEuStatus()}
        {whichJsx == 'citizen_italian' && euStatus()}
        {whichJsx == 'citizen_female' && euFemStatus()}
        <input className={'submit-btn'} type={'submit'} value={'Continue'} />
      </form>
    </div>
  );
};

export default Form;
