import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

jest.mock("../hooks/useAuth", () => ({
    __esModule: true,
    default: () => ({
        signInUser: jest.fn(),
    }),
}));

describe("LoginScreen", () => {
    it("renders correctly", () => {
        const { getByPlaceholderText, getByText } = render(<LoginScreen />);

        expect(getByPlaceholderText("Email")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(getByText("Forgot password?")).toBeTruthy();
        expect(getByText("Login")).toBeTruthy();
        expect(getByText("Log in with Google")).toBeTruthy();
        expect(getByText("Don't have an account?")).toBeTruthy();
        expect(getByText("Sign Up")).toBeTruthy();
    });

    it("calls signIn function when Login button is pressed", async () => {
        const { getByText } = render(<LoginScreen />);
        const loginButton = getByText("Login");

        fireEvent.press(loginButton);

        await waitFor(() => {
            expect(signInUser).toHaveBeenCalled();
        });
    });

    it("navigates to Signup screen when Sign Up button is pressed", () => {
        const { getByText, getByTestId } = render(<LoginScreen />);
        const signUpButton = getByText("Sign Up");

        fireEvent.press(signUpButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Signup");
    });
});
