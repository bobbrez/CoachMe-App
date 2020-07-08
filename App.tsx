
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Layout>
    </ApplicationProvider>
  );
}