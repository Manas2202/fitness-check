import React , {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainContainer from './components/navigation/MainContainer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { firebase } from './config/Firebase';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer />
    </QueryClientProvider>
  );
}