import React from 'react';
import { ChevronUp, ChevronDown, Share2, MessageSquare } from 'lucide-react';
import { Proposal } from '../types';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Badge from './ui/Badge';
import Card from './ui/Card';

interface ProposalCardProps {
  proposal: Proposal;
  onVote?: (id: string, type: 'up' | 'down') => void;
  onClick?: () => void;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal, onVote, onClick }) => {
  const { isRtl } = useApp();

  return (
    <Card 
      className="p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/5 group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onVote?.(proposal.id, 'up'); }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronUp size={24} />
          </button>
          <span className="text-lg font-black text-on-surface">{proposal.votes}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); onVote?.(proposal.id, 'down'); }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronDown size={24} />
          </button>
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {proposal.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 bg-secondary-container/30 text-secondary font-bold text-[10px] uppercase rounded-full tracking-wider border-none">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-xl font-medium leading-relaxed text-on-surface">
              {proposal.meaning}
            </p>
          </div>

          {proposal.arabicExample && (
            <div className="bg-surface-container-low p-5 rounded-2xl border-s-4 border-primary">
              <p className="text-lg text-end mb-2 font-arabic" dir="rtl">
                {proposal.arabicExample}
              </p>
              {proposal.example && (
                <p className="text-sm italic text-on-surface-variant">
                  {proposal.example}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
            <div className="flex items-center gap-3">
              <img 
                src={proposal.authorAvatar} 
                alt={proposal.author} 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/10" 
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-on-surface">{proposal.author}</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold">
                  {proposal.authorTitle} • {proposal.timestamp}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-on-surface-variant text-sm font-bold">
                <MessageSquare size={18} />
                <span>{proposal.commentsCount}</span>
              </div>
              <button className="flex items-center gap-1 text-primary text-sm font-bold hover:underline">
                <Share2 size={18} />
                <span>{isRtl ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProposalCard;
