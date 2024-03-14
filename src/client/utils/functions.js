import { getEmbedUrlFromPhotoRef } from "./api_function_calls/photo_functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const fetchImageUrl = async (cardData) => {
    const cards = [];

    const promises = cardData.data.map(async (item) => {
        try {
            let ref = item.photos[0].photo_reference;
            let imageUrl = await getEmbedUrlFromPhotoRef(ref, 1000);
            let card = {
                ...item,
                image: imageUrl,
            };
            cards.push(card);
        } catch (error) {
            // Handle errors if necessary
            console.error(`Error processing item: ${error.message}`);
        }
    });

    await Promise.all(promises);

    return cards;
};

export const getLocalVotes = async (groupID) => {
    try {
        let previousVotes = await AsyncStorage.getItem("@" + groupID);
        previousVotes = previousVotes
            ? JSON.parse(previousVotes)
            : { groupID: groupID, votes: [] };
        return previousVotes.votes;
    } catch (e) {
        // error reading value
    }
};
