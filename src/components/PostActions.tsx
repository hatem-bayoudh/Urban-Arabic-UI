import React from 'react';
import { MessageCircle, Share2, Bookmark, ThumbsUp, ThumbsDown } from 'lucide-react';
import { cn } from '../lib/utils';
import MoreMenu from './MoreMenu';

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
  const handleAction = (action?: () => void) => {
    if (action) action();
  };

  if (variant === 'minimal') {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleAction(onLike)}
            className={cn(
              "flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors",
              isLiked && "text-primary"
            )}
          >
            <ThumbsUp size={16} className={isLiked ? "fill-primary" : ""} />
          </button>
          <button 
            onClick={() => handleAction(onDislike)}
            className="flex items-center gap-1 text-on-surface-variant hover:text-error transition-colors"
          >
            <ThumbsDown size={16} />
          </button>
        </div>
        <button 
          onClick={() => handleAction(onComment)}
          className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
        >
          <MessageCircle size={16} />
        </button>
        <MoreMenu onReport={() => handleAction(onReport)} size={16} />
        <button 
          onClick={() => handleAction(onBookmark)}
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
    <div className={cn("flex items-center gap-6", className)}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleAction(onLike)}
            className={cn(
              "flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors",
              isLiked && "text-primary"
            )}
          >
            <ThumbsUp size={20} className={isLiked ? "fill-primary" : ""} />
            <span className="font-bold text-sm">{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</span>
          </button>
          <button 
            onClick={() => handleAction(onDislike)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors"
          >
            <ThumbsDown size={20} />
            {dislikes !== undefined && <span className="font-bold text-sm">{dislikes}</span>}
          </button>
        </div>
        {comments !== undefined && (
          <button 
            onClick={() => handleAction(onComment)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <MessageCircle size={20} />
            <span className="font-bold text-sm">{comments}</span>
          </button>
        )}
        <button 
          onClick={() => handleAction(onShare)}
          className="text-on-surface-variant hover:text-primary transition-colors"
        >
          <Share2 size={20} />
        </button>
        <MoreMenu onReport={() => handleAction(onReport)} size={20} />
      </div>
    </div>
  );
};

export default PostActions;
