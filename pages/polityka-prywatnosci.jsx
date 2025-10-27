import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-400 text-slate-900">
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wide text-slate-600">Dokument</p>
          <h1 className="text-3xl font-semibold mt-2">Polityka prywatności</h1>
          <p className="mt-3 text-slate-700">
            Dbamy o Twoją prywatność i bezpieczeństwo danych. Poniżej znajdziesz
            streszczenie kluczowych zasad przetwarzania informacji w
            PaymentProvider.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-slate-800">
          <p>
            1. Administratorem danych osobowych jest Payment Provider Sp. z o.o.
            z siedzibą w Katowicach przy ul. Opolskiej 15. Kontakt do inspektora
            ochrony danych: iod@paymentproviderglobal.com.
          </p>
          <p>
            2. Dane przetwarzamy w celu realizacji umów, obsługi zapytań oraz
            zgodnie z obowiązującymi przepisami prawa. Podstawą prawną jest art.
            6 ust. 1 lit. b) i f) RODO.
          </p>
          <p>
            3. Odbiorcami danych mogą być operatorzy płatności, firmy kurierskie
            oraz podmioty świadczące usługi IT. Z każdym podpisujemy umowy
            powierzenia przetwarzania danych.
          </p>
          <p>
            4. Dane przechowujemy przez czas trwania umowy oraz dodatkowe 5 lat w
            celu rozliczalności. Masz prawo dostępu, sprostowania, usunięcia,
            ograniczenia przetwarzania oraz wniesienia sprzeciwu.
          </p>
        </section>

        <footer className="pt-6">
          <Link href="/" className="text-sm underline underline-offset-4">
            Wróć na stronę główną
          </Link>
        </footer>
      </main>
    </div>
  );
}
