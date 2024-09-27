import Head from 'next/head';

export default function Home() {
  return (
    <div>
      {/* Meta information */}
      <Head>
        <title>TMG - Portfolio</title>
        <meta name="TMG - Portfolio" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main HTML content */}
      <main className="text-center">
        <h1 className="text-4xl font-bold text-orange-600">Welcome to My Next.js App</h1>
        <p>This is a simple page created with JSX in Next.js!</p>
      </main>
      
      {/* Footer */}
      <footer>
        <p>© 2024 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}