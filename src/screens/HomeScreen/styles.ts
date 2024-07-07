import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #0A0B13;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px ${RFValue(16)}px;
`;

export const WelcomeWrapper = styled.View`
    gap: 4px;
`;

export const UserWelcomeWrapper = styled.View`
    flex-direction: row;
    gap: 8px;
`;

export const WelcomeTitle = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: ${RFValue(20)}px;
    color: #FFFFFF;
`;

export const LastAdditionsTitle = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(11.5)}px;
    color: #A0A0A0;
`;

export const CustomerName = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: ${RFValue(20)}px;
    color: #FFFFFF;
`;

export const Avatar = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
`;

export const SearchWrapper = styled.View`
    padding: ${RFValue(16)}px;
    gap: 24px;
`;

export const FeaturedMoviesWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px ${RFValue(16)}px;
    margin-top: 8px;
`;

export const MovieTitle = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(17.5)}px;
    font-family: 'Poppins_400Regular';
`;

export const FeaturedMovieTitle = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(17.5)}px;
    font-family: 'Poppins_700Bold';
`;

