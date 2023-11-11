'use client';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import Button from '../button';
import { useTranslation } from '../../i18n/client';

type Props = {
  lang: Languages;
};

const LangSwitcher = ({ lang }: Props) => {
  const { t, i18n } = useTranslation();
  const segments = useSelectedLayoutSegments();

  const otherLang = useMemo(() => {
    return lang === 'ar' ? 'en' : 'ar';
  }, [lang]);

  const href = useMemo(() => {
    let newUrl = `/${otherLang}`;
    if (segments.length > 0) {
      newUrl += `/${segments.join('/')}`;
    }
    return newUrl;
  }, [otherLang, segments]);

  return (
    <Button
      as={Link}
      href={href}
      onClick={() => i18n.changeLanguage(otherLang)}
      shape='text'
      theme='white'
    >
      {t(otherLang)}
    </Button>
  );
};

export default LangSwitcher;
