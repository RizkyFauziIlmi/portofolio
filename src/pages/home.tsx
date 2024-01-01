import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useDocumentTitle } from "usehooks-ts";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {

  useDocumentTitle("Rizky Fauzi Ilmi - Home");

  return (
    <motion.div
      initial={{ opacity: 0, translateY: window.innerHeight }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="h-full w-screen md:w-full flex md:flex-row flex-col-reverse items-center overflow-hidden md:px-10 gap-10 justify-center"
    >
      <div className="flex flex-col w-[60%] items-start justify-center gap-2">
        <h3 className="scroll-m-20 text-2xl text-[#750E21] font-semibold tracking-tight">
          Welcome
        </h3>
        <Typewriter
          options={{
            cursorClassName: "text-4xl",
            autoStart: true,
            wrapperClassName:
              "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm Program")
              .pauseFor(300)
              .deleteChars(4)
              .typeString("grammer")
              .pauseFor(2000)
              .start();
          }}
        />
        <blockquote className="mb-4 mt-2 border-l-2 pl-6 italic">
          "I'm a programmer. I use code to create things that make people's
          lives easier, more enjoyable, or more meaningful. I'm passionate about
          using technology to solve problems and make the world a better place."
        </blockquote>
        <Link to="/profile">
          <Button className="w-fit group" variant="outline">
            See More{" "}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </Link>
      </div>
      <div className="w-fit">
        <Avatar className="w-52 h-52">
          <AvatarImage src="https://avatars.githubusercontent.com/u/104153142?v=4" />
          <AvatarFallback>RFI</AvatarFallback>
        </Avatar>
      </div>
    </motion.div>
  );
}
