import React from 'react';
import Image from 'components/Image';
import Button from 'components/Button';
import {
  MovieBoxItemContainer,
  MovieBoxItemTop,
  MovieBoxItemTitle,
  MovieBoxItemPoint,
  MovieBoxItemBottom,
  MovieBoxItemPoster,
  MovieBoxItemDetail,
  MovieBoxItemParagraph,
  MovieBoxItemButton,
} from './style';

interface MovieBoxItemProps {
  title?: string;
  point?: string;
  imageUrl?: string;
  description?: string;
  handleOnClick?: React.MouseEventHandler<HTMLDivElement>;
  imdbID?: string;
}

function MovieBoxItem({ title, point, imageUrl, description, handleOnClick }: MovieBoxItemProps) {
  return (
    <MovieBoxItemContainer onClick={handleOnClick}>
      <MovieBoxItemTop>
        {
          title && (
            <MovieBoxItemTitle>
              {title}
            </MovieBoxItemTitle>
          )
        }
        {
          point && (
            <MovieBoxItemPoint>
              Year: {point}
            </MovieBoxItemPoint>
          )
        }
      </MovieBoxItemTop>
      <MovieBoxItemBottom>
        {
          imageUrl && (
            <MovieBoxItemPoster>
              <Image
                src={imageUrl}
                aspectRatio="148.34%"
              />
            </MovieBoxItemPoster>
          )
        }
        <MovieBoxItemDetail>
          {
            description && (
              <MovieBoxItemParagraph>
                {description}
              </MovieBoxItemParagraph>
            )
          }
          <MovieBoxItemButton>
            <Button>
              Detail
            </Button>
          </MovieBoxItemButton>
        </MovieBoxItemDetail>
      </MovieBoxItemBottom>
    </MovieBoxItemContainer>
  );
}

export default MovieBoxItem;
