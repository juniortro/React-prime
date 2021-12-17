import React from 'react'
import {View, Text} from 'react-native'

import { 
  Container, 
  BannerItem,
  Title,
  RateContainer,
  Rate
} from './styles'

import { Ionicons } from '@expo/vector-icons'

const SliderItem = ({item}) => {
  return(
    <Container activeOpacity={0.7}>
      <BannerItem 
        source={{ uri: 'https://source.unsplash.com/random'}}
      />

      <Title numberOfLines={1}>Vingadores</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e"/>
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem
