import React, { useState } from 'react';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { MovieType } from '../../api/movieService';
import { LinearGradient } from 'expo-linear-gradient';
import { Loader } from '../../components/Loader';
import PlayButton from '../../../assets/play_button.svg'
import YoutubeIframe from 'react-native-youtube-iframe';
import { Overlay } from 'react-native-elements';
import CloseModalIcon from '../../../assets/close.svg';
import { Rating } from 'react-native-ratings';
import { RFValue } from 'react-native-responsive-fontsize';
import { API_KEY } from '../../api/movieService';
import { ImageBackground, StyleSheet, Dimensions, View, ScrollView } from 'react-native';

import {
    Container,
    MovieDetailWrapper,
    MovieTitle,
    YearAndGenre,
    PlayerButtonWrapper,
    CloseModalWrapper,
    SinopseWrapper,
    SinopseTitle,
    SinopseContent
} from './styles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export function MovieDetailScreen() {

    const { params } = useRoute();
    const movieData = params as MovieType;
    const [trailerData, setTrailerData] = useState<any>();
    const [loadingVideo, setLoadingVideo] = useState<boolean>();
    const [showModalVideo, setShowModalVideo] = useState<boolean>();
    const [loadingBannerAndVideoURL, setloadingBannerAndVideoURL] = useState<boolean>();

    const handlePlayVideo = () => {
        setShowModalVideo(true);
        setLoadingVideo(true);
    }

    const toggleOverlay = () => {
        setShowModalVideo(!showModalVideo);
    };

    const getVideoURL = async () => {

        setloadingBannerAndVideoURL(true);

        const apiUrl = `https://api.themoviedb.org/3/movie/${movieData.id}/videos?&language=pt-BR&api_key=${API_KEY}`;

        const response = await axios.get(apiUrl);

        if (response.data.results && response.data.results[0].key) {
            setTrailerData(response.data.results);
        }
    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    style={styles.posterImage}
                    source={{ uri: movieData?.backdrop_path }}
                    onLoadStart={() => getVideoURL()}
                    onLoadEnd={() => setloadingBannerAndVideoURL(false)}>
                    {loadingBannerAndVideoURL && <Loader color="#FFFFFF" />}
                    {!loadingBannerAndVideoURL &&
                        <PlayerButtonWrapper
                            activeOpacity={.8}
                            onPress={handlePlayVideo}
                            disabled={!trailerData}
                            style={!trailerData && { opacity: .6 }} >
                            <PlayButton width={53} height={53} />
                        </PlayerButtonWrapper>
                    }
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', '#0A0A11']}
                        style={styles.backdrop}
                    />
                </ImageBackground>
                <MovieDetailWrapper>
                    <MovieTitle>
                        {movieData.title}
                    </MovieTitle>
                    <YearAndGenre>
                        {movieData.release_date.split('-')[0]} | {movieData.genre_ids.join(', ')}
                    </YearAndGenre>
                    <Rating type='custom'
                        imageSize={RFValue(22)}
                        ratingColor='#FFC837'
                        ratingBackgroundColor='#C4C4C4'
                        readonly
                        startingValue={movieData.vote_average / 2}
                        tintColor='#0A0A11'
                    />
                    <SinopseWrapper>
                        <SinopseTitle>Sinopse</SinopseTitle>
                        <SinopseContent>{movieData.overview}</SinopseContent>
                    </SinopseWrapper>
                </MovieDetailWrapper>
                <Overlay
                    onBackdropPress={toggleOverlay}
                    isVisible={showModalVideo || false}
                    overlayStyle={{ backgroundColor: '#0A0B13', borderRadius: 20 }}>
                    <View style={{ height: windowHeight * .26 }}>
                        <CloseModalWrapper>
                            <CloseModalIcon width={24} height={24} onPress={toggleOverlay} />
                        </CloseModalWrapper>
                        {loadingVideo && <Loader color="red" />}
                        <YoutubeIframe
                            webViewProps={{ allowsInlineMediaPlayback: false }}
                            webViewStyle={{ borderRadius: 16 }}
                            width={windowWidth * .9}
                            videoId={trailerData && trailerData[0].key}
                            play={true}
                            height={!loadingBannerAndVideoURL ? windowHeight * .23 : 0}
                            onReady={() => setLoadingVideo(false)} />
                    </View>
                </Overlay>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    posterImage: {
        height: windowHeight * .6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdrop: {
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    }
});

