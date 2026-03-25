import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Link as LinkIcon, 
  MessageSquare, 
  UserPlus, 
  LayoutGrid, 
  StretchHorizontal,
  Heart,
  Share2,
  Star,
  BadgeCheck,
  TrendingUp,
  ShieldCheck,
  Compass,
  Scroll,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

import { CONTRIBUTED_TERMS } from '../constants';
import TermGridCard from '../components/TermGridCard';

const Profile: React.FC = () => {
  const { isRtl } = useApp();

  const userData = {
    name: isRtl ? 'عمر خالد' : 'Omar Khalid',
    handle: '@okhalid_dubai',
    bio: isRtl 
      ? 'أقوم بتنسيق تقاطع الثقافة الخليجية التقليدية والحياة الحضرية المعاصرة. جامع للمخطوطات الشامية النادرة ومتحمس لعمارة المجالس الحديثة. فلنتحدث عن التصميم والتراث.'
      : 'Curating the intersection of traditional Khaleeji culture and contemporary urban living. Collector of rare Levantine scripts and enthusiast of modern Majlis architecture. Let\'s talk design and heritage.',
    location: isRtl ? 'دبي، الإمارات' : 'Dubai, UAE',
    joined: isRtl ? 'انضم في يونيو ٢٠٢١' : 'Joined June 2021',
    website: 'khalid.design',
    stats: {
      terms: 124,
      followers: '12.8k',
      following: 452
    },
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClI4DYXVCZlxzY2pPbUmbkXaKcw0vnePC_CIGqPyervt2AUU7W9P7ByePzATW_peBXnYb3YpdNJsNDaSTAANsD2aLCA142ThGUnygyD1tBPgCKhcYR1zLksog10FxZ5m3-SWTPQWcN6pcilamHNfMkEHSTFW8VxZktfYMeN040DBXdmpKRya1F8H-ygU7bMAg1rOWwt6QED9h1wFfFgQ2xnZ1nxONsnxOsPo8B6ir9uRBLEO61DxjzHUoMCEUzdg5N-E-9p3PsQeEq',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_mhDVLrzbU_cDO4c8B3PRINajQZxRPuoTwKFFXpiuT8FpYdM9i8fteZ3FyxnyoKmRtYWyHQsLcqH9Nh2QjlVrPtPfLG-KolA-GYehmmHvl1_HMXr9A6q81vzNwt1-EDopBQH5EyYduU8cJCdS8KANLQGEGROYU147ZRE0gEfL-nGDy6YJ00zUqECXTYJIOVlAovjslDa44JD6yt0IH9GebDIA39sRwZvBWEvqfjr255fgQn_Mx663seeye-0XAOZAhEwkDJiyzh12',
    tier: isRtl ? 'مساهم خبير' : 'Master Contributor',
    level: 42,
    xp: 850,
    nextLevelXp: 1000,
    impactStats: {
      views: '24.5k',
      votes: '1.2k',
      topPicks: 8
    },
    achievements: [
      {
        id: 'fact-checker',
        title: isRtl ? 'مدقق حقائق متميز' : 'Top Fact-Checker',
        subtitle: isRtl ? '٥٠+ عملية تحقق' : '50+ Verifications',
        icon: ShieldCheck,
        color: 'bg-secondary-container/30 text-on-secondary-container'
      },
      {
        id: 'dialect-expert',
        title: isRtl ? 'خبير اللهجة الخليجية' : 'Gulf Dialect Expert',
        subtitle: isRtl ? 'متخصص في اللهجة الكويتية' : 'Khaleeji Specialist',
        icon: Compass,
        color: 'bg-tertiary-container/30 text-on-tertiary-container'
      },
      {
        id: 'script-reviver',
        title: isRtl ? 'محيي النصوص' : 'Script Reviver',
        subtitle: isRtl ? 'باحث في اللهجة الشامية' : 'Levantine Scholar',
        icon: Scroll,
        color: 'bg-primary-container/20 text-on-primary-fixed-variant'
      },
      {
        id: 'archivist',
        title: isRtl ? 'أرشيفي' : 'Archivist',
        subtitle: isRtl ? 'المعلم التالي عند ١٠٠ مصطلح' : 'Next milestone at 100 terms',
        icon: Lock,
        color: 'bg-surface-container text-on-surface-variant opacity-60',
        isLocked: true
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 md:px-8">
      {/* Profile Header Card */}
      <Card padding="none" className="mb-10 overflow-hidden relative">
        {/* Cover Image */}
        <div className="h-64 w-full relative">
          <img 
            className="w-full h-full object-cover" 
            src={userData.cover} 
            alt="Skyline"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* User Identity Section */}
        <div className="px-8 pb-8 -mt-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="p-1.5 bg-surface-container-lowest rounded-full shadow-xl">
                <img 
                  className="w-40 h-40 rounded-full border-8 border-surface-container-lowest object-cover" 
                  src={userData.avatar} 
                  alt={userData.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={cn("text-center md:text-left pb-4 max-w-full", isRtl && "md:text-right")}>
                <div className={cn("flex items-center gap-2 mb-1 justify-center md:justify-start flex-wrap", isRtl && "flex-row-reverse")}>
                  <h1 className="text-4xl font-headline font-black text-on-surface tracking-tight break-words max-w-[15ch] sm:max-w-[20ch] md:max-w-[25ch] lg:max-w-none">
                    {userData.name}
                  </h1>
                  <BadgeCheck className="text-primary fill-primary" size={24} />
                </div>
                <p className="text-primary font-bold text-lg">{userData.handle}</p>
              </div>
            </div>
            <div className="flex gap-3 pb-4 self-center md:self-end">
              <Button variant="ghost" className="px-8 py-3 bg-surface-container-high border-none hover:bg-surface-container-highest">
                {isRtl ? 'رسالة' : 'Message'}
              </Button>
              <Button variant="primary" className="px-8 py-3 shadow-lg shadow-primary/20">
                {isRtl ? 'متابعة' : 'Follow'}
              </Button>
            </div>
          </div>

          {/* Contribution Level & Badges Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contribution Tier */}
            <div className="lg:col-span-5 bg-primary/5 p-6 rounded-[2rem] border border-primary/10">
              <div className={cn("flex justify-between items-center mb-4", isRtl && "flex-row-reverse")}>
                <div className={cn(isRtl && "text-right")}>
                  <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                    {isRtl ? 'فئة المساهمة' : 'Contribution Tier'}
                  </h3>
                  <p className="text-2xl font-black text-primary">
                    {userData.tier}
                  </p>
                </div>
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center shadow-sm border border-primary/20">
                  <span className="text-2xl font-black text-primary">{userData.level}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className={cn("flex justify-between text-[10px] font-bold text-on-surface-variant", isRtl && "flex-row-reverse")}>
                  <span>{isRtl ? `المستوى ${userData.level}` : `Level ${userData.level}`}</span>
                  <span>{isRtl ? `${userData.xp} / ${userData.nextLevelXp} خبرة للمستوى التالي` : `${userData.xp} / ${userData.nextLevelXp} XP to Level ${userData.level + 1}`}</span>
                </div>
                <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(77,81,177,0.3)]" 
                    style={{ width: `${(userData.xp / userData.nextLevelXp) * 100}%` }}
                  />
                </div>
              </div>

              {/* Impact Stats */}
              <div className="mt-8 pt-6 border-t border-primary/10 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-xl font-black text-primary">{userData.impactStats.views}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tight">
                    {isRtl ? 'مشاهدات التأثير' : 'Impact Views'}
                  </p>
                </div>
                <div className="text-center border-x border-primary/10">
                  <p className="text-xl font-black text-primary">{userData.impactStats.votes}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tight">
                    {isRtl ? 'أصوات مفيدة' : 'Helpful Votes'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-black text-primary">{userData.impactStats.topPicks}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tight">
                    {isRtl ? 'أفضل الاختيارات' : 'Top Picks'}
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="lg:col-span-7">
              <h3 className={cn("text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 px-2", isRtl && "text-right")}>
                {isRtl ? 'شارات الإنجاز' : 'Achievement Badges'}
              </h3>
              <div className={cn("flex flex-wrap gap-4", isRtl && "flex-row-reverse justify-end")}>
                {userData.achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={cn(
                      "flex items-center gap-3 bg-surface p-3 pr-5 rounded-2xl shadow-sm border border-outline-variant/10 group hover:border-primary/30 transition-colors",
                      isRtl && "flex-row-reverse pr-3 pl-5"
                    )}
                  >
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", achievement.color)}>
                      <achievement.icon size={20} />
                    </div>
                    <div className={cn(isRtl && "text-right")}>
                      <p className="text-sm font-bold text-on-surface">{achievement.title}</p>
                      <p className="text-[10px] text-on-surface-variant">{achievement.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className={cn("text-on-surface-variant text-base leading-relaxed max-w-2xl italic", isRtl && "text-right")}>
                  "{userData.bio}"
                </p>
                <div className={cn("flex flex-wrap gap-6 mt-4", isRtl && "flex-row-reverse")}>
                  <div className={cn("flex items-center gap-2 text-on-surface-variant text-sm", isRtl && "flex-row-reverse")}>
                    <MapPin size={18} className="text-primary" />
                    <span className="font-medium">{userData.location}</span>
                  </div>
                  <div className={cn("flex items-center gap-2 text-on-surface-variant text-sm", isRtl && "flex-row-reverse")}>
                    <LinkIcon size={18} className="text-primary" />
                    <a href="#" className="font-medium text-primary hover:underline">{userData.website}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Details (Removed as integrated above) */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-surface-container-low rounded-3xl h-fit border border-outline-variant/10">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">{userData.stats.terms}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  {isRtl ? 'المصطلحات' : 'Terms'}
                </div>
              </div>
              <div className="text-center border-x border-outline-variant/20">
                <div className="text-2xl font-black text-primary">{userData.stats.followers}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  {isRtl ? 'المتابعين' : 'Followers'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary">{userData.stats.following}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  {isRtl ? 'يتابع' : 'Following'}
                </div>
              </div>
            </div>
          </div>
      </Card>

      {/* Contributed Terms Section */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4 px-2">
          <h2 className="text-2xl font-headline font-black text-on-surface">
            {isRtl ? 'المصطلحات المساهم بها' : 'Contributed Terms'}
          </h2>
          <div className="flex gap-2">
            <button className="p-2 bg-primary rounded-xl text-on-primary shadow-md">
              <LayoutGrid size={20} />
            </button>
            <button className="p-2 bg-surface-container-low rounded-xl text-on-surface-variant hover:text-primary transition-colors">
              <StretchHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CONTRIBUTED_TERMS.map((term) => (
            <TermGridCard key={term.id} term={term} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
