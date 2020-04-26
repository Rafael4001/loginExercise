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
    width: '15rem',
  },
  pageAfterLoginContainer: {
    background: "rgba(255,255,255,0.9)",
    width: '40rem',
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem'
  },
  logoutButtonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: '2rem',
    alignItems: 'center',
  },
  loginButtonContainer: {
    paddingTop: '2rem',
  },
  iconAccountAvatar: {
    marginRight: '0.8125rem',
  }
});