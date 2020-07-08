
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon, IconProps } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const LoginIcon = (props : IconProps) => (
  <Icon name='log-in-outline' {...props} />
);

const LoginButton = () => (
  <Button style={{ marginTop: 10 }} accessoryLeft={LoginIcon}>Log In</Button>
);

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text category='h3'>Welcome to CoachMe</Text>
          <Text>Log in to get started</Text>
          <LoginButton />
          <StatusBar style="auto" />
        </Layout>
      </ApplicationProvider>
    </>
  );
}