import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import LexicaImageSearch from "./src/Pages/LexicaImageSearch";

export default function App() {
  return (
    <PaperProvider>
      <LexicaImageSearch></LexicaImageSearch>
    </PaperProvider>
  );
}
