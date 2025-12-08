import { Manrope } from 'next/font/google';
import { cookies } from "next/headers";
import "@/assets/styles/index.css";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
	variable: '--font-manrope',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const access = cookieStore.get("access_token")?.value;

 const isAuth = !!access;
 
  return (
    <html lang="ru" className={`h-full ${manrope.className}`}>
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}