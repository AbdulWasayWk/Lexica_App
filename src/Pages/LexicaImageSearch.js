import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Text, Searchbar, Button } from "react-native-paper";
import Cards from "../Components/Cards";

export default function LexicaImageSearch() {
  const [fetchedData, setFetchedData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setShowLoader(true);
    const searchData = fetch(`https://lexica.art/api/v1/search?q=${search}`);
    (await searchData).json().then((result) => {
      setFetchedData(result.images);
      setShowLoader(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={styles.topBar}>
          <Text variant="displaySmall" style={styles.HeadingText}>
            Lexica
          </Text>
          <Text variant="bodyMedium" style={styles.HeadingBottomText}>
            A Stable Diffusion search engine
          </Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search for an image"
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor="#6e717c"
            selectionColor={"#6e717c"}
            iconColor={"#6e717c"}
            elevation={4}
            inputStyle={styles.searchBarTextField}
            style={styles.searchBar}
          />
          <Button
            style={styles.button}
            mode="contained"
            buttonColor="#36338e"
            onPress={() => {
              getData();
            }}
          >
            Search
          </Button>
        </View>
        <Cards cardsData={fetchedData} isLoading={showLoader} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#27272a",
  },
  topBar: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1b1b1e",
  },
  HeadingText: {
    color: "#ffffff",
    fontFamily: "Comfortaa-Bold",
  },
  HeadingBottomText: {
    color: "#85858d",
    fontFamily: "Montserrat-Medium",
  },
  searchBarContainer: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#27272a",
  },
  searchBar: {
    width: "90%",
    height: 40,
    marginTop: "9%",
    borderRadius: 100,
    backgroundColor: "#3f3f46",
  },
  searchBarTextField: {
    color: "#ffffff",
    selectionColor: "#ffffff",
    fontFamily: "Montserrat-Medium",
  },
  button: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "30%",
  },
});
