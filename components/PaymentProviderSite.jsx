"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  Truck,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const BASE =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/PP-global" : "");

export default function PaymentProviderSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Terminal Ingenico",
      price: "od 39,00 zł/msc",
      badge: "Bestseller",
      img: `${BASE}/products/terminal-ingenico.jpg`,
    },
    {
      id: 2,
      name: "Terminal EyePOS by EYEID",
      price: "od 49,00 zł/msc",
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
    <>
      <Head>
        <title>PaymentProvider - Globalne rozwiązania płatnicze dla biznesu</title>
        <meta
          name="description"
          content="Nowoczesny dostawca płatności, terminale POS, bramki e-commerce i aplikacje SoftPOS. Szybko, bezpiecznie, globalnie."
        />
        <meta
          name="keywords"
          content="płatności online, terminal pos, softpos, bramka płatnicza, e-commerce, płatności kartą"
        />
        <meta
          property="og:title"
          content="PaymentProvider - Rozwiązania płatnicze"
        />
        <meta
          property="og:description"
          content="Globalne rozwiązania płatnicze dla Twojego biznesu"
        />
        <meta property="og:image" content={`${BASE}/hero.svg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="w-full text-center text-xs py-2 border-b bg-slate-100">
          Payment Provider - technologies of the future
        </div>

        <header className="sticky top-0 z-30 bg-white backdrop-blur border-b shadow-sm">
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
              <a href="#o-nas" className="hover:text-slate-600 transition-colors">
                O nas
              </a>
              <a href="#oferta" className="hover:text-slate-600 transition-colors">
                Oferta
              </a>
              <a href="#sklep" className="hover:text-slate-600 transition-colors">
                Sklep
              </a>
              <a href="#kontakt" className="hover:text-slate-600 transition-colors">
                Kontakt
              </a>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
              <nav className="flex flex-col gap-4 p-4">
                <a
                  href="#o-nas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-slate-600 transition-colors"
                >
                  O nas
                </a>
                <a
                  href="#oferta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-slate-600 transition-colors"
                >
                  Oferta
                </a>
                <a
                  href="#sklep"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-slate-600 transition-colors"
                >
                  Sklep
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-slate-600 transition-colors"
                >
                  Kontakt
                </a>
              </nav>
            </div>
          )}
        </header>

        <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Globalne rozwiązania płatnicze{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  dla Twojego biznesu
                </span>
              </motion.h1>

              <p className="mt-4 text-slate-700 max-w-xl">
                PaymentProviderGlobal.com — nowoczesny dostawca płatności,
                terminali POS, bramek e-commerce online i aplikacji SoftPOS na
                telefon, dla firm każdej wielkości.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#sklep"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Zobacz ofertę
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Skontaktuj się z nami
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 p-4 bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2 font-medium text-slate-900">
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
                alt="Globalne rozwiązania płatnicze"
                width={1600}
                height={1000}
                className="w-full rounded-3xl shadow-2xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white" id="sklep">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">Polecane produkty</h2>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 underline underline-offset-4"
              >
                Zobacz wszystkie
              </a>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={p.img}
                      alt={p.name}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute left-3 top-3 text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
                      {p.badge}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-medium text-slate-900">{p.name}</div>
                    <div className="text-slate-600 text-sm mt-0.5">
                      Krótki opis produktu — zalety i zastosowanie.
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="font-semibold text-slate-900">
                        {p.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50" id="oferta">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold">
              Obsługiwane metody płatności
            </h3>
            <p className="text-slate-600 mt-1">
              Oferuj popularne metody: karty, BLIK i portfele mobilne.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {payments.map((name, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white py-3 text-center text-sm font-medium hover:shadow-md transition-shadow"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white" id="kontakt">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold">Kontakt</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="mt-6 grid grid-cols-1 gap-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <input
                  name="name"
                  className="rounded-2xl border border-slate-300 px-4 py-3 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Imię i nazwisko"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="rounded-2xl border border-slate-300 px-4 py-3 bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Adres e-mail"
                  required
                />
                <textarea
                  name="message"
                  className="rounded-2xl border border-slate-300 px-4 py-3 min-h-[120px] bg-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Napisz, czym się zajmujesz i czego potrzebujesz"
                  required
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Wyślij
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Dane firmy</h3>
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-900">
                    Payment Provider Sp. z o.o.
                  </strong>
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
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    office@paymentproviderglobal.com
                  </a>
                  <br />
                  Pomoc:{" "}
                  <a
                    href="mailto:help@paymentproviderglobal.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    help@paymentproviderglobal.com
                  </a>
                </p>
                <p>Biuro czynne: pon–pt 9:00–17:00</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-50 border-t mt-16">
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
                Nowoczesne rozwiązania płatności online, terminale POS i SoftPOS
                dla Twojego biznesu. Szybko, bezpiecznie, globalnie.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Firma</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#o-nas" className="hover:text-slate-900">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Kariera
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-slate-900">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Oferta</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#oferta" className="hover:text-slate-900">
                    Płatności online
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-slate-900">
                    SoftPOS
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-slate-900">
                    Integracje API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Informacje</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Regulamin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    RODO
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t py-4 text-center text-sm text-slate-600 bg-slate-50">
            © {new Date().getFullYear()} PaymentProvider. Wszelkie prawa
            zastrzeżone.
          </div>
        </footer>
      </div>
    </>
  );
}
