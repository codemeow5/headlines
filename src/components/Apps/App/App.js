/* global chrome */
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { appsSelector } from "../../../store/slices/apps";
import {
  Container,
  Title,
  Image,
  Overflow,
  AppImage,
} from "./App.module";
import placeholder from "../../../assets/app/placeholder.png";

export const App = ({
  title,
  url,
  imageUrl,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const imageRef = useRef();
  const { openIn } = useSelector(appsSelector);

  useEffect(() => {
    if (imageUrl === null || imageUrl === "self") {
      imageRef.current.src = placeholder;
    }
  }, [imageUrl]);

  const onHandleClick = (e) => {
    if (openIn.value === "new-tab-background") {
      e.preventDefault();

      chrome.tabs.create({
        active: false,
        url,
      });
    }
  };

  const onImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <Container
      href={url}
      target={openIn.value === "same-tab" ? "_self" : "_blank"}
      onClick={(e) => onHandleClick(e)}
    >
      <AppImage>
        <Image
          loaded={imgLoaded}
          ref={imageRef}
          src={imageUrl}
          alt={title}
          onLoad={() => onImageLoad()}
        />
      </AppImage>
      <Overflow>
        <Title>{title}</Title>
      </Overflow>
    </Container>
  );
};
