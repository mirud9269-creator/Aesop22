import React from 'react';

export default function LectureSection() {
  return (
    <section className="bg-[#111] text-white py-[120px] px-[20px]">
      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row flex-wrap gap-[60px] items-center xl:items-start">
        
        {/* ceo-profile */}
        <div className="flex-[1.8] min-w-[300px] w-full xl:w-auto">
          <div className="text-[#d4af37] font-bold text-[1.1rem] mb-[10px] tracking-[2px]">EXPERT DIRECTOR</div>
          <div className="text-[3rem] font-extrabold mb-[40px] leading-[1.2]">김달욱 대표</div>
          
          {/* ceo-body */}
          <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[40px] items-center text-center xl:text-left">
            
            {/* ceo-image */}
            <div className="flex-1 rounded-[16px] border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.02] hover:border-[#d4af37] w-[80%] xl:w-full mx-auto xl:mx-0 bg-[#111]">
              <img 
                src="https://postfiles.pstatic.net/MjAyNDA4MTZfMjc5/MDAxNzIzNzc4ODYwNjgx.2qU7sgE0Fjr8ECCb6LPHrDIX1clC50G18vKR7SRW9lgg.uyRvgvdhow2YTiKZNMtQ8ioNL2GjTNIqS0Rz1RRxFKcg.PNG/%EC%9D%B4%EC%86%9D%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4_%EB%B3%B5%EC%82%AC%EB%B3%B8-_3_-001_(1).png?type=w966" 
                alt="김달욱 대표 부동산 강의 전경" 
                className="w-full h-auto block object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop';
                }}
              />
            </div>

            {/* spec-grid */}
            <div className="flex-[1.2] grid grid-cols-1 gap-[30px] text-left">
              {/* spec-col */}
              <div>
                <h4 className="font-montserrat text-[1.2rem] mb-[20px] pb-[10px] border-b border-[#333] text-gray-400 font-bold">PRESENT</h4>
                <ul className="list-none space-y-[12px]">
                  <li className="text-[0.95rem] text-gray-300 relative pl-[15px] before:content-['■'] before:absolute before:left-0 before:text-[#d4af37] before:text-[0.6rem] before:top-[6px]">이솝 인테리어 디자인</li>
                  <li className="text-[0.95rem] text-gray-300 relative pl-[15px] before:content-['■'] before:absolute before:left-0 before:text-[#d4af37] before:text-[0.6rem] before:top-[6px]">더오름 주식회사</li>
                  <li className="text-[0.95rem] text-gray-300 relative pl-[15px] before:content-['■'] before:absolute before:left-0 before:text-[#d4af37] before:text-[0.6rem] before:top-[6px]">이솝 스터디</li>
                  <li className="text-[0.95rem] text-gray-300 relative pl-[15px] before:content-['■'] before:absolute before:left-0 before:text-[#d4af37] before:text-[0.6rem] before:top-[6px]">카페 프랜차이즈</li>
                  <li className="text-[0.95rem] text-gray-300 relative pl-[15px] before:content-['■'] before:absolute before:left-0 before:text-[#d4af37] before:text-[0.6rem] before:top-[6px]">전문 투자자</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* curriculum-box */}
        <div className="flex-1 min-w-[300px] w-full xl:w-auto bg-[#1a1a1a] p-[50px] rounded-[20px] border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-[1.8rem] font-extrabold mb-[30px] leading-[1.4] text-white">
            [울산 인테리어] 이솝인테리어 김달욱 대표 특강<br />
            <span className="text-[#d4af37]">&lt;누구나 돈되는 부동산 클라쓰&gt;</span>
          </div>
          <div className="flex flex-wrap gap-[10px] mb-[40px]">
            <span className="bg-[#222] border border-[#444] py-[8px] px-[16px] rounded-[30px] text-[0.9rem] text-gray-300 shadow-sm"># 소형부동산 신축개발</span>
            <span className="bg-[#222] border border-[#444] py-[8px] px-[16px] rounded-[30px] text-[0.9rem] text-gray-300 shadow-sm"># 인테리어 투자</span>
            <span className="bg-[#222] border border-[#444] py-[8px] px-[16px] rounded-[30px] text-[0.9rem] text-gray-300 shadow-sm"># 부동산 경매</span>
            <span className="bg-[#222] border border-[#444] py-[8px] px-[16px] rounded-[30px] text-[0.9rem] text-gray-300 shadow-sm"># 부동산 건축 및 설계</span>
            <span className="bg-[#222] border border-[#444] py-[8px] px-[16px] rounded-[30px] text-[0.9rem] text-gray-300 shadow-sm"># 실전 인테리어 노하우</span>
          </div>
          <a 
            href="https://blog.naver.com/guseo109?Redirect=Log&logNo=223549801197&from=postView&trackingCode=blog_bloghome_searchlist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block py-[16px] px-[32px] bg-[#d4af37] text-white font-extrabold text-[1.1rem] rounded-[8px] transition-all duration-300 hover:bg-white hover:text-[#111] hover:-translate-y-[3px] shadow-md"
          >
            강의 및 투자 인사이트 확인하기 →
          </a>
        </div>
        
      </div>
    </section>
  );
}
