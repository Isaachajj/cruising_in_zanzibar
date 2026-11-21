import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import englishTranslations from '../locales/en/translation.json';
import russianTranslations from '../locales/ru/translation.json';
import frenchTranslations from '../locales/fr/translation.json';
import germanTranslations from '../locales/de/translation.json';
import italianTranslations from '../locales/it/translation.json';

const LANGUAGE_STORAGE_KEY = 'cruising-in-zanzibar-language';
const LanguageContext = createContext(null);
const knownTextSources = new WeakMap();
const knownAttributeSources = new WeakMap();
const translationsByLanguage = { ru: russianTranslations, fr: frenchTranslations, de: germanTranslations, it: italianTranslations };
const localizedToEnglish = Object.fromEntries(
  Object.values(translationsByLanguage).flatMap((translations) =>
    Object.entries(translations).map(([english, localized]) => [localized, english])
  )
);
const phraseTranslations = Object.keys(englishTranslations)
  .filter((english) => english.length >= 4)
  .sort((left, right) => right.length - left.length);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const phraseTranslationPattern = new RegExp(phraseTranslations.map(escapeRegExp).join('|'), 'g');

export const translatePhrase = (phrase, language = 'en') => {
  const translations = translationsByLanguage[language];
  if (!translations || !phrase) return phrase;
  if (translations[phrase]) return translations[phrase];
  const fullBrandToken = '\u0000CIZ_FULL_BRAND\u0000';
  const shortBrandToken = '\u0000CIZ_BRAND\u0000';
  const brandSafePhrase = phrase
    .replace(/Cruising in Zanzibar Tours & Safaris/g, fullBrandToken)
    .replace(/Cruising in Zanzibar/g, shortBrandToken);
  const translated = brandSafePhrase
    .replace(phraseTranslationPattern, (english) => translations[english] || english)
    .replaceAll(fullBrandToken, 'Cruising in Zanzibar Tours & Safaris')
    .replaceAll(shortBrandToken, 'Cruising in Zanzibar');
  if (language === 'ru') {
    return translated
      .replace(/^(\d+)\s+Hours?$/i, '$1 ч.')
      .replace(/^(\d+)\s+Days?\s*\/\s*(\d+)\s+Nights?$/i, '$1 дн. / $2 ноч.')
      .replace(/^(\d+)\s+Days?$/i, '$1 дн.')
      .replace(/^(\d+)\s+Nights?$/i, '$1 ноч.')
      .replace(/^(\d+)\s+Reviews?$/i, '$1 отзывов')
      .replace(/^Previous (.+) slide$/i, 'Предыдущий слайд: $1')
      .replace(/^Next (.+) slide$/i, 'Следующий слайд: $1')
      .replace(/^Go to (.+) slide (\d+)$/i, 'Перейти к слайду $2: $1');
  }
  if (language === 'de') {
    return translated
      .replace(/^(\d+)\s+Hours?$/i, '$1 Std.')
      .replace(/^(\d+)\s+Days?\s*\/\s*(\d+)\s+Nights?$/i, '$1 Tage / $2 Nächte')
      .replace(/^(\d+)\s+Days?$/i, '$1 Tage')
      .replace(/^(\d+)\s+Nights?$/i, '$1 Nächte')
      .replace(/^(\d+)\s+Reviews?$/i, '$1 Bewertungen')
      .replace(/^Previous (.+) slide$/i, 'Vorherige Folie: $1')
      .replace(/^Next (.+) slide$/i, 'Nächste Folie: $1')
      .replace(/^Go to (.+) slide (\d+)$/i, 'Zu Folie $2 gehen: $1');
  }
  if (language === 'it') {
    return translated
      .replace(/^(\d+)\s+Hours?$/i, (_, count) => `${count} ${count === '1' ? 'ora' : 'ore'}`)
      .replace(/^(\d+)\s+Days?\s*\/\s*(\d+)\s+Nights?$/i, (_, days, nights) => `${days} ${days === '1' ? 'giorno' : 'giorni'} / ${nights} ${nights === '1' ? 'notte' : 'notti'}`)
      .replace(/^(\d+)\s+Days?$/i, (_, count) => `${count} ${count === '1' ? 'giorno' : 'giorni'}`)
      .replace(/^(\d+)\s+Nights?$/i, (_, count) => `${count} ${count === '1' ? 'notte' : 'notti'}`)
      .replace(/^(\d+)\s+Reviews?$/i, '$1 recensioni')
      .replace(/^Previous (.+) slide$/i, 'Diapositiva precedente: $1')
      .replace(/^Next (.+) slide$/i, 'Diapositiva successiva: $1')
      .replace(/^Go to (.+) slide (\d+)$/i, 'Vai alla diapositiva $2: $1');
  }
  return translated
    .replace(/^(\d+)\s+Hours?$/i, '$1 h')
    .replace(/^(\d+)\s+Days?\s*\/\s*(\d+)\s+Nights?$/i, '$1 jours / $2 nuits')
    .replace(/^(\d+)\s+Days?$/i, '$1 jours')
    .replace(/^(\d+)\s+Nights?$/i, '$1 nuits')
    .replace(/^(\d+)\s+Reviews?$/i, '$1 avis')
    .replace(/^Previous (.+) slide$/i, 'Diapositive précédente : $1')
    .replace(/^Next (.+) slide$/i, 'Diapositive suivante : $1')
    .replace(/^Go to (.+) slide (\d+)$/i, 'Aller à la diapositive $2 : $1');
};

const preserveWhitespace = (original, translated) => {
  const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return `${match?.[1] || ''}${translated}${match?.[3] || ''}`;
};

const sourceForText = (node, currentText, knownSources) => {
  const saved = knownSources.get(node);
  if (saved && currentText.trim() === saved.translated) return saved.source;
  return localizedToEnglish[currentText.trim()] || currentText.trim();
};

const translateTextNode = (node, language, knownSources) => {
  const currentText = node.nodeValue || '';
  if (!currentText.trim()) return;
  const parent = node.parentElement;
  if (!parent || parent.closest('script, style, noscript, textarea, input, [contenteditable="true"], svg')) return;

  const source = sourceForText(node, currentText, knownSources);
  const translated = translatePhrase(source, language);
  const output = preserveWhitespace(currentText, translated);
  knownSources.set(node, { source, translated });
  if (output !== currentText) node.nodeValue = output;
};

const translateAttribute = (element, attributeName, language, knownSources) => {
  const currentValue = element.getAttribute(attributeName);
  if (!currentValue) return;
  let saved = knownSources.get(element);
  if (!saved) {
    saved = {};
    knownSources.set(element, saved);
  }

  const prior = saved[attributeName];
  const source = prior && currentValue === prior.translated
    ? prior.source
    : localizedToEnglish[currentValue] || currentValue;
  const translated = translatePhrase(source, language);
  saved[attributeName] = { source, translated };
  if (translated !== currentValue) element.setAttribute(attributeName, translated);
};

const localizeElementAttributes = (element, language, attributeSources) => {
  ['placeholder', 'aria-label', 'title', 'alt'].forEach((attributeName) => {
    translateAttribute(element, attributeName, language, attributeSources);
  });
};

const localizeSubtree = (root, language, textSources, attributeSources) => {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, language, textSources);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

  if (root.nodeType === Node.ELEMENT_NODE) localizeElementAttributes(root, language, attributeSources);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode = walker.nextNode();
  while (textNode) {
    translateTextNode(textNode, language, textSources);
    textNode = walker.nextNode();
  }
  if (root.querySelectorAll) {
    root.querySelectorAll('[placeholder], [aria-label], [title], [alt]').forEach((element) => {
      localizeElementAttributes(element, language, attributeSources);
    });
  }
};

const readSavedLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return ['en', 'ru', 'fr', 'de', 'it'].includes(savedLanguage) ? savedLanguage : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(readSavedLanguage);
  const setLanguage = useCallback((nextLanguage) => {
    const next = ['ru', 'fr', 'de', 'it'].includes(nextLanguage) ? nextLanguage : 'en';
    setLanguageState(next);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // The selected language still works for this visit if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const translateCurrentPage = () => localizeSubtree(document.body, language, knownTextSources, knownAttributeSources);
    translateCurrentPage();

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === 'characterData') {
          translateTextNode(record.target, language, knownTextSources);
          return;
        }
        if (record.type === 'attributes') {
          localizeElementAttributes(record.target, language, knownAttributeSources);
          return;
        }
        record.addedNodes.forEach((node) => localizeSubtree(node, language, knownTextSources, knownAttributeSources));
      });
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'aria-label', 'title', 'alt']
    });
    return () => observer.disconnect();
  }, [language]);

  const contextValue = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
