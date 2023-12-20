// import { Montserrat } from './ui/fonts'
import { montserrat } from './ui/fonst';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiseds`}>
        {children}</body>
    </html>
  );
}
