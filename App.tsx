import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LangProvider from './src/providers/LangProvider/LangProvider';
import ThemeProvider from './src/providers/ThemeProvider/ThemeProvider';
import { persistor, store } from './src/Redux/Store/Store';
import Route from './src/Route/route';
import ModalProvider from './src/providers/ModalProvider/ModalProvider';


const App = () => (
  <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LangProvider>
          <ThemeProvider>
            <ModalProvider/>
            <Route />
          </ThemeProvider>
        </LangProvider>
      </PersistGate>
    </Provider>
  </SafeAreaView>


);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    margin: StatusBar.currentHeight,
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;