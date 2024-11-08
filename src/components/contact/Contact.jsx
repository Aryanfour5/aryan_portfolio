import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Connect With Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>📧 Mail</h2>
          <span>bachutearyan@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>📍 Address</h2>
          <span>Chinchwad Pune</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>📞 Phone</h2>
          <span>+91 9422357591</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z..."
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
