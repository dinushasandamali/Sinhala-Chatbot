// styles.ts
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#202123",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  botMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  botMessage: {
    backgroundColor: "#2C3E50",
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
  },
  userMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
    marginLeft: "auto",
  },
  userMessage: {
    backgroundColor: "#153982",
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
  },
  botMessageText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 10,
  },
  userMessageText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#444444",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
  },
  sendIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    tintColor: "#007BFF",
  },
  userIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  botIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default styles;
