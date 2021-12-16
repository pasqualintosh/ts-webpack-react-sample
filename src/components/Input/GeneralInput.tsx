import { TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';
import {} from '../../types/options';
import DateAdapter from '@date-io/moment';
import { DatePicker, LocalizationProvider } from '@mui/lab';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const GeneralInput: React.FC<IProps> = ({ whichJsx, control }) => {
  if (whichJsx != 'general_input') return <></>;

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <span className={'strong'}>Let’s talk about you</span>
      <span className={'main'}>
        <span>
          <Controller
            name={'name'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'What’s Your Name?'}
                {...field}
                helperText={'Ex. Moussa'}
              />
            )}
          />

          <Controller
            name={'dob'}
            control={control}
            render={({ field }) => (
              <DatePicker
                className={'input-dob'}
                mask="__/__/____"
                label="Date of birth?"
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
            name={'married'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Are you Married?'}
                {...field}
                helperText={'Answer yes or no'}
              />
            )}
          />

          <Controller
            name={'id_code'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'What’s your Codice Fiscale?'}
                {...field}
                helperText={'Ex. RSMRI88L73G273E'}
              />
            )}
          />
        </span>
        <span>
          <Controller
            name={'surname'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'What’s Your Surname?'}
                {...field}
                helperText={'Ex. Semprini'}
              />
            )}
          />
          <Controller
            name={'pob'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'Where were you born?'}
                {...field}
                helperText={'Indicate your city of birth'}
              />
            )}
          />
          <Controller
            name={'citizenship'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <TextField
                className={'text-field'}
                id={'standard-basic'}
                variant={'standard'}
                label={'What’s your citizenship?'}
                {...field}
                helperText={'Ex. Ghanian, Française, Russian…'}
              />
            )}
          />
        </span>
      </span>
    </LocalizationProvider>
  );
};

export default GeneralInput;
