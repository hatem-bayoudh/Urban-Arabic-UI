import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
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

  return (
    <Card className={cn("p-6 md:p-8 rounded-[1.5rem] shadow-sm transition-all hover:shadow-md", featured && "border-2 border-primary/10")}>
      <div className={cn(
        "flex justify-between items-start mb-6",
        isRtl && "flex-row-reverse"
      )}>
        <div className={cn("flex items-center gap-4", isRtl && "flex-row-reverse")}>
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
            <Star size={24} className="fill-tertiary" />
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
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

      <div className={cn("space-y-4", isRtl ? "text-right" : "text-left")}>
        <h2 className="text-5xl font-black font-headline text-on-surface">
          {term.term}
        </h2>
        <p dir="auto" className="text-xl leading-relaxed text-on-surface-variant font-body">
          {term.meaning}
        </p>
      </div>

      {/* Related Terms Section */}
      <div className={cn(
        "mt-6 flex items-center justify-between p-4 bg-surface-container-low rounded-xl",
        isRtl && "flex-row-reverse"
      )}>
        <div className={cn("flex items-center gap-3", isRtl && "flex-row-reverse")}>
          <span className="text-sm font-bold text-on-surface-variant">
            {isRtl ? 'مصطلحات ذات صلة:' : 'Related Terms:'}
          </span>
          <div className={cn("flex -space-x-2", isRtl && "space-x-reverse")}>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg">🇸🇦</div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg">🇯🇴</div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-surface-container-low shadow-sm text-lg">🇵🇸</div>
          </div>
        </div>
        <button 
          onClick={() => navigate(`/term/${term.id}`)}
          className={cn("text-primary text-sm font-bold hover:underline flex items-center gap-1", isRtl && "flex-row-reverse")}
        >
          {isRtl ? 'عرض المزيد' : 'View Related'}
          <ArrowLeft size={16} className={cn(isRtl ? "" : "rotate-180")} />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
        <PostActions 
          likes={term.likes} 
          comments={term.comments}
          onLike={() => console.log('Liked')}
          onComment={() => navigate(`/term/${term.id}`)}
          onShare={() => console.log('Shared')}
          onReport={() => console.log('Reported')}
        />
        <div className={cn("flex items-center gap-2", isRtl && "flex-row-reverse")}>
          <span className="text-xs text-on-surface-variant">
            {isRtl ? `نشر بواسطة @${term.author}` : `Posted by @${term.author}`}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TermCard;
