import React from 'react';
import { FilterButton } from '../FilterButton';

import GenreIcon from '../../../assets/genre.svg';
import LanguageIcon from '../../../assets/language.svg';
import TopImdb from '../../../assets/top_imdb.svg';
import Watched from '../../../assets/watched.svg';

import {
    Container,
    ButtonsWrapper,
    FiltersTitle
} from './styles';

export function Filters() {
    
    return (
        <Container>
            <FiltersTitle>Filtros</FiltersTitle>
            <ButtonsWrapper>
                <FilterButton title='Gênero' icon={GenreIcon} />
                <FilterButton title='Top IMDB' icon={TopImdb} />
                <FilterButton title='Linguagem' icon={LanguageIcon} />
                <FilterButton title='Assistidos' icon={Watched} />
            </ButtonsWrapper>
        </Container>
    );
}