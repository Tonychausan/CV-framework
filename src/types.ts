export type AboutMeData = {
  name: string
  email: string
  role: string
  description: string
}

export type ExperienceItem = {
  workplace: string
  fromTime: string
  toTime: string
  workTitle: string
  description: string
}

export type EducationItem = {
  name: string
  fromTime: string
  toTime: string
  education: string
  description: string
}

export interface LanguageItem {
  language: string
  level: number
}
