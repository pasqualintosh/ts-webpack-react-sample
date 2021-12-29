import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { IFormInput } from '../../types/app.d.type';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';

import NumberFormat from 'react-number-format';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const PeopleBeside: React.FC<IProps> = ({ whichJsx, control }) => {
  if (whichJsx != 'people_beside') return <></>;

  return (
    <>
      <label className={'strong'} id={'people_beside'}>
        How many people beside you?
      </label>
      <Controller
        name="people_beside"
        control={control}
        render={({ field }) => (
          <TextField
            id="formatted-numberformat-input"
            defaultValue={1}
            inputProps={{
              inputcomponent: NumberFormatCustom,
            }}
            variant="standard"
          />
        )}
      />
    </>
  );
};

export default PeopleBeside;

interface NumberProps {
  name: string;
  onChange: (params: any) => void;
}

const NumberFormatCustom: React.FC<NumberProps> = React.forwardRef(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        format="####"
        isNumericString={false}
        prefix=""
      />
    );
  },
);
