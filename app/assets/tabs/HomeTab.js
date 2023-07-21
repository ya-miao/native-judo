import { Surface, Text } from "react-native-paper"
import { View } from "react-native"

import { StyleSheet } from 'react-native';

const HomeTab = () => {
  return (
    <View style={{ flexDirection: 'column', padding: 20, gap: 10 }}>
      <Surface style={styles.surface} elevation={5}>
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <Text variant="titleLarge" style={{}}>
            Good morning, Liana!
          </Text>
          <Text>
            Let's take a look at what you're working on!
          </Text>
        </View>
      </Surface>
      <Surface style={styles.surface} elevation={5}>
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <Text>
            Hello again!
          </Text>
          <Text>
            This is another card.
          </Text>
        </View>
      </Surface>
      <Surface style={styles.surface} elevation={5}>
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <Text>
            Hiya once more!
          </Text>
          <Text>
            This is yet another card.
          </Text>
        </View>
      </Surface>
    </View>
  )
}

export default HomeTab;

const styles = StyleSheet.create({
  surface: {
    padding: 20,
    // elevation: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});