import Head from 'next/head';

export default function Home() {
  return (
    <div>
      {/* Meta information */}
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main HTML content */}
      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a simple page created with JSX in Next.js!</p>
      </main>
      
      {/* Footer */}
      <footer>
        <p>© 2024 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}