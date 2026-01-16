import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function AnimatedBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        particles: {
          number: { value: 60 },
          color: { value: ["#38bdf8", "#9333ea", "#22d3ee"] },
          links: {
            enable: true,
            distance: 140,
            opacity: 0.15
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.4 }
        }
      }}
    />
  );
}
