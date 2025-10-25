"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Truck,
  ArrowRight,
  Moon,
  Sun,
  Palette,
} from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ThemeKey = "blue" | "emerald" | "violet";

const THEME: Record<ThemeKey, { gradient: string; accent: string; hoverAccent: string }>= {
  blue: {
    gradient: "from-blue-600 to-purple-600",
    accent: "bg-blue-600",
    hoverAccent: "hover:text-blue-600",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-600",
    accent: "bg-emerald-600",
    hoverAccent: "hover:text-emerald-600",
  },
  violet: {
    gradient: "from-violet-600 to-fuchsia-600",
    accent: "bg-violet-600",
    hoverAccent: "hover:text-violet-600",
  },
};

export default function PaymentProviderSite() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState<ThemeKey>("blue");
  const [cartCount, setCartCount] = useState(0);

  // persist theme + dark in localStorage (optional)
  useEffect(() => {
    const savedDark = localStorage.getItem("pp_dark");
    const savedTheme = localStorage.getItem("pp_theme") as ThemeKey | null;
    if (savedDark) setDark(savedDark === "true");
    if (savedTheme && THEME[savedTheme]) setTheme(savedTheme);
  }, []);
  useEffect(() => {
    localStorage.setItem("pp_dark", String(dark));
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("pp_theme", theme);
  }, [theme]);

  const products = [
    {
      id: 1,
      name: "Produkt A",
      price: "658,00 zł",
      badge: "Bestseller",
      img:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Produkt B",
      price: "1 849,00 zł",
      badge: "Nowość",
      img:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Produkt C",
      price: "0,00 zł",
      badge: "Promocja",
      img:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const payments = ["Visa", "Mastercard", "American Express", "BLIK", "Apple Pay", "Google Pay"];

  const palette = useMemo(() => THEME[theme], [theme]);

  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* Top bar */}
      <div className="w-full text-center text-xs py-2 border-b bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
        Darmowa dostawa od 199 zł • 30 dni na zwrot
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/70 backdrop-blur border-b dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={`${BASE}/logo-pp.svg`} alt="PaymentProvider logo" width={36} height={36} priority />
            <span className="font-semibold text-lg">PaymentProvider</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-nas" className="hover:opacity-80">O nas</a>
            <a href="#oferta" className="hover:opacity-80">Oferta</a>
            <a href="#sklep" className="hover:opacity-80">Sklep</a>
            <a href="#kontakt" className="hover:opacity-80">Kontakt</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme picker */}
            <div className="hidden sm:flex items-center gap-1 rounded-2xl border dark:border-slate-700 px-1 py-1">
              <span className="px-2 text-xs text-slate-500 dark:text-slate-400 inline-flex items-center gap-1"><Palette className="w-3.5 h-3.5"/>Motyw</span>
              {(["blue", "emerald", "violet"] as ThemeKey[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`h-6 w-6 rounded-full border dark:border-slate-700 ${
                    t === "blue" && "bg-gradient-to-br from-blue-500 to-purple-600"
                  } ${t === "emerald" && "bg-gradient-to-br from-emerald-500 to-teal-600"} ${
                    t === "violet" && "bg-gradient-to-br from-violet-500 to-fuchsia-600"
                  } ${theme === t ? "ring-2 ring-offset-2 ring-slate-300 dark:ring-slate-500" : ""}`}
                  aria-label={`Zmień motyw na ${t}`}
                />
              ))}
            </div>

            {/* Dark mode */}
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:shadow-md dark:border-slate-700"
              aria-label="Przełącz tryb ciemny"
              title="Tryb ciemny"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} {dark ? "Jasny" : "Ciemny"}
            </button>

            <button className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md dark:border-slate-700">
              <ShoppingCart className="w-4 h-4" /> Koszyk ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16" id="o-nas">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold leading-tight">
              Globalne rozwiązania płatnicze {" "}
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${palette.gradient}`}>
                dla Twojego biznesu
              </span>
            </motion.h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
              PaymentProviderGlobal.com — nowoczesny dostawca płatności online i terminali SoftPOS dla firm każdej wielkości.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#sklep" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border text-sm font-medium hover:shadow-md dark:border-slate-700">
                <ArrowRight className="w-4 h-4 mr-2" /> Zobacz ofertę
              </a>
              <a href="#kontakt" className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white text-sm font-medium hover:opacity-90 ${palette.accent}`}>
                Skontaktuj się z nami
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <CreditCard className="w-5 h-5" />, title: "Proste płatności", desc: "Karta, BLIK, portfele cyfrowe" },
                { icon: <Truck className="w-5 h-5" />, title: "Szybka dostawa", desc: "InPost, kurier, odbiór" },
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Bezpieczeństwo", desc: "Szyfrowanie i RODO" },
              ].map((f, i) => (
                <div key={i} className="rounded-2xl border p-4 dark:border-slate-700">
                  <div className="flex items-center gap-2 font-medium">{f.icon}{f.title}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <Image src="/hero.jpg" alt="Płatności online — hero" width={1600} height={1000} className="w-full rounded-3xl shadow-2xl object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Sklep (lista produktów) */}
      <section className="py-16" id="sklep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Polecane produkty</h2>
            <a href="#" className={`text-sm underline underline-offset-4 ${palette.hoverAccent}`}>Zobacz wszystkie</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="group rounded-2xl border bg-white dark:bg-slate-900 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.img} alt={p.name
