// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";

const movies = [
  { id: 1, title: "Dune: Part Two", genre: "Sci-Fi", rating: "8.5", color: "#5c4936" },
  { id: 2, title: "Interstellar", genre: "Adventure", rating: "8.7", color: "#27384d" },
  { id: 3, title: "Joker", genre: "Drama", rating: "8.3", color: "#69403d" },
  { id: 4, title: "Avengers", genre: "Action", rating: "8.0", color: "#334c54" },
];

function App() {
  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => setPage("Home")}>
          i<span>Movies</span>
        </button>

        <nav>
          {["Home", "Movies", "My Bookings"].map((item) => (
            <button
              key={item}
              className={page === item ? "nav-link active" : "nav-link"}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="signin" onClick={() => setPage("Login")}>
          Sign In
        </button>
      </header>

      {page === "Home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <p className="eyebrow">YOUR NEXT MOVIE NIGHT STARTS HERE</p>
              <h1>
                Every story deserves
                <br /> a <span>big screen.</span>
              </h1>
              <p className="hero-text">
                Discover great movies, explore your favourites and
                plan your next cinema experience with iMovies.
              </p>
              <button className="primary-btn" onClick={() => setPage("Movies")}>
                Explore Movies →
              </button>
            </div>
            <div className="hero-art" aria-label="Cinema ticket illustration">
              <div className="ticket">
                <span>IMOVIES</span>
                <strong>YOUR<br />NEXT<br />STORY</strong>
                <small>ADMIT ONE · 2026</small>
              </div>
            </div>
          </section>

          <section className="movie-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">HANDPICKED FOR YOU</p>
                <h2>Popular Movies</h2>
              </div>
              <button className="text-btn" onClick={() => setPage("Movies")}>
                View all →
              </button>
            </div>
            <MovieGrid
              movies={movies.slice(0, 4)}
              onSelect={(movie) => {
                setSelectedMovie(movie);
                setPage("Details");
              }}
            />
          </section>
        </>
      )}

      {page === "Movies" && (
        <section className="content-section">
          <p className="eyebrow">FIND YOUR NEXT FAVOURITE</p>
          <h1>Explore Movies</h1>
          <input
            className="search"
            placeholder="Search movies by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MovieGrid
            movies={filteredMovies}
            onSelect={(movie) => {
              setSelectedMovie(movie);
              setPage("Details");
            }}
          />
          {filteredMovies.length === 0 && (
            <p>No movies found. Try another title.</p>
          )}
        </section>
      )}

      {page === "Details" && selectedMovie && (
        <section className="content-section">
          <button className="text-btn" onClick={() => setPage("Movies")}>
            ← Back to movies
          </button>
          <div className="details-card">
            <div className="poster large" style={{ background: selectedMovie.color }}>
              <span>IMOVIES ORIGINAL</span>
              <strong>{selectedMovie.title}</strong>
            </div>
            <div>
              <p className="eyebrow">{selectedMovie.genre}</p>
              <h1>{selectedMovie.title}</h1>
              <p>★ {selectedMovie.rating} / 10</p>
              <p>Explore this movie and get ready for your next cinema experience.</p>
              <button className="primary-btn" onClick={() => setPage("Login")}>
                Sign in to continue
              </button>
            </div>
          </div>
        </section>
      )}

      {page === "Login" && <AuthForm type="Login" onBack={() => setPage("Home")} />}
      {page === "Register" && <AuthForm type="Register" onBack={() => setPage("Home")} />}

      {page === "My Bookings" && (
        <section className="content-section">
          <h1>My Bookings</h1>
          <p className="muted">
            Sign in to view your bookings. Booking history will be connected
            to the backend in the next step.
          </p>
          <button className="primary-btn" onClick={() => setPage("Login")}>
            Sign In
          </button>
        </section>
      )}

      <footer>
        <strong>iMovies</strong>
        <p>Your next favourite movie awaits.</p>
        <small>© 2026 iMovies · SmartBridge Project</small>
      </footer>
    </div>
  );
}

function MovieGrid({ movies, onSelect }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <button
          className="movie-card"
          key={movie.id}
          onClick={() => onSelect(movie)}
        >
          <div className="poster" style={{ background: movie.color }}>
            <span>IMOVIES ORIGINAL</span>
            <strong>{movie.title}</strong>
            <small>★ {movie.rating}</small>
          </div>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function AuthForm({ type, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="auth-section">
      <form
        className="auth-card"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Frontend demo only. Real authentication will be added with the backend.");
        }}
      >
        <p className="eyebrow">WELCOME TO IMOVIES</p>
        <h1>{type === "Login" ? "Welcome back" : "Create account"}</h1>
        {type === "Register" && (
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <button className="primary-btn full-width" type="submit">
          {type === "Login" ? "Sign In" : "Create Account"}
        </button>
        <button className="text-btn" type="button" onClick={onBack}>
          ← Back to Home
        </button>
      </form>
    </section>
  );
}

export default App;
