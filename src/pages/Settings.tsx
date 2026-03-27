import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Bell, 
  Globe, 
  ChevronRight, 
  Trash2, 
  Camera,
  Lock,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';

const Settings: React.FC = () => {
  const { isRtl } = useApp();
  const [notifications, setNotifications] = useState({
    newContributions: true,
    directMessages: true
  });

  const profileData = {
    name: isRtl ? 'لينا الفارسي' : 'Lina Al-Farsi',
    username: '@lina_urban',
    email: 'lina.farsi@urbanarabic.com',
    bio: isRtl 
      ? 'مؤرخة معمارية مهووسة بالعمارة النجدية وليالي الرياض المتلألئة. 🏙️✨' 
      : "Architectural historian obsessed with Najdi vernacular and Riyadh's neon nights. 🏙️✨",
    joined: isRtl ? 'انضم في مارس ٢٠٢٤' : 'Joined Mar 2024',
    role: isRtl ? 'خبير لغوي' : 'Linguistic Expert'
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 md:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-headline font-extrabold text-primary mb-2 tracking-tight">
          {isRtl ? 'إعدادات الحساب' : 'Account Settings'}
        </h1>
        <p className="text-on-surface-variant">
          {isRtl ? 'قم بتحديث ملفك الشخصي وتفضيلاتك وإعدادات الأمان.' : 'Update your profile, preferences, and security settings.'}
        </p>
      </header>

      <div className="space-y-8">
        {/* Profile Section */}
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-primary to-primary-container">
                  <img 
                    className="w-full h-full rounded-full object-cover border-4 border-surface shadow-lg" 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lina" 
                    alt="Lina Al-Farsi"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="absolute bottom-1 end-1 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-headline font-bold text-on-surface">{profileData.name}</h2>
                <p className="text-on-surface-variant font-medium">{profileData.username}</p>
                <p className="text-sm text-outline mt-1">{profileData.role} • {profileData.joined}</p>
              </div>
            </div>
            <Button variant="secondary">
              {isRtl ? 'تعديل الملف الشخصي' : 'Edit Public Profile'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-on-surface-variant ms-1">
                {isRtl ? 'اسم المستخدم' : 'Username'}
              </label>
              <Input 
                defaultValue="lina_urban" 
                fullWidth
              />
            </div>
            <div>
              <label className="text-sm font-bold text-on-surface-variant ms-1">
                {isRtl ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <Input 
                type="email" 
                defaultValue="lina.farsi@urbanarabic.com" 
                fullWidth
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-on-surface-variant ms-1">
                {isRtl ? 'نبذة قصيرة' : 'Short Bio'}
              </label>
              <Textarea 
                rows={3}
                defaultValue={profileData.bio}
              />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notifications Card */}
          <Card className="p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-2 rounded-xl text-primary">
                <Bell size={20} />
              </div>
              <h3 className="text-xl font-headline font-bold">
                {isRtl ? 'التنبيهات' : 'Notifications'}
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-on-surface">
                    {isRtl ? 'مساهمات جديدة' : 'New Contributions'}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {isRtl ? 'تنبيهات للهجاتك المفضلة' : 'Alerts for your favorite dialects'}
                  </p>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={notifications.newContributions}
                    onChange={() => setNotifications(prev => ({ ...prev, newContributions: !prev.newContributions }))}
                  />
                  <div className="w-11 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-on-surface">
                    {isRtl ? 'الرسائل المباشرة' : 'Direct Messages'}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {isRtl ? 'تنبيهات المحادثات الخاصة' : 'Private chat notifications'}
                  </p>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={notifications.directMessages}
                    onChange={() => setNotifications(prev => ({ ...prev, directMessages: !prev.directMessages }))}
                  />
                  <div className="w-11 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </Card>

          {/* Language & Region Card */}
          <Card className="p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-secondary/10 p-2 rounded-xl text-secondary">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-headline font-bold">
                {isRtl ? 'اللغة والمنطقة' : 'Language & Region'}
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {isRtl ? 'اللغة' : 'Language'}
                </label>
                <Select fullWidth className="bg-surface-container">
                  <option>{isRtl ? 'الإنجليزية (دولية)' : 'English (International)'}</option>
                  <option>{isRtl ? 'العربية (الفصحى)' : 'Arabic (Modern Standard)'}</option>
                  <option>{isRtl ? 'الفرنسية' : 'French'}</option>
                </Select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {isRtl ? 'المنطقة الرئيسية' : 'Home Region'}
                </label>
                <Select fullWidth className="bg-surface-container">
                  <option>{isRtl ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</option>
                  <option>{isRtl ? 'دبي، الإمارات' : 'Dubai, UAE'}</option>
                  <option>{isRtl ? 'بيروت، لبنان' : 'Beirut, Lebanon'}</option>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        {/* Security Section */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-tertiary/10 p-2 rounded-xl text-tertiary">
              <Shield size={20} />
            </div>
            <h3 className="text-xl font-headline font-bold">
              {isRtl ? 'الأمان والاعتماد' : 'Security & Credentials'}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <button className="flex-1 p-4 bg-surface-container-low rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <div className="text-start">
                  <p className="font-bold text-on-surface">{isRtl ? 'تغيير كلمة المرور' : 'Change Password'}</p>
                  <p className="text-xs text-on-surface-variant">{isRtl ? 'تحديث أمان حسابك' : 'Update your account security'}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-outline group-hover:text-primary transition-colors rtl:rotate-180" />
            </button>
            <button className="flex-1 p-4 bg-surface-container-low rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-surface-container transition-colors border border-outline-variant/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Smartphone size={20} />
                </div>
                <div className="text-start">
                  <p className="font-bold text-on-surface">{isRtl ? 'التحقق بخطوتين' : '2-Step Verification'}</p>
                  <p className="text-xs text-on-surface-variant">{isRtl ? 'طبقة إضافية من الحماية' : 'Extra layer of protection'}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-outline group-hover:text-primary transition-colors rtl:rotate-180" />
            </button>
          </div>
        </Card>

        {/* Danger Zone */}
        <section className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-destructive/10 p-4 rounded-2xl text-destructive">
              <Trash2 size={24} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface">
                {isRtl ? 'إلغاء تنشيط الحساب' : 'Deactivate Account'}
              </h4>
              <p className="text-sm text-on-surface-variant">
                {isRtl ? 'سيؤدي هذا إلى إخفاء ملفك الشخصي ومساهماتك مؤقتًا.' : 'This will temporarily hide your profile and contributions.'}
              </p>
            </div>
          </div>
          <Button variant="primary" className="bg-destructive hover:bg-destructive/90 text-on-destructive px-8 py-3 rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap">
            {isRtl ? 'إلغاء التنشيط' : 'Deactivate'}
          </Button>
        </section>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-outline text-sm">
          {isRtl ? '© ٢٠٢٤ مجلس المودرن. صنع بكل فخر في الرياض.' : '© 2024 Modern Majlis. Handcrafted with pride in Riyadh.'}
        </p>
        <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-primary/60 uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">{isRtl ? 'الخصوصية' : 'Privacy'}</a>
          <a className="hover:text-primary transition-colors" href="#">{isRtl ? 'الشروط' : 'Terms'}</a>
          <a className="hover:text-primary transition-colors" href="#">{isRtl ? 'المساعدة' : 'Help'}</a>
        </div>
      </footer>
    </div>
  );
};

export default Settings;
