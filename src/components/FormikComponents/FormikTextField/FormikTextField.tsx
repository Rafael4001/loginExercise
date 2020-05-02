import React from 'react';

import TextField from '@material-ui/core/TextField';

import { IFormikTextFieldProps } from './FormikTextField.types'

import { useStyles } from "./FormikTextField.style";

const FormikTextField: React.FC<IFormikTextFieldProps> = (props) => {
  const classes = useStyles();

  const {
    disableErrorText,
    label,
    field,
    form,
    InputProps,
    disabled,
    InputLabelProps,
    variant,
    autoFocus,
    margin,
    ...other
  } = props;


  const {classes: classesInput, ...otherInputProps} = InputProps;
  const {classes: classesInputLabel, ...otherInputLabelProps} = InputLabelProps;

  return (
    <div className={classes.wrapper}>
      <TextField
        label={label}
        disabled={disabled}
        error={form.errors[field.name] && form.touched[field.name]}
        variant={variant}
        autoFocus={autoFocus}
        margin={margin}
        InputProps={{
          notched: variant === 'outlined' ? false : undefined, // disable notched for non-outlined variants
          classes: {
            input: classes.input,
            ...classesInput,
          },
          ...otherInputProps,
        }}
        InputLabelProps={{
          shrink: true,
          classes: {
            formControl: classes.inputLabelFormControl,
            shrink: classes.inputLabelShrink,
            outlined: classes.inputLabelOutlined,
            ...classesInputLabel,
          },
          ...otherInputLabelProps,
        }}
        {...field}
        {...other}
      />

      <div
        className={classes.errorText}>{(form.errors[field.name] && form.touched[field.name]) ? form.errors[field.name] : ""}</div>
    </div>
  );
};

FormikTextField.defaultProps = {
  disabled: false,
  autoFocus: false,
  disableErrorText: false,
  fullWidth: true,
  InputProps: {},
  InputLabelProps: {},
  variant: "outlined",
  margin: "dense",
};

FormikTextField.displayName = 'FormikTextField';

export default FormikTextField;
