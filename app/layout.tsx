import '@/app/ui/global.css'
import { lora } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.className} antialiased`}>
      <body >{children}</body>
    </html>
  );
}
