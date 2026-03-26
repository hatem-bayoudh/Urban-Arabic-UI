import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Term } from '../types';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Card from './ui/Card';
import Badge from './ui/Badge';
import PostActions from './PostActions';

interface TermCardProps {
  term: Term;
  featured?: boolean;
}

const TermCard: React.FC<TermCardProps> = ({ term, featured }) => {
  const { isRtl } = useApp();
  const navigate = useNavigate();

  if (!term) return null;

  const topProposal = term.proposals[0];

  return (
    <Card className={cn("p-6 md:p-8 rounded-[1.5rem] shadow-sm transition-all hover:shadow-md", featured && "border-2 border-primary/10")}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
            <Star size={24} className="fill-tertiary" />
          </div>
          <div>
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
              {isRtl ? 'مصطلح اليوم' : 'Term of the Day'}
            </span>
            <p className="text-sm text-on-surface-variant">
              {isRtl ? 'مختار من قبل المجتمع' : 'Selected by the community'}
            </p>
          </div>
        </div>
        <Badge variant="primary" className="px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
          {term.region} {term.flag}
        </Badge>
      </div>

      <div className="space-y-4">
        <h2 className="text-5xl font-black font-headline text-on-surface">
          {term.term}
        </h2>
        <p dir="auto" className="text-xl leading-relaxed text-on-surface-variant font-body">
          {topProposal?.meaning}
        </p>
      </div>

      {/* Related Terms Section */}
      <div className="mt-6 flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-on-surface-variant">
            {isRtl ? 'مصطلحات ذات صلة:' : 'Related Terms:'}
          </span>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg z-[3]">🇸🇦</div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg -ms-2 z-[2]">🇯🇴</div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg -ms-2 z-[1]">🇵🇸</div>
          </div>
        </div>
        <button 
          onClick={() => navigate(`/term/${term.id}`)}
          className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
        >
          {isRtl ? 'عرض المزيد' : 'View Related'}
          <ArrowRight size={16} className="rtl:rotate-180" />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
        <PostActions 
          likes={topProposal?.votes || 0} 
          comments={topProposal?.commentsCount || 0}
          onLike={() => console.log('Liked')}
          onComment={() => navigate(`/term/${term.id}`)}
          onShare={() => console.log('Shared')}
          onReport={() => console.log('Reported')}
          className="flex-1"
        />
        <div className="flex items-center gap-2 mx-4">
          <span className="text-xs text-on-surface-variant whitespace-nowrap">
            {isRtl ? (
              <>نشر بواسطة <span dir="ltr">@{topProposal?.author}</span></>
            ) : (
              `Posted by @${topProposal?.author}`
            )}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TermCard;
