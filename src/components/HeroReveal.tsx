import React from 'react';

export default function HeroReveal({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full">
      
      {/* 1. 배경 고정 레이어 (비디오 영역) */}
      {/* h-[200vh]를 부여하여 전면 레이어의 '덮개'와 '투명 영역'이 지나가는 2개 화면 높이 동안 비디오가 고정되게 만듭니다. */}
      <div className="absolute top-0 left-0 w-full h-[200vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          
          {/* 자동 재생, 무한 반복, 음소거 속성이 포함된 비디오 태그 (모바일 정책 통과 필수 조건) */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* 아래 src 속성에 사용하실 동영상(mp4) 경로를 입력하세요 */}
            <source src="/your-video-file.mp4" type="video/mp4" />
          </video>
          
          {/* 비디오 위를 살짝 눌러주는 반투명 딤(Dim) 레이어 - 흰색 텍스트의 가독성을 보장합니다 */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* 2. 전면 스크롤 레이어 (z-index를 높여 비디오 위를 지나가게 설계) */}
      <div className="relative z-10 w-full">
        
        {/* 첫 번째 화면: 단색 덮개 (위로 걷어지며 비디오를 보여줌) */}
        <div className="h-screen w-full bg-[#111] flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            공간의 본질을 깨우다
          </h1>
          <p className="text-lg md:text-xl text-gray-400 animate-bounce mt-8">
            스크롤하여 새로운 시각을 경험하세요 ↓
          </p>
        </div>

        {/* 두 번째 화면: 유튜브 백그라운드 배너 */}
        <div className="relative w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
          
          {/* 1. 유튜브 백그라운드 레이어 (최적의 16:9 원본 비율 커버 방식 적용) */}
          <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <iframe
              /* 과도한 확대를 빼고, 원본 비율을 유지하며 화면을 꽉 채우는 16:9 CSS 최적화 공식 적용 */
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/hBshT2-UXLM?autoplay=1&mute=1&controls=0&loop=1&playlist=hBshT2-UXLM&playsinline=1&rel=0&showinfo=0&disablekb=1"
              title="YouTube video background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          {/* 2. 가독성을 위한 반투명 딤(Dim) 처리 */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* 3. 텍스트 콘텐츠 레이어 */}
          <div className="relative z-20 text-center flex flex-col items-center px-4 w-full">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
              Premium Interior
            </h2>
            <p className="text-lg md:text-2xl text-white font-medium drop-shadow-md">
              300번의 시공이 증명하는 하이엔드 디테일
            </p>
          </div>
          
        </div>

        {/* 세 번째 화면: 다음 콘텐츠 영역 (아래에서부터 하얀 배경이 비디오를 덮으면서 올라옴) */}
        <div className="relative z-20 w-full bg-white pt-24 pb-10">
          {/* 이 영역 내부나 이 컴포넌트 바로 아래에 이전에 만든 <Portfolio /> 컴포넌트를 배치하십시오 */}
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900">Our Portfolio</h3>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 mb-10"></div>
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
