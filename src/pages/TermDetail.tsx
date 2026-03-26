import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Plus,
  BarChart2,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { MOCK_TERMS } from '../constants';
import WordHero from '../components/WordHero';
import ProposalCard from '../components/ProposalCard';

const TermDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isRtl } = useApp();
  const [activeTab, setActiveTab] = useState<'Top Rated' | 'Most Recent'>('Top Rated');

  // Find the term from mock data or use a default one for the demo
  const term = MOCK_TERMS.find(t => t.id === id) || MOCK_TERMS[0];

  if (!term) return null;

  return (
    <div className={cn("max-w-7xl mx-auto px-4 py-8", isRtl && "font-arabic")}>
      {/* Back Button */}
      <div className="mb-8 flex">
        <button 
          onClick={() => navigate(-1)}
          className="p-3 bg-surface-container-low rounded-full text-on-surface hover:bg-primary/10 hover:text-primary transition-all shadow-sm group"
        >
          <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
        </button>
      </div>

      <div className="space-y-10">
        {/* Hero Section */}
        <WordHero term={term} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content: Proposals */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">
                {isRtl ? 'تعريفات مرشحة' : 'Candidate Definitions'}
              </h3>
              <div className="flex gap-2 bg-surface-container-low p-1 rounded-full">
                {(['Most Recent', 'Top Rated'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-bold transition-all",
                      activeTab === tab 
                        ? "bg-primary text-on-primary shadow-md" 
                        : "text-on-surface-variant hover:bg-surface-container-high"
                    )}
                  >
                    {isRtl ? (tab === 'Most Recent' ? 'الأحدث' : 'الأعلى تقييماً') : tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {term.proposals.map((proposal) => (
                <ProposalCard 
                  key={proposal.id} 
                  proposal={proposal} 
                  onVote={(id, type) => console.log('Vote', id, type)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA Section */}
            <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10 space-y-6">
              <h4 className="text-xl font-headline font-black text-on-surface leading-tight">
                {isRtl ? 'تعتقد أنك تستطيع شرحها بشكل أفضل؟' : 'Think you can explain it better?'}
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {isRtl 
                  ? 'ساهم في "مجلس المودرن" وساعد المجتمع على فهم الفروق الدقيقة في اللهجة.' 
                  : "Contribute to the 'Modern Majlis' and help the community understand the nuance of dialect."}
              </p>
              <Button fullWidth className="py-4 bg-primary text-on-primary rounded-2xl font-black text-sm tracking-wide shadow-lg shadow-primary/30 hover:shadow-xl transition-all">
                {isRtl ? 'تقديم تعريف جديد' : 'Submit New Definition'}
              </Button>
            </div>

            {/* Usage Stats Section */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">
              <h4 className="text-lg font-headline font-extrabold text-on-surface">
                {isRtl ? 'الاستخدام حسب المنطقة' : 'Usage by Region'}
              </h4>
              <div className="space-y-4">
                {term.usageStats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm font-bold">
                      <span>{stat.region}</span>
                      <span>{stat.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Terms */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">
              <h4 className="text-lg font-headline font-extrabold text-on-surface">
                {isRtl ? 'مصطلحات ذات صلة' : 'Related Terms'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((rt, i) => (
                  <button 
                    key={i}
                    className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-primary border border-primary/10 hover:bg-primary hover:text-on-primary transition-all"
                  >
                    {rt}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TermDetail;
