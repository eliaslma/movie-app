import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
    Container,
    Title,
    IconWrapper
} from './styles';

export function FilterButton({title, icon: Icon}: any){

    return(
        <Container>
            <IconWrapper>
                <Icon width={RFValue(19.5)} height={RFValue(19.5)}/>
            </IconWrapper>
            <Title>{title}</Title>
        </Container>
    );
}