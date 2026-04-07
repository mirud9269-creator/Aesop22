import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#a0a0a0] py-16 text-sm leading-loose">
      <div className="container mx-auto px-5 max-w-5xl">
        <div className="flex flex-col gap-1">
          <div className="text-white text-lg font-bold mb-3">울산 이솝디자인_인테리어</div>
          <div className="flex flex-wrap gap-y-1">
            <span className="mr-4">대표 : 김달욱</span>
            <span className="mr-4">주소 : 울산광역시 동구 봉수로 365(전하동)</span>
          </div>
          <div className="flex flex-wrap gap-y-1">
            <span className="mr-4">전화 : 010-2562-7168</span>
            <span className="mr-4">메일 : guseo109@naver.com</span>
          </div>
          <div className="flex flex-wrap gap-y-1">
            <span className="mr-4">사업자번호 : 747-63-00521</span>
            <span className="mr-4">통신판매번호 : 신고면제</span>
          </div>
          <div className="mt-3">
            <a href="#" className="underline text-gray-300 hover:text-white transition-colors">
              이용약관 보기▶
            </a>
          </div>
          <div className="mt-5 text-gray-600 text-xs">
            © 2026 Aesop Design. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
