import React from 'react';

export default function Process() {
  return (
    <section className="py-[120px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-montserrat text-[2.5rem] font-extrabold text-center mb-5 tracking-tight">
          AESOP STANDARD
        </h2>
        <div className="text-center text-text-sub mb-[50px] text-[1.1rem]">
          거품을 뺀 견적, 타협 없는 마감. 이솝디자인의 4단계 시스템
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="text-center bg-[#fafafa] rounded-xl border border-border-color transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-accent overflow-hidden flex flex-col">
            <div className="h-32 sm:h-60 md:h-80 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="현장 정밀 실측" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3 sm:p-8 flex-1 flex flex-col">
              <div className="font-montserrat text-3xl sm:text-5xl font-extrabold text-[#eaeaea] mb-1 sm:mb-2.5 leading-none">01</div>
              <div className="text-[0.85rem] sm:text-[1.2rem] font-bold mb-1.5 sm:mb-[15px] break-keep">현장 정밀 실측</div>
              <div className="text-[0.7rem] sm:text-[0.95rem] text-text-sub break-keep flex-1 leading-[1.4] sm:leading-normal">
                구축 아파트의 숨겨진 변수까지 파악하여 오차 없는 철거 및 시공 계획을 수립합니다.
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="text-center bg-[#fafafa] rounded-xl border border-border-color transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-accent overflow-hidden flex flex-col">
            <div className="h-32 sm:h-60 md:h-80 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" alt="투명한 견적 산출" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3 sm:p-8 flex-1 flex flex-col">
              <div className="font-montserrat text-3xl sm:text-5xl font-extrabold text-[#eaeaea] mb-1 sm:mb-2.5 leading-none">02</div>
              <div className="text-[0.85rem] sm:text-[1.2rem] font-bold mb-1.5 sm:mb-[15px] break-keep">투명한 견적 산출</div>
              <div className="text-[0.7rem] sm:text-[0.95rem] text-text-sub break-keep flex-1 leading-[1.4] sm:leading-normal">
                자재비와 인건비를 명확히 분리하여, 고객의 예산 내에서 최적의 솔루션을 제안합니다.
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="text-center bg-[#fafafa] rounded-xl border border-border-color transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-accent overflow-hidden flex flex-col">
            <div className="h-32 sm:h-60 md:h-80 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="원스톱 책임 시공" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3 sm:p-8 flex-1 flex flex-col">
              <div className="font-montserrat text-3xl sm:text-5xl font-extrabold text-[#eaeaea] mb-1 sm:mb-2.5 leading-none">03</div>
              <div className="text-[0.85rem] sm:text-[1.2rem] font-bold mb-1.5 sm:mb-[15px] break-keep">원스톱 책임 시공</div>
              <div className="text-[0.7rem] sm:text-[0.95rem] text-text-sub break-keep flex-1 leading-[1.4] sm:leading-normal">
                외주에 전적으로 의존하지 않고, 검증된 직영 중심의 기술력으로 디테일을 완성합니다.
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="text-center bg-[#fafafa] rounded-xl border border-border-color transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-accent overflow-hidden flex flex-col">
            <div className="h-32 sm:h-60 md:h-80 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" alt="철저한 사후 관리" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="p-3 sm:p-8 flex-1 flex flex-col">
              <div className="font-montserrat text-3xl sm:text-5xl font-extrabold text-[#eaeaea] mb-1 sm:mb-2.5 leading-none">04</div>
              <div className="text-[0.85rem] sm:text-[1.2rem] font-bold mb-1.5 sm:mb-[15px] break-keep">철저한 사후 관리</div>
              <div className="text-[0.7rem] sm:text-[0.95rem] text-text-sub break-keep flex-1 leading-[1.4] sm:leading-normal">
                시공 완료 후에도 문제 발생 시 즉각적인 A/S 시스템을 가동하여 끝까지 책임집니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
