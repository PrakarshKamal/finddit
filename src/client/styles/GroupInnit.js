import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  headingForProfileIcon: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  plusIcon: {
    fontSize: 40,
    color: "#f27575",
  },
  textInputView: {
    flex: 1,
    flexDirection: "column",
  },
  textInput: {
    width: "100%", // Take up full width
    height: 40, // Adjust the height as needed
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  nextButton: {
    position: "relative",
    left: 110,
    bottom: 20,
  },
  headingForGroupName: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  iconGrid: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 16,
  },
  selectedIcon: {
    borderColor: "#f27575",
    borderWidth: 2, // Customize the border width for the selected icon
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  selectButton: {
    backgroundColor: "#f27575",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
