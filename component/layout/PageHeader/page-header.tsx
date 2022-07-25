import * as React from 'react';
import shipper_logo from '../../../assets/shipper_logo.webp';
import {HeaderContainer, LogoContainer, Logo, LogoTitle} from '~/component/layout/PageHeader/page-header.styled'

export function PageHeader() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={shipper_logo.src}/>
                <LogoTitle>Shipper</LogoTitle>
            </LogoContainer>
        </HeaderContainer>
    );
}
