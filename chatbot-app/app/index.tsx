import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { getChatbotResponse } from '../services/api'; // Ensure this path matches your project structure
import styles from '../styles/styles'; // Adjust the path as necessary

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' | 'typing' }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input) return;

    // Check for the phrase "clear chat history" to reset the chat
    if (input.toLowerCase() === 'clear chat history') {
      setMessages([]); // Clear all messages
      setInput(''); // Reset input field
      return;
    }

    // Add user message to the chat
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
    setLoading(true);

    // Show "typing" indicator
    setMessages((prevMessages) => [...prevMessages, { text: 'typing...', sender: 'typing' }]);

    try {
      // Get the bot's response
      const result = await getChatbotResponse(input);

      // Replace "typing" indicator with actual bot message
      setMessages((prevMessages) =>
        prevMessages
          .filter((msg) => msg.sender !== 'typing') // Remove typing indicator
          .concat({ text: result, sender: 'bot' }) // Add actual bot message
      );
    } catch (error) {
      console.error('Error in handling response:', error);
      setMessages((prevMessages) =>
        prevMessages
          .filter((msg) => msg.sender !== 'typing')
          .concat({ text: "Sorry, I didn't get that.", sender: 'bot' })
      );
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const renderMessage = ({ item }: { item: { text: string; sender: 'user' | 'bot' | 'typing' } }) => (
    <View style={styles.messageContainer}>
      {item.sender === 'bot' || item.sender === 'typing' ? (
        <View style={styles.botMessageContainer}>
          <Image source={require('../assets/images/chatbot-icon.png')} style={styles.botIcon} />
          <View style={styles.botMessage}>
            <Text style={styles.botMessageText}>{item.sender === 'typing' ? 'Bot is typing...' : item.text}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.userMessageContainer}>
          <View style={styles.userMessage}>
            <Text style={styles.userMessageText}>{item.text}</Text>
          </View>
          <Image source={require('../assets/images/user.png')} style={styles.userIcon} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        style={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Image source={require('../assets/images/icons8-send-30.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
