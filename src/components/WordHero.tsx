import React from 'react';
import { Term } from '../types';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import { TrendingUp, Smile } from 'lucide-react';
import FlagEmoji from './ui/FlagEmoji';

interface WordHeroProps {
  term: Term;
}

const WordHero: React.FC<WordHeroProps> = ({ term }) => {
  const { isRtl } = useApp();

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 p-12 text-on-primary">
      <div className="absolute top-0 end-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,100 C30,100 70,0 100,0 L100,100 Z" fill="white"></path>
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 text-center md:text-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide uppercase">
            <FlagEmoji flag={term.flag} size={20} />
            {term.region}
          </div>
          
          <h2 className="text-7xl font-headline font-black tracking-tighter">
            {term.term}
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                {isRtl ? 'نوع الكلمة' : 'Part of Speech'}
              </span>
              <span className="text-lg font-semibold">{term.partOfSpeech}</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                {isRtl ? 'التكرار' : 'Frequency'}
              </span>
              <span className="text-lg font-semibold">{term.frequency}</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                {isRtl ? 'الانطباع' : 'Sentiment'}
              </span>
              <span className="text-lg font-semibold flex items-center gap-2">
                {term.sentiment} 
                <Smile size={20} className="text-secondary-container" />
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <span className="text-[120px] leading-none font-bold text-white drop-shadow-2xl block text-center font-arabic" dir="rtl">
            {term.arabicTerm}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WordHero;
