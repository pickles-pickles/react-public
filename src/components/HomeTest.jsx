import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import ImageHome from '../assets/laptop.jpg'
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
    background-image: url('../../src/assets/Black-Hole-Disc.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
  }
`
const LeftDiv = styled.div``

const RightDiv = styled.div``
const HomeTest = () => {
  return (
    <ContainerDiv>
      <LeftDiv></LeftDiv>
      <RightDiv></RightDiv>
    </ContainerDiv>
  )
}

export default HomeTest
