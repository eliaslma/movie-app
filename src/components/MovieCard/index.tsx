import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { MovieType } from '../../api/movieService';

import {
    Container,
} from './styles';

import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.60 : width * 0.74;


export function MovieCard({ movieData, handleShowMovieDetailScreen }: { movieData: MovieType, handleShowMovieDetailScreen: () => void }) {

    return (
        <Container activeOpacity={.8} onPress={handleShowMovieDetailScreen}>
            <Image style={styles.posterImage} source={{ uri: movieData?.poster_path }} />
        </Container>
    );
}

const styles = StyleSheet.create({
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.3,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
    },
});