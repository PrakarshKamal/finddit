import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import GroupCreated from "./groupCreated";

jest.mock("@react-native-async-storage/async-storage", () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

jest.mock("../../utils/api_function_calls/group_functions", () => ({
    swipeOnRestaurant: jest.fn(),
    userFinishedVoting: jest.fn(),
    userUsedSuperDislike: jest.fn(),
    checkIfUserUsedSuperDislike: jest.fn(),
}));

describe("GroupCreated", () => {
    it("renders correctly", () => {
        const route = {
            params: {
                groupName: "Test Group",
                groupId: "123",
                groupIcon: 1,
                cardData: [],
                loggedInUser: "kohli18@gmail.com",
            },
        };
        const { getByText, getByTestId } = render(
            <GroupCreated route={route} />
        );

        expect(getByText("Test Group")).toBeTruthy();
        expect(getByTestId("swiper")).toBeTruthy();
    });

    it("calls swipeOnRestaurant function with correct arguments on swipe", async () => {
        const route = {
            params: {
                groupName: "Test Group",
                groupId: "123",
                groupIcon: 1,
                cardData: [{ place_id: "1" }],
                loggedInUser: "user@example.com",
            },
        };
        const { getByTestId } = render(<GroupCreated route={route} />);
        const swiper = getByTestId("swiper");

        fireEvent(swiper, "onSwipedRight", 0);

        await waitFor(() => {
            expect(swipeOnRestaurant).toHaveBeenCalledWith("123", "1", "right");
        });
    });
});
