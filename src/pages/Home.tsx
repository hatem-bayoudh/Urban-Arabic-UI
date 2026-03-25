import React from 'react';
import { MOCK_TERMS, MOCK_CONTRIBUTORS } from '../constants';
import TermCard from '../components/TermCard';
import TermGridCard from '../components/TermGridCard';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { TrendingUp, Award, Plus, Search, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Home: React.FC = () => {
  const { isRtl } = useApp();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-8">
        {/* Hero Section */}
        <section className={cn(
          "relative overflow-hidden rounded-[2rem] bg-surface-container-low p-8 md:p-12",
          isRtl ? "text-right" : "text-left"
        )}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-on-surface font-headline leading-tight mb-6">
              {isRtl ? (
                <>أهلاً بك في <span className="text-primary">مَجلسنا</span></>
              ) : (
                <>Welcome to <span className="text-primary">Majlis</span></>
              )}
            </h1>
            <p className="text-lg text-on-surface-variant mb-8">
              {isRtl 
                ? "اكتشف لغة الشارع العربي، من المحيط إلى الخليج. ابحث عن المصطلحات التي تميز مدينتك."
                : "Discover the language of the Arab streets, from the Ocean to the Gulf. Find terms that define your city."}
            </p>
            <div className="relative group">
              <Search className={cn(
                "absolute top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors",
                isRtl ? "right-6" : "left-6"
              )} size={24} />
              <input 
                type="text"
                placeholder={isRtl ? "ابحث عن كلمة، تعبير، أو مدينة..." : "Search for a word, expression, or city..."}
                className={cn(
                  "w-full h-16 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 text-lg transition-all",
                  isRtl ? "pr-16 pl-6 text-right" : "pl-16 pr-6 text-left"
                )}
              />
            </div>
          </div>
        </section>

        {/* Term of the Day */}
        <div className="space-y-4">
          <div className={cn("flex items-center justify-between", isRtl && "flex-row-reverse")}>
            <h2 className="text-2xl font-black font-headline text-on-surface">
              {isRtl ? 'مصطلح اليوم' : 'Term of the Day'}
            </h2>
          </div>
          <TermCard term={MOCK_TERMS[0]} featured />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TermGridCard 
            term={MOCK_TERMS[1]} 
            className="md:col-span-1"
          />
          <TermGridCard 
            term={MOCK_TERMS[2]} 
            className="md:col-span-1"
          />
          <TermGridCard 
            term={MOCK_TERMS[3]} 
            type="image"
            badge={isRtl ? 'تسليط الضوء على اللهجة' : 'Dialect Spotlight'}
            className="md:col-span-2"
          />
        </div>
      </div>

      <aside className="lg:col-span-4 space-y-6">
        {/* Trending Dialects */}
        <Card variant="low" className="p-6 rounded-[1.5rem]">
          <h3 className={cn("text-lg font-bold text-on-surface mb-6 flex items-center gap-2", isRtl ? "flex-row-reverse" : "flex-row")}>
            <TrendingUp size={20} className="text-primary" />
            <span>{isRtl ? "اللهجات الأكثر بحثاً" : "Trending Dialects"}</span>
          </h3>
          <div className="space-y-3">
            {[
              { flag: '🇪🇬', name: isRtl ? 'المصرية' : 'Egyptian', trend: '+12%' },
              { flag: '🇱🇧', name: isRtl ? 'اللبنانية' : 'Levantine', trend: '+8%' },
              { flag: '🇸🇦', name: isRtl ? 'النجدية' : 'Najdi', trend: '+5%' }
            ].map((item, i) => (
              <div key={i} className={cn("flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container transition-colors cursor-pointer", isRtl ? "flex-row-reverse" : "flex-row")}>
                <div className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "flex-row")}>
                  <span className="text-2xl">{item.flag}</span>
                  <span className="font-bold text-sm">{item.name}</span>
                </div>
                <Badge variant="primary" className="rounded-full px-3">{item.trend}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Trending Terms */}
        <Card variant="low" className="p-6 rounded-[1.5rem]">
          <h3 className={cn("text-lg font-bold text-on-surface mb-6 flex items-center gap-2", isRtl ? "flex-row-reverse" : "flex-row")}>
            <TrendingUp size={20} className="text-tertiary" />
            <span>{isRtl ? "كلمات رائجة" : "Trending Terms"}</span>
          </h3>
          <div className="space-y-2">
            {[
              { term: 'يا زلمة', count: '2.4k' },
              { term: 'قشطة', count: '1.8k' },
              { term: 'كفو', count: '1.5k' },
              { term: 'برشا', count: '1.2k' }
            ].map((item, i) => (
              <div key={i} className={cn("flex items-center justify-between p-3 hover:bg-surface-container-high rounded-xl transition-colors cursor-pointer", isRtl ? "flex-row-reverse" : "flex-row")}>
                <span className="font-bold text-on-surface">{item.term}</span>
                <span className="text-xs text-on-surface-variant">{item.count} {isRtl ? 'بحث' : 'searches'}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Community Card */}
        <section className={cn("relative overflow-hidden rounded-[2rem] bg-on-surface p-8 text-white", isRtl ? "text-right" : "text-left")}>
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <h4 className="text-2xl font-black mb-4 font-headline">{isRtl ? 'انضم لمجتمعنا' : 'Join Our Community'}</h4>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            {isRtl 
              ? 'ساهم في توثيق الكلمات التي تجعل من مدينتك مكاناً فريداً. كن جزءاً من أكبر معجم للهجات العربية.' 
              : 'Help document the words that make your city unique. Be part of the largest dictionary of Arabic dialects.'}
          </p>
          <Button fullWidth variant="primary" className="h-14 rounded-2xl text-lg font-bold">
            {isRtl ? 'إضافة مصطلح' : 'Add a Term'}
          </Button>
        </section>
      </aside>
    </div>
  );
};

export default Home;
