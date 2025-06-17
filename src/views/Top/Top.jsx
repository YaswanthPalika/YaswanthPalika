import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

// import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Particles from "react-tsparticles";
import Background from "../../../content/assets/images/background.png";
import BackgroundSmall from "../../../content/assets/images/backgroundsmall.png";
import Profile from "../../../content/assets/images/profile.jpeg";

const isBrowser = typeof window !== "undefined";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);
  let backgroundImage = "";

  if (isBrowser) {
    backgroundImage = `url(${window.screen.width > 700 ? Background : BackgroundSmall})`;
  }

  // let extraInfoPart;
  // if (jumpToAnchor && jumpToAnchorText) {
  //   extraInfoPart = (
  //     <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
  //       {jumpToAnchorText}
  //     </Button>
  //   );
  // }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
    <Particles
      height="100vh"
      id="tsparticles"
      options={{
        motion: {
          disable: true,
          reduce: true,
        },
        fullScreen: { enable: false ,
        zIndex : -10},
        background: {
          // image: backgroundImage,
          position: "center",
          color: {
            value: "#00072D",
          },
          size: "cover",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f0f0f0",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          reduceDuplicates: true,
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      {/* Centered content */}
  <div
    className="centered-text"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff", // or any other color
      textAlign: "center",
      zIndex: 1,
    }}
  >
    <img src={Profile} alt="Logo" style={{ 
      width: "13rem", height: "13rem", marginBottom: "20px",
      borderRadius: "50%",
      }} />
    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px",
      fontFamily: "Open Sans",
      color:"gold"
     }}>Yaswanth Palika</h2>
    <Typewriter
                options={{
                  strings: ["Full-Stack Developer", "App Developer", "Software Engineer", "AI Enthusiast"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 60,
                  fontSize: "1.5rem",
                }}
              />
  </div>
    </div>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
