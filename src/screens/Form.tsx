import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import DrivingLicense from '../components/Input/DrivingLicense';
import DrivingLicenseDetails from '../components/Input/DrivingLicenseDetails';
import Education from '../components/Input/Education';
import General from '../components/Input/General';
import Job from '../components/Input/Job';
import Location from '../components/Input/Location';
import Profession from '../components/Input/Profession';
import RegisteredVehicle from '../components/Input/RegisteredVehicle';
import Status from '../components/Input/Status';
import { useUserDataProviderContext } from '../providers/UserDataProvider';
import { Citizen, IFormInput, MovingFrom } from '../types/app.d.type';
import { CitizenOption, MovingFromOption } from '../types/options';

interface T {
  key: string;
  value: string;
}

const Form: React.FC = (): JSX.Element => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();
  const { register, handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {},
  });
  const [whichJsx, setWichJsx] = React.useState('');

  React.useEffect(() => {
    console.log('Rendering <Form />');
  }, [whichJsx]);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const currentData = getCurrentData();
    const _data: Record<string, any> = { ...data }; // lo trasformo per operare in maniera più agnostica

    Object.keys(_data as Record<string, any>).map(k => {
      if (_data[k] && _data[k]!.value)
        setCurrentData({ ...currentData, [k]: _data[k].value });
      else setCurrentData({ ...currentData, [k]: _data[k] });
    });

    console.log(Object.keys(_data));
    // console.log(Object.keys(currentData));

    if (_data.citizen!) {
      if (_data.citizen!.value!.includes(Citizen.eu_female))
        setWichJsx('citizen_female');
      if (_data.citizen!.value!.includes(Citizen.italian))
        setWichJsx('citizen_italian');
      if (_data.citizen!.value!.includes(Citizen.non_eu)) setWichJsx('non_eu');
    }
    if (
      Object.keys(_data).includes('non_eu_status') ||
      Object.keys(_data).includes('eu_status') ||
      Object.keys(_data).includes('eu_fem_status')
    )
      setWichJsx('moving_from');

    if (_data.moving_from!) {
      if (_data.moving_from!.value!.includes(MovingFrom.foreign))
        setWichJsx('aire_location');
      if (_data.moving_from!.value!.includes(MovingFrom.it_aire))
        setWichJsx('foreign_location');
      if (_data.moving_from!.value!.includes(MovingFrom.different_city))
        setWichJsx('different_location');

      if (_data.moving_from!.value!.includes(MovingFrom.same_city))
        setWichJsx('general_input');
      if (_data.moving_from!.value!.includes(MovingFrom.first_request))
        setWichJsx('general_input');
    }

    if (
      Object.keys(_data).includes('country') ||
      Object.keys(_data).includes('city')
    )
      setWichJsx('general_input');

    if (
      Object.keys(_data).includes('name') &&
      Object.keys(_data).includes('surname') &&
      Object.keys(_data).includes('dob') &&
      Object.keys(_data).includes('pob') &&
      Object.keys(_data).includes('id_code') &&
      Object.keys(_data).includes('married') &&
      Object.keys(_data).includes('citizenship')
    )
      setWichJsx('job');

    if (
      Object.keys(_data).includes('name') &&
      Object.keys(currentData).includes('job')
    )
      setWichJsx(
        currentData.job == 'yes' ? 'professional' : 'non_professional',
      );

    if (
      Object.keys(_data).includes('non_professional_status') ||
      Object.keys(_data).includes('professional_status')
    )
      setWichJsx('education');

    if (Object.keys(_data).includes('education_status'))
      setWichJsx('driving_license');

    if (
      Object.keys(_data).includes('education_status') &&
      Object.keys(currentData).includes('driving_license')
    ) {
      if (currentData.driving_license) setWichJsx('driving_license_details');
      else setWichJsx('residence');
    }

    if (
      Object.keys(_data).includes('driving_license_number') &&
      Object.keys(_data).includes('driving_license_release') &&
      Object.keys(_data).includes('driving_license_country') &&
      Object.keys(_data).includes('driving_license_type') &&
      Object.keys(_data).includes('driving_license_issuing')
    )
      setWichJsx('registered_vehicle');
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
        <Status whichJsx={whichJsx} control={control} />
        {whichJsx == 'moving_from' && movingFrom()}
        <Location whichJsx={whichJsx} control={control} />
        <General whichJsx={whichJsx} control={control} />
        <Job whichJsx={whichJsx} setWichJsx={setWichJsx} />
        <Profession whichJsx={whichJsx} control={control} />
        <Education whichJsx={whichJsx} control={control} />
        <DrivingLicense whichJsx={whichJsx} setWichJsx={setWichJsx} />
        <DrivingLicenseDetails whichJsx={whichJsx} control={control} />
        <RegisteredVehicle whichJsx={whichJsx} setWichJsx={setWichJsx} />
        {whichJsx != 'job' && whichJsx != 'driving_license' && (
          <input className={'submit-btn'} type={'submit'} value={'Continue'} />
        )}
      </form>
    </div>
  );
};

export default Form;
