import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function AnimatedBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="background-layer" aria-hidden="true">
      <Particles
        className="particles-canvas"
        init={init}
        options={{
          fpsLimit: 120,
          fullScreen: { enable: false },
          background: {
            color: "transparent"
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.3
                }
              },
              push: {
                quantity: 2
              }
            }
          },
          particles: {
            number: {
              density: {
                enable: true,
                area: 900
              },
              value: 46
            },
            color: { value: ["#53f2ff", "#8b5cf6", "#f97316"] },
            links: {
              enable: true,
              color: "#53f2ff",
              distance: 140,
              opacity: 0.11,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.9,
              outModes: {
                default: "bounce"
              }
            },
            opacity: {
              value: {
                min: 0.15,
                max: 0.4
              }
            },
            size: {
              value: {
                min: 1,
                max: 3.2
              }
            }
          }
        }}
      />
    </div>
  );
}
