import React, { useState } from 'react';
import { MessageCircle, Share2, Bookmark, Heart, MoreVertical, Flag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';

interface PostActionsProps {
  likes: number;
  dislikes?: number;
  comments?: number;
  shares?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  variant?: 'standard' | 'minimal';
  className?: string;
  onLike?: () => void;
  onDislike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onReport?: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  likes,
  dislikes,
  comments,
  shares,
  isLiked,
  isBookmarked,
  variant = 'standard',
  className,
  onLike,
  onDislike,
  onComment,
  onShare,
  onBookmark,
  onReport,
}) => {
  const { isRtl } = useApp();
  const [showReport, setShowReport] = useState(false);

  const handleAction = (e: React.MouseEvent, action?: () => void) => {
    e.stopPropagation();
    if (action) action();
  };

  const toggleReport = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowReport(!showReport);
  };

  if (variant === 'minimal') {
    return (
      <div className={cn("flex items-center justify-between w-full", isRtl && "flex-row-reverse", className)}>
        <div className={cn("flex items-center gap-4", isRtl && "flex-row-reverse")}>
          <button 
            onClick={(e) => handleAction(e, onLike)}
            className={cn(
              "flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors",
              isLiked && "text-primary"
            )}
          >
            <Heart size={16} className={isLiked ? "fill-primary" : ""} />
          </button>
          <button 
            onClick={(e) => handleAction(e, onComment)}
            className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
          >
            <MessageCircle size={16} />
          </button>
          <div className="relative">
            <button 
              onClick={toggleReport}
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <MoreVertical size={16} />
            </button>
            {showReport && (
              <div className={cn(
                "absolute bottom-full mb-2 w-32 bg-surface-container-lowest rounded-lg shadow-xl border border-outline-variant/20 py-1 z-50",
                isRtl ? "right-0" : "left-0"
              )}>
                <button 
                  onClick={(e) => {
                    handleAction(e, onReport);
                    setShowReport(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2 text-[10px] text-error hover:bg-error/5 transition-colors flex items-center gap-2",
                    isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
                  )}
                >
                  <Flag size={12} />
                  <span>{isRtl ? 'إبلاغ' : 'Report'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <button 
          onClick={(e) => handleAction(e, onBookmark)}
          className={cn(
            "text-on-surface-variant hover:text-primary transition-colors",
            isBookmarked && "text-primary"
          )}
        >
          <Bookmark size={16} className={isBookmarked ? "fill-primary" : ""} />
        </button>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-between w-full", isRtl && "flex-row-reverse", className)}>
      <div className={cn("flex gap-6", isRtl && "flex-row-reverse")}>
        <div className={cn("flex items-center gap-4", isRtl && "flex-row-reverse")}>
          <button 
            onClick={(e) => handleAction(e, onLike)}
            className={cn(
              "flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors",
              isLiked && "text-primary"
            )}
          >
            <Heart size={20} className={isLiked ? "fill-primary" : ""} />
            <span className="font-bold text-sm">{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</span>
          </button>
          {comments !== undefined && (
            <button 
              onClick={(e) => handleAction(e, onComment)}
              className={cn("flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors", isRtl && "flex-row-reverse")}
            >
              <MessageCircle size={20} />
              <span className="font-bold text-sm">{comments}</span>
            </button>
          )}
          <button 
            onClick={(e) => handleAction(e, onShare)}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <Share2 size={20} />
          </button>
          <div className="relative">
            <button 
              onClick={toggleReport}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <MoreVertical size={20} />
            </button>
            {showReport && (
              <div className={cn(
                "absolute bottom-full mb-2 w-40 bg-surface-container-lowest rounded-lg shadow-xl border border-outline-variant/20 py-1 z-50",
                isRtl ? "right-0" : "left-0"
              )}>
                <button 
                  onClick={(e) => {
                    handleAction(e, onReport);
                    setShowReport(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2 text-xs text-error hover:bg-error/5 transition-colors flex items-center gap-2",
                    isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
                  )}
                >
                  <Flag size={14} />
                  <span>{isRtl ? 'إبلاغ عن المنشور' : 'Report Post'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostActions;
