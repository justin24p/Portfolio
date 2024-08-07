import "./App.css";
import photo from "./assets/pfp.jpg";
import photo2 from "./assets/image.webp";
import project1 from "./assets/bank.png";
import project2 from "./assets/game.png";
import project3 from "./assets/gopher.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "devicon/devicon.min.css";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-200 text-gray-800">
            <nav className="nav">
                <p id="name">Justin Pardo</p>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <div className="button-nav">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            <button className="bg-gray-800">Resume</button>
                        </a>
                    </div>
                </ul>
            </nav>

            <section className="landing">
                <div className="img">
                    <img src={photo} alt="Justin Pardo" />
                </div>
                <p className="intro">Hi, I'm Justin 👋</p>
                <h2 className="main-text">SOFTWARE DEVELOPER</h2>
                <p id="texty">
                    Passionate developer who loves building systems that solve
                    real-world problems and diving deep into technology beyond
                    the surface level.
                </p>
                <div className="landing-button">
                    <a href="https://github.com/justin24p">
                        <button>
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/justin-pardo/">
                        <button>
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </button>
                    </a>
                </div>
            </section>

            <section id="about" className="about">
                <h1 className="learn-more-title">Learn More</h1>
                <div className="about-all">
                    <div className="about-left">
                        <div>
                            <h2>About</h2>
                            <p>
                                I have an ambition and desire to improve at
                                every step, whether it be in school,
                                programming, or the gym. This summer, I had the
                                pleasure of being a research assistant at my
                                university, even though I had no prior
                                experience in machine learning. With enough
                                effort, I was able to pick up the necessary
                                tools to help my team train our object detection
                                model. In my free time, you can find me
                                exploring mathematics or learning about
                                low-level computer topics such as compilers,
                                kernels, and operating systems.
                            </p>
                            <h2>Technologies</h2>
                            <div className="tech-container">
                                <ul>
                                    <li>
                                        <i className="devicon-javascript-plain colored"></i>{" "}
                                        JavaScript
                                    </li>
                                    <li>
                                        <i className="devicon-go-plain colored"></i>{" "}
                                        Go (Golang)
                                    </li>
                                    <li>
                                        <i className="devicon-java-plain colored"></i>{" "}
                                        Java
                                    </li>
                                    <li>
                                        <i className="devicon-typescript-plain colored"></i>
                                        Typescript
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <i className="devicon-python-plain colored"></i>{" "}
                                        Python
                                    </li>
                                    <li>
                                        <i className="devicon-tailwindcss-plain colored"></i>{" "}
                                        Tailwind CSS
                                    </li>
                                    <li>
                                        <i className="devicon-postgresql-plain colored"></i>{" "}
                                        PostgreSQL
                                    </li>
                                    <li>
                                        <i className="devicon-nextjs-plain colored"></i>
                                        NextJS
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <i className="devicon-mongodb-plain colored"></i>{" "}
                                        MongoDB
                                    </li>
                                    <li>
                                        <i className="devicon-express-original colored"></i>{" "}
                                        Express
                                    </li>
                                    <li>
                                        <i className="devicon-nodejs-plain colored"></i>{" "}
                                        Node.js
                                    </li>
                                    <li>
                                        <i className="devicon-react-plain colored"></i>{" "}
                                        React
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="imgtwo">
                        <img src={photo2} alt="Project Preview" />
                    </div>
                </div>
            </section>

            <section id="projects" className="projects">
                <div>
                    <h2>Projects</h2>
                    <p className="proj-info">
                        Here are a few of my projects that demonstrate my
                        ability to build user-friendly full-stack systems using
                        a wide range of technologies.
                    </p>
                </div>
                <div className="projs">
                    <div className="project">
                        <div className="project-img">
                            <img src={project1} alt="Bank Project" />
                        </div>
                        <h3>Bank</h3>
                        <p>
                            Developed a bank account management system using
                            Next.js and TypeScript, with Plaid API for
                            transaction. Backend services were provided by
                            Appwrite. Created custom React components for
                            displaying transaction data and implemented
                            session-based authentication with robust error
                            handling.
                        </p>
                        <div className="project-button">
                            <a href="https://github.com/justin24p/bank-app">
                                <button>GitHub</button>
                            </a>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={project2} alt="Game Store Project" />
                        </div>
                        <img src="" alt="" />
                        <h3>Game Store</h3>
                        <p>
                            I built a game store with React, using React Router
                            for routing and Context for global state management
                            and data was fetched from RAWG Api via useEffect.
                            The project was deployed on Vercel and utilized Vite
                            for building completed by my own hands.
                        </p>
                        <div className="project-button">
                            <a href="https://github.com/justin24p/shopping-cart">
                                <button>GitHub</button>
                            </a>
                            <a href="https://shopping-cart-a85lo67d2-justin24ps-projects.vercel.app/">
                                <button>Live Demo</button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={project3} alt="Blog Project" />
                        </div>
                        <img src="" alt="" />
                        <h3>Blog</h3>
                        <p>
                            Developed a backend server in Go for managing RSS
                            feeds, enabling users to add, follow, and unfollow
                            feeds. Utilized PostgreSQL with Goose for database
                            migrations and SQLC for type-safe interactions.
                            Implemented secure access control with the chi
                            router and robust error handling for unauthorized
                            actions.
                        </p>
                        <div className="project-button">
                            <a href="https://github.com/justin24p/Blog-Aggregator">
                                <button>GitHub</button>
                            </a>
                            <button>Live Demo</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>© 2024 Justin Pardo. All rights reserved.</p>
            </footer>
        </div>
    );
}
