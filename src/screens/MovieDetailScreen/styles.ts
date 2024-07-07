import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
    flex: 1;
    background-color: #0A0B13;
`;

export const MovieDetailWrapper = styled.View`
    flex: 1;
    align-items: center;
    padding: 0px ${RFValue(11.5)}px;
    gap: 10px;
`;

export const MovieTitle = styled.Text`
    font-size: ${RFValue(18.5)}px;
    color: #FFFFFF;
    font-family: 'Poppins_600SemiBold';
    text-align: center;
`;

export const YearAndGenre = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(10)}px;
    color: #A0A0A0;
    text-align: center;
`;

export const CloseModalWrapper = styled.View`
    display: flex;
    align-items: flex-end;
`;

export const SinopseWrapper = styled.View`
    height: 100%;
    width: 100%;
    margin-top: 12px;
    flex-wrap: nowrap;
`;

export const SinopseTitle = styled.Text`
    color: #FFFFFF;
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(18)}px;
`;

export const SinopseContent = styled.Text`
    color: #A0A0A0;
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(11.5)}px;
`;


export const PlayerButtonWrapper = styled.TouchableOpacity``;