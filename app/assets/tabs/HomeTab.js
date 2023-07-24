import { Surface, Text } from "react-native-paper"
import { ScrollView, TouchableOpacity, View } from "react-native"

import { Button, List } from 'react-native-paper';

import { StyleSheet } from 'react-native';

const HomeTab = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', padding: 20, gap: 10 }}>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Good morning, Liana!
            </Text>
            <Text>
              Let's take a look at what you're working on!
            </Text>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Techniques
            </Text>
            <Text>
              You currently have 3 techniques.
            </Text>
            <Text>
              Let's take a look at what you have so far!
            </Text>
            <TouchableOpacity>
              <Button mode="outlined" onPress={() => navigation.navigate('Techniques')}>
                View Techniques
              </Button>
            </TouchableOpacity>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Strategies
            </Text>
            <Text>
              You currently have 11 strategies.
            </Text>
            <Text>
              Want to work on a preexisting strategy or make another?
            </Text>
            <TouchableOpacity>
              <Button mode="outlined" onPress={() => navigation.navigate('Strategies')}>
                View Strategies
              </Button>
            </TouchableOpacity>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Opponents
            </Text>
            <Text>
              You currently have 3 opponents.
            </Text>
            <Text>
              Let's observe them.
            </Text>
            <TouchableOpacity>
              <Button mode="outlined" onPress={() => navigation.navigate('Opponents')}>
                View Opponents
              </Button>
            </TouchableOpacity>
          </View>
        </Surface>
        <Surface style={styles.surface} elevation={5}>
          <View style={{ alignSelf: 'stretch', flexDirection: 'column', gap: 10 }}>
            <Text variant="titleLarge">
              Suggestions
            </Text>
            <Text>
              Have you thought about trying o-goshi?
            </Text>
          </View>
        </Surface>
      </View>
    </ScrollView>
  )
}

export default HomeTab;

const styles = StyleSheet.create({
  surface: {
    // flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});