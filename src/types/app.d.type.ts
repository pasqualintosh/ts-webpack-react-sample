export enum Citizen {
  'eu_female' = 'I’m a EU Citizen female',
  'italian' = 'I’m an Italian Citizen',
  'non_eu' = 'I’m a non-EU citizen',
}

export enum NonEuStatus {
  ecr = 'EU Citizen Relative',
  residence_permit = 'I’ve the Residence permit',
  renewing = 'I’m renewing my Residence permit',
  waiting_for_work = 'I’m Waiting for a work permit',
  reunification = 'Awaiting family reunification',
}

export enum EuStatus {
  worker = 'Worker',
  financially_indie = 'Financially independent',
  temporary_indie = 'F.Independent (Temporary Residence)',
  student = 'Student',
  temporary_student = 'Student (Temporary Residence)',
  relative = 'Relative of (worker, student ecc..)',
}

export enum EuFemStatus {
  worker = 'Parent/ Son',
  spouse = 'Spouse',
}

export enum MovingFrom {
  foreign = 'Foreign Country',
  it_aire = 'Italian AIRE',
  same_city = 'Same City',
  different_city = 'Different City',
  first_request = 'First Request',
}

export enum AireLocation {
  country = 'Write your Country',
  city = 'Write your City',
}

export enum ForeignLocation {
  country = 'Write your Country',
}

export enum DifferentLocation {
  city = 'Write your City',
}

export type Country = string;
export type City = string;
export type Name = string;
export type Surname = string;
export type Pob = string;
export type Dob = Date;
export type Married = 'yes' | 'no' | '';
export type IdCode = string;
export type Citizenship = string;
export type Job = 'yes' | 'no';

export enum NonProfessionalStatus {
  housewife = 'Housewife',
  student = 'Student',
  unemployed = 'Unemployed',
  retired = 'Retired',
  other = 'Other',
}

export enum ProfessionalStatus {
  worker = 'Worker',
  family_worker = 'Family Worker',
  freelance = 'Freelance / Entrepreneur',
  self = 'Self-Employed',
  executive = 'Executive / Employee',
}

export enum Education {
  primary = 'Primary School',
  secondary = 'Secondary School Certificate',
  diploma = 'Diploma',
  bachelor = 'Bachelor',
  master = 'Master Degree',
  phd = 'Phd',
}

export interface IFormInput {
  citizen: { label: Citizen; value: Citizen };
  non_eu_status: { label: NonEuStatus; value: NonEuStatus };
  eu_status: { label: EuStatus; value: EuStatus };
  eu_fem_status: { label: EuFemStatus; value: EuFemStatus };
  moving_from: { label: MovingFrom; value: MovingFrom };
  country: Country;
  city: City;
  name: Name;
  surname: Surname;
  pob: Pob;
  dob: Dob;
  married: Married;
  id_code: IdCode;
  citizenship: Citizenship;
  non_professional_status: {
    label: NonProfessionalStatus;
    value: NonProfessionalStatus;
  };
  professional_status: { label: ProfessionalStatus; value: ProfessionalStatus };
  education_status: { label: Education; value: Education };
  driving_license_number: string | undefined;
  driving_license_release: string | undefined;
  driving_license_country: string | undefined;
  driving_license_type: string | undefined;
  driving_license_issuing: string | undefined;
}
