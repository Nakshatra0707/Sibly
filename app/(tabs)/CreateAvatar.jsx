import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const CreateAvatar = () => {
    const [options] = useState(["Caring", "Funny", "Responsible"]);
    const [selected, setSelected] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [name, setName] = useState("");
    const navigation = useNavigation();
    const submit = () => {
        // Firebase code
        console.log('Submitting Avatar:', { name, selected });
    };

    const chatSibly = () => {
        navigation.navigate('chatSibly');
    };

    const toggle = () => {
        setDropdown(!dropdown);
    };

    const optionSelect = (option) => {
        if (!selected.includes(option)) {
            setSelected([...selected, option]);
        }
    };

    const remove = (option) => {
        setSelected(selected.filter((item) => item !== option));
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.header}>Avatar Creation</Text>
                <View style={styles.section}>
                    <Text style={styles.label}>Avatar Name</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Avatar's name"
                        onChangeText={(value) => setName(value)}
                        value={name}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Avatar Qualities</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Select qualities from below"
                        value={selected.join(", ")}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.dropdownToggle} onPress={toggle}>
                        <Text style={styles.dropdownToggleText}>
                            {dropdown ? "Hide options ⬆" : "Select options ⬇"}
                        </Text>
                    </TouchableOpacity>

                    {dropdown && (
                        <View style={styles.dropdownContainer}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <View style={styles.listItem}>
                                        <TouchableOpacity onPress={() => optionSelect(item)}>
                                            <Text style={styles.listItemText}>{item}</Text>
                                        </TouchableOpacity>
                                        {selected.includes(item) && (
                                            <TouchableOpacity
                                                style={styles.removeButton}
                                                onPress={() => remove(item)}
                                            >
                                                <Text style={styles.removeButtonText}>X</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                )}
                            />
                        </View>
                    )}

                    <TouchableOpacity style={styles.submitButton} onPress={submit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.chatButton} onPress={chatSibly}>
                        <Text style={styles.chatButtonText}>Chat with Sibly</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    dropdownToggle: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    dropdownToggleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    dropdownContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
    removeButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    submitButton: {
        paddingVertical: 15,
        backgroundColor: '#28a745',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    chatButton: {
        paddingVertical: 15,
        backgroundColor: '#ffc107',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    chatButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default CreateAvatar;
