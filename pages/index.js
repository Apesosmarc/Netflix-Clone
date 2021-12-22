import Head from "next/head";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),url(hero-bg.jpg)",
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-white  max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="tex-2xl text-white mt-4 mb-8">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4">
          <input
            placeholder="Email address"
            className="bg-white p-4 max-w-[400px] w-[400px]"
          />
          <button className="bg-[#e50914] text-white text-lg px-8">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
