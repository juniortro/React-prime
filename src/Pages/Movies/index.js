import React from 'react';
import {View, Text} from 'react-native'
import Header from '../../components/Header';

import { Container } from './styles'

function Movies(){
  return(
    <Container>
      <Header title="Minha Lista"/>
      <Text>Movies</Text>
    </Container>
  )
}

export default Movies