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

interface TermFormProps {
  onSubmit?: (data: any) => void;
  onChange?: (data: any) => void;
  initialData?: any;
  className?: string;
}

const TermForm: React.FC<TermFormProps> = ({ onSubmit, onChange, initialData, className }) => {
  const { isRtl } = useApp();
  const [formData, setFormData] = useState({
    term: initialData?.term || '',
    meaning: initialData?.meaning || '',
    example: initialData?.example || '',
    region: initialData?.region || '',
    category: initialData?.category || '',
  });

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange?.(newData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Card className={cn("p-8", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField 
          label={isRtl ? 'المصطلح / The Term' : 'The Term'} 
          required
        >
          <Input 
            value={formData.term}
            onChange={(e) => handleChange('term', e.target.value)}
            className="text-xl font-medium bg-surface-container"
            placeholder={isRtl ? "مثال: طنش (Tannish)" : "e.g. Tannish"}
          />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label={isRtl ? 'البلد / اللهجة' : 'Country / Dialect'} required>
            <Select 
              value={formData.region}
              onChange={(e) => handleChange('region', e.target.value)}
              className="bg-surface-container"
            >
              <option value="">{isRtl ? 'اختر المنطقة' : 'Select Region'}</option>
              <option value="مصر 🇪🇬">مصر (مصري)</option>
              <option value="لبنان 🇱🇧">لبنان (شامي)</option>
              <option value="السعودية 🇸🇦">السعودية (خليجي)</option>
              <option value="المغرب 🇲🇦">المغرب (دارجة)</option>
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
            </Select>
          </FormField>
        </div>

        <FormField label={isRtl ? 'ماذا يعني؟' : 'What does it mean?'} required>
          <textarea 
            value={formData.meaning}
            onChange={(e) => handleChange('meaning', e.target.value)}
            className={cn(
              "w-full px-5 py-4 bg-surface-container border border-outline-variant/10 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all resize-none text-on-surface",
              isRtl ? "text-right" : "text-left"
            )}
            placeholder={isRtl ? "اشرح المعنى والأصل..." : "Explain the meaning and origin..."} 
            rows={4}
          />
        </FormField>

        <FormField label={isRtl ? 'مثال للاستخدام (اختياري)' : 'Usage Example (Optional)'}>
          <Input 
            value={formData.example}
            onChange={(e) => handleChange('example', e.target.value)}
            className="italic bg-surface-container"
            placeholder={isRtl ? "استخدمه في جملة..." : "Use it in a sentence..."} 
          />
        </FormField>

        <FormField label={isRtl ? 'الوسوم' : 'Tags'}>
          <div className={cn("flex flex-wrap gap-2", isRtl ? "flex-row" : "flex-row-reverse justify-end")}>
            <Badge variant="secondary" icon={<X size={14} className="cursor-pointer" />}>#slang</Badge>
            <Badge variant="secondary" icon={<X size={14} className="cursor-pointer" />}>#cairo</Badge>
            <button type="button" className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <Plus size={14} /> {isRtl ? 'أضف وسم' : 'Add Tag'}
            </button>
          </div>
        </FormField>

        <div className={cn("pt-6", isRtl ? "text-right" : "text-left")}>
          <Button type="submit" size="lg" className="w-full md:w-auto">
            {isRtl ? 'شارك المصطلح' : 'Share Term'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TermForm;
