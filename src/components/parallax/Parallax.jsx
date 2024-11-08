// Import required modules
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Limit the y-transform range to prevent excessive scrolling overlap
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, rgba(17, 17, 50, 0.8), rgba(12, 12, 29, 0.8)), url('/your-background.gif')"
            : "linear-gradient(180deg, rgba(17, 17, 50, 0.8), rgba(80, 80, 100, 0.8)), url('/your-background.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Education Qualifications Section */}
      <div className="education-section">
        <motion.div style={{ y: yText }} className="qualification">
          <h2>Education</h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3>Podar International School (2010 - 2020)</h3>
              <p>93%</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3>Abhishek Arts, Commerce and Science Junior College (2020 - 2022)</h3>
              <p>74.14%</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <h3>Symbiosis Institute of Technology, Pune (08/2022 - Present)</h3>
              <p>CGPA: 8.5</p>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <motion.div style={{ y: yText }} className="experience">
          <h2>Experience</h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3>Full Stack Intern at Alhansat Solutions</h3>
              <p>
                <strong>Duration:</strong> 09/2023 - 11/2023, SantaCruz, Mumbai
              </p>
              <p>
                Developed a Postman clone using SvelteKit and Node.js featuring support for PUT, POST, and DELETE HTTP requests.
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h3>Java Web Developer Intern at Rapportsoft Consulting & Technology</h3>
              <p>
                <strong>Duration:</strong> 06/2024 - 07/2024, Hinjawadi, Pune
              </p>
              <p>
                Engineered a small-scale prototype for shipment management software, streamlining logistics and operations. 
                <strong>Tech Stack:</strong> ReactJs, SpringBoot, MySQL.
              </p>
            </motion.li>
          
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Parallax;
