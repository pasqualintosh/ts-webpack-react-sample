import { TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const LocationInput: React.FC<IProps> = ({
  whichJsx,
  control,
}): JSX.Element => {
  const aireLocation = (): JSX.Element => (
    <>
      <span className={'strong'}>What Country and what city?</span>
      <Controller
        name={'country'}
        control={control}
        render={({ field }) => (
          <TextField
            className={'text-field'}
            id={'standard-basic'}
            variant={'standard'}
            label={'Write your Country'}
            {...field}
            helperText={'Ex. Ghana, France, Russia…'}
          />
        )}
      />
      <Controller
        name={'city'}
        control={control}
        render={({ field }) => (
          <TextField
            className={'text-field'}
            id={'standard-basic'}
            variant={'standard'}
            label={'Write your City'}
            {...field}
            helperText={'Ex. Turin, Milan, Pavia…'}
          />
        )}
      />
    </>
  );

  const foreignLocation = (): JSX.Element => (
    <>
      <span className={'strong'}>What Country?</span>
      <Controller
        name={'country'}
        control={control}
        render={({ field }) => (
          <TextField
            className={'text-field'}
            id={'standard-basic'}
            variant={'standard'}
            label={'Write your Country'}
            {...field}
            helperText={'Ex. Ghana, France, Russia…'}
          />
        )}
      />
    </>
  );

  const differentLocation = (): JSX.Element => (
    <>
      <span className={'strong'}>What city?</span>
      <Controller
        name={'city'}
        control={control}
        render={({ field }) => (
          <TextField
            className={'text-field'}
            id={'standard-basic'}
            variant={'standard'}
            label={'Write your City'}
            {...field}
            helperText={'Ex. Turin, Milan, Pavia…'}
          />
        )}
      />
    </>
  );

  return (
    <>
      {whichJsx == 'aire_location' && aireLocation()}
      {whichJsx == 'foreign_location' && foreignLocation()}
      {whichJsx == 'different_location' && differentLocation()}
    </>
  );
};

export default LocationInput;
