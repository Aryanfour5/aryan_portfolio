import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  "React.Js", "SpringBoot", "NODEJS", "PYTHON", "c/c++", "Java script",
  "JAVA", "AIML", "PGSQL", "PostMan", "blockchain", "Express", "Solidity",
  "MongoDB", "MYSQL", "Svelte.js"
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="services"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      <div className="content">
        
        <div className="text-container">
          <h2>About Me!</h2>
          <p> I'm Aryan Bachute, a passionate full-stack developer and AIML enthusiast with hands-on experience in Java, MySQL, and modern front-end frameworks like React and SvelteKit. Currently pursuing my degree at Symbiosis Institute of Technology, I’ve developed several impactful projects, including an investment portfolio tracker with real-time financial analytics and a blockchain-based bus management system, which won the IEEE Symposium 2024's build-a-thon. My internships in full-stack and Java web development have strengthened my skills in API integration, RESTful design, and efficient UI/UX. I am driven by a love for learning, with certifications in Python and full-stack web development, and enjoy solving coding challenges on LeetCode and HackerRank. Connect with me to explore more on LinkedIn.</p>
          <div className="skills-container">
            <h3>SKILLS:</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
