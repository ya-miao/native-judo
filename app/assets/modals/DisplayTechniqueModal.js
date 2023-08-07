
import { Button, IconButton, List, Modal, Portal, Surface, Text } from "react-native-paper"
import { View } from "react-native";

const DisplayTechniqueModal = (props) => {
  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={modalStyle}>
        <Surface elevation={5} style={{ backgroundColor: '#000000', padding: 20 }}>
          {props.modalContent}
        </Surface>
      </Modal>
    </Portal>
  )
};

export default DisplayTechniqueModal;

const modalStyle = {
  padding: 10,
};