import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  // },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    width: "80%",
    marginVertical: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    opacity: 0.75,
    fontSize: 18,
  },
  signUpButton: {
    width: "82%",
    padding: 14,
    borderRadius: 30,
    backgroundColor: "#f27575",
    marginTop: 35,
    marginBottom: 90,
  },
  signUpButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  alreadyAccountText: {
    marginTop: 20,
    color: "#000000",
    opacity: 0.35,
    fontSize: 21,
    textAlign: "center",
  },
  logInButtonText: {
    color: "#3685FC",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f27575",
  },
  topHeadingContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  middleContainer: {
    marginTop: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputError: {
    borderColor: "red", // Change border color to red for invalid email
  },
});
export default styles;
