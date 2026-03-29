"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CURRENCIES = ["CAD", "USD", "EUR", "GBP", "AUD", "JPY", "MXN"];

type CurrencyContextType = {
  currency: string;
  setCurrency: (c: string) => void;
  CURRENCIES: string[];
  rates: Record<string, number>;
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "CAD",
  setCurrency: () => {},
  CURRENCIES,
  rates: {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState("CAD");
  const [rates, setRates] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem("preferred_currency");
    if (saved && CURRENCIES.includes(saved)) setCurrencyState(saved);
  }, []);

  useEffect(() => {
  fetch(`https://api.frankfurter.app/latest?from=CAD`)
    .then((r) => r.json())
    .then((data) => setRates({ ...data.rates, CAD: 1 }))
    .catch(() => {});
}, []);

  const setCurrency = (c: string) => {
    setCurrencyState(c);
    localStorage.setItem("preferred_currency", c);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, CURRENCIES, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);