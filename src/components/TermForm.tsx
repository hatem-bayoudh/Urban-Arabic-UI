import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Card from './ui/Card';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';
import Badge from './ui/Badge';
import FormField from './ui/FormField';
import Textarea from './ui/Textarea';

export interface TermFormData {
  // Term fields (dual-language)
  arabicTerm: string;
  latinTerm: string;
  // Definition fields (dual-language)
  definition: string;
  arabicDefinition: string;
  // Example fields (dual-language)
  example: string;
  arabicExample: string;
  // Metadata
  region: string;
  category: string;
  partOfSpeech: string;
}

interface TermFormProps {
  /** 'term' = full new term + definition form, 'definition' = definition-only (term pre-filled) */
  mode?: 'term' | 'definition';
  onSubmit?: (data: TermFormData) => void;
  onChange?: (data: TermFormData) => void;
  initialData?: Partial<TermFormData>;
  className?: string;
}

const emptyForm: TermFormData = {
  arabicTerm: '',
  latinTerm: '',
  definition: '',
  arabicDefinition: '',
  example: '',
  arabicExample: '',
  region: '',
  category: '',
  partOfSpeech: '',
};

const TermForm: React.FC<TermFormProps> = ({ 
  mode = 'term', 
  onSubmit, 
  onChange, 
  initialData, 
  className 
}) => {
  const { isRtl } = useApp();
  const [formData, setFormData] = useState<TermFormData>({
    ...emptyForm,
    ...initialData,
  });

  const handleChange = (field: keyof TermFormData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange?.(newData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const isTermLocked = mode === 'definition';

  return (
    <Card className={cn("p-8", className)}>
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* ── TERM SECTION ── */}
        <div className="space-y-1">
          <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">spellcheck</span>
            {isRtl ? 'المصطلح' : 'The Term'}
          </h3>
          <p className="text-xs text-on-surface-variant">
            {isRtl ? 'أدخل المصطلح بالعربية واللاتينية' : 'Enter the term in both Arabic and Latin script'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label={isRtl ? 'المصطلح بالعربية' : 'Arabic Term'} required>
            <Input 
              value={formData.arabicTerm}
              onChange={(e) => handleChange('arabicTerm', e.target.value)}
              className="text-xl font-arabic font-medium bg-surface-container"
              placeholder={isRtl ? "مثال: برشة" : "e.g. برشة"}
              dir="rtl"
              disabled={isTermLocked}
            />
          </FormField>

          <FormField label={isRtl ? 'المصطلح باللاتينية' : 'Latin Term'} required>
            <Input 
              value={formData.latinTerm}
              onChange={(e) => handleChange('latinTerm', e.target.value)}
              className="text-xl font-medium bg-surface-container"
              placeholder={isRtl ? "مثال: Barsha" : "e.g. Barsha"}
              dir="ltr"
              disabled={isTermLocked}
            />
          </FormField>
        </div>

        {/* ── METADATA SECTION ── */}
        {mode === 'term' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField label={isRtl ? 'البلد / اللهجة' : 'Country / Dialect'} required>
                <Select 
                  value={formData.region}
                  onChange={(e) => handleChange('region', e.target.value)}
                  className="bg-surface-container"
                >
                  <option value="">{isRtl ? 'اختر المنطقة' : 'Select Region'}</option>
                  <option value="تونس">تونس (تونسي)</option>
                  <option value="مصر">مصر (مصري)</option>
                  <option value="لبنان">لبنان (شامي)</option>
                  <option value="السعودية">السعودية (خليجي)</option>
                  <option value="المغرب">المغرب (دارجة)</option>
                  <option value="السودان">السودان (سوداني)</option>
                </Select>
              </FormField>
              
              <FormField label={isRtl ? 'الفئة' : 'Category'} required>
                <Select 
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="bg-surface-container"
                >
                  <option value="">{isRtl ? 'اختر الفئة' : 'Select Category'}</option>
                  <option value="عامية">{isRtl ? 'عامية (Slang)' : 'Slang'}</option>
                  <option value="تحية">{isRtl ? 'تحية' : 'Greeting'}</option>
                  <option value="طعام">{isRtl ? 'طعام/شراب' : 'Food/Drink'}</option>
                  <option value="مثل">{isRtl ? 'مثل / حكمة' : 'Proverb'}</option>
                </Select>
              </FormField>

              <FormField label={isRtl ? 'نوع الكلمة' : 'Part of Speech'}>
                <Select 
                  value={formData.partOfSpeech}
                  onChange={(e) => handleChange('partOfSpeech', e.target.value)}
                  className="bg-surface-container"
                >
                  <option value="">{isRtl ? 'اختر النوع' : 'Select Type'}</option>
                  <option value="Noun">{isRtl ? 'اسم' : 'Noun'}</option>
                  <option value="Verb">{isRtl ? 'فعل' : 'Verb'}</option>
                  <option value="Adjective">{isRtl ? 'صفة' : 'Adjective'}</option>
                  <option value="Adverb">{isRtl ? 'ظرف' : 'Adverb'}</option>
                  <option value="Interjection">{isRtl ? 'تعجب' : 'Interjection'}</option>
                  <option value="Phrase">{isRtl ? 'عبارة' : 'Phrase'}</option>
                  <option value="Proverb">{isRtl ? 'مثل' : 'Proverb'}</option>
                </Select>
              </FormField>
            </div>
          </>
        )}

        {/* ── DEFINITION SECTION ── */}
        <div className="space-y-1 pt-2 border-t border-outline-variant/10">
          <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2 pt-4">
            <span className="material-symbols-outlined text-secondary text-[20px]">menu_book</span>
            {isRtl ? 'التعريف' : 'Definition'}
          </h3>
          <p className="text-xs text-on-surface-variant">
            {isRtl ? 'اشرح المعنى بكلتا اللغتين' : 'Explain the meaning in both languages'}
          </p>
        </div>

        <FormField label={isRtl ? 'التعريف (الشرح)' : 'Definition (Explanation)'} required>
          <Textarea 
            value={formData.definition}
            onChange={(e) => handleChange('definition', e.target.value)}
            placeholder={isRtl ? "اشرح المعنى والأصل باللغة الإنجليزية أو الفرنسية..." : "Explain the meaning and origin..."} 
            rows={3}
          />
        </FormField>

        <FormField label={isRtl ? 'التعريف بالعربية' : 'Arabic Definition'}>
          <Textarea 
            value={formData.arabicDefinition}
            onChange={(e) => handleChange('arabicDefinition', e.target.value)}
            placeholder={isRtl ? "اشرح المعنى والأصل بالعربية..." : "المعنى بالعربية..."} 
            rows={3}
            dir="rtl"
            className="font-arabic"
          />
        </FormField>

        {/* ── EXAMPLE SECTION ── */}
        <div className="space-y-1 pt-2 border-t border-outline-variant/10">
          <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2 pt-4">
            <span className="material-symbols-outlined text-tertiary text-[20px]">format_quote</span>
            {isRtl ? 'مثال للاستخدام' : 'Usage Example'}
          </h3>
          <p className="text-xs text-on-surface-variant">
            {isRtl ? 'أضف مثالاً يوضح معنى الكلمة (اختياري)' : 'Add an example showing how it\'s used (optional)'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label={isRtl ? 'مثال بالعربية' : 'Arabic Example'}>
            <Input 
              value={formData.arabicExample}
              onChange={(e) => handleChange('arabicExample', e.target.value)}
              className="italic bg-surface-container font-arabic"
              placeholder={isRtl ? "نحبك برشة يا تونس" : "نحبك برشة يا تونس"}
              dir="rtl"
            />
          </FormField>

          <FormField label={isRtl ? 'الترجمة / مثال لاتيني' : 'Translation / Latin Example'}>
            <Input 
              value={formData.example}
              onChange={(e) => handleChange('example', e.target.value)}
              className="italic bg-surface-container"
              placeholder={isRtl ? '"I love you very much, Tunisia."' : '"I love you very much, Tunisia."'}
              dir="ltr"
            />
          </FormField>
        </div>

        {/* ── TAGS ── */}
        <FormField label={isRtl ? 'الوسوم' : 'Tags'}>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" icon={<X size={14} className="cursor-pointer" />}>#slang</Badge>
            <Badge variant="secondary" icon={<X size={14} className="cursor-pointer" />}>#tunis</Badge>
            <button type="button" className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <Plus size={14} /> {isRtl ? 'أضف وسم' : 'Add Tag'}
            </button>
          </div>
        </FormField>

        {/* ── SUBMIT ── */}
        <div className="pt-6 border-t border-outline-variant/10">
          <Button type="submit" size="lg" className="w-full md:w-auto">
            {mode === 'definition' 
              ? (isRtl ? 'تقديم التعريف' : 'Submit Definition')
              : (isRtl ? 'شارك المصطلح' : 'Share Term')
            }
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TermForm;
