import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import GeneralInput from '../components/GeneralInput';
import LocationInput from '../components/LocationInput';
import StatusInput from '../components/StatusInput';
import { useUserDataProviderContext } from '../providers/UserDataProvider';
import { Citizen, IFormInput, MovingFrom } from '../types/app.d.type';
import { CitizenOption, MovingFromOption } from '../types/options';

const Form: React.FC = (): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const [whichJsx, setWichJsx] = React.useState('');

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const currentData = getCurrentData();

    Object.keys(data).map(k => {
      if (data[k]) {
        if (data[k].value)
          setCurrentData({ ...currentData, [k]: data[k].value });
        else setCurrentData({ ...currentData, [k]: data[k] });
      }
    });

    // console.log(data);
    console.log(Object.keys(data));
    // console.log(Object.values(data));

    if (data.citizen) {
      if (data.citizen?.value.includes(Citizen.eu_female))
        setWichJsx('citizen_female');
      if (data.citizen?.value.includes(Citizen.italian))
        setWichJsx('citizen_italian');
      if (data.citizen?.value.includes(Citizen.non_eu)) setWichJsx('non_eu');
    }

    if (
      Object.keys(data).includes('non_eu_status') ||
      Object.keys(data).includes('eu_status') ||
      Object.keys(data).includes('eu_fem_status')
    )
      setWichJsx('moving_from');

    if (data.moving_from) {
      if (data.moving_from?.value.includes(MovingFrom.foreign))
        setWichJsx('aire_location');
      if (data.moving_from?.value.includes(MovingFrom.it_aire))
        setWichJsx('foreign_location');
      if (data.moving_from?.value.includes(MovingFrom.different_city))
        setWichJsx('different_location');

      if (data.moving_from?.value.includes(MovingFrom.same_city))
        setWichJsx('general_input');
      if (data.moving_from?.value.includes(MovingFrom.first_request))
        setWichJsx('general_input');
    }

    if (
      Object.keys(data).includes('country') ||
      Object.keys(data).includes('city')
    )
      setWichJsx('general_input');
  };

  const citizenType = (): JSX.Element => (
    <>
      <label className={'strong'} id={'citizen'}>
        What citizenship do you have?
      </label>
      <Controller
        name="citizen"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={CitizenOption} />
        )}
      />
    </>
  );

  const movingFrom = (): JSX.Element => (
    <>
      <label className={'strong'} id={'moving_from'}>
        Where Are you moving from?
      </label>
      <Controller
        name="moving_from"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={MovingFromOption} />
        )}
      />
    </>
  );

  return (
    <div id={'form-wrapper'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {whichJsx == '' && citizenType()}
        <StatusInput whichJsx={whichJsx} control={control} />
        {whichJsx == 'moving_from' && movingFrom()}
        <LocationInput whichJsx={whichJsx} control={control} />
        <GeneralInput whichJsx={whichJsx} control={control} />
        <input className={'submit-btn'} type={'submit'} value={'Continue'} />
      </form>
    </div>
  );
};

export default Form;
