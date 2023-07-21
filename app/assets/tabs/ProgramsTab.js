import { Button, Text, TouchableRipple } from "react-native-paper"
import { TouchableOpacity, View } from "react-native"
// import { useFonts } from 'expo-font';

const ProgramsTab = () => {

  return (
    <View style={{ padding: 7, flexDirection: 'column', gap: 20 }}>
      {/* <Text style={{ fontFamily: 'Montserrat' }}> */}
      <Text>
        Programs Tab
      </Text>
      {/* <TouchableRipple
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0, .32)"> */}
      <TouchableOpacity>
        <Button mode='outlined' rippleColor="rgba(0, 0, 0, .32)">
          Single Session
        </Button>
      </TouchableOpacity>
      {/* </TouchableRipple> */}
      <TouchableOpacity>
        <Button mode='outlined'>
          Create New Program
        </Button>
      </TouchableOpacity>
    </View>
  )
}

export default ProgramsTab;