import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';
import { IFormInput } from '../../types/app.d.type';
import { NonProfessionalOption, ProfessionalOption } from '../../types/options';

interface IProps {
  whichJsx: string;
  control: Control<IFormInput, object>;
}

const ProfessionInput: React.FC<IProps> = ({ whichJsx, control }) => {
  const nonProfessional = (): JSX.Element => (
    <>
      <label className={'strong'} id={'non_professional_status'}>
        What’s your Pofessional status?
      </label>
      <Controller
        name="non_professional_status"
        control={control}
        render={({ field }) => (
          <Select
            className="select"
            {...field}
            options={NonProfessionalOption}
          />
        )}
      />
    </>
  );

  const professional = (): JSX.Element => (
    <>
      <label className={'strong'} id={'professional_status'}>
        What’s your Pofessional status?
      </label>
      <Controller
        name="professional_status"
        control={control}
        render={({ field }) => (
          <Select className="select" {...field} options={ProfessionalOption} />
        )}
      />
    </>
  );

  if (whichJsx == 'non_professional') return nonProfessional();
  if (whichJsx == 'professional') return professional();

  return <></>;
};

export default ProfessionInput;
