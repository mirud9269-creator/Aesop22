import React, { useState, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

  const onReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        setTimeout(() => {
          if (playerRef.current) playerRef.current.playVideo();
        }, 100);
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'hBshT2-UXLM',
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      playsinline: 1,
      disablekb: 1,
      rel: 0,
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh]">
          <YouTube
            videoId="hBshT2-UXLM"
            opts={opts}
            onReady={onReady}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />
      
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="font-montserrat text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold mb-3 tracking-tighter">
          AESOP INTERIOR
        </h1>
        <p className="text-lg md:text-[1.3rem] font-normal opacity-90">
          직접 쓴 블로그로 증명된 가성비와 하이엔드 마감
        </p>
      </div>

      <button
        onClick={toggleMute}
        className={`absolute bottom-10 right-10 z-40 px-6 py-3 rounded-full font-montserrat font-semibold border border-white/30 backdrop-blur-sm transition-all duration-300 ${
          isMuted ? 'bg-black/50 text-white' : 'bg-white text-black'
        }`}
      >
        {isMuted ? 'SOUND ON' : 'SOUND OFF'}
      </button>
    </section>
  );
}
