import { UseFieldArrayRemove } from "react-hook-form";

export type WindowSectionProps = {
  name: string;
  title: string;
  register: any;
  control: any;
  title_btn: string;
};
export interface WindowFormProps {
  index: number;
  remove: UseFieldArrayRemove;
  register: any;
  name: string;
}