/* eslint-disable prettier/prettier */
export interface optionsRow {
  buttons: option[];
}

export interface option {
  text: string;
  color?: string | undefined;
  action: (textNumber: string) => void;
  weight?: boolean | undefined;
}
