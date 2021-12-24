import { TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';
import DateAdapter from '@date-io/moment';
import { DatePicker, LocalizationProvider } from '@mui/lab';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const DrivingLicenseDetails: React.FC<IProps> = ({ whichJsx, control }) => {
  if (whichJsx != 'driving_license_details') return <></>;

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <span className={'strong'}>Driving License Details</span>
      <span className={'main'}>
        <span>
          <Controller
            name={'driving_license_number'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Number'}
                {...field}
                helperText={'Ex. 91828930'}
              />
            )}
          />

          <Controller
            name={'driving_license_release'}
            control={control}
            render={({ field }) => (
              <DatePicker
                className={'input-dob'}
                mask="__/__/____"
                label="Release Date"
                disableFuture={true}
                renderInput={params => (
                  <TextField
                    {...params}
                    helperText={'DD/MM/YYYY'}
                    className={'input-dob'}
                  />
                )}
                {...field}
              />
            )}
          />

          <Controller
            name={'driving_license_country'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'County of'}
                {...field}
                helperText={'Ex. Palermo'}
              />
            )}
          />
        </span>
        <span>
          <Controller
            name={'driving_license_type'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'License Type'}
                {...field}
                helperText={'Ex. A, B, C'}
              />
            )}
          />
          <Controller
            name={'driving_license_issuing'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Issuing body'}
                {...field}
                helperText={'Motorizzazione'}
              />
            )}
          />
        </span>
      </span>
    </LocalizationProvider>
  );
};

export default DrivingLicenseDetails;
