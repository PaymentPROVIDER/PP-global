import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-400 text-slate-900">
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <header>
          <p className="text-sm uppercase tracking-wide text-slate-600">Dokument</p>
          <h1 className="text-3xl font-semibold mt-2">Regulamin świadczenia usług</h1>
          <p className="mt-3 text-slate-700">
            Ten skrócony regulamin przedstawia najważniejsze informacje dotyczące
            korzystania z usług PaymentProvider.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-slate-800">
          <p>
            1. Umowa zostaje zawarta po podpisaniu zamówienia lub aktywacji konta
            w panelu klienta. Opłaty rozliczamy miesięcznie zgodnie z wybranym
            pakietem.
          </p>
          <p>
            2. Klient zobowiązany jest do korzystania z usług zgodnie z prawem i
            regulaminami operatorów płatności. Zabronione jest przetwarzanie
            transakcji z kategorii wysokiego ryzyka bez zgody PaymentProvider.
          </p>
          <p>
            3. Reklamacje rozpatrujemy w terminie 14 dni kalendarzowych od
            otrzymania zgłoszenia. Można je przesłać na adres support@paymentproviderglobal.com.
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
