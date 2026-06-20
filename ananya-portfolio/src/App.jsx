function App() {
  return (
    <>
    
      <section className="hero">
        <div className="hero-content">
          <h1>Ananya KH</h1>
          <h2>B.Sc Data Science Student</h2>
          <p>
            Data Science Student • AI Explorer • Full Stack Developer • Problem Solver
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>

        <div className="card">
          <p>
            Hello! I'm Ananya KH, a B.Sc. Data Science student at St. Thomas College, Thrissur (2025–2029). I am passionate about Data Science, Artificial Intelligence, Web Development, and building technology-driven solutions that create a positive impact on society.

Over time, I have developed skills in Python, C Programming, HTML, CSS, JavaScript, React, Django, Flutter, MySQL, and MongoDB. I enjoy exploring new technologies, solving real-world problems, and continuously improving my technical and analytical abilities.

My interests include AI-powered applications, data-driven decision making, full-stack development, and assistive technologies. I am particularly motivated to build projects that address real-life challenges and improve accessibility, learning, and quality of life for different communities.

As a lifelong learner, I actively participate in online certification programs and hands-on projects to strengthen my knowledge and prepare for a successful career in Data Science and Software Development.

          </p>
        </div>
      </section>
      <section className="stats">
  <div className="stat-box">
    <h2>8+</h2>
    <p>Certifications</p>
  </div>

  <div className="stat-box">
    <h2>1</h2>
    <p>Projects</p>
  </div>

  <div className="stat-box">
    <h2>10+</h2>
    <p>Technologies</p>
  </div>
</section>

      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          {[
            "Python",
            "C Programming",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Django",
            "Flutter",
            "MongoDB",
            "MySQL",
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <div className="project-card">
  <h3>Club Management System</h3>

  <p><strong>React • Django • MySQL</strong></p>

  <p>
    Designed and developed a full-stack web application to streamline club
    management processes and enhance member engagement. The platform supports
    member registration, event management, activity tracking, and centralized
    communication, improving efficiency for both club administrators and
    participants.
  </p>
</div>
        </div>
      </section>

      <section id="certificates">
        <h2>Certificates</h2>

        <div className="cert-grid">
          <div className="cert-card">python 101 for datascience</div>
          <div className="cert-card">sql and relational databases 101</div>
          <div className="cert-card">introduction to open source</div>
          <div className="cert-card">datascience tools</div>
          <div className="cert-card">data privacy fundamentals</div>
          <div className="cert-card">data science methodology</div>
          <div className="cert-card">data science 101</div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="buttons">
  <a href="https://github.com/ananyakh16-svg">
    GitHub
  </a>

  <a href="https://linkedin.com/in/ananya-kh-30004a373/">
    LinkedIn
  </a>
</div>
      </section>
    </>
  );
}

export default App;