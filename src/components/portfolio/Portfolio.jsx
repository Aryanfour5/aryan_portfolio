import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Investment Portfolio Tracker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrteNZ0lpF9Kq25TTVXQl0SXSZD3gX_OzdOw&s",
    desc: "Created a robust tracker with Java and MySQL to manage real-time financial data, leveraging the Alpha Vantage API for live stock prices, delisted company monitoring, and analytics to offer timely portfolio insights.",
    github: "https://github.com/Aryanfour5/InvestmentPortfolioTracker"
  },
  {
    id: 2,
    title: " Blockchain based  Fund Management System for Indian Temples ",
    img: "https://templesoftware.eshalabs.in/wp-content/uploads/2024/01/OIG.jpeg",
    desc: " A full-stack robust Bus management system using Reactjs,Mysql, MetaMask API, Layer 2zkEVM compatible 'validium'(off-chain transaction data storage, proof of zero knowledge) blockchain and triggered by smart contracts..",
    github: "https://github.com/Aryanfour5/Temple_Fund_Management_System"
  },
  {
    id: 3,
    title: "Dropout Analysis:-",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ptMhHEYaCSTO5rDPDJpM8qtLZ1TFBDAmAw&s",
    desc: " Developed a predictive dropout analysis model training on dataset of gujrat students using decisiontree, supportvector,randomforest,logistic regression",
    github: "https://github.com/Aryanfour5/DropoutAnalysis"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
