import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    gap: 16px;
`;

export const ButtonsWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const FiltersTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: 'Poppins_500Medium';
    color: #FFFFFF;
`;