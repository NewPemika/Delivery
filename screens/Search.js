import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to simulate search - in a real app, this would be a fetch call to your backend
  const handleSearch = (query) => {
    setSearchQuery(query);
    // setSearchResults(searchBackend(query));
  };

  // Simulated data for the flat list - replace this with your search results
  const mockResults = [
    { id: '1', name: 'Pizza Margherita' },
    { id: '2', name: 'Vegan Salad Bowl' },
    { id: '3', name: 'Grilled Steak' },
    // Add more food items...
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for food..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={mockResults} // In a real app, this would be your search results array
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20
  },
  searchBar: {
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    margin: 10,
    marginTop: 25
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
  },
  itemText: {
    fontSize: 18,
  },
});
