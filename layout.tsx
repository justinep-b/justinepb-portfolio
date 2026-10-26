import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Justine Bermillo | Operations, Marketing & Creative VA',
  description: 'Portfolio of Justine Bermillo, a multiskilled virtual assistant across operations, digital marketing, YouTube, content, and creative production.',
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
