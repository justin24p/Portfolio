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
                <h2>SOFTWARE DEVELOPER</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium error rem a consequatur nihil consectetur eius,
                    natus nulla. Praesentium culpa eveniet odit saepe doloribus
                    ut obcaecati earum, molestiae placeat rerum!
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Commodi modi assumenda
                                delectus distinctio odio labore tenetur!
                                Consectetur a voluptatem fugit illo eos magni,
                                exercitationem maiores, amet adipisci cum alias
                                aliquam?
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis cum fugiat, dignissimos eveniet, nulla,
                        veritatis possimus totam temporibus voluptas voluptatum
                        deleniti! Quaerat incidunt sequi, velit tenetur odio
                        atque facere delectus?
                    </p>
                </div>
                <div className="projs">
                    <div className="project">
                        <div className="project-img">
                            <img src={project1} alt="Bank Project" />
                        </div>
                        <h3>Bank</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa doloribus odio repellendus temporibus,
                            vero quod distinctio reprehenderit aperiam corrupti
                            sunt deleniti beatae suscipit porro quia quasi
                            accusamus, asperiores quisquam voluptas!
                        </p>
                        <div className="project-button">
                            <button>GitHub</button>
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nihil distinctio enim pariatur illum, amet,
                            aliquam blanditiis ex accusamus reiciendis nulla
                            culpa error quis. Quia at sequi laborum id voluptas
                            eligendi?
                        </p>
                        <div className="project-button">
                            <button>GitHub</button>
                            <button>Live Demo</button>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={project3} alt="Blog Project" />
                        </div>
                        <img src="" alt="" />
                        <h3>Blog</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsa fuga veritatis ratione doloremque
                            consectetur distinctio molestiae provident!
                            Adipisci, beatae mollitia amet, neque iste eos
                            quisquam praesentium, commodi incidunt voluptatem
                            numquam!
                        </p>
                        <div className="project-button">
                            <button>GitHub</button>
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
