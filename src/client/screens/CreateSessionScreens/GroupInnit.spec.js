import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GroupInnit from "./GroupInnit";

jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

describe("GroupInnit", () => {
    it("renders correctly", () => {
        const { getByText, getByPlaceholderText } = render(<GroupInnit />);

        expect(getByText("Pick a profile icon for your group")).toBeTruthy();
        expect(
            getByText("Set the group name and choose a profile icon")
        ).toBeTruthy();
        expect(getByPlaceholderText("Enter text here")).toBeTruthy();
        expect(getByText("Select")).toBeTruthy();
    });

    it("navigates to AddUsers screen when Next button is pressed with valid inputs", () => {
        const { getByText, getByPlaceholderText } = render(<GroupInnit />);
        const groupNameInput = getByPlaceholderText("Enter text here");
        const nextButton = getByText("Select");

        fireEvent.changeText(groupNameInput, "Test Group");
        fireEvent.press(nextButton);

        expect(navigation.navigate).toHaveBeenCalledWith("AddUsers", {
            groupIcon: expect.any(Number),
            groupName: "Test Group",
        });
    });

    it("displays alert if Next button is pressed without valid inputs", () => {
        const { getByText } = render(<GroupInnit />);
        const nextButton = getByText("Select");

        fireEvent.press(nextButton);

        expect(alert).toHaveBeenCalledWith(
            "Enter a group name and select a profile icon"
        );
    });
});
