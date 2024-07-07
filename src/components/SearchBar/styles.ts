import styled from 'styled-components/native';''
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: ${RFValue(12)}px ${RFValue(14)}px;
    background: rgba(118, 118, 128, 0.12);
    border-radius: 16px;
    border: 1px solid #2F3139;
    flex-direction: row;
    align-items: center;
    gap: ${RFValue(14)}px;
`;

export const InputSearch = styled.TextInput`
    color: #FFFFFF;
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(11.5)}px;
    flex: 1;
`;