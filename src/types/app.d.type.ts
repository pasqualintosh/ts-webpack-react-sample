export enum CitizenEnum {
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

export type Country = string;
export type City = string;

export interface IFormInput {
  citizen: CitizenEnum;
  non_eu_status: NonEuStatus;
  eu_status: EuStatus;
  eu_fem_status: EuFemStatus;
}
