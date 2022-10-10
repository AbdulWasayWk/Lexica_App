import { StyleSheet, View, ScrollView, Image } from "react-native";
import React from "react";
import { Modal, Text, Portal, Button } from "react-native-paper";

export default function DetailsModal({ data, isOpen, setisOpen }) {
  const aspectRatio = parseInt(data.width) / parseInt(data.height);
  return (
    <Portal>
      <Modal
        dismissable={"false"}
        visible={isOpen}
        onDismiss={() => {
          setisOpen(false);
        }}
        style={styles.modalContainer}
        contentContainerStyle={styles.modal}
      >
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "contain",
                flex: 1,
                aspectRatio: aspectRatio,
              }}
              source={{ uri: data.src }}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.topText} variant="headlineSmall">
                Prompt:{" "}
              </Text>
              <Text style={styles.bottomText} variant="labelLarge">
                {data.prompt}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.topText} variant="headlineSmall">
                Seed:{" "}
              </Text>
              <Text style={styles.bottomText} variant="labelLarge">
                {data.seed}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.topText} variant="headlineSmall">
                Width:{" "}
              </Text>
              <Text style={styles.bottomText} variant="labelLarge">
                {data.width}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.topText} variant="headlineSmall">
                Height:{" "}
              </Text>
              <Text style={styles.bottomText} variant="labelLarge">
                {data.height}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.topText} variant="headlineSmall">
                Model:{" "}
              </Text>
              <Text
                style={{ ...styles.bottomText, paddingBottom: 20 }}
                variant="labelLarge"
              >
                {data.model}
              </Text>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "90%",
    height: "80%",
    backgroundColor: "#3f3f46",
  },
  imageContainer: {
    padding: 5,
    flexDirection: "row",
    marginTop: 20,
  },
  textContainer: {
    paddingLeft: 15,
  },
  rowContainer: {
    alignItems: "flex-start",
    marginTop: 20,
  },
  topText: {
    color: "#ffffff",
    fontFamily: "Montserrat-Medium",
  },
  bottomText: {
    color: "#ffffff",
    fontFamily: "Montserrat-Regular",
    paddingLeft: 3,
  },
});
