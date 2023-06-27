import Head from "next/head";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center overflow-auto bg-petit-grey">
      <Head>
        <title>Joshua Petitma</title>
        <meta name="description" content="Bible Ram Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full items-center justify-center space-x-8 pt-10 text-xl text-white lg:flex lg:justify-evenly lg:space-x-0">
        <article className="flex flex-col justify-center space-y-3 text-center md:text-3xl lg:h-5/6 lg:w-2/6 lg:text-4xl">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Bible Ram Privacy Policy
          </h1>
          <div>
            Bible Ram does not collect any information from you. You can export
            all information you create within the app to your local storage and
            delete your information anytime. This app is provided 100% free with
            no warranty. If you have any questions email Joshua Petimta at
            joshua@petit.dev
          </div>
        </article>
      </main>

      <footer></footer>
    </div>
  );
}
