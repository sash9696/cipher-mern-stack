import "./HomePage.css";
import githubIcon from "../../assets/github.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transiton: { duration: 0.5, delay: delay },
  },
});
function HomePage() {
  return (
    <div className="homepage_container">
      <div className="homepage_left">
        <motion.p
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h1"
        >
          <span className="red_color">Hi,</span> my name is
        </motion.p>

        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h2"
        >
          Sahil Chopra
        </motion.p>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h3"
        >
          Developer at <span className="red_color">ABC Pvt Ltd</span>
        </motion.p>

        <motion.p
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="homepage_left_description"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ullam delectus dolor. At dicta molestiae expedita alias architecto
          sapiente praesentium eius, ad eos fugiat consectetur, incidunt dolores
          nam quae tempore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto culpa odio labore, earum ipsum, modi eos soluta assumenda
          maxime itaque quibusdam dolorum dolore non distinctio alias corporis
          amet accusamus quisquam?
        </motion.p>

        <motion.div
          variants={container(2.5)}
          initial="hidden"
          animate="visible"
        >
          <a href="#" target="_blank">
            {/* <img 
                            src={githubIcon}
                            alt='githubIconImage'
                        /> */}
            <FaGithub className="homepage_logo" />
          </a>
          <a href="#" target="_blank">
            {/* <img
              src={githubIcon}
              alt="githubIconImage"
              className="homepage_logo"
            /> */}

            <FaLinkedin className="homepage_logo" />
          </a>
        </motion.div>

        <a
      
          href="mailto:abc@gmail.com"
        >
          <motion.button
                 variants={container(3)}
                 initial="hidden"
                 animate="visible"
          className="homepage_left_button">Get in Touch</motion.button>
        </a>
      </div>

      <div className="homepage_right">
        <motion.img
               initial={{x:100, opacity:0}}
               animate={{x:0, opacity:1}}
               transition={{duration:1, delay:1}}
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="GIF"
        />
      </div>
    </div>
  );
}

export default HomePage;
