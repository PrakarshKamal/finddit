import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

jest.mock("../hooks/useAuth", () => ({
    __esModule: true,
    default: () => ({
        user: { email: "test@example.com" },
    }),
}));

describe("HomeScreen", () => {
    it("renders correctly", () => {
        const { getByText } = render(<HomeScreen />);

        expect(getByText("CREATE A SESSION")).toBeTruthy();
        expect(getByText("JOIN A SESSION")).toBeTruthy();
    });

    it("navigates to GroupInit screen when CREATE A SESSION button is pressed", () => {
        const { getByText } = render(<HomeScreen />);
        const createSessionButton = getByText("CREATE A SESSION");

        fireEvent.press(createSessionButton);

        expect(navigation.navigate).toHaveBeenCalledWith("GroupInnit");
    });

    it("navigates to ActiveSessions screen with user email when JOIN A SESSION button is pressed", () => {
        const { getByText } = render(<HomeScreen />);
        const joinSessionButton = getByText("JOIN A SESSION");

        fireEvent.press(joinSessionButton);

        expect(navigation.navigate).toHaveBeenCalledWith("ActiveSessions", {
            email: "test@example.com",
        });
    });
});
