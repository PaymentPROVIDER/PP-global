import Link from "next/link";

export default function RodoPage() {
  return (
    <div className="min-h-screen bg-slate-400 text-slate-900">
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wide text-slate-600">Dokument</p>
          <h1 className="text-3xl font-semibold mt-2">Informacja RODO</h1>
          <p className="mt-3 text-slate-700">
            Ta informacja opisuje, w jaki sposób realizujemy obowiązki wynikające
            z rozporządzenia o ochronie danych osobowych (RODO).
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-slate-800">
          <p>
            1. Dane osobowe przetwarzamy na podstawie art. 6 ust. 1 lit. a), b) i
            f) RODO. W określonych przypadkach możemy także opierać się na art. 6
            ust. 1 lit. c) w celu wypełnienia obowiązków prawnych.
          </p>
          <p>
            2. Osobom, których dane dotyczą, przysługuje prawo dostępu, przenoszenia
            danych, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa
            Urzędu Ochrony Danych Osobowych.
          </p>
          <p>
            3. Jeśli chcesz złożyć wniosek dotyczący danych, skontaktuj się z nami
            mailowo: iod@paymentproviderglobal.com. Odpowiadamy nie później niż w
            ciągu 30 dni.
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
