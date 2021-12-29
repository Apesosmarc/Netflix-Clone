import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { Router } from "next/router";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container ">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="nflx-header">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.238 0.034 919.406 248.488"
            className="nflx-icon"
          >
            <path
              fill="#e50914"
              d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
            />
          </svg>
        </div>
        <div>
          {!session ? (
            <button onClick={() => signIn("google")} className="btn">
              Sign In
            </button>
          ) : (
            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          )}
        </div>
      </header>
      <main className="main-intro">
        <h1 className="main__header">Unlimited movies, TV shows, and more.</h1>
        <h2 className="main__header2">Watch anywhere. Cancel anytime.</h2>
        <h2 className="main__header2">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="main__input-container flex mt-4">
          <input placeholder="Email address" className="main__email-input" />
          <button onClick={() => signIn()} className="btn btn-get-started">
            Get Started >
          </button>
        </div>
      </main>
      <section className="story-card-section">
        <div className="story-card animation-card">
          <h1 className="story-card__header">Enjoy on your TV.</h1>
          <h2 className="story-card__header2">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
          <div className="story-card__img-container">
            <div className="story-card__animation-container">
              <img className="story-card__img" src="/images/nflx-tv.png" />
              <div className="story-card__animation story-card__animation--tv">
                <video
                  class="our-story-card-video"
                  autoplay="true"
                  playsinline="true"
                  muted="false"
                  loop="true"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div className="story-card animation-card">
          <h1 className="story-card__header">Watch everywhere.</h1>
          <h2 className="story-card__header2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
          <div className="story-card__img-container">
            <div className="story-card__animation-container">
              <img className="story-card__img" src="/images/macmonitor.png" />
              <div className="story-card__animation story-card__animation--mac">
                <video
                  class="our-story-card-video"
                  autoplay="true"
                  playsinline="true"
                  muted="false"
                  loop="true"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div className="story-card animation-card">
          <h1 className="story-card__header">Create profiles for kids.</h1>
          <h2 className="story-card__header2">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
          <div className="story-card__img-container">
            <div className="story-card__animation-container">
              <img className="story-card__img" src="/images/nflxkids.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
