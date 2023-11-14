import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/CardItemStyles'

const CardItem = ({itemData}) => {
    const {name , rating, vicinity , place_opening_hours , price_level } = itemData
  return (
    <View style={styles.card}>
    <Image source={require('../assets/burger.jpeg')  } style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{vicinity}</Text>
      <Text style={styles.operationalHours}>{place_opening_hours.open_now}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating} stars</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{price_level} cost</Text>
      </View>
    </View>
  </View>
  )
}

export default CardItem
