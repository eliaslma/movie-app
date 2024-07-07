import React from 'react';
import Search from '../../../assets/search.svg';

import {
    Container,
    InputSearch
} from './styles';

export function SearchBar(){
    return(
        <Container>
            <Search width={24} height={24}/>
            <InputSearch 
                placeholder='Buscar' 
                placeholderTextColor='#A0A0A0'
            />
        </Container>
    );
}