import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';
import { IFormInput } from '../../types/app.d.type';
import { EducationOption } from '../../types/options';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const EducationInput: React.FC<IProps> = ({ whichJsx, control }) => {
  const education = (): JSX.Element => (
    <>
      <label className={'strong'} id={'education_status'}>
        What’s your educational level?
      </label>
      <Controller
        name="education_status"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={EducationOption} />
        )}
      />
    </>
  );

  if (whichJsx != 'education') return <></>;

  return education();
};

export default EducationInput;
