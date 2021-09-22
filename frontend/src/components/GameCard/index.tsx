import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { Game } from '../../hooks/games';

import { theme } from '../../global/theme';
import { styles } from './styles';
import { imageCoverUrl } from '../../services/apiIGDB';
import { PlatformLogo } from '../PlatformLogo';
import { GenreTag } from '../GenreTag';
import { GameRating } from '../GameRating';
import { PlaceholderCard } from './PlaceholderCard';

type Props = RectButtonProps & {
  data: Game;
}

export function GameCard({ data , ...rest}: Props) {
  if(!data) {
    return <PlaceholderCard />
  }
  const { gameData } = data;
  
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        {
          gameData?.cover ?
         ( <Image 
            source={{uri: `${imageCoverUrl}${gameData?.cover.image_id}.png`}}
            style={styles.cover}
            resizeMode="cover"
          />) :
          (
            <View style={styles.noCover}>
              <Text style={styles.noCoverText}>Jogo sem capa</Text>
            </View>
          )
        }

        {
          gameData ? (
            <View style={styles.content}>
            <View style={styles.heading} >
              <Text numberOfLines={2} style={styles.gameTitle}>{gameData.name}</Text>
              {
                gameData.rating &&
                <GameRating 
                  rating={gameData.rating}
                />
              }
            </View>
            
            <View style={styles.data}>
              <Text numberOfLines={2} style={styles.gameSummary}>{gameData?.summary}</Text>
              <FlatList
                horizontal
                keyExtractor={ item => String(item.id)}
                data={gameData?.platforms}
                style={styles.platforms}
                fadingEdgeLength={10} 
                showsHorizontalScrollIndicator={false}
                renderItem={( { item} ) => (
                    <View style={styles.platformLogo}>
                      <PlatformLogo platform={item.id} />
                    </View>
                )}
              >
              </FlatList>
              <View style={styles.genres}>
                <FlatList 
                  horizontal 
                  data={gameData?.genres}
                  keyExtractor={item => String(item.id)}
                  style={styles.genres}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ marginTop: 7}}
                  renderItem={ ({item}) => (
                      <GenreTag id={item.id} />
                  )}
                />
              </View>
            </View>
          </View>
          ) : 
          (
            <View style={styles.content}>
              <Text style={styles.noCoverText}>Jogo não selecionado</Text>
            </View>
          )
        }
 
      </View>
    </RectButton>
  );
}