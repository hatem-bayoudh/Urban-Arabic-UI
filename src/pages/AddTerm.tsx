import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { Eye, Lightbulb, ThumbsUp, ThumbsDown, MessageCircle, Share2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import TermForm from '../components/TermForm';

const AddTerm: React.FC = () => {
  const { isRtl } = useApp();
  const [formData, setFormData] = useState({
    term: '',
    meaning: '',
    example: '',
    region: '',
    category: '',
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7 space-y-8">
        <header className={cn("space-y-2", isRtl ? "text-right" : "text-left")}>
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">
            {isRtl ? 'أضف إلى القاموس' : 'Add to Dictionary'}
          </h1>
          <p className="text-on-surface-variant text-lg">
            {isRtl ? 'مساهمتك تساعد في إبقاء اللهجات الحديثة حية. شاركنا مصطلحاً من مدينتك.' : 'Your contribution helps keep modern dialects alive. Share a term from your city.'}
          </p>
        </header>

        <TermForm onChange={setFormData} />
      </div>

      <div className="lg:col-span-5">
        <div className="sticky top-28 space-y-6">
          <h3 className={cn("text-sm font-black text-on-surface-variant tracking-widest uppercase flex items-center gap-2", isRtl ? "flex-row-reverse" : "flex-row")}>
            <Eye size={18} className="text-primary" /> 
            <span>{isRtl ? 'معاينة مباشرة' : 'Live Preview'}</span>
          </h3>

          <Card padding="lg" className="relative group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tertiary-container/20 to-transparent -ml-16 -mt-16 rounded-full blur-2xl"></div>
            <div className="relative z-10 space-y-6">
              <div className={cn("flex justify-between items-start", isRtl ? "flex-row" : "flex-row-reverse")}>
                <div className={cn("flex items-center gap-3", isRtl ? "flex-row" : "flex-row-reverse")}>
                  <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden ring-4 ring-surface">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="profile" className="w-full h-full object-cover" />
                  </div>
                  <div className={isRtl ? "text-right" : "text-left"}>
                    <p className="font-bold text-on-surface">{isRtl ? 'أنت' : 'You'}</p>
                    <p className="text-xs text-on-surface-variant">
                      {isRtl ? 'الآن • ' : 'Now • '}
                      {formData.region || (isRtl ? 'مصر 🇪🇬' : 'Egypt 🇪🇬')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {formData.region && (
                    <Badge>
                      {formData.region}
                    </Badge>
                  )}
                  {formData.category && (
                    <Badge variant="secondary">
                      {formData.category}
                    </Badge>
                  )}
                  <Badge variant="tertiary">
                    {isRtl ? 'إدخال جديد' : 'New Entry'}
                  </Badge>
                </div>
              </div>

              <div className={cn("space-y-4", isRtl ? "text-right" : "text-left")}>
                <h2 className="text-3xl font-black font-headline text-primary">
                  {formData.term || (isRtl ? 'طنش (Tannish)' : 'Tannish')}
                </h2>
                <p className="text-on-surface leading-relaxed text-lg">
                  {formData.meaning || (isRtl ? 'التجاهل أو عدم الاهتمام بشيء ما. يُستخدم عادةً عندما يخبرك أحدهم ألا تأخذ موقفاً معيناً بجدية مفرطة أو أن تتجاهل شخصاً محدداً.' : 'Ignoring or not caring about something. Usually used when someone tells you not to take a certain situation too seriously.')}
                </p>
                {(formData.example || !formData.term) && (
                  <div className={cn(
                    "p-4 bg-surface-container-low rounded-xl border-primary/40 italic text-on-surface-variant",
                    isRtl ? "border-r-4" : "border-l-4"
                  )}>
                    "{formData.example || (isRtl ? 'يا عم طنش، الموضوع مش مستاهل' : 'Just ignore it, it\'s not worth it')}"
                  </div>
                )}
              </div>

              <div className={cn("flex items-center gap-2 pt-2", isRtl ? "flex-row" : "flex-row-reverse justify-end")}>
                <Badge variant="outline">#slang</Badge>
                <Badge variant="outline">#cairo</Badge>
                <Badge variant="outline">#urban</Badge>
              </div>

              <div className={cn("pt-6 flex items-center justify-between border-t border-outline-variant/10 text-on-surface-variant", isRtl ? "flex-row" : "flex-row-reverse")}>
                <div className={cn("flex gap-6", isRtl ? "flex-row" : "flex-row-reverse")}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm font-medium"><ThumbsUp size={16} /> 0</span>
                    <span className="flex items-center gap-1 text-sm font-medium"><ThumbsDown size={16} /> 0</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium"><MessageCircle size={16} /> 0</span>
                </div>
                <Share2 size={16} />
              </div>
            </div>
          </Card>

          <Card variant="low" padding="md" className="space-y-3">
            <h4 className={cn("font-bold text-on-surface flex items-center gap-2", isRtl ? "flex-row-reverse" : "flex-row")}>
              <Lightbulb size={18} className="text-tertiary" /> 
              <span>{isRtl ? 'نصيحة للمساهمين' : 'Contributor Tip'}</span>
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {isRtl 
                ? 'إضافة جملة في حقل "مثال للاستخدام" يساعد الآخرين على فهم السياق الاجتماعي ونغمة الكلمة!'
                : 'Adding a sentence in the "Usage Example" field helps others understand the social context and tone of the word!'}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTerm;
