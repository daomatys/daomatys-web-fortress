import { SocialIconInterface } from "../social-icon/social-icon.interface";

export interface PresentationUnitInterface {
  src: string;
  text: string;
  title: string;
  href: string;
  icons: SocialIconInterface[];
}
