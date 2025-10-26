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

/**
 * GitHub Pages działa pod /PP-global, więc podajemy bazę ścieżki do /public.
 * Lokalnie (npm run dev) BASE ma być puste.
 */
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

      {/* SKLEP */}
      <section className="py-14" id="sklep">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Polecane produkty</h2>
            <a
              href="#"
              className="text-sm underline underline-offset-4"
            >
              Zobacz wszystkie
            </a>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl border bg-slate-300 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    unoptimized
                  />
                  <div className="absolute left-3 top-3 text-[11px] bg-slate-700 text-white border px-2 py-0.5 rounded-full">
                    {p.badge}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-slate-700 text-sm mt-0.5">
                    Krótki opis produktu — zalety i zastosowanie.
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-semibold">{p.price}</div>
                    <button className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-200">
                      <ShoppingCart className="w-4 h-4" /> Dodaj
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODY PŁATNOŚCI */}
      <section className="py-14" id="oferta">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-xl font-semibold">Obsługiwane metody płatności</h3>
          <p className="text-slate-600 mt-1">
            Oferuj popularne metody: karty, BLIK i portfele mobilne.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {payments.map((name, i) => (
              <div
                key={i}
                className="rounded-xl border bg-slate-400 py-3 text-center text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="py-14" id="kontakt">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6 bg-slate-400">
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <form
              className="mt-6 grid grid-cols-1 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="rounded-2xl border px-4 py-3"
                placeholder="Imię i nazwisko"
              />
              <input
                className="rounded-2xl border px-4 py-3"
                placeholder="Adres e-mail"
              />
              <textarea
                className="rounded-2xl border px-4 py-3 min-h-[120px]"
                placeholder="Napisz, czym się zajmujesz i czego potrzebujesz"
              />
              <button className="rounded-2xl bg-slate-400 text-white px-5 py-3 text-sm hover:opacity-90">
                Wyślij
              </button>
            </form>
          </div>

          <div className="rounded-2xl border p-6 bg-slate-400">
            <div className="font-medium">Dane firmy</div>
            <div className="mt-2 text-sm text-slate-700">
              Payment Provider Sp. z o.o.
            </div>
            <div className="text-sm text-slate-700">
              ul. Opolska 15, 40-084 Katowice
            </div>
            <div className="text-sm text-slate-700">
              E-mail:{" "}
              <a href="mailto:office@paymentproviderglobal.com" className="underline">
                office@paymentproviderglobal.com
              </a>
            </div>
            <div className="text-sm text-slate-700">
              Pomoc:{" "}
              <a href="mailto:help@paymentproviderglobal.com" className="underline">
                help@paymentproviderglobal.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="bg-slate-400 border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-slate-700">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={`${BASE}/logo-pp.svg`}
                alt="PaymentProvider logo"
                width={24}
                height={24}
                className="w-6 h-6"
                priority
              />
              <span className="font-semibold text-lg text-slate-900">
                PaymentProvider
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Nowoczesne rozwiązania, płatności online e-commerce, terminale POS
              i SoftPOS dla Twojego biznesu. Szybko, bezpiecznie, globalnie.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Firma</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#o-nas">O nas</a></li>
              <li><a href="#">Kariera</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Oferta</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#oferta">Płatności online</a></li>
              <li><a href="#oferta">SoftPOS</a></li>
              <li><a href="#oferta">Integracje API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Informacje</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Polityka prywatności</a></li>
              <li><a href="#">Regulamin</a></li>
              <li><a href="#">RODO</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t py-4 text-center text-sm text-slate-900 bg-slate-400">
          © {new Date().getFullYear()} PaymentProvider. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
