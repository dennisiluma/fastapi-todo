import Link from "next/link";
import './home.css'

export default function Home() {
  return (

    <div className="home">


      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">✨ Simple & Beautiful</span>
          <h1 className="hero__title">
            Organize your day,<br />
            <span className="hero__title-accent">achieve your goals.</span>
          </h1>
          <p className="hero__desc">
            TaskFlow is the beautifully simple way to track your tasks,
            stay focused, and make every day productive.
          </p>
          <div className="hero__actions">
            <Link href="/add" className="btn btn--primary">
              Add Your Todo
            </Link>
            <Link href="/todos" className="btn btn--secondary">
              View My Todo's
            </Link>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="features">
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">🎯</div>
            <h3 className="feature-card__title">Laser Focus</h3>
            <p className="feature-card__desc">
              Strip away the clutter and focus only on what matters most today.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">⚡</div>
            <h3 className="feature-card__title">Lightning Fast</h3>
            <p className="feature-card__desc">
              Built with Next.js for instant page loads and a buttery smooth experience.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🎨</div>
            <h3 className="feature-card__title">Beautifully Crafted</h3>
            <p className="feature-card__desc">
              A clean, modern interface that makes managing your tasks a genuine pleasure.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
