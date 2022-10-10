import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Card, ActivityIndicator } from "react-native-paper";
import DetailsModal from "./DetailsModal";

export default function Cards({ cardsData = [], isLoading }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  return (
    <>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={40} animating={true} color={"#3f3f46"} />
        </View>
      ) : cardsData.length !== 0 ? (
        cardsData.map((singleItem, index) => (
          <View
            key={index}
            style={
              index === 0 ? styles.cardsInitialContainer : styles.cardsContainer
            }
          >
            <Card
              onPress={() => {
                setOpenModal(true);
                setModalData(singleItem);
              }}
              mode="elevated"
              elevation={5}
              style={styles.card}
            >
              <Card.Title
                titleStyle={styles.cardTitle}
                title={singleItem.prompt}
              />
              <Card.Cover
                style={styles.cardImage}
                source={{
                  uri: singleItem.src,
                }}
              />
            </Card>
          </View>
        ))
      ) : (
        <View style={styles.noCardsContainer}>
          <Text style={styles.noCardsText}>Please search for a prompt...</Text>
        </View>
      )}
      <DetailsModal
        data={modalData}
        isOpen={openModal}
        setisOpen={setOpenModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  noCardsContainer: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  noCardsText: {
    color: "#d4d4d4",
  },
  activityIndicatorContainer: {
    marginTop: "50%",
  },
  cardsInitialContainer: {
    marginTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  cardsContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#3f3f46",
  },
  cardTitle: {
    color: "#d4d4d4",
  },
  cardImage: {
    padding: 6,
    backgroundColor: "#3f3f46",
  },
});
