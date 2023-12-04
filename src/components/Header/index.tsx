import React from 'react';
// components
import Button from 'components/Button';
import Image from 'components/Image';
// styles
import {
  HeaderContainer,
  HeaderInner,
  HeaderTitle,
  HeaderDescription,
  HeaderParagraph,
  HeaderImage,
} from './style';

function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderTitle>
          Lorem Ipsum <br />
          Dolor sit amet consectetur..
        </HeaderTitle>
        <HeaderDescription>
          <HeaderParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </HeaderParagraph>
        </HeaderDescription>
        <HeaderImage>
          <Image
            src={(require('assets/img/header-img.png').default as { src: string }).src}
            aspectRatio="99.34%"
          />
        </HeaderImage>
        <Button>RESERVATION</Button>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;
