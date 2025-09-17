import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Quiz Platform COP",
  description: "Learning Component-Oriented Programming by building together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              Quiz Platform
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-indigo-500">
                Home
              </Link>
              <Link href="/quizzes" className="hover:text-indigo-500">
                Quizzes
              </Link>
              <Link href="/about" className="hover:text-indigo-500">
                About
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
