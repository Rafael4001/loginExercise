import React from 'react';

import { useStyles } from './MainPage.style'

import LoginPage from '../LoginPage'


const MainPage: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <LoginPage/>
    </div>
  )
}

MainPage.displayName = "MainPage";

export default MainPage