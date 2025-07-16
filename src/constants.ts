export const NAME = "Tony Chau"

export const IS_PRODUCTION = import.meta.env.MODE === "production"
export const CONTENT_BASE = IS_PRODUCTION
  ? "https://raw.githubusercontent.com/Tonychausan/CV-framework/master/public/content/"
  : "/CV-framework/content/"

export const SECTION_TITLES = {
  experiences: "Experiences",
  educations: "Educations",
  languages: "Languages",
}
