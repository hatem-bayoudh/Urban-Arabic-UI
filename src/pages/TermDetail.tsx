import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  Send, 
  MessageSquare,
  ArrowLeft,
  MoreHorizontal,
  Flag,
  ChevronRight,
  Plus,
  TrendingUp,
  BarChart2,
  Mic2,
  MessageCircle,
  Heart,
  MoreVertical
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { MOCK_TERMS } from '../constants';

const TermDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isRtl } = useApp();
  const [comment, setComment] = useState('');
  const [sortBy, setSortBy] = useState('Relevant');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState<string | null>(null);
  const [showReport, setShowReport] = useState(false);

  // Find the term from mock data or use a default one for the demo
  const term = MOCK_TERMS.find(t => t.id === id) || MOCK_TERMS[0];

  const mockComments = [
    {
      id: '1',
      author: 'Layla M.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
      text: 'In Amman, we often say it as a greeting too, not just a farewell! It\'s like saying "Good work" as you walk past someone.',
      time: '2h ago',
      likes: 14,
      dislikes: 0,
      replies: []
    },
    {
      id: '2',
      author: 'Youssef B.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef',
      text: "The Moroccan equivalent is 'Lah iawn'! Interesting to see the difference in how 'Afiya' is used, since in Maghrebi it can sometimes mean fire. Context is everything!",
      time: '5h ago',
      likes: 28,
      dislikes: 2,
      replies: [
        {
          id: 'r1',
          author: 'Omar K.',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OmarK',
          text: 'Great point, Youssef! Dialectical differences are exactly why we started this Majlis.',
          time: 'Just now'
        }
      ]
    },
    {
      id: '3',
      author: 'Fatima Z.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
      text: "Does anyone have a good explanation for the Gulf version 'Gwak Allah'?",
      time: '8h ago',
      likes: 9,
      dislikes: 0,
      replies: []
    }
  ];

  const sortedComments = [...mockComments].sort((a, b) => {
    if (sortBy === 'Most Liked') return b.likes - a.likes;
    if (sortBy === 'Newest') {
      // Mock newest by comparing IDs or assuming higher ID is newer
      return parseInt(b.id) - parseInt(a.id);
    }
    return 0; // Relevant (default)
  });

  const relatedTerms = MOCK_TERMS.filter(t => t.id !== id).slice(0, 3);

  const regionalVariants = [
    { flag: '🇰🇼', term: 'Gwak Allah', dialect: 'Gulf Dialect' },
    { flag: '🇲🇦', term: 'Lah iawn', dialect: 'Maghrebi' },
    { flag: '🇪🇬', term: 'Allah yewafa\'ak', dialect: 'Egyptian' }
  ];

  const sortOptions = ['Relevant', 'Newest', 'Most Liked'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className={cn("mb-8 flex", isRtl ? "justify-end" : "justify-start")}>
        <button 
          onClick={() => navigate(-1)}
          className="p-3 bg-surface-container-low rounded-full text-on-surface hover:bg-primary/10 hover:text-primary transition-all shadow-sm group"
        >
          <ArrowLeft size={24} className={cn("transition-transform group-hover:-translate-x-1", isRtl && "rotate-180 group-hover:translate-x-1")} />
        </button>
      </div>

      <div className={cn("flex flex-col lg:flex-row gap-8", isRtl && "lg:flex-row-reverse")}>
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Hero Article */}
          <article className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10">
            <div className="relative h-[420px] w-full">
              <img 
                src="https://picsum.photos/seed/levant/1200/600" 
                alt="Levantine Scene" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className={cn(
                "absolute bottom-10 left-10 right-10 text-white",
                isRtl ? "text-right" : "text-left"
              )}>
                <nav className={cn("flex items-center gap-2 mb-6 text-sm font-medium text-white/70", isRtl && "flex-row-reverse")}>
                  <span>{isRtl ? 'استكشاف' : 'Explore'}</span>
                  <ChevronRight size={14} className={cn(isRtl && "rotate-180")} />
                  <span>{term.region}</span>
                </nav>
                <div className={cn("flex flex-wrap items-end justify-between gap-6", isRtl && "flex-row-reverse")}>
                  <div className="space-y-2">
                    <div className={cn("flex items-center gap-3", isRtl && "flex-row-reverse")}>
                      <h1 className="text-5xl md:text-6xl font-black font-headline tracking-tight drop-shadow-lg">
                        {term.term}
                      </h1>
                      <span className="text-4xl shadow-sm">{term.flag}</span>
                    </div>
                    {term.arabicTerm && (
                      <p className="text-2xl md:text-3xl font-headline font-medium text-white/90 italic drop-shadow-md">
                        {term.arabicTerm}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg" icon={<Bookmark size={20} />}>
                      {isRtl ? 'حفظ المصطلح' : 'Save Term'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <div className={cn("flex flex-col lg:flex-row gap-10", isRtl && "lg:flex-row-reverse")}>
                {/* Left: Content */}
                <div className="flex-1 space-y-8">
                  <section className={isRtl ? "text-right" : "text-left"}>
                    <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                      {isRtl ? 'الأصل والجوهر' : 'Etymology & Essence'}
                    </h3>
                    <p dir="auto" className="text-xl leading-relaxed text-on-surface font-body font-medium">
                      {term.meaning}
                    </p>
                  </section>

                  {term.example && (
                    <div className={cn(
                      "bg-primary/5 p-6 rounded-2xl border-primary",
                      isRtl ? "border-r-4 text-right" : "border-l-4 text-left"
                    )}>
                      <h4 className={cn("text-sm font-bold text-primary mb-2 flex items-center gap-2", isRtl && "flex-row-reverse")}>
                        <Mic2 size={16} />
                        {isRtl ? 'الاستخدام السياقي' : 'Contextual Usage'}
                      </h4>
                      <p dir="auto" className="text-lg font-headline font-semibold text-on-surface italic">
                        "{term.example}"
                      </p>
                    </div>
                  )}

                  <div className={cn(
                    "flex items-center gap-6 pt-4 border-t border-outline-variant/20",
                    isRtl ? "flex-row-reverse" : "flex-row"
                  )}>
                    <div className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "flex-row")}>
                      <img 
                        src={term.authorAvatar} 
                        alt={term.author} 
                        className="w-10 h-10 rounded-full ring-2 ring-primary/10"
                        referrerPolicy="no-referrer"
                      />
                      <div className={isRtl ? "text-right" : "text-left"}>
                        <p className="font-bold text-on-surface">{term.author}</p>
                        <p className="text-xs text-on-surface-variant">{isRtl ? 'مساهم خبير' : 'Senior Contributor'}</p>
                      </div>
                    </div>
                    <div className={cn("flex gap-1", isRtl && "flex-row-reverse")}>
                      <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant">
                        <Share2 size={20} />
                      </button>
                      <div className="relative">
                        <button 
                          onClick={() => setShowReportDropdown(!showReportDropdown)}
                          className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant"
                        >
                          <Flag size={20} />
                        </button>
                        {showReportDropdown && (
                          <div className={cn(
                            "absolute bottom-full mb-2 w-48 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-xl z-50 py-2",
                            isRtl ? "left-0" : "right-0"
                          )}>
                            <button className={cn(
                              "w-full px-4 py-2 text-sm hover:bg-surface-container transition-colors text-error font-bold",
                              isRtl ? "text-right" : "text-left"
                            )}>
                              {isRtl ? 'إبلاغ عن المصطلح' : 'Report Term'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Regional Variants */}
                <div className="w-full lg:w-80">
                  <div className={cn("flex items-center justify-between mb-6", isRtl && "flex-row-reverse")}>
                    <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                      {isRtl ? 'المتغيرات الإقليمية' : 'Regional Variants'}
                    </h3>
                    <button className={cn("text-primary hover:underline text-xs font-bold flex items-center gap-1", isRtl && "flex-row-reverse")}>
                      <Plus size={14} /> {isRtl ? 'إضافة' : 'Add'}
                    </button>
                  </div>
                  <div className="space-y-3">
                    {regionalVariants.map((variant, i) => (
                      <a 
                        key={i}
                        href="#" 
                        className={cn(
                          "group flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/50 transition-all hover:shadow-sm",
                          isRtl && "flex-row-reverse"
                        )}
                      >
                        <div className={cn("flex items-center gap-3", isRtl && "flex-row-reverse")}>
                          <span className="text-2xl filter drop-shadow-sm">{variant.flag}</span>
                          <div className={isRtl ? "text-right" : "text-left"}>
                            <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{variant.term}</p>
                            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">{variant.dialect}</p>
                          </div>
                        </div>
                        <ChevronRight size={18} className={cn("text-on-surface-variant group-hover:translate-x-0.5 transition-transform", isRtl && "rotate-180 group-hover:-translate-x-0.5")} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className={cn(
                "mt-12 flex items-center justify-between border-t border-outline-variant/20 pt-8",
                isRtl ? "flex-row-reverse" : "flex-row"
              )}>
                <div className="flex items-center gap-4">
                  <div className={cn("flex items-center bg-surface-container-low rounded-full p-1 border border-outline-variant/20", isRtl && "flex-row-reverse")}>
                    <button className={cn("flex items-center gap-2 px-5 py-2 rounded-full hover:bg-surface-container-lowest transition-all text-primary active:scale-95 group", isRtl && "flex-row-reverse")}>
                      <ThumbsUp size={20} className="group-active:scale-125 transition-transform" />
                      <span className="font-bold">{(term.likes / 1000).toFixed(1)}k</span>
                    </button>
                    <div className="w-px h-5 bg-outline-variant/40" />
                    <button className={cn("flex items-center gap-2 px-5 py-2 rounded-full hover:bg-surface-container-lowest transition-all text-on-surface-variant active:scale-95", isRtl && "flex-row-reverse")}>
                      <ThumbsDown size={20} />
                      <span className="font-bold">{term.dislikes || 0}</span>
                    </button>
                  </div>
                </div>
                <div className={cn("flex items-center gap-6", isRtl ? "flex-row-reverse" : "flex-row")}>
                  <div className={cn("flex -space-x-2", isRtl && "space-x-reverse")}>
                    {[1, 2].map(i => (
                      <img 
                        key={i}
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} 
                        alt="User" 
                        className="w-8 h-8 rounded-full border-2 border-surface" 
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold border-2 border-surface text-on-surface-variant">+39</div>
                  </div>
                  <span className="text-sm font-semibold text-on-surface-variant">
                    {term.comments} {isRtl ? 'تعليقات' : 'Comments'}
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Community Insights (Comments) Section */}
          <section className="bg-surface-container-lowest rounded-2xl p-10 shadow-sm border border-outline-variant/20">
            <div className={cn("flex items-center justify-between mb-10", isRtl && "flex-row-reverse")}>
              <h2 className={cn("text-2xl font-extrabold flex items-center gap-3", isRtl && "flex-row-reverse")}>
                {isRtl ? 'رؤى المجتمع' : 'Community Insights'} 
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">{term.comments}</span>
              </h2>
              <div className={cn("flex items-center gap-4", isRtl && "flex-row-reverse")}>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  {isRtl ? 'ترتيب حسب:' : 'Sort by:'}
                </span>
                <div className="relative">
                  <button 
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className={cn("flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all text-sm font-bold text-on-surface", isRtl && "flex-row-reverse")}
                  >
                    {isRtl ? (sortBy === 'Relevant' ? 'الأكثر صلة' : sortBy === 'Newest' ? 'الأحدث' : 'الأكثر إعجاباً') : sortBy}
                    <MoreHorizontal size={18} className="rotate-90" />
                  </button>
                  {showSortDropdown && (
                    <div className={cn(
                      "absolute top-full mt-2 w-40 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-xl z-50 py-2",
                      isRtl ? "left-0" : "right-0"
                    )}>
                      {sortOptions.map(option => (
                        <button 
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setShowSortDropdown(false);
                          }}
                          className={cn(
                            "w-full px-4 py-2 text-sm text-left hover:bg-surface-container transition-colors font-medium",
                            isRtl && "text-right",
                            sortBy === option && "text-primary font-bold"
                          )}
                        >
                          {isRtl ? (option === 'Relevant' ? 'الأكثر صلة' : option === 'Newest' ? 'الأحدث' : 'الأكثر إعجاباً') : option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Add Comment */}
            <div className={cn("flex gap-5 mb-12", isRtl && "flex-row-reverse")}>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me" 
                alt="Me" 
                className="w-12 h-12 rounded-full border border-outline-variant/30"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 space-y-3">
                <textarea 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  dir="auto"
                  className={cn(
                    "w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-body text-sm min-h-[120px] text-start",
                  )}
                  placeholder={isRtl ? "أضف رؤيتك الإقليمية أو سياقك الثقافي..." : "Add your regional insight or cultural context..."}
                />
                <div className={cn("flex", isRtl ? "justify-start" : "justify-end")}>
                  <Button className="px-8 py-2.5 shadow-md" icon={<Send size={18} />}>
                    {isRtl ? 'نشر الرؤية' : 'Post Insight'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Comment List */}
            <div className="space-y-10">
              {sortedComments.map((c) => (
                <div key={c.id} className={cn("group flex gap-5", isRtl && "flex-row-reverse")}>
                  <img 
                    src={c.avatar} 
                    alt={c.author} 
                    className="w-12 h-12 rounded-full ring-2 ring-transparent group-hover:ring-primary/20 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1">
                    <div className={cn(
                      "bg-surface-container-low rounded-2xl p-5 border border-outline-variant/10",
                      isRtl ? "rounded-tr-none" : "rounded-tl-none"
                    )}>
                      <div className={cn("flex justify-between items-center mb-2", isRtl && "flex-row-reverse")}>
                        <div className={cn("flex items-center gap-2", isRtl && "flex-row-reverse")}>
                          <span className="font-bold text-on-surface">{c.author}</span>
                          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                          <span className="text-xs text-on-surface-variant font-medium">{c.time}</span>
                        </div>
                        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                      <p dir="auto" className="text-on-surface-variant leading-relaxed font-medium text-start">
                        {c.text}
                      </p>
                    </div>
                    <div className={cn("flex items-center justify-between mt-3 px-2", isRtl && "flex-row-reverse")}>
                      <div className={cn("flex items-center gap-6", isRtl && "flex-row-reverse")}>
                        <button className={cn("flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors group", isRtl && "flex-row-reverse")}>
                          <Heart size={16} className="group-hover:fill-primary transition-colors" /> {c.likes}
                        </button>
                        <button className="text-xs font-bold text-primary hover:underline">
                          {isRtl ? 'رد' : 'Reply'}
                        </button>
                      </div>
                      
                      <div className="relative">
                        <button 
                          onClick={() => setShowReportDropdown(showReportDropdown === c.id ? null : c.id)}
                          className="p-1 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant"
                        >
                          <MoreVertical size={16} />
                        </button>
                        
                        {showReportDropdown === c.id && (
                          <div className={cn(
                            "absolute bottom-full mb-2 w-32 bg-white rounded-xl shadow-xl border border-outline-variant/10 z-50 py-1",
                            isRtl ? "left-0" : "right-0"
                          )}>
                            <button 
                              onClick={() => {
                                setShowReport(true);
                                setShowReportDropdown(null);
                              }}
                              className={cn(
                                "w-full px-4 py-2 text-xs font-bold text-error hover:bg-error/5 flex items-center gap-2 transition-colors",
                                isRtl && "flex-row-reverse"
                              )}
                            >
                              <Flag size={14} />
                              {isRtl ? 'إبلاغ' : 'Report'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Nested Replies */}
                    {c.replies && c.replies.length > 0 && (
                      <div className={cn(
                        "mt-6 space-y-6",
                        isRtl ? "mr-4 pr-6 border-r-2 border-outline-variant/30" : "ml-4 pl-6 border-l-2 border-outline-variant/30"
                      )}>
                        {c.replies.map((reply) => (
                          <div key={reply.id} className={cn("flex gap-4", isRtl && "flex-row-reverse")}>
                            <img 
                              src={reply.avatar} 
                              alt={reply.author} 
                              className="w-8 h-8 rounded-full"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1">
                              <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/10">
                                <div className={cn("flex items-center gap-2 mb-1", isRtl && "flex-row-reverse")}>
                                  <span className="text-xs font-bold text-on-surface">{reply.author}</span>
                                  <span className="text-[10px] text-on-surface-variant">{reply.time}</span>
                                </div>
                                <p dir="auto" className="text-sm text-on-surface-variant leading-relaxed text-start">
                                  {reply.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-12 py-4 rounded-xl border-2 border-dashed border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-bold text-primary">
              {isRtl ? 'عرض المزيد من رؤى المجتمع' : 'View More Community Insights'}
            </button>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-80 space-y-6">
          {/* Stats Card */}
          <Card className="bg-primary text-white rounded-2xl p-6 shadow-xl relative overflow-hidden border-none">
            <div className="absolute -right-6 -bottom-6 opacity-10">
              <BarChart2 size={120} />
            </div>
            <h4 className={cn("font-headline font-bold text-lg mb-6 flex items-center gap-2", isRtl && "flex-row-reverse")}>
              <BarChart2 size={20} />
              {isRtl ? 'إحصائيات المجلس' : 'Majlis Analytics'}
            </h4>
            <div className="space-y-4 relative z-10">
              <div className={cn("bg-white/10 rounded-xl p-3 flex justify-between items-center backdrop-blur-sm border border-white/5", isRtl && "flex-row-reverse")}>
                <span className="text-xs font-medium text-white/80">{isRtl ? 'الاستخدام اليومي' : 'Daily Usage'}</span>
                <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded text-white">{isRtl ? 'مرتفع' : 'High'}</span>
              </div>
              <div className={cn("bg-white/10 rounded-xl p-3 flex justify-between items-center backdrop-blur-sm border border-white/5", isRtl && "flex-row-reverse")}>
                <span className="text-xs font-medium text-white/80">{isRtl ? 'الانتشار الإقليمي' : 'Regional Presence'}</span>
                <span className="text-xs font-bold">{isRtl ? 'على مستوى بلاد الشام' : 'Levant Wide'}</span>
              </div>
              <div className={cn("bg-white/10 rounded-xl p-3 flex justify-between items-center backdrop-blur-sm border border-white/5", isRtl && "flex-row-reverse")}>
                <span className="text-xs font-medium text-white/80">{isRtl ? 'المساهمون النشطون' : 'Active Contributors'}</span>
                <span className="text-xs font-bold">624</span>
              </div>
            </div>
          </Card>

          {/* Related Terms Card */}
          <Card className="p-6 border border-outline-variant/30 shadow-sm">
            <h4 className={cn("font-headline font-bold text-on-surface mb-6 flex items-center gap-2", isRtl && "flex-row-reverse")}>
              <MessageCircle size={20} className="text-primary" />
              {isRtl ? 'مصطلحات ذات صلة' : 'Related Terms'}
            </h4>
            <div className="space-y-4">
              {relatedTerms.map((rt) => (
                <div 
                  key={rt.id}
                  onClick={() => navigate(`/term/${rt.id}`)}
                  className={cn(
                    "group cursor-pointer flex items-center justify-between p-3 rounded-xl hover:bg-surface-container transition-all",
                    isRtl && "flex-row-reverse"
                  )}
                >
                  <div className={cn("flex items-center gap-3", isRtl && "flex-row-reverse")}>
                    <span className="text-xl">{rt.flag}</span>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{rt.term}</p>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{rt.region}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={cn("text-on-surface-variant group-hover:translate-x-1 transition-transform", isRtl && "rotate-180 group-hover:-translate-x-1")} />
                </div>
              ))}
            </div>
          </Card>

          {/* Trending Card */}
          <Card className="p-6 border border-outline-variant/30 shadow-sm">
            <div className={cn("flex items-center justify-between mb-6", isRtl && "flex-row-reverse")}>
              <h4 className="font-headline font-bold text-on-surface">
                {isRtl ? `رائج في ${term.region}` : `Hot in ${term.region}`}
              </h4>
              <TrendingUp size={18} className="text-primary" />
            </div>
            <div className={cn("flex flex-wrap gap-2", isRtl && "flex-row-reverse")}>
              {['#Yallah', '#Ahlan', '#Shu-fi-ma-fi', '#Mawal', '#Dabke'].map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 rounded-lg text-xs font-bold text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Footer Links */}
          <div className={cn("px-4 py-2 text-[10px] text-on-surface-variant font-bold flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-widest", isRtl && "flex-row-reverse")}>
            <a className="hover:text-primary" href="#">{isRtl ? 'حول' : 'About'}</a>
            <a className="hover:text-primary" href="#">{isRtl ? 'إرشادات' : 'Guidelines'}</a>
            <a className="hover:text-primary" href="#">{isRtl ? 'الخصوصية' : 'Privacy'}</a>
            <span>© 2024 Modern Majlis</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TermDetail;
