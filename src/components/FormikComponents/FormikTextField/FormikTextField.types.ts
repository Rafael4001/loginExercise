export interface IFormikTextFieldProps {
  disabled?: boolean,
  autoFocus?: boolean,
  disableErrorText?: boolean,
  field: {
    name: string,
    onChange: () => void,
    value: string | number,
  }
  fullWidth?: boolean,
  label?: string,

  form: any,
  classes: any,
  InputLabelProps?: any,
  InputProps?: any,
  variant: any,
  margin: any,
}