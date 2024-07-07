import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MovieType } from '../../api/movieService';
import { MovieCard } from '../../components/MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getMovies } from '../../api/movieService';
import { SearchBar } from '../../components/SearchBar';
import { Filters } from '../../components/Filters';

import {
    View,
    Dimensions,
    Animated,
    Platform,
} from 'react-native';

import {
    Container,
    Header,
    WelcomeWrapper,
    UserWelcomeWrapper,
    WelcomeTitle,
    LastAdditionsTitle,
    CustomerName,
    SearchWrapper,
    FeaturedMoviesWrapper,
    MovieTitle,
    FeaturedMovieTitle,
    Avatar
} from './styles';
import { propsNavigationStack } from '../../routes/Models';

const { width } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.60 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export function HomeScreen() {

    const [movies, setMovies] = useState<MovieType[]>([]);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const navigation = useNavigation<propsNavigationStack>();

    const handleShowMovieDetailScreen = (movieData: MovieType) => {
        navigation.navigate('MovieDetailScreen', movieData);
    }

    const renderItem = (item: any, index: number) => {

        if (!item.poster_path) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
        }

        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
        });

        return (
            <View style={{ width: ITEM_SIZE }}>
                <Animated.View
                    style={{
                        marginHorizontal: SPACING,
                        transform: [{ translateY }],
                        backgroundColor: 'white',
                        borderRadius: 34,
                    }}>
                    <MovieCard
                        movieData={item}
                        handleShowMovieDetailScreen={() => handleShowMovieDetailScreen(item)}
                    />
                </Animated.View>
            </View>
        );
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies();
            if (moviesData) {
                setMovies([{ id: 0 } as MovieType, ...moviesData, { id: 20 } as MovieType])
            }
        };

        fetchMovies();
    }, []);

    return (
        <Container>
            <SafeAreaView edges={['top']}>
                <Header>
                    <WelcomeWrapper>
                        <UserWelcomeWrapper>
                            <WelcomeTitle>Olá</WelcomeTitle>
                            <CustomerName>Elias!</CustomerName>
                        </UserWelcomeWrapper>
                        <LastAdditionsTitle>Confira os últimos lançamentos</LastAdditionsTitle>
                    </WelcomeWrapper>
                    <Avatar source={{
                        uri: 'https://avatars.githubusercontent.com/u/70176310?v=4',
                    }} />
                </Header>
                <SearchWrapper>
                    <SearchBar />
                    <Filters/>
                </SearchWrapper>
            </SafeAreaView>
            <FeaturedMoviesWrapper>
                <MovieTitle>Filmes em </MovieTitle>
                <FeaturedMovieTitle>Destaque</FeaturedMovieTitle>
            </FeaturedMoviesWrapper>
            {movies &&
                <Animated.FlatList
                    style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    keyExtractor={(item: any) => item.id}
                    horizontal
                    bounces={false}
                    decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                    renderToHardwareTextureAndroid
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    snapToInterval={ITEM_SIZE}
                    snapToAlignment='start'
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => renderItem(item, index)}>
                </Animated.FlatList>
            }
        </Container>
    );
}
