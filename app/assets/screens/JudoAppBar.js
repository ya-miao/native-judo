import * as React from 'react';

import { Image, View } from "react-native"
import { Appbar, IconButton } from 'react-native-paper';
import { StatusBar } from 'react-native';

import { Text } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { useFonts } from 'expo-font';

const JudoAppBar = () => {

  // const [loaded] = useFonts({
  //   Orbitron: require('../fonts/Orbitron-Regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  // const fontConfig = {
  //   fontFamily: 'Orbitron',
  // };

  return (
    <Appbar.Header
      mode='small'
      style={{ backgroundColor: '#000000' }}
    // style={{ paddingTop: StatusBar.currentHeight }} // This should only work for Android. iOS has SafeAreaView that does not work with Android
    >
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Content title={
        <View style={{ padding: 5, flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <Image
            source={require('../icons/judo-logo-white.png')}
            style={{ width: 40, height: 30 }}
          />
          {/* <MaterialCommunityIcons name="home" color='#ffffff' size={26} /> */}
          {/* <Text variant='labelSmall'>
            Strategize
          </Text> */}
          <IconButton
            icon="logout"
            iconColor='#ffffff'
            size={25}
            onPress={() => console.log('Pressed')}
          />
        </View>
      } />
      {/* <Appbar.Action icon="calendar" onPress={() => { }} />
    <Appbar.Action icon="magnify" onPress={() => { }} /> */}
    </Appbar.Header>
  );
};

export default JudoAppBar;