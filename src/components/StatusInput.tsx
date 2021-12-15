import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';
import { IFormInput } from '../types/app.d.type';
import {
  EuFemStatusOption,
  EuStatusOption,
  NonEuStatusOption,
} from '../types/options';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const StatusInput: React.FC<IProps> = ({ whichJsx, control }): JSX.Element => {
  const nonEuStatus = (): JSX.Element => (
    <>
      <label className={'strong'} id={'non_eu_status'}>
        What’s your status?
      </label>
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
      <label className={'strong'} id={'eu_status'}>
        What’s your status?
      </label>
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
      <label className={'strong'} id={'eu_fem_status'}>
        What’s your status?
      </label>
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
    <>
      {whichJsx == 'non_eu' && nonEuStatus()}
      {whichJsx == 'citizen_italian' && euStatus()}
      {whichJsx == 'citizen_female' && euFemStatus()}
    </>
  );
};

export default StatusInput;
