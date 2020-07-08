
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h3'>Welcome to CoachMe</Text>
        <Text>Log in to get started</Text>
        <StatusBar style="auto" />
      </Layout>
    </ApplicationProvider>
  );
}