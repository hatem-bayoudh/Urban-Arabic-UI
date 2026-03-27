import React, { useState } from "react";
import { ChevronUp, ChevronDown, Share2, MessageSquare } from "lucide-react";
import { Proposal } from "../types";
import { cn } from "../lib/utils";
import { useApp } from "../context/AppContext";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

interface ProposalCardProps {
  proposal: Proposal;
  onVote?: (id: string, type: "up" | "down") => void;
  onClick?: () => void;
}

const getPhaseStyles = (phase: Proposal["phase"]) => {
  switch (phase) {
    case "confirmed":
      return {
        border: "border-l-8 border-secondary",
        badge: "bg-secondary/10 text-secondary",
        icon: "check_circle",
        text: "Phase 4: Confirmed",
        scoreColor: "text-secondary",
      };
    case "review":
      return {
        border: "border-l-8 border-primary",
        badge: "bg-primary/10 text-primary",
        icon: "rate_review",
        text: "Phase 3: Review",
        scoreColor: "text-primary",
      };
    case "semi-confirmed":
      return {
        border: "border-l-8 border-tertiary-container",
        badge: "bg-tertiary-container/10 text-tertiary",
        icon: "error",
        text: "Phase 2: Semi-confirmed",
        scoreColor: "text-tertiary",
      };
    case "proposal":
    default:
      return {
        border: "border-l-8 border-outline-variant",
        badge: "bg-surface-container-high text-on-surface-variant",
        icon: "pending",
        text: "Phase 1: Proposal",
        scoreColor: "text-outline",
      };
  }
};

const ProposalCard: React.FC<ProposalCardProps> = ({
  proposal,
  onVote,
  onClick,
}) => {
  const { isRtl } = useApp();
  const phaseStyles = getPhaseStyles(proposal.phase);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleCardClick = () => {
    if (onClick) onClick();
    setShowComments(!showComments);
  };

  return (
    <Card
      className={cn(
        "p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer bg-surface-container-lowest",
        phaseStyles.border,
      )}
      onClick={handleCardClick}
    >
      <div className="flex gap-6">
        {/* LEFT COLUMN: VOTE CHEVRONS */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVote?.(proposal.id, "up");
            }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronUp size={24} />
          </button>
          <span className="text-xl font-black text-on-surface">
            {proposal.votes}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVote?.(proposal.id, "down");
            }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
          >
            <ChevronDown size={24} />
          </button>
        </div>

        {/* RIGHT COLUMN: CONTENT */}
        <div className="flex-1">
          {/* Header Row: Phase Badge & Score */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-wrap gap-3">
              <span
                className={cn(
                  "px-4 py-1.5 text-xs font-black rounded-full uppercase flex items-center gap-1",
                  phaseStyles.badge,
                )}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {phaseStyles.icon}
                </span>
                {phaseStyles.text}
              </span>

              {proposal.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-right">
              <div
                className={cn(
                  "font-black text-xl leading-tight",
                  phaseStyles.scoreColor,
                )}
              >
                {proposal.confidenceScore}%
              </div>
              <div className="text-[10px] text-outline uppercase font-bold tracking-tighter">
                Confidence Score
              </div>
            </div>
          </div>

          {/* Content & Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Main Content */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-2xl font-bold text-on-background leading-relaxed font-body">
                {proposal.meaning}
              </p>

              {proposal.researcherNote && (
                <p className="text-sm text-on-surface-variant bg-tertiary-container/5 p-4 rounded-xl border-l-2 border-tertiary-container">
                  <strong>Researcher's Note:</strong> {proposal.researcherNote}
                </p>
              )}

              {proposal.arabicExample && (
                <div className="bg-surface p-6 rounded-2xl italic text-on-surface-variant border border-surface-variant/30">
                  <p
                    className="text-lg text-end mb-2 font-arabic font-bold"
                    dir="rtl"
                  >
                    {proposal.arabicExample}
                  </p>
                  {proposal.example && (
                    <p className="text-sm">"{proposal.example}"</p>
                  )}
                </div>
              )}

              {proposal.observedRegion && (
                <div
                  className={cn(
                    "flex items-center gap-4 py-3 px-5 rounded-2xl w-fit",
                    proposal.phase === "confirmed"
                      ? "bg-secondary/5 border border-secondary/10"
                      : "bg-surface-container",
                  )}
                >
                  <span
                    className={cn(
                      "material-symbols-outlined",
                      proposal.phase === "confirmed"
                        ? "text-secondary"
                        : "text-on-surface-variant",
                    )}
                  >
                    {proposal.phase === "confirmed" ? "location_on" : "map"}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      proposal.phase === "confirmed"
                        ? "text-secondary"
                        : "text-on-surface-variant",
                    )}
                  >
                    {proposal.phase === "confirmed"
                      ? "Confirmed in "
                      : "Observed: "}
                    {proposal.observedRegion}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons Column */}
            <div className="md:col-span-4 flex flex-col gap-3">
              {proposal.phase === "confirmed" && (
                <>
                  <button className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      add_circle
                    </span>{" "}
                    Add Example
                  </button>
                  <button className="w-full py-4 bg-surface-container-high text-error font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-error/5 transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      flag
                    </span>{" "}
                    Challenge
                  </button>
                </>
              )}

              {(proposal.phase === "semi-confirmed" ||
                proposal.phase === "review") && (
                <button className="w-full py-4 bg-surface-container-highest text-on-background rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    edit
                  </span>{" "}
                  Suggest Edit
                </button>
              )}
            </div>
          </div>

          {/* Footer (Author, Comments, Share) */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src={proposal.authorAvatar}
                  alt={proposal.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-surface"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">
                  Proposed by{" "}
                  <strong className="text-on-surface">{proposal.author}</strong>
                </p>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold">
                  {proposal.authorTitle ? `${proposal.authorTitle} • ` : ""}
                  {proposal.timestamp}
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
                <span>{isRtl ? "مشاركة" : "Share"}</span>
              </button>
            </div>
          </div>

          {/* Inline Comments Section */}
          {showComments && (
            <div
              className="mt-8 pt-8 border-t border-outline-variant/20 animate-in fade-in slide-in-from-top-4 duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent card collapse when interacting with comments
            >
              <h4 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
                {isRtl ? "النقاش" : "Discussion"}{" "}
                <span className="text-on-surface-variant text-sm font-normal">
                  ({proposal.commentsCount})
                </span>
              </h4>

              <div className="space-y-6 mb-6 max-h-[60vh] overflow-y-auto pe-4 scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-transparent">
                <CommentItem
                  comment={{
                    id: "c1",
                    author: isRtl ? "د. مريم" : "Dr. Mariam",
                    avatar:
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam",
                    text: isRtl
                      ? "أتفق مع هذا التعريف. في الساحل نستخدمها قليلاً بشكل مختلف لكن المعنى العام صحيح."
                      : "I agree with this definition. In the coastal regions we use it slightly differently but the core meaning stands.",
                    time: isRtl ? "منذ يومين" : "2 days ago",
                    likes: 14,
                  }}
                  onReport={() => {}}
                />
                <CommentItem
                  comment={{
                    id: "c2",
                    author: isRtl ? "كريم" : "Karim",
                    avatar:
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
                    text: isRtl
                      ? "هل يمكننا إضافة مثال آخر يوضح الفروق بين استخدامها للجمع والمفرد؟"
                      : "Can we add another example showing the difference when used for singular vs plural?",
                    time: isRtl ? "منذ ٥ ساعات" : "5 hours ago",
                    likes: 5,
                  }}
                  hasReplies={true}
                  onReport={() => {}}
                >
                  <CommentItem
                    comment={{
                      id: "c3",
                      author: proposal.author,
                      avatar: proposal.authorAvatar,
                      text: isRtl
                        ? "بالطبع كريم! سأقوم بتعديل الاقتراح قريباً."
                        : "Absolutely Karim! I will update the proposal suggestion soon.",
                      time: isRtl ? "منذ ساعة" : "1 hour ago",
                      likes: 8,
                    }}
                    isReply={true}
                    isLast={true}
                    onReport={() => {}}
                  />
                </CommentItem>
              </div>

              <div className="sticky bottom-0 bg-surface-container-lowest pt-4 pb-2 z-10 border-t border-outline-variant/10">
                <CommentInput
                  value={newComment}
                  onChange={setNewComment}
                  onSubmit={() => {
                    setNewComment("");
                  }}
                  placeholder={isRtl ? "أضف تعليقك..." : "Add your comment..."}
                  submitLabel={isRtl ? "نشر التعليق" : "Post Comment"}
                  avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Me"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProposalCard;
