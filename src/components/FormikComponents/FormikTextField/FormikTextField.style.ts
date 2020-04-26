import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputLabelFormControl: {
    position: 'static',
  },
  inputLabelShrink: {},
  inputLabelOutlined: {
    fontWeight: 500,
    '&$inputLabelShrink': {
      transform: 'translate(0px, -6px) scale(0.75)',
    },
  },
  input: {
    padding: '0.7rem',
  },
  errorText: {
    color: '#F44336',
    fontSize: '0.8125rem',
    width: '100%',
  }
});

