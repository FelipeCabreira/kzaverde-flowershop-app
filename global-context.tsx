import React, { createContext, useMemo, useContext, useState, useEffect, PropsWithChildren } from 'react'
import { useLocale } from "next-intl";

interface Locale {
  name: string;
  short: string;
}

interface GlobalContextValue {
  locales: Locale[];
  locale: Locale;
  setLocales: (locales: Locale[]) => void;
  setLocale: (locale: Locale) => void;
}

const GlobalContext = createContext<GlobalContextValue | null>(null)!

interface GlobalProviderProps {
  initialLocales?: Locale[];
}

export const GlobalProvider = ({ initialLocales, children }: PropsWithChildren<GlobalProviderProps>) => {
  const localeValue = useLocale()
  const [locales, setLocales] = useState<Locale[]>(initialLocales ?? [{"name":"English","short":"en"}])
  const [locale, setLocale] = useState<Locale>({"name":"English","short":"en"})
  
  useEffect(() => {
    if (!locales) {
      return
    }

    const currentLangValue = locales.find((el) => el.short === localeValue)
    if (currentLangValue) {
      setLocale(currentLangValue)
    }
  }, [locales, localeValue])

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale
    }
  }, [locales, locale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}
