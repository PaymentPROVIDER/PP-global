export const metadata = {
  title: "PaymentProviderGlobal.com",
  description: "Globalne rozwiązania płatnicze dla Twojego biznesu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
