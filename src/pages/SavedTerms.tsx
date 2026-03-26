import React from 'react';
import { SAVED_TERMS } from '../constants';
import { useApp } from '../context/AppContext';
import { Bookmark, Search, Filter, Library, Volume2, History } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const SavedTerms: React.FC = () => {
  const { isRtl } = useApp();
  
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-on-surface font-headline mb-2">
            {isRtl ? 'المصطلحات المحفوظة' : 'Saved Terms'}
          </h1>
          <p className="text-on-surface-variant text-lg">
            {isRtl 
              ? 'مكتبتك المنسقة من اللهجات العربية الحضرية والتعبيرات الثقافية.' 
              : 'Your curated library of urban Arabic slang and cultural expressions.'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="low" icon={<Filter size={18} />} className="rounded-full px-6 shadow-sm">
            {isRtl ? 'ترتيب حسب الأحدث' : 'Sort by Recent'}
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl">
        <Input 
          icon={<Search size={20} />}
          placeholder={isRtl ? "ابحث في المصطلحات المحفوظة..." : "Search saved terms..."}
          className="h-14 bg-white border-none shadow-sm rounded-2xl"
        />
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SAVED_TERMS.map((term, index) => {
          const topProposal = term.proposals[0];
          
          // Custom rendering for some cards to match the image variety
          if (term.term === 'Kashkha') {
             return (
               <Card key={term.id} className="p-8 rounded-[2rem] flex flex-col justify-between h-full group">
                 <div className="flex justify-between items-start mb-6">
                   <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                     {term.region}
                   </Badge>
                   <button className="text-outline hover:text-error transition-colors">
                     <Bookmark size={20} className="fill-outline" />
                   </button>
                 </div>
                 <div className="flex-1">
                   <h3 className="text-3xl font-black text-primary mb-3 font-headline">{term.term}</h3>
                   <p className="text-on-surface-variant leading-relaxed text-sm">
                     {topProposal?.meaning}
                   </p>
                 </div>
                 <div className="mt-8 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                     <Volume2 size={24} />
                   </div>
                   <div className="flex-1 h-2.5 bg-surface-container rounded-full overflow-hidden">
                     <div className="w-1/3 h-full bg-primary-container rounded-full"></div>
                   </div>
                 </div>
               </Card>
             );
          }

          if (term.term === 'Ashta') {
            return (
              <Card key={term.id} className="p-8 rounded-[2rem] flex flex-col h-full border-s-4 border-primary">
                <div className="flex justify-between items-start mb-6">
                   <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {term.region}
                  </Badge>
                  <button className="text-outline hover:text-error transition-colors">
                    <Bookmark size={20} className="fill-outline" />
                  </button>
                </div>
                <h3 className="text-3xl font-black text-primary mb-3 font-headline">{term.term}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                  {topProposal?.meaning}
                </p>
                <div className="mt-auto bg-surface-container-low p-5 rounded-2xl">
                  <p className="text-[10px] font-black text-primary mb-2 uppercase tracking-widest">
                    {isRtl ? 'مثال على الاستخدام' : 'Sample Usage'}
                  </p>
                  <p className="text-xs italic text-on-surface leading-relaxed">
                    {topProposal?.example}
                  </p>
                </div>
              </Card>
            );
          }

          if (term.term === 'Baraka') {
            return (
              <Card key={term.id} padding="none" className="rounded-[2rem] overflow-hidden flex flex-col h-full group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://picsum.photos/seed/coffee/800/600" 
                    alt="Coffee" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 start-4">
                    <Badge className="bg-white/80 backdrop-blur-md text-on-surface px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {term.region}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-primary mb-2 font-headline">{term.term}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed">
                    {topProposal?.meaning}
                  </p>
                  <div className="mt-auto pt-6 flex justify-between items-center">
                    <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                      <History size={14} />
                      {isRtl ? 'عرض السجل' : 'View History'}
                    </button>
                    <button className="text-outline hover:text-error transition-colors">
                      <Bookmark size={20} className="fill-outline" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          }

          if (term.term === 'Hala') {
            return (
              <Card key={term.id} className="p-8 rounded-[2rem] flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {term.region}
                  </Badge>
                  <button className="text-outline hover:text-error transition-colors">
                    <Bookmark size={20} className="fill-outline" />
                  </button>
                </div>
                <h3 className="text-3xl font-black text-primary mb-3 font-headline">{term.term}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                  {topProposal?.meaning}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {topProposal?.tags.map(tag => (
                    <span key={tag} className="bg-surface-container-high px-3 py-1 rounded-lg text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          }

          if (term.term === 'Zabit') {
            return (
              <Card key={term.id} className="p-8 rounded-[2rem] flex flex-col h-full border-t-4 border-tertiary">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {term.region}
                  </Badge>
                  <button className="text-outline hover:text-error transition-colors">
                    <Bookmark size={20} className="fill-outline" />
                  </button>
                </div>
                <h3 className="text-3xl font-black text-primary mb-3 font-headline">{term.term}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-8">
                  {topProposal?.meaning}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-outline italic">{topProposal?.timestamp}</span>
                  <button className="px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary/10 transition-colors">
                    {isRtl ? 'تفاصيل' : 'Details'}
                  </button>
                </div>
              </Card>
            );
          }

          // Default fallback (like Yalla)
          return (
            <Card key={term.id} className="p-8 rounded-[2rem] flex flex-col justify-between h-full group relative overflow-hidden">
              <div className="absolute top-0 end-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-10 h-10 flex items-center justify-center bg-error/10 text-error rounded-full hover:bg-error hover:text-white transition-all">
                  <Bookmark size={20} className="fill-current" />
                </button>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {term.region}
                  </Badge>
                  <span className="text-[10px] text-outline uppercase font-bold tracking-tighter">{topProposal?.timestamp}</span>
                </div>
                <h3 className="text-3xl font-black text-primary mb-3 font-headline">{term.term}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {topProposal?.meaning}
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" className="w-7 h-7 rounded-full border-2 border-white" alt="User" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" className="w-7 h-7 rounded-full border-2 border-white" alt="User" />
                </div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">1.2k {isRtl ? 'مشاركة' : 'shared'}</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Empty State / Footer Suggestion */}
      <div className="mt-16 p-12 border-2 border-dashed border-outline-variant/30 rounded-[3rem] flex flex-col items-center justify-center text-center bg-surface-container-lowest/50">
        <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
          <Library size={40} className="text-outline" />
        </div>
        <h4 className="text-2xl font-black text-on-background mb-3 font-headline">
          {isRtl ? 'ابنِ مفرداتك' : 'Build Your Vocabulary'}
        </h4>
        <p className="text-on-surface-variant text-lg max-w-md mb-10">
          {isRtl 
            ? 'استكشف الكلمات الرائجة لتجد المزيد من اللهجات المحلية والتعبيرات الحديثة لحفظها في مجلسك الخاص.' 
            : 'Explore the trending feed to find more local dialects and modern expressions to save to your personal Majlis.'}
        </p>
        <Button variant="low" size="lg" className="rounded-2xl px-10 font-bold border border-primary/10 hover:bg-primary/5 transition-all">
          {isRtl ? 'تصفح الكلمات الرائجة' : 'Browse Trending Terms'}
        </Button>
      </div>
    </div>
  );
};

export default SavedTerms;
