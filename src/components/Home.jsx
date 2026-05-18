import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import ImageHome from '../assets/laptop.jpg';
import PlaceholderImageHome from '../assets/laptop-mobile-min.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import HomeCard from './cards/Home/HomeCard';
import BCCLatticeScene from './3D/BCCLatticeScene';

const ContainerDiv = styled.section`
    min-height: 100vh;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    overflow: visible;
  }

  @media (min-width: 992px) {
    height: max(100vh, 550px);
  }
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.2;
  pointer-events: none;

  background-image:
    linear-gradient(
      45deg,
      var(--purple-300),
      var(--cyan-600)
    ),
    url('../../src/assets/Black-Hole-Disc1.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: none !important;
  mix-blend-mode: normal !important;
`;

const CardSection = styled.div`
padding: 2rem 0;

  @media (min-width: 992px) {
    flex: 1; /* takes remaining space */
  }

  @media (max-width: 991px) {
    flex: none;
  }

  display: flex;
  align-items: center; /* vertical center */
  justify-content: center; /* horizontal center */
`;

const Home = () => {
  return (
    <ContainerDiv
      id="home-section"
      className="mt-0 pt-4 pt-lg-5 pb-5 pb-md-0"
    >
      {/* Real DOM node for Dark Reader to ignore */}
      <BackgroundLayer
        data-darkreader-ignore="true"
      />

      <div
        className="row"
        id="home-section-container"
      >
        {/* CONTENT COLUMN */}
        <div className="col-12 col-lg-6 hero__content">
          <h1 className="slide-right-to-left-home mt-4 mt-lg-0 hero__title">
            I’m <span className="highlight">Chris</span>
          </h1>

          <p className="hero__role slide-left-to-right-home">
            Front-End Engineer with a background in Software Engineering & Materials Science.
          </p>

          <p
            className="hero__experience slide-right-to-left-home-2"
            id="subtitle-smaller"
          >
            <span className="highlight-strong">
              4 years of experience delivering production React
              applications in cross-functional teams.
            </span>
          </p>
        </div>

        {/* VISUAL COLUMN */}
        <div className="col-12 col-lg-6 hero__visual">
          <div className="hero__model">
            <div className="bcc-placeholder">
              <BCCLatticeScene />
            </div>
          </div>
        </div>
      </div>

      <CardSection id="test" className="mt-auto mb-0">
        <div className="glass-card text-center fancy-card card-wrapper">
          <p className="card-eyebrow">
            Building scalable digital products
          </p>

          <h3 className="card-title">
            Real-time Web Apps · Dashboards · CI/CD
          </h3>

          <p className="card-subtitle">
            Product & platform engineering with
            <span> TypeScript</span> and
            <span> Python</span>-based systems
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Python</span>
            <span>WebSockets</span>
            <span>CI/CD</span>
          </div>
        </div>


      </CardSection>
    </ContainerDiv>
  );
};

export default Home;