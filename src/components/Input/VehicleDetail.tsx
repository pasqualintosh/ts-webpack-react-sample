import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';
import { useUserDataProviderContext } from '../../providers/UserDataProvider';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const VehicleDetail: React.FC<IProps> = ({ whichJsx, control }) => {
  const { setCurrentData, getCurrentData } = useUserDataProviderContext();

  const setParamInCurrentData = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    param: string,
    value: string | undefined,
  ): void => {
    const currentData = getCurrentData();
    setCurrentData({ ...currentData, [param]: value });
  };

  if (whichJsx != 'vehicle_details') return <></>;

  return (
    <>
      <span className={'vehicle-detail'}>
        <span className={'strong'}>What vehicles?</span>
        <span className={'group'}>
          <p className={'strong'}>Cars</p>
          <Controller
            name={'vehicle_details_cars'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <>
                <TextField
                  className={'text-field'}
                  id={'standard-basic'}
                  variant={'standard'}
                  label={'License plate'}
                  {...field}
                  helperText={'Ex. A, B, C'}
                />
                <span
                  className={'plus'}
                  onClick={event =>
                    setParamInCurrentData(
                      event,
                      'vehicle_details_cars',
                      field.value,
                    )
                  }>
                  +
                </span>
              </>
            )}
          />
        </span>
        <span className={'group'}>
          <p className={'strong'}>Trailers</p>
          <Controller
            name={'vehicle_details_trailers'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <>
                <TextField
                  className={'text-field'}
                  id={'standard-basic'}
                  variant={'standard'}
                  label={'License plate'}
                  {...field}
                  helperText={'Ex. A, B, C'}
                />
                <span
                  className={'plus'}
                  onClick={event =>
                    setParamInCurrentData(
                      event,
                      'vehicle_details_trailers',
                      field.value,
                    )
                  }>
                  +
                </span>
              </>
            )}
          />
        </span>
        <span className={'group'}>
          <p className={'strong'}>Mopeds</p>
          <Controller
            name={'vehicle_details_mopeds'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <>
                <TextField
                  className={'text-field'}
                  id={'standard-basic'}
                  variant={'standard'}
                  label={'License plate'}
                  {...field}
                  helperText={'Ex. A, B, C'}
                />
                <span
                  className={'plus'}
                  onClick={event =>
                    setParamInCurrentData(
                      event,
                      'vehicle_details_mopeds',
                      field.value,
                    )
                  }>
                  +
                </span>
              </>
            )}
          />
        </span>
        <span className={'group'}>
          <p className={'strong'}>Bike</p>
          <Controller
            name={'vehicle_details_bike'}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <>
                <TextField
                  className={'text-field'}
                  id={'standard-basic'}
                  variant={'standard'}
                  label={'License plate'}
                  {...field}
                  helperText={'Ex. A, B, C'}
                />
                <span
                  className={'plus'}
                  onClick={event =>
                    setParamInCurrentData(
                      event,
                      'vehicle_details_mopeds',
                      field.value,
                    )
                  }>
                  +
                </span>
              </>
            )}
          />
        </span>
      </span>
    </>
  );
};

export default VehicleDetail;
