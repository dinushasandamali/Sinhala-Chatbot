import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = width / 375;  // Assuming 375px as the base width (e.g., iPhone X)

function responsiveFontSize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

function responsiveSize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202123',
  },
  messagesContainer: {
    flex: 1,
    padding: responsiveSize(10),
  },
  messageContainer: {
    marginVertical: responsiveSize(5),
  },
  botMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e1e1e1',
    borderRadius: responsiveSize(10),
    padding: responsiveSize(10),
    marginLeft: responsiveSize(5),
    maxWidth: width * 0.75, // Ensure messages fit within screen width
  },
  userMessage: {
    backgroundColor: '#4a90e2',
    borderRadius: responsiveSize(10),
    padding: responsiveSize(10),
    marginRight: responsiveSize(5),
    maxWidth: width * 0.75, // Ensure messages fit within screen width
  },
  botMessageText: {
    color: '#000',
    fontSize: responsiveFontSize(14),
  },
  userMessageText: {
    color: '#fff',
    fontSize: responsiveFontSize(14),
  },
  botIcon: {
    width: responsiveSize(30),
    height: responsiveSize(30),
    marginRight: responsiveSize(5),
  },
  userIcon: {
    width: responsiveSize(30),
    height: responsiveSize(30),
    marginLeft: responsiveSize(5),
  },
  loadingText: {
    alignSelf: 'center',
    color: '#888',
    marginVertical: responsiveSize(10),
    fontSize: responsiveFontSize(14),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveSize(10),
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: responsiveSize(10),
    backgroundColor: '#ffffff',
    borderRadius: responsiveSize(10),
    fontSize: responsiveFontSize(14),
    borderColor: '#202123', // Light gray border color
    borderWidth: 1, // Border width to make the border visible
    color: '#333', // Text color
    marginRight: responsiveSize(10),
  },
  sendIcon: {
    width: responsiveSize(30),
    height: responsiveSize(30),
    marginLeft: responsiveSize(10),
  },
});

export default styles;
