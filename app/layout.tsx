import '@/app/ui/global.css'; // Import your global CSS
import { inter } from '@/app/ui/fonts'; // Import fonts properly

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
