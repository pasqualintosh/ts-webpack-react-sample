export enum Citizen {
  eu_female = 'I’m a EU Citizen female',
  italian = 'I’m an Italian Citizen',
  non_eu = 'I’m a non-EU citizen',
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
export type Married = 'yes' | 'no';
export type IdCode = string;
export type Citizenship = string;

export interface IFormInput {
  citizen: Citizen;
  non_eu_status: NonEuStatus;
  eu_status: EuStatus;
  eu_fem_status: EuFemStatus;
  moving_from: MovingFrom;
  country: Country;
  city: City;
  name: Name;
  surname: Surname;
  pob: Pob;
  dob: Dob;
  married: Married;
  id_code: IdCode;
  citizenship: Citizenship;
}
