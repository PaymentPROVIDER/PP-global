"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const BASE =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/PP-global" : "");

export default function PaymentProviderSite() {
  const products = [
    {
      id: 1,
      name: "Terminal Ingenico",
      price: "499,00 zł",
      badge: "Bestseller",
      img: `${BASE}/products/terminal-ingenico.jpg`,
    },
    {
      id: 2,
      name: "Terminal EyePOS by EYEID",
      price: "499,00 zł",
      badge: "Innowacja",
      img: `${BASE}/products/terminal-eyeid.jpg`,
    },
    {
      id: 3,
      name: "Aplikacja SoftPOS na telefon",
      price: "4,99 zł",
      badge: "Nowość",
      img: `${BASE}/products/softpos-app.jpg`,
    },
  ];

  const features = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Proste płatności",
      desc: "Karta, BLIK, portfele cyfrowe",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Szybka dostawa",
      desc: "InPost, kurier, odbiór",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Bezpieczeństwo",
      desc: "Szyfrowanie i RODO",
    },
  ];

  const payments = [
    "Visa",
    "Mastercard",
    "American Express",
    "BLIK",
    "Apple Pay",
    "Google Pay",
  ];

  return (
    <div className="min-h-screen bg-slate-400 text-slate-900">
      {/* Pasek info */}
      <div className="w-full text-center text-xs py-2 border-b bg-slate-400">
        Darmowa dostawa od 199 zł • 30 dni na zwrot
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-slate-400 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={`${BASE}/logo-pp.svg`}
              alt="PaymentProvider logo"
              width={36}
              height={36}
              className="w-9 h-9"
              priority
            />
            <span className="font-semibold text-lg">PaymentProvider</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-nas">O nas</a>
            <a href="#oferta">Oferta</a>
            <a href="#sklep">Sklep</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm bg-slate-400 hover:shadow-md">
            <ShoppingCart className="w-4 h-4" /> Koszyk (0)
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Globalne rozwiązania płatnicze{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-800">
                dla Twojego biznesu
              </span>
            </motion.h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              PaymentProviderGlobal.com — nowoczesny dostawca płatności online i
              terminali SoftPOS dla firm każdej wielkości.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#sklep"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border bg-slate-400 text-sm font-medium hover:shadow-md"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Zobacz ofertę
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-slate-300 text-white text-sm font-medium hover:opacity-90"
              >
                Skontaktuj się z nami
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl border p-4 bg-slate-400">
                  <div className="flex items-center gap-2 font-medium">
                    {f.icon}
                    {f.title}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src={`${BASE}/hero.svg`}
              alt="Hero"
              width={1600}
              height={1000}
              className="w-full rounded-3xl shadow-2xl object-cover bg-slate-300"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="py-14" id="kontakt">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          {/* Formularz */}
          <div className="rounded-2xl border p-6 bg-slate-300">
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <form
              className="mt-6 grid grid-cols-1 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="rounded-2xl border px-4 py-3 bg-slate-200 placeholder:text-slate-500"
                placeholder="Imię i nazwisko"
              />
              <input
                className="rounded-2xl border px-4 py-3 bg-slate-200 placeholder:text-slate-500"
                placeholder="Adres e-mail"
              />
              <textarea
                className="rounded-2xl border px-4 py-3 min-h-[120px] bg-slate-200 placeholder:text-slate-500"
                placeholder="Napisz, czym się zajmujesz i czego potrzebujesz"
              />
              <button className="rounded-2xl bg-slate-500 text-white px-5 py-3 text-sm hover:opacity-90">
                Wyślij
              </button>
            </form>
          </div>

          {/* Dane firmy */}
          <div className="rounded-2xl border p-8 bg-slate-300">
            <h3 className="text-2xl font-semibold mb-4">Dane firmy</h3>
            <div className="space-y-2 text-sm text-slate-800 leading-relaxed">
              <p>
                <strong>Payment Provider Sp. z o.o.</strong>
                <br />
                ul. Opolska 15, 40-084 Katowice
              </p>
              <p>
                NIP: 634-301-25-88
                <br />
                REGON: 524937621
              </p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:office@paymentproviderglobal.com"
                  className="underline"
                >
                  office@paymentproviderglobal.com
                </a>
                <br />
                Pomoc:{" "}
                <a
                  href="mailto:help@paymentproviderglobal.com"
                  className="underline"
                >
                  help@paymentproviderglobal.com
                </a>
              </p>
              <p>Biuro czynne: pon–pt 9:00–17:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
