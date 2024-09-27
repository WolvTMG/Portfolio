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
        <h1 className="text-4xl font-bold text-orange-600">TMG - Portfolio</h1>
        <p>Welcome</p>
      </main>
      
      {/* Footer */}
      <footer>
        <p>© 2024 TMG</p>
      </footer>
    </div>
  );
}