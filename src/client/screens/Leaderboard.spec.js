import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import LeaderBoard from "./LeaderBoard";

jest.mock("../utils/api_function_calls/leaderboard_functions", () => ({
    getLeaderboard: jest.fn(() =>
        Promise.resolve([
            "Tim Hortons",
            "Subway",
            "Boston Pizza",
            "Quik Chik",
            "Lava Pizza",
            "McDonalds",
            "Spoon & Fork Sushi",
            "Lazeez Shawarma",
        ])
    ),
    getRestaurantDataFromPlaceID: jest.fn((groupID, placeID) =>
        Promise.resolve({ name: placeID })
    ),
}));

jest.mock("../utils/api_function_calls/photo_functions", () => ({
    getEmbedUrlFromPhotoRef: jest.fn(() => Promise.resolve("")),
}));

jest.mock("react-native/Libraries/Linking/Linking", () => ({
    openURL: jest.fn(),
}));

describe("LeaderBoard", () => {
    it("renders leaderboard in the same order as input array", async () => {
        const route = {
            params: {
                groupID: "test-group-id",
            },
        };
        const { getByText, queryAllByTestId } = render(
            <LeaderBoard route={route} />
        );

        await waitFor(() => expect(LeaderBoard).toHaveBeenCalled());

        const leaderboardItems = queryAllByTestId("leaderboard-item");
        expect(leaderboardItems).toHaveLength(3);
        expect(getByText("Tim Hortons")).toBeTruthy();
        expect(getByText("Subway")).toBeTruthy();
        expect(getByText("Boston Pizza")).toBeTruthy();
        expect(getByText("Quik Chik")).toBeTruthy();
        expect(getByText("Lava Pizza")).toBeTruthy();
        expect(getByText("McDonalds")).toBeTruthy();
        expect(getByText("Spoon & Fork Sushi")).toBeTruthy();
        expect(getByText("Lazeez Shawarma")).toBeTruthy();
    });
});
