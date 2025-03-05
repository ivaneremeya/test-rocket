export interface RadioGroupSectionProps {
  title: string;
  name: string;
  options: {
    [x: string]: unknown;
    value: string;
  }[];
  className?: string;
  control: any;
}