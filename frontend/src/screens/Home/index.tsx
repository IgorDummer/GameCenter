import React, { useState } from 'react';

import {
  View, Text, FlatList
} from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { useGames } from '../../hooks/games';
import { GameCard } from '../../components/GameCard';

export function Home(){
  const [category, setCategory] = useState('');
  const { games, loading } = useGames();

  return (
    <Background>
      <View style={styles.container}>
        <Profile />
        <Text style={styles.title}> Meus jogos </Text>
        <CategorySelect 
          categorySelected={category}
          setCategory={setCategory}
        />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          style={ styles.games } 
          renderItem={({item}) =>(
            <GameCard
              key={item.id}
              data={item} 
              onPress={() => {} } 
            />
            
          )}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{ paddingBottom: 69, marginHorizontal: 15}}
        />
      </View>
    </Background>
  );
}