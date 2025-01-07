import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Avatars = () => {
  const avatar1 = { name: "", qualities: null }; // extract from firebase
  const avatar2 = { name: "", qualities: null };
  const avatar3 = { name: "", qualities: null };
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const createAvatar = () => {
    if (avatar1.name != null && avatar2.name != null && avatar3.name != null) {
      setError(
        "You already have three Avatars! Delete one before creating another."
      );
    } else {
      navigation.navigate('CreateAvatar.jsx')
    }
  };

  const chat = (avatar) => {
    if (avatar == 1) {
      navigation.navigate('Chat1');
    }
    else if (avatar == 2) {
      navigation.navigate('Chat2');
    }
    else {
      navigation.navigate('Chat3');
    }
  }

  const deleteAvatar = (avatar) => {
    if (avatar === 1) {
      // Firebase code: avatar1 = { name: null, qualities: null };
    }
    // Similar logic for other avatars
  };

  const clearError = () => {
    setError("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Avatars</Text>
      {avatar1.name != null && (
        <View style={styles.avatarRow}>
          <TouchableOpacity style={styles.avatarButton} onPress={() => chat(1)}>
            <Text style={styles.avatarName}>{avatar1["name"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteAvatar(1)}
          >
            <Text style={styles.deleteText}>Delete Avatar</Text>
          </TouchableOpacity>
        </View>
      )}

      {avatar2.name != null && (
        <View style={styles.avatarRow}>
          <TouchableOpacity style={styles.avatarButton} onPress={() => chat(2)}>
            <Text style={styles.avatarName}>{avatar2["name"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteAvatar(2)}
          >
            <Text style={styles.deleteText}>Delete Avatar</Text>
          </TouchableOpacity>
        </View>
      )}

      {avatar3.name != null && (
        <View style={styles.avatarRow}>
          <TouchableOpacity style={styles.avatarButton} onPress={() => chat(3)}>
            <Text style={styles.avatarName}>{avatar3["name"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteAvatar(3)}
          >
            <Text style={styles.deleteText}>Delete Avatar</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.createButton} onPress={createAvatar}>
        <Text style={styles.createText}>Create Avatar</Text>
      </TouchableOpacity>

      {error !== "" && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={() => clearError()}>
            <Text style={styles.clearError}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatarButton: {
    flex: 1,
  },
  avatarName: {
    fontSize: 18,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#ffcccc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "#721c24",
    fontWeight: "bold",
  },
  createButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
  },
  createText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fdecea",
    padding: 10,
    borderRadius: 5,
    borderColor: "#f5c6cb",
    borderWidth: 1,
  },
  errorText: {
    color: "#721c24",
    fontSize: 14,
  },
  clearError: {
    color: "#721c24",
    fontWeight: "bold",
    fontSize: 16,
    padding: 5,
  },
});

export default Avatars;
