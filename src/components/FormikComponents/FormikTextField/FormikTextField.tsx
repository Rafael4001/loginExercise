import React from 'react';

import TextField from '@material-ui/core/TextField';

import { useStyles } from "./FormikTextField.style";

//TODO tutaj doprecyzowac object props
const FormikTextField = (props: any) => {
  const classes = useStyles();

  const {
    disableErrorText,
    label,
    field,
    form: {touched, errors},
    InputProps,
    disabled,
    InputLabelProps,
    errorProps,
    variant,
    ...other
  } = props;

  const {classes: classesInput, ...otherInputProps} = InputProps;
  const {classes: classesInputLabel, ...otherInputLabelProps} = InputLabelProps;
  const {classes: classesError, ...otherErrorProps} = errorProps;

  return (
    <div className={classes.wrapper}>
      <TextField
        label={label}
        disabled={disabled}
        error={errors[field.name] && touched[field.name]}
        variant={variant}
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

      <div className={classes.errorText}>{(errors[field.name] && touched[field.name]) ? errors[field.name] : ""}</div>
    </div>
  );
};

//TODO tym się zająć i stworzyc odpowiedni interface

// FormikTextField.propTypes = {
//   classes: PropTypes.object.isRequired,
//   disabled: PropTypes.bool,
//   disableErrorText: PropTypes.bool,
//   field: PropTypes.shape({
//     name: PropTypes.string,
//     onChange: PropTypes.func,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   }),
//   form: PropTypes.shape({
//     errors: PropTypes.object,
//   }),
//   fullWidth: PropTypes.bool,
//   InputLabelProps: PropTypes.object,
//   InputProps: PropTypes.object,
//   errorProps: PropTypes.object,
//   label: PropTypes.string,
//   margin: PropTypes.oneOf(['none', 'dense', 'normal']),
//   variant: PropTypes.oneOf(['outlined', 'standard', 'filled']),
// };

FormikTextField.defaultProps = {
  disabled: false,
  disableErrorText: false,
  fullWidth: true,
  InputProps: {},
  InputLabelProps: {},
  margin: 'normal',
  errorProps: {},
  variant: 'outlined',
};

FormikTextField.displayName = 'FormikTextField';

export default FormikTextField;
