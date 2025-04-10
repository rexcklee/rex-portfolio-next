import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
  const today = new Date();
  return (
    <footer className="w-full py-10 bg-special text-center text-third ">
      <div className="py-6 mx-auto flex justify-between items-center w-48 text-xl sm:text-3xl">
        <a href="https://www.linkedin.com/in/chikin-lee" className="">
          <FaLinkedin className="inline-block hover:text-white" />
        </a>
        <a href="https://github.com/rexcklee?tab=repositories" className="">
          <FaGithub className="inline-block hover:text-white" />
        </a>
        <a href="mailto:rexcklee852@gmail.com" className="">
          <IoMdMail className="inline-block hover:text-white" />
        </a>
      </div>
      <div className="text-base sm:text-lg pb-6">
        <p>@ {today.getFullYear()} Copyright by Chi Kin Lee</p>
      </div>
    </footer>
  );
};

export default Footer;
