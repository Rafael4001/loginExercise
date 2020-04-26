import { makeStyles } from '@material-ui/core/styles';

import { BACKGROUND_LOGIN_PAGE } from '../../constants'

export const useStyles = makeStyles({
  mainContainer: {
    background: `url(${BACKGROUND_LOGIN_PAGE})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});