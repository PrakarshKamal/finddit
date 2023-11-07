import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState, useRef } from "react";
import styles from "../../styles/GroupPreferencesStyles";
import Slider from "@react-native-community/slider";
import MapView, { Circle, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GroupPreferences = ({ route, navigation }) => {
    const { groupName, groupIcon, groupMembers } = route.params;
    const [location, setLocation] = useState("");
    const [radius, setRadius] = useState(5); // Default radius value
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const mapRef = useRef(null);

    const handleRadiusChange = (value) => {
        setRadius(value);
    };

    const handlePriceRangeSelect = (priceRange) => {
        setSelectedPriceRange(priceRange);
    };

    const [pin, setPin] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });

    const [region, setRegion] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const handleLocationSelect = (data, details) => {
        if (mapRef.current && details) {
            const newLocation = {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
            };
            setRegion(newLocation);
            mapRef.current.animateToRegion({
                latitude: newLocation.latitude,
                longitude: newLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    };

    //navigator.geolocation = require('react-native-geolocation-service');

    return (
        <View style={{ marginTop: 50, flex: 1 }}>
            {
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: "distance",
                    }}
                    onPress={handleLocationSelect}
                    query={{
                        key: "AIzaSyBMOzCOjtadPdMW9AwGVpVvftaNLufPB1c",
                        language: "en",
                        components: "country:ca",
                        types: "establishment",
                        radius: 30000,
                        location: `${region.latitude}, ${region.longitude}`,
                    }}
                    styles={{
                        container: {
                            flex: 0,
                            position: "absolute",
                            width: "100%",
                            zIndex: 1,
                        },
                        listView: { backgroundColor: "white" },
                    }}
                />
            }
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google"
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                />
                <Marker
                    coordinate={pin}
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinates);
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        });
                    }}
                />
                <Circle center={pin} radius={1000} />
            </MapView>
        </View>
    );
};

export default GroupPreferences;

// return (
//   <View style={styles.container}>
//     <Text style={styles.groupName}>{groupName}</Text>

//     <View style={styles.inputContainer}>
//       <Text style={styles.label}>Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter location"
//         value={location}
//         onChangeText={(text) => setLocation(text)}
//       />
//     </View>

//     <View style={styles.inputContainer}>
//       <Text style={styles.label}>Radius (miles): {radius}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={1}
//         maximumValue={20}
//         thumbTintColor = {"#f27575"}
//         minimumTrackTintColor = {"#f27575"}
//         step={1}
//         value={radius}
//         onValueChange={handleRadiusChange}
//       />
//     </View>

//     <View >
//       <Text style={styles.label}>Price Range</Text>
//       <View style={styles.priceRangeContainer}>
//       <TouchableOpacity
//         style={[styles.priceRangeButton, selectedPriceRange === 'one' && styles.selectedPriceRange]}
//         onPress={() => handlePriceRangeSelect('one')}
//       >
//         <Text style={styles.priceRangeText}>$</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.priceRangeButton, selectedPriceRange === 'two' && styles.selectedPriceRange]}
//         onPress={() => handlePriceRangeSelect('two')}
//       >
//         <Text style={styles.priceRangeText}>$$</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.priceRangeButton, selectedPriceRange === 'three' && styles.selectedPriceRange]}
//         onPress={() => handlePriceRangeSelect('three')}
//       >
//         <Text style={styles.priceRangeText}>$$$</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.priceRangeButton, selectedPriceRange === 'four' && styles.selectedPriceRange]}
//         onPress={() => handlePriceRangeSelect('four')}
//       >
//         <Text style={styles.priceRangeText}>$$$$</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );
