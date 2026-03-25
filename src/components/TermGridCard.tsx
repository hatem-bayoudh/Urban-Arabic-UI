import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, CheckCircle2, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Card from './ui/Card';
import Badge from './ui/Badge';
import PostActions from './PostActions';
import { Term } from '../types';

export interface TermGridCardProps {
  term: Term;
  className?: string;
  type?: 'standard' | 'image' | 'reviewed' | 'trending';
  badge?: string;
}

const TermGridCard: React.FC<TermGridCardProps> = ({
  term,
  className,
  type = 'standard',
  badge,
}) => {
  const { isRtl } = useApp();
  const navigate = useNavigate();

  if (type === 'image') {
    return (
      <Card 
        padding="none" 
        className={cn(
          "relative overflow-hidden rounded-[1.5rem] h-64 group shadow-sm cursor-pointer",
          className
        )}
        onClick={() => navigate(`/term/${term.id}`)}
      >
        <img 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={term.imageUrl || "https://picsum.photos/seed/dialect/800/600"} 
          alt={term.term}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent"></div>
        <div className={cn(
          "absolute bottom-0 p-8 w-full",
          isRtl ? "right-0 text-right" : "left-0 text-left"
        )}>
          <span className={cn(
            "bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-flex items-center gap-1 w-fit",
            isRtl && "flex-row-reverse"
          )}>
            {badge || 'Dialect Spotlight'} {term.flag}
          </span>
          <h3 className="text-3xl font-bold text-white font-headline">{term.term}</h3>
          <p className={cn("text-white/80 mt-2 text-sm max-w-lg", isRtl ? "ml-auto" : "mr-auto")}>
            {term.meaning}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      padding="none" 
      className={cn(
        "group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer rounded-[1.5rem] p-6 shadow-sm",
        className
      )}
      onClick={() => navigate(`/term/${term.id}`)}
    >
      <div className="flex flex-col flex-1 relative">
        <div className={cn("flex items-center justify-between mb-4", isRtl && "flex-row-reverse")}>
          <Badge variant={type === 'reviewed' ? 'secondary' : 'default'} className="px-3 py-1 rounded-full text-xs font-bold">
            {term.region} {term.flag}
          </Badge>
          <span className="text-outline text-[10px]">{term.timestamp}</span>
        </div>

        <h3 className={cn(
          "text-3xl font-bold text-on-surface mb-3 font-headline",
          isRtl ? "text-right" : "text-left"
        )}>
          {term.term}
        </h3>
        <p dir="auto" className={cn("text-on-surface-variant text-sm leading-relaxed mb-4 flex-1", isRtl ? "text-right" : "text-left")}>
          {term.meaning}
        </p>

        {/* Related Preview Small */}
        <div className={cn(
          "mt-4 flex items-center justify-between text-[10px] border-t border-outline-variant/10 pt-4",
          isRtl && "flex-row-reverse"
        )}>
          <div className={cn("flex items-center gap-1", isRtl && "flex-row-reverse")}>
            <div className={cn("flex -space-x-1", isRtl && "space-x-reverse")}>
              <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-[10px]">🇱🇾</span>
              <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-[10px]">🇸🇩</span>
            </div>
            <span className="text-outline">{isRtl ? 'مرتبط' : 'Connected'}</span>
          </div>
          <button className="text-primary font-bold">{isRtl ? 'عرض المزيد' : 'View Related'}</button>
        </div>

        <div className="mt-6">
          <PostActions 
            likes={term.likes} 
            comments={term.comments} 
            variant="minimal"
            onLike={() => console.log('Liked')}
            onComment={() => navigate(`/term/${term.id}`)}
            onBookmark={() => console.log('Bookmarked')}
            onReport={() => console.log('Reported')}
          />
        </div>
      </div>
    </Card>
  );
};

export default TermGridCard;
