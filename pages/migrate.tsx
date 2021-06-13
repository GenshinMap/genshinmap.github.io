/**
 * The page which is embedded into Teyvat.moe when it attempts to migrate data.
 * On Chrome browsers, this process is automatic and requires no other user input.
 * On Firefox browsers, an iframe cannot access local storage unless the user attempts a direct page interaction.
 */

import React, { useCallback } from 'react';
import { Box, Button, Container, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { getApplicationVersion } from './index';
import Head from 'next/head';
import { isLocal } from '../components/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: '100vh',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  content: {
    marginTop: theme.spacing(3),
  },
  homeFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },

  progressContainer: {
    width: '100%',
    display: 'block',
  },

  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
  },
}));

type MigrateStatus = 'pending' | 'complete' | 'manual';

const Migrate = () => {
  const classes = useStyles();

  const [status, setStatus] = React.useState<MigrateStatus>('pending');

  const migrateManual = useCallback(async () => {
    console.log('Manual migration confirmed.');
    const clientOnly = await import('../components/clientOnly');
    clientOnly.handleCrossOriginManual();
  }, []);

  const migrateStorageAccessSuccess = useCallback(() => {
    // Display "Data migrated" text.
    setStatus('complete');
  }, [setStatus]);

  const migrateStorageAccessFailure = useCallback(() => {
    // Display the button so the user can manually try to migrate.
    // This should be only necessary on Firefox.
    setStatus('manual');
  }, [setStatus]);

  const migrateAutomatic = useCallback(async () => {
    // All we should need to do is create the client.
    if (isLocal()) {
      const clientOnly = await import('../components/clientOnly');
      clientOnly.handleCrossOrigin(
        migrateStorageAccessSuccess, // Call this if migration is successful.
        migrateStorageAccessFailure // Call this if migration fails.
      );
    }
  }, []);

  React.useEffect(() => {
    // Attempt automatic migration.
    migrateAutomatic();
  });

  const getContent = useCallback(() => {
    switch (status) {
      case 'pending':
        return (
          <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column">
            <Typography gutterBottom>Migrating...</Typography>
            <div className={classes.progressContainer}>
              <LinearProgress />
            </div>
          </Box>
        );
      case 'complete':
        return <Typography>Data migrated.</Typography>;
      case 'manual':
        return (
          <Button variant="contained" onClick={migrateManual}>
            Confirm Migration
          </Button>
        );
      default:
        return null;
    }
  }, [status, migrateManual]);

  return (
    <>
      <Head>
        <title>GenshinMap Data Migrator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth={false} className={classes.root}>
        <div className={classes.content}>{getContent()}</div>
        <div className={classes.homeFooter}>
          <Typography className={classes.subtitle}>
            Migrator version: v{getApplicationVersion()}
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Migrate;
