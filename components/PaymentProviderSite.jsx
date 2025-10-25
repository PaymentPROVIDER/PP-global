"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, Smartphone, ShieldCheck, Truck, ArrowRight } from "lucide-react";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function PaymentProviderSite() {
  const products = [
    { id: 1, name: "Produkt A", price: "658,00 zł", badge: "Bestseller", Image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop" },
    { id: 2, name: "Produkt B", price: "1 849,00 zł", badge: "Nowość", Image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop" },
    { id: 3, name: "Produkt C", price: "0,00 zł", badge: "Promocja", Image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop" },
  ];

  const payments = ["Visa", "Mastercard", "American Express", "BLIK", "Apple Pay", "Google Pay"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="w-full text-center text-xs py-2 border-b bg-slate-50">Darmowa dostawa od 199 zł • 30 dni na zwrot</div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
           <Image src={`${BASE}/logo-pp.svg`} alt="PaymentProvider logo" className="w-9 h-9" />
            <span className="font-semibold text-lg">PaymentProvider</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-nas" className="hover:opacity-70">O nas</a>
            <a href="#oferta" className="hover:opacity-70">Oferta</a>
            <a href="#sklep" className="hover:opacity-70">Sklep</a>
            <a href="#kontakt" className="hover:opacity-70">Kontakt</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm hover:shadow-md">
            <ShoppingCart className="w-4 h-4" /> Koszyk (0)
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight">
              Globalne rozwiązania płatnicze <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">dla Twojego biznesu</span>
            </motion.h1>
            <p className="mt-4 text-slate-600 max-w-xl">PaymentProviderGlobal.com — nowoczesny dostawca płatności online i terminali SoftPOS dla firm każdej wielkości.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#sklep" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 border text-sm font-medium hover:shadow-md">
                <ArrowRight className="w-4 h-4 mr-2"/> Zobacz ofertę
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-blue-600 text-white text-sm font-medium hover:opacity-90">
                Skontaktuj się z nami
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{
                icon: <CreditCard className="w-5 h-5"/>, title: "Proste płatności", desc: "Karta, BLIK, portfele cyfrowe"
              },{
                icon: <Truck className="w-5 h-5"/>, title: "Szybka dostawa", desc: "InPost, kurier, odbiór"
              },{
                icon: <ShieldCheck className="w-5 h-5"/>, title: "Bezpieczeństwo", desc: "Szyfrowanie i RODO"
              }].map((f, i)=> (
                <div key={i} className="rounded-2xl border p-4">
                  <div className="flex items-center gap-2 font-medium">{f.icon}{f.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="relative">
            <img src="https://images.unsplash.com/photo-1556742048-3c52d6e88c62?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full rounded-3xl shadow-2xl"/>
          </motion.div>
        </div>
      </section>

      {/* Sklep (lista produktów) */}
      <section className="py-14" id="sklep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Polecane produkty</h2>
            <a href="#" className="text-sm underline underline-offset-4">Zobacz wszystkie</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p)=> (
              <div key={p.id} className="group rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                  <div className="absolute left-3 top-3 text-[11px] bg-white/90 border px-2 py-0.5 rounded-full">{p.badge}</div>
                </div>
                <div className="p-4">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-slate-600 text-sm mt-0.5">Krótki opis produktu — zalety i zastosowanie.</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-semibold">{p.price}</div>
                    <button className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50"><ShoppingCart className="w-4 h-4"/> Dodaj</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Płatności */}
      <section className="py-14 bg-white" id="oferta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold">Obsługiwane metody płatności</h3>
          <p className="text-slate-600 mt-1">Oferuj popularne metody: karty, BLIK i portfele mobilne.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {payments.map((name, i)=> (
              <div key={i} className="rounded-xl border bg-slate-50 py-3 text-center text-sm">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-14 bg-white" id="kontakt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Kontakt</h3>
            <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e)=>e.preventDefault()}>
              <input className="rounded-2xl border px-4 py-3" placeholder="Imię i nazwisko" />
              <input className="rounded-2xl border px-4 py-3" placeholder="Adres e-mail" />
              <textarea className="rounded-2xl border px-4 py-3 min-h-[120px]" placeholder="Napisz, czym się zajmujesz i czego potrzebujesz" />
              <button className="rounded-2xl bg-blue-600 text-white px-5 py-3 text-sm hover:opacity-90">Wyślij</button>
            </form>
          </div>
          <div className="rounded-2xl border p-6 bg-slate-50">
            <div className="font-medium">Dane firmy</div>
            <div className="mt-2 text-sm text-slate-700">Payment Provider Sp. z o.o.</div>
            <div className="text-sm text-slate-700">ul. Opolska 15, 40-084 Katowice</div>
            <div className="text-sm text-slate-700">E-mail: <a href="mailto:office@paymentproviderglobal.com" className="underline">office@paymentproviderglobal.com</a></div>
            <div className="text-sm text-slate-700">Pomoc: <a href="mailto:help@paymentproviderglobal.com" className="underline">help@paymentproviderglobal.com</a></div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo-pp.svg" alt="PaymentProvider logo" className="w-6 h-6" />
            <span>© {new Date().getFullYear()} PaymentProviderGlobal.com</span>
            <span className="block text-xs text-slate-500">Payment Provider Sp. z o.o. • ul. Opolska 15, 40-084 Katowice • office@paymentproviderglobal.com</span>
          </div>
          <div className="md:text-right flex md:justify-end gap-4">
            <a href="#" className="hover:opacity-70">Polityka prywatności</a>
            <a href="#" className="hover:opacity-70">Regulamin</a>
            <a href="#kontakt" className="hover:opacity-70">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
