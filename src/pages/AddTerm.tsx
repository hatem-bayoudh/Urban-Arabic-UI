import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Eye, Lightbulb, ChevronUp, ChevronDown, MessageCircle, Share2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import TermForm, { TermFormData } from '../components/TermForm';

const AddTerm: React.FC = () => {
  const { isRtl } = useApp();
  const location = useLocation();

  // If navigated from TermDetail, pre-fill term fields
  const prefill = (location.state as any) || {};
  const mode = prefill.mode || 'term';

  const [formData, setFormData] = useState<TermFormData>({
    arabicTerm: prefill.arabicTerm || '',
    latinTerm: prefill.latinTerm || '',
    definition: '',
    arabicDefinition: '',
    example: '',
    arabicExample: '',
    region: prefill.region || '',
    category: '',
    partOfSpeech: prefill.partOfSpeech || '',
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-black font-headline text-on-surface tracking-tight">
            {mode === 'definition'
              ? (isRtl ? 'أضف تعريفاً جديداً' : 'Add New Definition')
              : (isRtl ? 'أضف إلى القاموس' : 'Add to Dictionary')
            }
          </h1>
          <p className="text-on-surface-variant text-lg">
            {mode === 'definition'
              ? (isRtl 
                  ? `قدّم تعريفاً بديلاً لـ "${formData.arabicTerm || formData.latinTerm}"` 
                  : `Submit an alternative definition for "${formData.latinTerm || formData.arabicTerm}"`)
              : (isRtl 
                  ? 'مساهمتك تساعد في إبقاء اللهجات الحديثة حية. شاركنا مصطلحاً من مدينتك.' 
                  : 'Your contribution helps keep modern dialects alive. Share a term from your city.')
            }
          </p>
        </header>

        <TermForm 
          mode={mode}
          onChange={setFormData} 
          initialData={{
            arabicTerm: prefill.arabicTerm,
            latinTerm: prefill.latinTerm,
            region: prefill.region,
            partOfSpeech: prefill.partOfSpeech,
          }}
        />
      </div>

      <div className="lg:col-span-5">
        <div className="sticky top-28 space-y-6">
          <h3 className="text-sm font-black text-on-surface-variant tracking-widest uppercase flex items-center gap-2">
            <Eye size={18} className="text-primary" /> 
            <span>{isRtl ? 'معاينة مباشرة' : 'Live Preview'}</span>
          </h3>

          <Card padding="lg" className="relative group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tertiary-container/20 to-transparent -ml-16 -mt-16 rounded-full blur-2xl"></div>
            <div className="relative z-10 space-y-6">
              {/* Preview Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden ring-4 ring-surface">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{isRtl ? 'أنت' : 'You'}</p>
                    <p className="text-xs text-on-surface-variant">
                      {isRtl ? 'الآن' : 'Now'}
                      {formData.region && ` • ${formData.region}`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {formData.region && <Badge>{formData.region}</Badge>}
                  {formData.category && <Badge variant="secondary">{formData.category}</Badge>}
                  <Badge variant="tertiary">
                    {isRtl ? 'مقترح جديد' : 'New Proposal'}
                  </Badge>
                </div>
              </div>

              {/* Preview Term */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-3xl font-black font-headline text-primary">
                    {formData.arabicTerm || (isRtl ? 'المصطلح' : 'Term')}
                  </h2>
                  {formData.latinTerm && (
                    <span className="text-lg text-on-surface-variant font-medium" dir="ltr">
                      ({formData.latinTerm})
                    </span>
                  )}
                </div>
                
                <p className="text-on-surface leading-relaxed text-lg">
                  {formData.definition || (isRtl ? 'التعريف سيظهر هنا...' : 'Your definition will appear here...')}
                </p>

                {formData.arabicDefinition && (
                  <p className="text-on-surface-variant leading-relaxed font-arabic" dir="rtl">
                    {formData.arabicDefinition}
                  </p>
                )}

                {(formData.arabicExample || formData.example) && (
                  <div className="p-4 bg-surface-container-low rounded-xl border-primary/40 italic text-on-surface-variant border-s-4 space-y-1">
                    {formData.arabicExample && (
                      <p className="font-arabic text-end" dir="rtl">"{formData.arabicExample}"</p>
                    )}
                    {formData.example && (
                      <p className="text-sm" dir="ltr">"{formData.example}"</p>
                    )}
                  </div>
                )}
              </div>

              {/* Preview Footer */}
              <div className="pt-4 flex items-center justify-between border-t border-outline-variant/10 text-on-surface-variant">
                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm font-medium"><ChevronUp size={16} /> 0</span>
                    <span className="flex items-center gap-1 text-sm font-medium"><ChevronDown size={16} /> 0</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium"><MessageCircle size={16} /> 0</span>
                </div>
                <Share2 size={16} />
              </div>
            </div>
          </Card>

          <Card variant="low" padding="md" className="space-y-3">
            <h4 className="font-bold text-on-surface flex items-center gap-2">
              <Lightbulb size={18} className="text-tertiary" /> 
              <span>{isRtl ? 'نصيحة للمساهمين' : 'Contributor Tip'}</span>
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {mode === 'definition'
                ? (isRtl 
                    ? 'حاول تقديم منظور مختلف أو سياق إقليمي جديد لإثراء التعريفات الموجودة!'
                    : 'Try to offer a different perspective or regional context to enrich the existing definitions!')
                : (isRtl 
                    ? 'إضافة جملة في حقل "مثال للاستخدام" يساعد الآخرين على فهم السياق الاجتماعي ونغمة الكلمة!'
                    : 'Adding a sentence in the "Usage Example" field helps others understand the social context and tone of the word!')
              }
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddTerm;
