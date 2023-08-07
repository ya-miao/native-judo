import { useState } from "react";

import { IconButton, Surface, Text } from "react-native-paper"
import { ScrollView, TouchableOpacity, View } from "react-native"

import { Button, List, Modal, Portal, } from 'react-native-paper';

import { StyleSheet } from 'react-native';

import DisplayTechniqueModal from "../modals/DisplayTechniqueModal";
import EditTechniqueModal from "../modals/EditTechniqueModal";

const TechniquesTab = () => {

  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const [modalContent, setModalContent] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showEditModal = () => setEditVisible(true);
  const hideEditModal = () => setEditVisible(false);

  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'column', padding: 20, gap: 10 }}>
          {userTechniqueList.map((technique) => (
            <Surface style={styles.techniqueCard} elevation={5} key={technique.id}>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                    <Text variant="titleLarge" >
                      {technique.name}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                  icon="magnify"
                  onPress={() => {
                    showModal();
                    setModalContent(
                      <View style={{ gap: 15 }}>
                        <Text variant="titleLarge">{technique.name}</Text>
                        <View style={{ gap: 10 }}>
                          <Text variant='labelSmall'>Description</Text>
                          <Text style={{ paddingLeft: 10 }}>{technique.description}</Text>
                        </View>
                        <View style={{ gap: 10 }}>
                          <Text variant='labelSmall'>Notes</Text>
                          <Text style={{ paddingLeft: 10 }}>{technique.notes}</Text>
                        </View>
                      </View>
                    );
                  }}>
                  <Text variant='labelSmall'>
                    Details
                  </Text>
                </Button>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <IconButton
                    icon="pencil"
                    iconColor='#696969'
                    size={20}
                    onPress={() => {
                      showEditModal();
                    }}
                  />
                  <IconButton
                    icon="delete"
                    iconColor='#696969'
                    size={20}
                    onPress={() => {
                      showModal();
                      setModalContent(
                        <View style={{ gap: 15 }}>
                          <Text variant="titleLarge">Confirm Delete</Text>
                          <View style={{ gap: 10 }}>
                            <Text style={{ paddingLeft: 10 }}>Are you sure you want to delete this technique?</Text>
                          </View>
                          <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity>
                              <Button mode='contained-tonal'>
                                <Text variant='labelMedium'>
                                  Delete
                                </Text>
                              </Button>
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Button mode='outlined'>
                                <Text variant='labelMedium'>
                                  Cancel
                                </Text>
                              </Button>
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
            </Surface>
          ))}
        </View>
      </ScrollView>
      <Surface style={{ padding: 10, backgroundColor: '#000000' }}>
        <TouchableOpacity>
          <Button icon='plus' mode="outlined" onPress={showEditModal}>
            <Text variant='titleMedium'>
              Create A Technique
            </Text>
          </Button>
        </TouchableOpacity>
      </Surface>
      <EditTechniqueModal visible={editVisible} hideModal={hideEditModal} />
      <DisplayTechniqueModal modalContent={modalContent} visible={visible} hideModal={hideModal} />
    </>
  )
}

export default TechniquesTab;

const styles = StyleSheet.create({
  surface: {
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: '#000000',
  },
  techniqueCard: {
    padding: 5,
    gap: 5,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: '#000000',
  },
});

const userTechniqueList = [
  {
    id: 0,
    name: "Ippon Seoi Nage",
    description: 'One Hand Shoulder Throw',
    notes: 'Some notes here.'
  },
  {
    id: 1,
    name: "Tai Otoshi",
    description: 'Body Drop',
    notes: 'Some notes here.'
  },
  {
    id: 2,
    name: "Ogoshi",
    description: 'Body Drop',
    notes: 'Some notes here.'
  },
  {
    id: 3,
    name: "Uchi Mata",
    description: 'Inner Thigh Throw',
    notes: 'Some notes here.'
  },
  {
    id: 4,
    name: "Kosoto Gari",
    description: 'Minor Outside Reaping Throw',
    notes: 'Some notes here.'
  },
  {
    id: 5,
    name: "Ura Nage",
    description: 'Rear Throw',
    notes: 'Some notes here.'
  },
  {
    id: 6,
    name: "Tani Otoshi",
    description: 'Valley Drop',
    notes: 'Some notes here.'
  },
]