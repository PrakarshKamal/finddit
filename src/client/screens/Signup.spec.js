import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignupScreen from "./SignupScreen";

jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

jest.mock("../hooks/useAuth", () => ({
    __esModule: true,
    default: () => ({
        signUpUser: jest.fn(),
    }),
}));

// Mocking axios and sendSignUpRequest function
jest.mock("axios", () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("../utils/api_function_calls/user_functions", () => ({
    sendSignUpRequest: jest.fn(() => Promise.resolve({})),
}));

describe("SignupScreen", () => {
    it("renders correctly", () => {
        const { getByPlaceholderText, getByText } = render(<SignupScreen />);

        expect(getByPlaceholderText("First Name")).toBeTruthy();
        expect(getByPlaceholderText("Last Name")).toBeTruthy();
        expect(getByPlaceholderText("Email")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(getByText("Create Account")).toBeTruthy();
        expect(getByText("Sign in with Google")).toBeTruthy();
        expect(getByText("Already have an account?")).toBeTruthy();
        expect(getByText("Log In")).toBeTruthy();
    });

    it("calls signUp function when Create Account button is pressed", async () => {
        const { getByText } = render(<SignupScreen />);
        const createAccountButton = getByText("Create Account");

        fireEvent.press(createAccountButton);

        await waitFor(() => {
            expect(signUpUser).toHaveBeenCalled();
        });
    });

    it("navigates to Login screen when Log In button is pressed", () => {
        const { getByText, getByTestId } = render(<SignupScreen />);
        const logInButton = getByText("Log In");

        fireEvent.press(logInButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Login");
    });
});
