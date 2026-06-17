import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <span className="nav__logo">J.D.</span>
        <div className="nav__links">
          <a href="#professional" className="nav__link">Professional</a>
          <a href="#music" className="nav__link">Music</a>
          <a href="#language" className="nav__link">Language</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__image-wrap">
          <img src="/hero-tree.jpeg" alt="A lone tree in blue mist" className="hero__image" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="hero__title">Jamie Doe</h1>
          <p className="hero__tagline">Engineer · Musician · Linguist</p>
        </div>
        <div className="hero__scroll-hint"><span /></div>
      </section>

      {/* BANNER NAV */}
      <div className="banner">
        <a href="#professional" className="banner__item">
          <span className="banner__label">Professional</span>
          <span className="banner__arrow">↓</span>
        </a>
        <div className="banner__divider" />
        <a href="#music" className="banner__item">
          <span className="banner__label">Music</span>
          <span className="banner__arrow">↓</span>
        </a>
        <div className="banner__divider" />
        <a href="#language" className="banner__item">
          <span className="banner__label">Language</span>
          <span className="banner__arrow">↓</span>
        </a>
      </div>

      {/* CARDS */}
      <section className="cards">
        <article id="professional" className="card">
          <div className="card__image-wrap">
            <div className="card__placeholder card__placeholder--pro" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">01</p>
            <h2 className="card__title">Professional</h2>
            <p className="card__text">Software engineering, projects, and technical work. A collection of things built and problems solved.</p>
            <a href="#professional" className="card__cta">View work →</a>
          </div>
        </article>

        <article id="music" className="card">
          <div className="card__image-wrap">
            <div className="card__placeholder card__placeholder--music" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">02</p>
            <h2 className="card__title">Music</h2>
            <p className="card__text">Compositions, recordings, and the sound of late nights and early mornings put to tape.</p>
            <a href="#music" className="card__cta">Listen →</a>
          </div>
        </article>

        <article id="language" className="card">
          <div className="card__image-wrap">
            <div className="card__placeholder card__placeholder--lang" />
          </div>
          <div className="card__body">
            <p className="card__eyebrow">03</p>
            <h2 className="card__title">Language</h2>
            <p className="card__text">Essays, translations, and notes on learning to think in other tongues.</p>
            <a href="#language" className="card__cta">Read →</a>
          </div>
        </article>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__rule" />
        <div className="footer__inner">
          <p className="footer__copy">© 2026 Jamie Doe</p>
          <div className="footer__actions">
            <a href="mailto:hello@jamiedoe.com" className="footer__link">Contact</a>
            <span className="footer__sep">·</span>
            <a href="https://buymeacoffee.com" target="_blank" rel="noreferrer" className="footer__link footer__link--coffee">☕ Buy me a coffee</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
