import React from 'react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { 
  Flame, 
  Globe, 
  Award, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  ArrowRight,
  Plus
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Trending: React.FC = () => {
  const { isRtl } = useApp();

  const trendingTerms = [
    {
      id: '1',
      term: isRtl ? 'كشخة' : 'Kashkha',
      region: isRtl ? 'الكويت' : 'Kuwait',
      posts: '12.4k',
      meaning: isRtl 
        ? 'تستخدم لوصف شخص يرتدي ملابس أنيقة بشكل استثنائي، أو يبدو أنيقاً لمناسبة ما.'
        : 'Used to describe someone who is exceptionally well-dressed, stylish, or looking sharp for an occasion.',
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
      ],
      footer: isRtl ? 'تمت مناقشته مؤخراً بواسطة عمر و 4 آخرين' : 'Recently discussed by Omar and 4 others'
    },
    {
      id: '2',
      term: isRtl ? 'يعطيك العافية' : "Ya'atik al-afiya",
      region: isRtl ? 'بلاد الشام' : 'Levant',
      posts: '45.2k',
      meaning: isRtl 
        ? 'حرفياً "أعطاك الله الصحة/الحيوية". تحية متعددة الاستخدامات أو شكر لشخص يعمل بجد.'
        : 'Literally "May God give you health/vitality". A versatile greeting or thank you for someone working hard.',
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna'
      ],
      footer: isRtl ? 'الأكثر تداولاً في بيروت وعمان' : 'Top trend in Beirut and Amman'
    }
  ];

  const featuredTerm = {
    term: isRtl ? 'صايع' : "Saye'e",
    region: isRtl ? 'مصر' : 'Egypt',
    posts: '8.9k',
    meaning: isRtl 
      ? 'مصطلح قاهري للشخص الذكي، اللبق، والذي يعرف دائماً كيف يتصرف في المواقف الصعبة.'
      : 'Cairene slang for someone who is street-smart, witty, and always knows how to navigate tough situations.',
    imageUrl: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=400'
  };

  const trendingDialects = [
    { name: isRtl ? 'اللهجة الخليجية' : 'Gulf Dialect', info: isRtl ? 'نشاط كبير في دبي والدوحة' : 'Buzzing in Dubai & Doha', color: 'border-tertiary' },
    { name: isRtl ? 'العربية المغاربية' : 'Maghreb Arabic', info: isRtl ? 'تفاعل عالٍ في الرباط' : 'High engagement in Rabat', color: 'border-primary' },
    { name: isRtl ? 'الشامية' : 'Levantine', info: isRtl ? 'نشاط مستمر' : 'Consistent activity', color: 'border-secondary' }
  ];

  const topContributors = [
    { name: isRtl ? 'هناء السيد' : 'Hana El-Sayed', count: '2.4k', badge: 'PLATINUM', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hana' },
    { name: isRtl ? 'زيد الكويتي' : 'Zaid Al-Kuwaiti', count: '1.9k', badge: 'GOLD', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid' },
    { name: isRtl ? 'كريم منصور' : 'Karim Mansour', count: '1.2k', badge: 'SILVER', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karim' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-8">
        <header>
          <h1 className="text-4xl lg:text-5xl font-black text-on-surface tracking-tighter mb-2 font-headline">
            {isRtl ? 'نبض الشارع' : 'Pulse of the Street'}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            {isRtl 
              ? 'اكتشف أحدث المصطلحات العربية العامية، واللهجات، والأصوات التي تحدد الثقافة الإقليمية الحديثة.'
              : 'Discover the latest urban Arabic slang, dialects, and the voices defining modern regional culture.'}
          </p>
        </header>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-3">
              <Flame className="text-tertiary fill-tertiary" size={24} />
              <span>{isRtl ? 'رائج الآن' : 'Trending Now'}</span>
            </h2>
            <div className="flex gap-2">
              <span className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant">
                {isRtl ? 'عالمي' : 'Global'}
              </span>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold">
                {isRtl ? 'هذا الأسبوع' : 'This Week'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingTerms.map((term) => (
              <Card key={term.id} padding="none" className="group hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{term.region}</Badge>
                    <span className="text-on-surface-variant text-sm font-medium">{term.posts} {isRtl ? 'منشور' : 'posts'}</span>
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-2 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                    {term.term}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {term.meaning}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 rtl:space-x-reverse">
                      {term.avatars.map((avatar, i) => (
                        <img key={i} src={avatar} alt="user" className="w-8 h-8 rounded-full border-2 border-surface-container-lowest" />
                      ))}
                    </div>
                    <span className="text-[10px] text-outline font-medium">{term.footer}</span>
                  </div>
                </div>
              </Card>
            ))}

            <Card padding="none" className="md:col-span-2 group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary">{featuredTerm.region}</Badge>
                  <span className="text-on-surface-variant text-sm font-medium">{featuredTerm.posts} {isRtl ? 'منشور' : 'posts'}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-primary mb-2 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                      {featuredTerm.term}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {featuredTerm.meaning}
                    </p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                        <TrendingUp size={14} />
                        <span>{isRtl ? 'صعود سريع' : 'Rising Fast'}</span>
                      </div>
                      <div className="flex items-center gap-1 text-outline font-medium text-xs">
                        <MessageSquare size={14} />
                        <span>324 {isRtl ? 'مجلس نشط' : 'Active Majlis'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shadow-inner shrink-0">
                    <img 
                      src={featuredTerm.imageUrl} 
                      alt={featuredTerm.region} 
                      className="w-full h-full object-cover grayscale opacity-80" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Card variant="low" padding="lg" className="bg-primary/5 border border-primary/10">
          <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
            <Globe className="text-primary" size={24} />
            <span>{isRtl ? 'اللهجات الرائجة' : 'Trending Dialects'}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trendingDialects.map((dialect, i) => (
              <div key={i} className={cn(
                "bg-surface-container-lowest p-4 rounded-2xl shadow-sm border-b-4",
                dialect.color
              )}>
                <div className="text-xs font-bold text-on-surface-variant mb-1">
                  {isRtl ? `المركز #${i+1}` : `Rank #${i+1}`}
                </div>
                <div className="text-lg font-black text-on-surface">{dialect.name}</div>
                <div className="text-xs text-primary font-bold mt-2">{dialect.info}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <aside className="lg:col-span-4 space-y-8">
        <Card variant="low" padding="lg">
          <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
            <Award className="text-tertiary fill-tertiary" size={20} />
            <span>{isRtl ? 'أبرز المساهمين' : 'Top Contributors'}</span>
          </h2>
          <div className="space-y-6">
            {topContributors.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                    <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">{c.name}</div>
                    <div className="text-xs text-on-surface-variant">{c.count} {isRtl ? 'مساهمة' : 'contributions'}</div>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded">
                  {c.badge}
                </div>
              </div>
            ))}
          </div>
          <Button fullWidth variant="ghost" className="mt-8 text-primary">
            {isRtl ? 'عرض قائمة المتصدرين' : 'View All Leaderboard'}
          </Button>
        </Card>

        <section className="bg-primary overflow-hidden rounded-3xl relative p-8 text-on-primary">
          <div className="relative z-10">
            <span className="text-[10px] font-black tracking-widest uppercase opacity-70">
              {isRtl ? 'تسليط الضوء على المجتمع' : 'Community Spotlight'}
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-4 leading-tight">
              {isRtl ? 'تجمع عامية القاهرة' : 'The Cairene Slang Collective'}
            </h3>
            <p className="text-on-primary/80 text-sm mb-6">
              {isRtl 
                ? 'انضم إلى أكثر من 15,000 عضو يستكشفون التاريخ العميق للمصطلحات الحضرية المصرية.'
                : 'Join 15,000+ members exploring the deep history of Egyptian urban terminology.'}
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full">
              {isRtl ? 'انضم للمجتمع' : 'Join Community'}
            </Button>
          </div>
          <div className="absolute end-[-20%] bottom-[-20%] w-48 h-48 bg-primary-container rounded-full opacity-20 blur-3xl" />
          <div className="absolute start-[-10%] top-[-10%] w-32 h-32 bg-secondary rounded-full opacity-10 blur-2xl" />
        </section>

        <Card variant="low" padding="lg" className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Plus size={32} />
          </div>
          <h4 className="font-bold text-lg">{isRtl ? 'ابدأ نقاشاً' : 'Start a Discussion'}</h4>
          <p className="text-sm text-on-surface-variant">
            {isRtl ? 'شارك أفكارك أو اسأل عن مصطلح جديد.' : 'Share your thoughts or ask about a new term.'}
          </p>
          <Button fullWidth>{isRtl ? 'بدء الآن' : 'Start Now'}</Button>
        </Card>
      </aside>
    </div>
  );
};

export default Trending;
