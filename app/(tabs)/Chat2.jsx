import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, View, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { createCompletion } from './openaiService';

const ChatSibly = () => {
  const name = ""; // extract from Firebase ---> avatar2 
  const qualities = [] // Firebase code
  const systemMessage = {
    role: 'system',
    content: `You are supposed to act like an elder sibling to a teenager who will be messaging you. You have to help them with their mental health or social issues. Help them feel better. You will have the following qualities: ${qualities}. Your name is ${name}. Your job is solely to help the user and do not answer any questions or solve problems that are not related to their life. If such a problem is asked just say that you are unable to answer and prompt them to ask something else in a comforting manner. Always be gentle and approachable, provide a comfortable environment. Always be brief. This application is not meant for problem-solving with just rational solutions. It must be very conversational. `,
  };
  const [messages, setMessages] = useState([systemMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const aiResponse = await createCompletion(newMessages);
    setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.messagesContainer}>
          {messages.slice(1).map((msg, index) => (
            <View
              key={index}
              style={[
                msg.role === 'user' ? styles.userMessage : styles.assistantMessage,
                index % 2 === 0 ? styles.messageColorEven : styles.messageColorOdd,
              ]}
            >
              <Text style={styles.messageText}>{msg.content}</Text>
            </View>
          ))}
          {loading && <ActivityIndicator size="large" color="#007BFF" />}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={input}
            onChangeText={setInput}
            editable={!loading}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend} disabled={loading}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  messagesContainer: {
    padding: 20,
  },
  userMessage: {
    alignSelf: 'flex-end',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  messageColorEven: {
    backgroundColor: '#d1e7dd',
  },
  messageColorOdd: {
    backgroundColor: '#f8d7da',
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatSibly;
