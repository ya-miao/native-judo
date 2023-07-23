import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { Platform, SafeAreaView, StatusBar as NativeStatusBar, StyleSheet, Text, View } from 'react-native';

import { configureFonts, MD3DarkTheme as DarkTheme, PaperProvider } from 'react-native-paper';

import { useFonts } from 'expo-font';

import JudoAppBar from './app/assets/screens/JudoAppBar';
import TopTabPager from './app/assets/screens/TopTabPager';

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./app/assets/fonts/Montserrat-Regular.ttf'),
    // Orbitron: require('./app/assets/fonts/Orbitron-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const fontConfig = {
    fontFamily: 'Montserrat',
  };

  const theme = {
    fonts: configureFonts({ config: fontConfig }),
    roundness: 1,
    colors: {
      ...DarkTheme.colors,
      // backgroundColor: '#101010',
      primary: '#e0e0e0',
      // secondary: '#696969',
      // tertiary: '#aaaaaa'
    },
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <PaperProvider theme={theme}>
      {/* {Platform.OS === 'ios' ?
        <ExpoStatusBar /> : <NativeStatusBar />
      } */}
      <NativeStatusBar />
      <JudoAppBar />
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#101010',
        justifyContent: 'center',
      }}>
        <TopTabPager />
      </SafeAreaView>
      {/* <JudoAppBar /> */}
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
