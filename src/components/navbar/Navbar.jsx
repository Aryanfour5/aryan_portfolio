import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
     Aryan Bachute
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/aryan-bachute-20664324a/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Aryanfour5">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/bachutearyan/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://www.hackerrank.com/profile/aryan_bachute_b1">
            <img src="/hackerank.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
