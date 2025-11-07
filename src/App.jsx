import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  // Re-create modal functions in React
  const openModal = (id) => {
    document.getElementById(id).style.display = "flex";
  };
  const closeModal = (id) => {
    document.getElementById(id).style.display = "none";
  };

  // Attach modal functions to window (for inline HTML onclick calls)
  useEffect(() => {
    window.openModal = openModal;
    window.closeModal = closeModal;
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<main class="wrap">
  <!-- Left Sidebar -->
  <aside class="card left">
    <div style="display:flex;gap:14px;align-items:center">
      <div class="photo"><img src="https://avatars.githubusercontent.com/u/109154244?v=4" alt="Profile Photo"></div>
      <div>
        <div class="name">Ritesh Katore</div>
        <div class="role">Full-Stack Developer · Product Developer</div>
        <div class="muted" style="font-size:13px;margin-top:6px">Ahilyanagar, Maharashtra</div>
      </div>
    </div>
    <div class="accent-bar"></div>
    <div class="contact">
      <div><strong>Email:</strong> <span class="muted">ritesh@rkstudio19.in</span></div>
      <div><strong>Phone:</strong> <span class="muted">+91 9423428351</span></div>
      <div style="margin-top:8px"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ritesh-katore/" target="_blank">linkedin.com/in/ritesh-katore</a></div>
      <div><strong>Website:</strong> <a href="https://rkstudio19.in/" target="_blank">rkstudio19.in</a></div>
    </div>
    <div style="margin-top:14px">
      <div class="muted" style="font-size:13px">Top skills</div>
      <div class="skills">
        <span class="skill">JavaScript</span>
        <span class="skill">Node.js</span>
        <span class="skill">React</span>
        <span class="skill">Express</span>
        <span class="skill">MongoDB</span>
        <span class="skill">Web3 / Blockchain</span>
        <span class="skill">HTML & CSS</span>
      </div>
    </div>
    <div style="margin-top:16px">
      <div class="muted" style="font-size:13px">Languages</div>
      <div class="badges" style="margin-top:8px">
        <span class="badge">Marathi</span>
        <span class="badge">English</span>
        <span class="badge">Hindi</span>
      </div>
    </div>
    <div style="margin-top:16px">
      <div class="muted" style="font-size:13px">Availability</div>
      <div class="muted" style="margin-top:8px;font-size:13px">Open to work / freelance projects</div>
    </div>
  </aside>

  <!-- Main Content -->
  <section class="card">
    <div class="section">
      <h3>About</h3>
      <p class="lead">
        Product & Full-Stack Developer with 5+ years building web apps and digital products. Experience with building responsive UIs, back-end APIs, and Web3 integrations. Delivered across 75+ projects. Passionate about clean code and collaboration.
      </p>
    </div>
    <div class="section">
      <h3>Experience</h3>
      <div class="timeline">
        <div class="job">
          <div>
            <div class="title">Founder — Threadleeon</div>
            <div class="meta">CEO | 2023-Present</div>
            <div class="muted" style="margin-top:8px;font-size:13px">• Oversees operation from design to delivery of products.</div>
          </div>
        </div>
        <div class="job">
          <div>
            <div class="title">Product Developer — Weekly Once</div>
            <div class="meta">Full-Stack | 2022-Present</div>
            <div class="muted" style="margin-top:8px;font-size:13px">
              • Built features, APIs, shipped responsive web apps.<br>
              • Delivered 60+ projects across RK Studio 19 and freelance.
            </div>
          </div>
        </div>
        <div class="job">
          <div>
            <div class="title">Founder — RK Studio 19</div>
            <div class="meta">Web Development Studio | 2020-Present</div>
            <div class="muted" style="margin-top:8px;font-size:13px">
              • Launched RK Studio 19; delivered websites for startups & SMEs.<br>
              • Tech: React, Node, Express, Headless CMS, Git.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>Selected Projects</h3>
      <div class="project">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:700">Algorand</div>
          <div class="muted" style="font-size:13px">2025</div>
        </div>
        <div class="muted" style="margin-top:8px;font-size:13px">Built Web3 Marketplace bridging farmers and customers directly.</div>
      </div>
      <div class="project">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div style="font-weight:700">MessMitra</div>
          <div class="muted" style="font-size:13px">2024</div>
        </div>
        <div class="muted" style="margin-top:8px;font-size:13px">Full-fledged solution to manage Mess/Canteen services across campuses.</div>
      </div>
    </div>

    <div class="section">
      <h3>Education & Certifications</h3>
      <table>
        <tr><th>Course</th><th>Institute</th><th>Year</th></tr>
        <tr><td>B.Tech Computer Science & Engineering</td><td>Pimpri Chinchwad University</td><td>2023-Present</td></tr>
        <tr><td class="clickable" onClick="openModal('awsModal')">AWS Academy Graduate - AWS Academy Cloud Architecting</td><td>AWS Academy</td><td>2024</td></tr>
        <tr><td>Shell-Edunet Skills4Future Internship</td><td>Shell-Edunet</td><td>2024</td></tr>
      </table>
    </div>

    <div class="section">
      <h3>Publications & Articles</h3>
      <div class="muted" style="font-size:13px">
        • <strong>The Future of Web Development</strong> — Medium article
      </div>
      <div style="margin-top:8px">
        <a class="btn" href="https://medium.com/@riteshkatore2005/the-future-of-web-development-5f0a1d84241" target="_blank">Read on Medium</a>
      </div>
    </div>

    <div class="section">
      <h3>Hobbies</h3>
      <div class="hobby">
        <div class="hobby-name">🧑‍💻 Coding</div>
        <div class="bar"><span style="width:90%"></span></div>
      </div>
      <div class="hobby">
        <div class="hobby-name">🎮 Gaming</div>
        <div class="bar"><span style="width:70%"></span></div>
      </div>
      <div class="hobby">
        <div class="hobby-name">✈️ Traveling</div>
        <div class="bar"><span style="width:80%"></span></div>
      </div>
    </div>

    <div class="section">
      <h3>Open Source & Social</h3>
      <div class="muted" style="font-size:13px">Active on LinkedIn, Instagram, Threads — posts about Web3, internships, hackathons.</div>
      <div style="margin-top:8px" class="cta-row">
        <a class="btn" href="https://github.com/rkdev19" target="_blank">Github</a>
        <a class="btn" href="https://www.linkedin.com/in/ritesh-katore/" target="_blank">LinkedIn</a>
        <a class="btn" href="https://rkstudio19.in/" target="_blank">Portfolio</a>
        <a class="btn" href="https://www.instagram.com/ritesh_katore_/" target="_blank">Instagram</a>
      </div>
    </div>
  </section>
</main>

<!-- Modal for AWS Certificate -->
<div id="awsModal" class="modal">
  <div class="modal-content">
    <h3 style="margin-bottom:12px">AWS Academy Graduate Certificate</h3>
    <iframe src="https://d1vwxdpzbgdqj.cloudfront.net/aws_sample_certificate.jpg"></iframe>
    <button class="close-btn" onClick="closeModal('awsModal')">Close</button>
  </div>
</div>
        `,
      }}
    />
  );
}
