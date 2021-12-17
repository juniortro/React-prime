import React from 'react';
import {ScrollView} from 'react-native'

import { 
  Container, 
  SearchContainer, 
  Input, 
  SearchButton, 
  Title, 
  BannerButton, 
  Banner,
  SliderMovie } from './styles'

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import { Feather } from '@expo/vector-icons'

function Home(){
  return(
      <Container>
        <Header title="React Prime"/>
        
        <SearchContainer>
          <Input 
            placeholder="Ex Vingadores"
            placeholderTextColor="#ddd"
          />
          <SearchButton>
            <Feather name="search" size={30} color="#fff"/>
          </SearchButton>
        </SearchContainer>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Em cartaz</Title>

          <BannerButton activeOpacity={0.9} onPress={ () => alert('Teste')}>
            <Banner 
              resizeMethod="resize"
              source={{ uri: 'https://source.unsplash.com/random'}}
            />
          </BannerButton>

          <SliderMovie 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4]}
            renderItem={ ({item}) => <SliderItem />}
          />

          <Title>Populares</Title>

          <SliderMovie 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4]}
            renderItem={ ({item}) => <SliderItem />}
          />

          <Title>Mais Votados</Title>

          <SliderMovie 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4]}
            renderItem={ ({item}) => <SliderItem />}
          />

        </ScrollView>
      </Container>



  )
}

export default Home