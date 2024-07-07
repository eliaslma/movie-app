import React from 'react';
import GitHub from '../../../assets/github.svg'
import Linkedin from '../../../assets/linkedin.svg'
import { Linking } from 'react-native';

import {
    Container,
    Avatar,
    WelcomeTitle,
    SocialButton,
    SocialButtonTitle
} from './styles';

export function ProfileScreen() {

    const handleOpenSocialMedia = async (site?: String) => {
        if (site === 'GitHub') {
            const url = 'https://github.com/eliaslma';
            await Linking.openURL(url);
        }
        else if (site === 'LinkedIn') {
            const url = 'https://www.linkedin.com/in/eliaslma/';
            await Linking.openURL(url);
        }
    }

    return (
        <Container>
            <Avatar source={{
                uri: 'https://avatars.githubusercontent.com/u/70176310?v=4',
            }} />
            <WelcomeTitle>Elias Lima</WelcomeTitle>
            <SocialButton onPress={() => handleOpenSocialMedia('GitHub')}>
                <GitHub width={24} />
                <SocialButtonTitle>Ver GitHub</SocialButtonTitle>
            </SocialButton>
            <SocialButton onPress={() => handleOpenSocialMedia('LinkedIn')}>
                <Linkedin width={24} />
                <SocialButtonTitle>Ver LinkedIn</SocialButtonTitle>
            </SocialButton>
        </Container>
    );
}