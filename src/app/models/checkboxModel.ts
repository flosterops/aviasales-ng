export interface CheckboxModel {
  id: string;
  isChecked: boolean;
  label?: string;
}

export interface FilterCheckboxModel extends CheckboxModel{
  filterValue: number;
}
