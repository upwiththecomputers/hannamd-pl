import { siteSettings } from "./siteSettings";
import { localeStringType } from "./objects/localeString";
import { localeTextType } from "./objects/localeText";
import { heroSectionType } from "./documents/heroSection";
import { aboutSectionType } from "./documents/aboutSection";
import { workSectionType } from "./documents/workSection";
import { skillsSectionType } from "./documents/skillsSection";
import { processSectionType } from "./documents/processSection";
import { contactSectionType } from "./documents/contactSection";

export const schemaTypes = [
  // Object types (reusable)
  localeStringType,
  localeTextType,
  // Document types
  heroSectionType,
  aboutSectionType,
  workSectionType,
  skillsSectionType,
  processSectionType,
  contactSectionType,
  // Site settings
  siteSettings,
];
