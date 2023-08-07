
import { Button, IconButton, List, Modal, Portal, Surface, Text } from "react-native-paper"
import { View } from "react-native";

const EditTechniqueModal = (props) => {
  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={modalStyle}>
        <Surface elevation={5} style={{ backgroundColor: '#000000', padding: 20 }}>
          <Text>
            Edit Technique Form Fields Here!
          </Text>
        </Surface>
      </Modal>
    </Portal>
  )
};

export default EditTechniqueModal;

const modalStyle = {
  padding: 10,
};