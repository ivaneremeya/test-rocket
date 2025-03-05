export type Inputs = {
    length: number;
    width: number;
    height: number;
    rollWidth: string;
    rapport: string;
    windows: Width[];
    doors: Width[];
  };
export  type Width = { width: string; height: string }