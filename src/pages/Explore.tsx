import React from 'react';
import { MOCK_REGIONS } from '../constants';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { Search, SlidersHorizontal, ArrowLeft, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Explore: React.FC = () => {
  const { isRtl } = useApp();

  return (
    <div className="space-y-10">
      <Card variant="lowest" padding="lg">
        <h1 className={cn("text-3xl font-black font-headline text-on-surface mb-6 tracking-tight", isRtl ? "text-right" : "text-left")}>
          {isRtl ? "اكتشف لغة الشوارع" : "Discover the Language of the Streets"}
        </h1>
        <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-4", isRtl ? "rtl" : "ltr")}>
          <div className="md:col-span-2">
            <Input 
              icon={<Search size={24} />}
              placeholder={isRtl ? "ابحث عن 'يلا'، 'خلاص'، أو 'عادي'..." : "Search for terms like 'Yalla', 'Khallas'..."} 
            />
          </div>
          <Select>
            <option>{isRtl ? 'كل اللهجات' : 'All Dialects'}</option>
            <option>Levantine</option>
            <option>Maghrebi</option>
            <option>Gulf (Khaleeji)</option>
            <option>Egyptian</option>
          </Select>
          <Button icon={<SlidersHorizontal size={20} />}>
            {isRtl ? 'فلاتر متقدمة' : 'Advanced Filters'}
          </Button>
        </div>
      </Card>

      <section className="space-y-6">
        <div className={cn("flex justify-between items-end", isRtl ? "flex-row-reverse" : "flex-row")}>
          <div className={isRtl ? "text-right" : "text-left"}>
            <h2 className="text-2xl font-black font-headline text-on-surface">{isRtl ? 'استكشف حسب المنطقة' : 'Explore by Region'}</h2>
            <p className="text-on-surface-variant">{isRtl ? 'اضغط على منطقة للتعمق في تعبيراتها المحلية.' : 'Click a region to dive deep into local expressions.'}</p>
          </div>
          <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            <span>{isRtl ? 'عرض كل المناطق' : 'View All Regions'}</span>
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_REGIONS.map((region) => (
            <div key={region.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer card-shadow">
              <img 
                src={region.imageUrl} 
                alt={region.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className={cn("absolute bottom-0 p-6 w-full", isRtl ? "text-right right-0" : "text-left left-0")}>
                <h3 className="text-xl font-black text-white mb-1">{region.name}</h3>
                <p className="text-xs text-white/70">{region.countries}</p>
                <div className={cn("mt-4 flex", isRtl ? "justify-end" : "justify-start")}>
                  <Badge variant="secondary">
                    {region.termCount} {isRtl ? 'مصطلح' : 'Terms'}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
