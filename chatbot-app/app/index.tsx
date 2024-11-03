// App.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { getChatbotResponse } from '../services/api'; // Ensure the path is correct
import styles from '../styles/styles'; // Adjust the import path if necessary

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input) return;

    setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
    setLoading(true);

    try {
      console.log('Sending input to API:', input); // Log the input
      const result = await getChatbotResponse(input);
      console.log('Received response from API:', result); // Log the result
      setMessages((prevMessages) => [...prevMessages, { text: result, sender: 'bot' }]);
    } catch (error) {
      console.error('Error in handling response:', error);
      setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I didn't get that.", sender: 'bot' }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const renderMessage = ({ item }: { item: { text: string; sender: 'user' | 'bot' } }) => {
    return (
      <View style={styles.messageContainer}>
        {item.sender === 'bot' ? (
          // Bot message with icon on the left
          <View style={styles.botMessageContainer}>
            <Image
              source={require("../assets/images/chatbot-icon.png")} // Ensure this path is correct
              style={styles.botIcon}
            />
            <View style={styles.botMessage}>
              <Text style={styles.botMessageText}>{item.text}</Text>
            </View>
          </View>
        ) : (
          // User message with icon on the right
          <View style={styles.userMessageContainer}>
            <View style={styles.userMessage}>
              <Text style={styles.userMessageText}>{item.text}</Text>
            </View>
            <Image
              source={require("../assets/images/user.png")} // Ensure this path is correct
              style={styles.userIcon}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        style={styles.messagesContainer}
      />
      {loading && <Text style={styles.loadingText}>Bot is typing...</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Image
            source={require("../assets/images/icons8-send-30.png")} // Ensure this path is correct
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
