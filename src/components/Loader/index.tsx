import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
    Container
} from './styles';

export function Loader({color}: {color: string}){
    return(
        <Container>
            <ActivityIndicator size='large' color={color}/>
        </Container>
    );
}