import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState('under10');
  const [scope, setScope] = useState('film');
  const [size, setSize] = useState('');
  const [result, setResult] = useState('');

  const totalSteps = 3;

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      if (!size) {
        alert('평수를 입력해주세요.');
        return;
      }
      calculateLogic();
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const calculateLogic = () => {
    const sizeNum = parseInt(size);
    let resultText = "별도 상담 필요";

    if (age === "under10") {
        if (sizeNum <= 26) {
            if (scope === "film") resultText = "3,500 ~ 4,000만 원";
            else if (scope === "sash_no_ext") resultText = "3,970 ~ 4,500만 원";
            else if (scope === "sash_ext") resultText = "4,500 ~ 5,000만 원";
            else resultText = "5,000만 원 이상"; 
        } else if (sizeNum >= 30 && sizeNum <= 38) {
            if (scope === "film") resultText = "4,500 ~ 5,000만 원";
            else if (scope === "sash_no_ext") resultText = "5,000 ~ 5,500만 원";
            else if (scope === "all_sash_ext") resultText = "5,500 ~ 6,000만 원";
            else resultText = "5,500만 원 이상";
        } else {
            resultText = "상세 실측 후 안내 가능합니다";
        }
    } else {
        resultText = "구축은 현장 변수로 인해 방문 실측이 필수입니다";
    }
    setResult(resultText);
  };

  const progress = (step / (totalSteps + 1)) * 100;

  return (
    <div className="fixed inset-0 bg-black/80 z-[1000] flex justify-center items-center backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-5 md:p-6 border-b border-border-color flex justify-between items-center">
          <h3 className="font-montserrat font-extrabold text-xl">ESTIMATE</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="h-1 bg-gray-100 w-full">
          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="p-6 md:p-8 flex-1 overflow-y-auto min-h-[300px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-xl font-bold mb-2">Q1. 시공할 건물의 연식을 알려주세요.</div>
              <div className="text-sm text-text-sub mb-6">오래된 건물일수록 뼈대 보강 작업이 추가될 수 있습니다.</div>
              <div className="grid grid-cols-1 gap-4">
                <label className={cn("block p-5 border rounded-lg cursor-pointer transition-all", age === 'under10' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="age" value="under10" checked={age === 'under10'} onChange={(e) => setAge(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">10년 이내 신축/준신축</span>
                  <span className="text-sm text-gray-500">상대적으로 뼈대가 튼튼하여 기본 시공이 가능합니다.</span>
                </label>
                <label className={cn("block p-5 border rounded-lg cursor-pointer transition-all", age === 'over20' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="age" value="over20" checked={age === 'over20'} onChange={(e) => setAge(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">20년 이상 구축 아파트</span>
                  <span className="text-sm text-gray-500">단열, 배관 등 보이지 않는 기초 공사가 필요할 수 있습니다.</span>
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-xl font-bold mb-2">Q2. 원하시는 시공 범위를 선택해주세요.</div>
              <div className="text-sm text-text-sub mb-6">인테리어 비용의 가장 큰 부분을 차지하는 항목입니다.</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={cn("block p-4 border rounded-lg cursor-pointer transition-all", scope === 'film' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="scope" value="film" checked={scope === 'film'} onChange={(e) => setScope(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">샤시 미변경 (필름)</span>
                  <span className="text-xs text-gray-500">기존 창틀에 색상만 새로 입혀 가성비를 높입니다.</span>
                </label>
                <label className={cn("block p-4 border rounded-lg cursor-pointer transition-all", scope === 'sash_no_ext' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="scope" value="sash_no_ext" checked={scope === 'sash_no_ext'} onChange={(e) => setScope(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">샤시 변경 (미확장)</span>
                  <span className="text-xs text-gray-500">창문 전체를 새것으로 교체하지만 베란다는 유지합니다.</span>
                </label>
                <label className={cn("block p-4 border rounded-lg cursor-pointer transition-all", scope === 'sash_ext' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="scope" value="sash_ext" checked={scope === 'sash_ext'} onChange={(e) => setScope(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">샤시 변경 + 발코니 확장</span>
                  <span className="text-xs text-gray-500">창문 교체와 함께 거실/방을 넓게 트는 작업입니다.</span>
                </label>
                <label className={cn("block p-4 border rounded-lg cursor-pointer transition-all", scope === 'all_sash_ext' ? "border-accent border-2 bg-gray-50" : "border-gray-300 hover:border-accent hover:bg-gray-50")}>
                  <input type="radio" name="scope" value="all_sash_ext" checked={scope === 'all_sash_ext'} onChange={(e) => setScope(e.target.value)} className="hidden" />
                  <span className="font-bold block mb-1">샤시 전체 교체 + 확장</span>
                  <span className="text-xs text-gray-500">가장 완벽한 단열과 넓은 공간감을 제공합니다.</span>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-xl font-bold mb-2">Q3. 시공할 공간의 평수를 입력해주세요.</div>
              <div className="text-sm text-text-sub mb-10">공급면적(분양평수) 기준으로 입력해주세요.</div>
              <div className="text-center mt-10">
                <input 
                  type="number" 
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full max-w-[200px] p-4 border border-gray-300 rounded-lg text-2xl text-center outline-none focus:border-accent"
                  placeholder="예: 24, 34"
                />
                <div className="mt-3 text-text-sub">평형</div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 text-center">
              <div className="text-xl font-bold mb-2">예상 시공 견적입니다.</div>
              <div className="text-sm text-text-sub mb-8">입력하신 데이터를 기반으로 산출된 대략적인 금액입니다.</div>
              
              <div className="font-montserrat text-4xl md:text-5xl font-extrabold text-accent my-10 tracking-tight">
                {result}
              </div>
              
              <div className="text-sm text-gray-500 bg-gray-50 p-5 rounded-lg leading-relaxed">
                정확한 금액은 고객님의 라이프스타일과 현장 실측 결과에 따라 달라질 수 있습니다.<br/>
                이솝디자인과 상의하시면 최적의 가성비 솔루션을 찾아드립니다.
              </div>
            </div>
          )}
        </div>

        {step < 4 && (
          <div className="p-5 md:p-6 bg-gray-50 border-t border-border-color flex justify-between gap-3">
            {step > 1 ? (
              <button onClick={handlePrev} className="px-6 py-3 rounded-lg font-bold bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors">
                이전
              </button>
            ) : <div className="px-6 py-3" />}
            <button onClick={handleNext} className="flex-1 px-6 py-3 rounded-lg font-bold bg-accent text-white hover:bg-black transition-colors">
              {step === 3 ? '견적 결과 보기' : '다음 단계로'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
