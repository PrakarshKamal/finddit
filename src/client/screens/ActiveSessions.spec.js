import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import ActiveSessions from "./ActiveSessions";

jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

jest.mock("../utils/api_function_calls/group_functions", () => ({
    getActiveGroupsForUser: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe("ActiveSessions", () => {
    it("renders correctly", async () => {
        const route = {
            params: {
                email: "test@example.com",
            },
        };
        const { getByText, getByTestId } = render(
            <ActiveSessions route={route} />
        );

        expect(getByTestId("loading-indicator")).toBeTruthy();

        await waitFor(() => expect(getActiveGroupsForUser).toHaveBeenCalled());

        expect(getByText("No active groups found")).toBeTruthy();
    });
});
