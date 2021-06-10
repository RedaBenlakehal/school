import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import { schoolReducer } from './reducers/school';
import { createStore } from 'redux';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const store = createStore(schoolReducer);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
         <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
      </Provider>
     
    );
  }
}
