import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Restaurant } from 'src/interfaces/restaurant.interface';
import { NearbyRequestDto } from 'src/dto/nearby-request.dto';
require('dotenv').config();
const API_ENDPOINT =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

@Injectable()
export class NearbySearchService {
  sayHello(): string {
    return 'Hello World from nearby service! sdas';
  }
  async getNearbyRestaurants(request: NearbyRequestDto): Promise<Restaurant[]> {
    try {
      const response = await axios.get(API_ENDPOINT, {
        params: {
          type: 'restaurant', //hardcoded for now to restaurant
          location: `${request.latitude},${request.longitude}`,
          key: process.env.GCP_KEY,
          radius: `${request.radius}`,
          maxprice: `${request.maxPrice}`,
          minprice: `${request.minPrice}`,
          opennow: true,
        },
      });

      if (response.data && response.data.results) {
        // add to database
        console.log(response.data);
        return response.data.results;
      } else {
        throw new Error('Invalid response from the API');
      }
    } catch (error) {
      throw new Error(`Failed to fetch nearby restaurants: ${error.message}`);
    }
  }
}
