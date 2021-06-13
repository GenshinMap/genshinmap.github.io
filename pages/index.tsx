// Ensure the app version is defined in only one location.
import { makeStyles, Container, Typography, Box, LinearProgress } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { isLocal } from '../components/core';
import packageJson from '../package.json';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: '100vh',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  homeHeader: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },

  logo: {
    width: 192,
    height: 192,
    margin: '0 8px 0 0',
  },

  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
  },

  alignCenter: {
    textAlign: 'center',
  },
}));

/**
 * Fetches the current application version from the package.json file.
 * @returns {string} The package version.
 */
export const getApplicationVersion = (): string => {
  return packageJson.version;
};

const MINIMUM_WAIT_TIME = 1500;

const ActionPerformer = React.memo(() => {
  React.useEffect(() => {
    if (isLocal()) {
      setTimeout(async () => {
        const clientOnly = await import('../components/clientOnly');
        clientOnly.redirectToUrl('https://teyvat.moe/map');
      }, MINIMUM_WAIT_TIME);
    }
  });

  return <Typography style={{ textAlign: 'center' }}>Redirecting to Teyvat.moe...</Typography>;
});

export const Home = React.memo(() => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Redirecting to Teyvat.moe...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth={false} className={classes.root}>
        <div className={classes.homeHeader}>
          {/* Use a bare PNG image. No weird WEBP handling should prevent rendering this. */}
          <img src="/logo.png" className={classes.logo} />
          <Typography variant="h3" className={classes.alignCenter}>
            GenshinMap is moving!
          </Typography>
        </div>
        <div className={classes.homeBody}>
          <Box>
            <div>
              <ActionPerformer />
              <LinearProgress />
            </div>
          </Box>
        </div>
        <div className={classes.homeFooter}>
          <Typography className={classes.subtitle}>
            Migrator version: v{getApplicationVersion()}
          </Typography>
        </div>
      </Container>
    </>
  );
});

export default Home;
