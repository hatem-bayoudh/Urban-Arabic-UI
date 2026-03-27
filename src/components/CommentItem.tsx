import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import MoreMenu from './MoreMenu';

import CommentInput from './CommentInput';

interface CommentData {
  id: string;
  author: string;
  avatar: string;
  text: string;
  time: string;
  likes?: number;
  dislikes?: number;
}

interface CommentItemProps {
  comment: CommentData;
  isReply?: boolean;
  isLast?: boolean;
  hasReplies?: boolean;
  onReply?: () => void;
  onReport?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const CommentItem: React.FC<CommentItemProps> = ({ 
  comment, 
  isReply = false, 
  isLast = false,
  hasReplies = false,
  onReply, 
  onReport,
  className,
  children
}) => {
  const { isRtl } = useApp();

  const [isReplying, setIsReplying] = React.useState(false);
  const [replyText, setReplyText] = React.useState('');

  return (
    <div className={cn("group flex flex-wrap gap-x-5 gap-y-0 relative", className)}>
      {/* Vertical line for parent if it has replies or is replying */}
      {!isReply && (hasReplies || isReplying) && (
        <div className="absolute top-[24px] bottom-0 w-0.5 bg-outline-variant/30 start-6" />
      )}

      {isReply && (
        <div className="absolute -start-[30px] top-0 bottom-0 w-[30px]">
          {/* Vertical line that continues down if not last or if replying */}
          {(!isLast || isReplying) && (
            <div className="absolute top-[16px] bottom-0 w-0.5 bg-outline-variant/30 start-0" />
          )}
          {/* The elbow itself */}
          <div 
            className="absolute top-0 w-full h-[16px] border-s-2 border-b-2 border-outline-variant/30 rounded-es-xl start-0" 
          />
        </div>
      )}
      <img 
        src={comment.avatar} 
        alt={comment.author} 
        className={cn(
          "rounded-full ring-2 ring-transparent group-hover:ring-primary/20 transition-all shrink-0 relative z-10",
          isReply ? "w-8 h-8" : "w-12 h-12"
        )}
        referrerPolicy="no-referrer"
      />
      <div className="flex-1 min-w-[200px]">
        <div className={cn(
          "bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10",
          !isReply && "rounded-ss-none",
          isReply && "bg-surface-container p-4"
        )}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className={cn("font-bold text-on-surface", isReply ? "text-xs" : "text-sm")} dir="ltr">
                {comment.author}
              </span>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span className={cn("text-on-surface-variant font-medium", isReply ? "text-[10px]" : "text-xs")}>
                {comment.time}
              </span>
            </div>
            
            <MoreMenu 
              onReport={() => onReport?.()} 
              size={isReply ? 16 : 18} 
            />
          </div>
          <p dir="auto" className={cn(
            "text-on-surface-variant leading-relaxed font-medium",
            isReply ? "text-sm" : "text-base"
          )}>
            {comment.text}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-3 px-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors group/btn">
                <ThumbsUp size={isReply ? 14 : 16} className="group-hover/btn:text-primary transition-colors" /> {comment.likes || 0}
              </button>
              <button className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-error transition-colors group/btn">
                <ThumbsDown size={isReply ? 14 : 16} className="group-hover/btn:text-error transition-colors" /> {comment.dislikes || 0}
              </button>
            </div>
            {!isReply && (
              <button 
                onClick={(e) => { e.stopPropagation(); setIsReplying(!isReplying); }}
                className="text-xs font-bold text-primary hover:underline"
              >
                {isRtl ? 'رد' : 'Reply'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Render children (replies) or CommentInput below the comment content */}
      {(children || isReplying) && (
        <div className="w-full mt-4 ms-6 ps-[30px] relative animate-in fade-in slide-in-from-top-2 duration-200 space-y-6">
          {children}
          {isReplying && (
            <CommentInput 
              variant="reply"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Me"
              value={replyText}
              onChange={setReplyText}
              onSubmit={() => {
                onReply?.();
                setIsReplying(false);
                setReplyText('');
              }}
              onCancel={() => setIsReplying(false)}
              placeholder={isRtl ? "اكتب ردك..." : "Write your reply..."}
              submitLabel={isRtl ? 'رد' : 'Reply'}
              cancelLabel={isRtl ? 'إلغاء' : 'Cancel'}
              minHeight="80px"
              isLast={isLast}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
