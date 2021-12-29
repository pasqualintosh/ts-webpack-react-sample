import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const Residence: React.FC<IProps> = ({ whichJsx, control }) => {
  if (whichJsx != 'residence') return <></>;

  return (
    <>
      <span className={'strong'}>Your new residence</span>
      <span className={'main'}>
        <span>
          <Controller
            name={'residence_city'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'City'}
                {...field}
                helperText={'Ex. Palermo'}
              />
            )}
          />

          <Controller
            name={'residence_address'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Address'}
                {...field}
                helperText={'Ex. Via della libertà'}
              />
            )}
          />

          <Controller
            name={'residence_floor'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Floor'}
                {...field}
                helperText={'Ex. 1st'}
              />
            )}
          />

          <Controller
            name={'residence_unit'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Unit'}
                {...field}
                helperText={'Ex. A'}
              />
            )}
          />
        </span>
        <span>
          <Controller
            name={'residence_province'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Province'}
                {...field}
                helperText={'Ex. Via della libertà'}
              />
            )}
          />
          <Controller
            name={'residence_civic'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Civic'}
                {...field}
                helperText={'Ex. 36'}
              />
            )}
          />
          <Controller
            name={'residence_apartment'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Appartment'}
                {...field}
                helperText={'Ex. 12'}
              />
            )}
          />
        </span>
      </span>
    </>
  );
};

export default Residence;
