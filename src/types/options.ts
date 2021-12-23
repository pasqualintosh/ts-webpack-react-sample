import {
  Citizen,
  EuFemStatus,
  EuStatus,
  MovingFrom,
  NonEuStatus,
  Country,
  City,
  AireLocation,
  ForeignLocation,
  DifferentLocation,
  NonProfessionalStatus,
  ProfessionalStatus,
  Education,
} from './app.d.type';

export const CitizenOption = [
  { value: Citizen.eu_female, label: Citizen.eu_female },
  { value: Citizen.italian, label: Citizen.italian },
  { value: Citizen.non_eu, label: Citizen.non_eu },
];
export const NonEuStatusOption = [
  { value: NonEuStatus.ecr, label: NonEuStatus.ecr },
  { value: NonEuStatus.renewing, label: NonEuStatus.renewing },
  { value: NonEuStatus.residence_permit, label: NonEuStatus.residence_permit },
  { value: NonEuStatus.reunification, label: NonEuStatus.reunification },
  { value: NonEuStatus.waiting_for_work, label: NonEuStatus.waiting_for_work },
];
export const EuStatusOption = [
  { value: EuStatus.financially_indie, label: EuStatus.financially_indie },
  { value: EuStatus.relative, label: EuStatus.relative },
  { value: EuStatus.student, label: EuStatus.student },
  { value: EuStatus.temporary_indie, label: EuStatus.temporary_indie },
  { value: EuStatus.temporary_student, label: EuStatus.temporary_student },
  { value: EuStatus.worker, label: EuStatus.worker },
];
export const EuFemStatusOption = [
  { value: EuFemStatus.worker, label: EuFemStatus.worker },
  { value: EuFemStatus.spouse, label: EuFemStatus.spouse },
];
export const MovingFromOption = [
  { value: MovingFrom.foreign, label: MovingFrom.foreign },
  { value: MovingFrom.it_aire, label: MovingFrom.it_aire },
  { value: MovingFrom.same_city, label: MovingFrom.same_city },
  { value: MovingFrom.different_city, label: MovingFrom.different_city },
  { value: MovingFrom.first_request, label: MovingFrom.first_request },
];

export const AireLocationOption = [
  { value: '', label: AireLocation.country },
  { value: '', label: AireLocation.city },
];

export const ForeignLocationOption = [
  { value: '', label: AireLocation.country },
];

export const DifferentLocationOption = [
  { value: '', label: AireLocation.city },
];

export const NonProfessionalOption = [
  {
    value: NonProfessionalStatus.housewife,
    label: NonProfessionalStatus.housewife,
  },
  {
    value: NonProfessionalStatus.student,
    label: NonProfessionalStatus.student,
  },
  {
    value: NonProfessionalStatus.unemployed,
    label: NonProfessionalStatus.unemployed,
  },
  {
    value: NonProfessionalStatus.retired,
    label: NonProfessionalStatus.retired,
  },
  {
    value: NonProfessionalStatus.other,
    label: NonProfessionalStatus.other,
  },
];

export const ProfessionalOption = [
  {
    value: ProfessionalStatus.worker,
    label: ProfessionalStatus.worker,
  },
  {
    value: ProfessionalStatus.family_worker,
    label: ProfessionalStatus.family_worker,
  },
  {
    value: ProfessionalStatus.freelance,
    label: ProfessionalStatus.freelance,
  },
  {
    value: ProfessionalStatus.self,
    label: ProfessionalStatus.self,
  },
  {
    value: ProfessionalStatus.executive,
    label: ProfessionalStatus.executive,
  },
];

export const EducationOption = [
  {
    value: Education.primary,
    label: Education.primary,
  },
  {
    value: Education.secondary,
    label: Education.secondary,
  },
  {
    value: Education.diploma,
    label: Education.diploma,
  },
  {
    value: Education.bachelor,
    label: Education.bachelor,
  },
  {
    value: Education.master,
    label: Education.master,
  },
  {
    value: Education.phd,
    label: Education.phd,
  },
];
