import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Error404Page() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
    
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "name": "Among Us",
          "particles": {
              "groups": {
                  "z5000": {
                      "number": {
                          "value": 70
                      },
                      "zIndex": {
                          "value": 50
                      }
                  },
                  "z7500": {
                      "number": {
                          "value": 30
                      },
                      "zIndex": {
                          "value": 75
                      }
                  },
                  "z2500": {
                      "number": {
                          "value": 50
                      },
                      "zIndex": {
                          "value": 25
                      }
                  },
                  "z1000": {
                      "number": {
                          "value": 40
                      },
                      "zIndex": {
                          "value": 10
                      }
                  }
              },
              "number": {
                  "value": 200
              },
              "color": {
                  "value": "#fff",
                  "animation": {
                      "enable": false,
                      "speed": 20,
                      "sync": true
                  }
              },
              "shape": {
                  "type": "circle"
              },
              "opacity": {
                  "value": 1
              },
              "size": {
                  "value": 3
              },
              "move": {
                  "angle": {
                      "value": 10,
                      "offset": 0
                  },
                  "enable": true,
                  "speed": 5,
                  "direction": "right",
                  "random": false,
                  "straight": false
              },
              "zIndex": {
                  "value": 5,
                  "opacityRate": 0.5
              }
          },
          "background": {
              "color": "#000000"
          },
          "emitters": {
              "position": {
                  "y": 55,
                  "x": -5
              },
              "rate": {
                  "delay": 7,
                  "quantity": 1
              },
              "size": {
                  "width": 0,
                  "height": 0
              },
              "particles": {
                  "shape": {
                      "type": "images",
                      "options": {
                          "images": {
                              "src": "./src/img/robot.png",
                              "width": 500,
                              "height": 634
                          }
                      }
                  },
                  "size": {
                      "value": 80
                  },
                  "move": {
                      "speed": 10,
                      "outModes": {
                          "default": "none",
                          "right": "destroy"
                      },
                      "straight": true
                  },
                  "zIndex": {
                      "value": 0
                  },
                  "rotate": {
                      "value": {
                          "min": 0,
                          "max": 360
                      },
                      "animation": {
                          "enable": true,
                          "speed": 10,
                          "sync": true
                      }
                  }
              }
          }
      }}
      />
      <div className="text-white z-20">
        <h1 className="scale-125 text-9xl drop-shadow-lg shadow-black">Oops!</h1>
        <p className="scale-125 text-[rgb(2,226,254)]  text-2xl ml-2 mt-2 drop-shadow-lg shadow-black">Page not found</p>
        <div className="flex justify-center mt-48">
          <a href="/" className="w-28 p-1 text-xl rounded-lg text-white bg-info text-center border-info border hover:text-info hover:bg-white transition-all">Go back</a>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
