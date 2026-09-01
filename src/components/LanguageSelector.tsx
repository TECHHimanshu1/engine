import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', rtl: true },
];

export function setSiteLanguageByCode(code: string) {
  const found = LANGUAGES.find(l => l.code.toLowerCase() === code.toLowerCase());
  if (found) {
    setSiteLanguage(found);
  }
}

export function setSiteLanguage(lang: Language) {
  // Check if target language is already active
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
  const currentLangCode = match ? match[1].split('/').pop() : 'en';
  
  if (currentLangCode === lang.code) {
    return;
  }

  // Update document direction for RTL languages (Arabic / Persian)
  if (lang.rtl) {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Set Google Translate cookies for root domain & current path
  const host = window.location.hostname;
  const cookieValue = `/en/${lang.code}`;
  
  document.cookie = `googtrans=${cookieValue}; path=/`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${host}`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=.${host}`;

  // Broadcast custom event so UI syncs
  window.dispatchEvent(new CustomEvent('appLanguageChanged', { detail: lang }));

  // Automatically refresh the page to apply full translation instantly
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

interface LanguageSelectorProps {
  isMobile?: boolean;
  currentCode?: string;
  onSelect?: (code: string) => void;
  align?: 'left' | 'right';
}

export function LanguageSelector({ isMobile = false, currentCode, onSelect, align = 'left' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    if (onSelect) {
      onSelect(lang.code.toUpperCase());
    }
    setSiteLanguage(lang);
  };

  useEffect(() => {
    // Sync if currentCode prop passed
    if (currentCode) {
      const found = LANGUAGES.find(l => l.code.toLowerCase() === currentCode.toLowerCase());
      if (found && found.code !== currentLang.code) {
        setCurrentLang(found);
      }
    }

    // Listen to window-wide language changes
    const handleGlobalLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail) {
        setCurrentLang(customEvent.detail);
      }
    };
    window.addEventListener('appLanguageChanged', handleGlobalLangChange);

    // 1. Check saved cookie preference
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match) {
      const langCode = match[1].split('/').pop();
      const found = LANGUAGES.find(l => l.code === langCode);
      if (found) {
        setCurrentLang(found);
        if (found.rtl) {
          document.documentElement.dir = 'rtl';
        }
      }
    } else {
      // 2. Automatic Region / Browser Language Detection
      const browserLang = (navigator.language || (navigator as any).userLanguage || 'en').toLowerCase();
      const primaryCode = browserLang.split('-')[0];

      const detectedLang = LANGUAGES.find(l => l.code === primaryCode);
      if (detectedLang && detectedLang.code !== 'en') {
        handleLanguageSelect(detectedLang);
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('appLanguageChanged', handleGlobalLangChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [currentCode]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center space-x-1.5 rounded-lg font-medium transition-all ${
          isMobile
            ? 'w-full px-4 py-2.5 bg-zinc-800 text-zinc-200 border border-zinc-700 text-sm justify-between'
            : 'px-2 py-1 sm:px-3 sm:py-1.5 bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 text-[11px] sm:text-xs shadow-sm'
        }`}
      >
        <div className="flex items-center space-x-1.5">
          <Globe className="w-3.5 h-3.5 text-red-600 shrink-0" />
          <span className="text-sm sm:text-base leading-none">{currentLang.flag}</span>
          <span className="font-bold tracking-tight text-[11px] sm:text-xs">{currentLang.nativeName}</span>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-zinc-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute z-[100] mt-2 w-48 rounded-xl bg-white shadow-2xl border border-zinc-200 py-1.5 ring-1 ring-black/5 ${
          isMobile ? 'left-0 right-0 w-full' : align === 'left' ? 'left-0' : 'right-0'
        }`}>
          <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 mb-1">
            Select Language
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-red-50 hover:text-[#D34747] transition-colors ${
                  isSelected ? 'bg-red-50/70 text-[#D34747] font-bold' : 'text-zinc-700 font-medium'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <div>
                    <div className="leading-tight">{lang.nativeName}</div>
                    <div className="text-[10px] text-zinc-400 font-normal">{lang.name}</div>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#D34747]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
