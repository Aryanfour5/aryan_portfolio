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

     
    </motion.div>
  );
};

export default Contact;
