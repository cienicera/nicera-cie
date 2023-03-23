import { useState, useEffect, useRef } from 'react';

const Landing = () => {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = event => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const animateBlob = () => {
    const blob = blobRef.current;
    if (blob) {
      setTimeout(() => {
        blob.style.left = `${mousePosition.x}px`;
        blob.style.top = `${mousePosition.y}px`;
      }, 100);
    }
  };

  useEffect(() => {
    animateBlob();
  }, [mousePosition]);

  const changeText = (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    const target = event.currentTarget;

    const interval = setInterval(() => {
      target.innerText = target.dataset.value
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    
      if(iteration >= target.dataset.value.length){ 
        clearInterval(interval);
      }
    
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <div className="root" onMouseMove={handleMouseMove}>

        <div >
            <div className='h-screen w-screen grid items-center overflow-hidden'>
                <div className='w-screen h-screen absolute z-0 overflow-hidden'>
                    
                    <iframe 
                    className='scale-150'
                    title="Background Video"
                    src="https://www.youtube.com/embed/FhoZb8T8_WQ?autoplay=1&mute=1&loop=1&playlist=FhoZb8T8_WQ"
                    // src="/assets/image/nicera-v-0.mp4"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    ></iframe>

                    {/* <video
                        src="/assets/image/nicera-v-0.mp4"
                        width="100%"
                        height="100%"
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="object-cover"
                    ></video> */}
                        <div ref={blobRef} id="blob"></div>
                        
                </div>
                <div className='w-screen h-screen backdrop-blur-2xl absolute z-2' ></div>
                
                <div className='h-full grid items-center'>
                <div className='h-90 font-extralight text-9xl grid grid-rows-3 items-center justify-items-center '>
                    
                    <h1 className='text-white font-black' data-value="HISTOIRE" onMouseOver={changeText}>
                    HISTOIRE
                    </h1>
                    <h1 className='text-white' data-value="CORPS" onMouseOver={changeText}>
                    CORPS
                    </h1>
                    <h1 className='text-white font-black' data-value="MEMOIRE" onMouseOver={changeText}>
                    MEMOIRE
                    </h1>
                   
                </div>
                </div>

            </div>
            {/* <div className='h-screen w-screen grid items-center'>
            </div> */}
        </div>

    </div>
  );
};

export default Landing;
