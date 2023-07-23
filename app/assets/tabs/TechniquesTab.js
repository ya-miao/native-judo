import { IconButton, Surface, Text } from "react-native-paper"
import { ScrollView, TouchableOpacity, View } from "react-native"

import { Button, List } from 'react-native-paper';

import { StyleSheet } from 'react-native';

const TechniquesTab = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', padding: 20, gap: 10 }}>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Techniques
            </Text>
            <Text>
              What are we working on today?
            </Text>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <IconButton
                icon="magnify"
                iconColor='#ffffff'
                size={20}
                onPress={() => console.log('Pressed')}
              />
              <Text variant="titleLarge">
                Ippon Seoi Nage
              </Text>
            </View>
            {/* <Text>
              One Hand Shoulder Throw
            </Text> */}
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <IconButton
                icon="magnify"
                iconColor='#ffffff'
                size={20}
                onPress={() => console.log('Pressed')}
              />
              <Text variant="titleLarge">
                Tai Otoshi
              </Text>
            </View>
            {/* <Text>
              Body Drop
            </Text> */}
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <IconButton
                icon="magnify"
                iconColor='#ffffff'
                size={20}
                onPress={() => console.log('Pressed')}
              />
              <Text variant="titleLarge">
                Ogoshi
              </Text>
            </View>
            {/* <Text>
              Major Hip Throw
            </Text> */}
          </View>
        </Surface>
        {/* <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Tai Otoshi
            </Text>
            <Text>
              Body Drop
            </Text>
            <TouchableOpacity>
              <Button icon='magnify' mode="outlined">
                Details
              </Button>
            </TouchableOpacity>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              O Goshi
            </Text>
            <Text>
              Major Hip Throw
            </Text>
            <TouchableOpacity>
              <Button icon='magnify' mode="outlined">
                Details
              </Button>
            </TouchableOpacity>
          </View>
        </Surface> */}
      </View>
    </ScrollView>
  )
}

export default TechniquesTab;

const styles = StyleSheet.create({
  surface: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});