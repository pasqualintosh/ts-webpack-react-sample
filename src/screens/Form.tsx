import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUserDataProviderContext } from '../providers/UserDataProvider';

enum CitizenEnum {
  eu = 'I’m a EU Citizenfemale',
  italian = 'I’m an Italian Citizen',
  non_eu = 'I’m a non-EU citizen',
}

interface IFormInput {
  citizen: CitizenEnum;
}

const Form: React.FC = (): JSX.Element => {
  const { setCurrentData } = useUserDataProviderContext();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    setCurrentData({ ...data });
  };
  return (
    <div id={'form-wrapper'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label id={'citizen'}>Select your Citizenship</label>
        <select {...register('citizen')}>
          <option value="eu">I’m a EU Citizen</option>
          <option value="italian">I’m an Italian Citizen</option>
          <option value="non_eu">I’m a non-EU citizen</option>
        </select>
        <input className={'submit-btn'} type={'submit'} value={'Continue'} />
      </form>
    </div>
  );
};

export default Form;
