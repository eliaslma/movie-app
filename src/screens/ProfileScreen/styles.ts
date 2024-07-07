import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: #0A0B13;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 48px;
`;
export const Avatar = styled.Image`
    width: ${RFValue(128)}px;
    height: ${RFValue(128)}px;
    border-radius: ${RFValue(64)}px;
`;

export const WelcomeTitle = styled.Text`
    font-family: 'Poppins_700Bold';
    font-size: ${RFValue(20)}px;
    color: #FFFFFF;
`;

export const SocialButtonTitle = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: ${RFValue(12)}px;
    color: #000000;
`;

export const SocialButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 8px;
    width: 100%;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;