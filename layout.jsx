import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
