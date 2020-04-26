import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mainContainer: {
    background: "rgba(255,255,255,0.8)",
    width: '20rem',
    padding: '1rem',
    height: '25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});