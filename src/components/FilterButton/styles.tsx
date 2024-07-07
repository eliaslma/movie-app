import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    border-radius: 16px;
    align-items: center;
    gap: 4px;
`;

export const IconWrapper = styled.View`
    background-color: #51535D;
    padding: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(9.5)}px;
    font-family: 'Poppins_500Medium';
    color: #A0A0A0;
`;