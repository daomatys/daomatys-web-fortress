import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface SocialIconInterface {
  href: string;
  definition: IconDefinition;
}

export interface MarkedSocialIconInterface extends SocialIconInterface {
  marker: string;
}
