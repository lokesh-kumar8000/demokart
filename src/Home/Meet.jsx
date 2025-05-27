import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Meet() {
  return (
    <section className=" w-full py-5 ">
      <div className="max-w-6xl mx-auto ">
        <h2 className=" font-bold text-3xl text-center pb-3">Meet My Team </h2>
        <div className=" md:grid grid-cols-2 ">
          <div className=" shadow mx-3 text-center col-span-1 p-4 bg-[#09294a] text-white rounded-xl ">
            <div className=" w-[150px] h-[150px] rounded-full overflow-hidden mx-auto  ">
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQFx8n6t6XMYRQ/profile-framedphoto-shrink_800_800/B56ZUJGm_gHQAg-/0/1739614482784?e=1748772000&v=beta&t=q7hEW_RCilVOlHTAJbz5cZg2hIK1kr6lS3Ut19YnX48"
                alt=""
              />
            </div>
            <h2 className=" text-xl font-semibold mt-2 ">Vikash Kumar</h2>
            <p className=" text-gray-300 "> MERN Stack Developer </p>
            <p className="text-justify">
              {" "}
              Hi, I'm Vikash Kumar — a MERN Stack Developer with a strong
              passion for building modern, responsive, and user-friendly web
              applications. I specialize in working with React, and Node.js to
              create full-stack projects. I enjoy turning ideas into real-world
              applications and constantly learning new tools and frameworks to
              improve my skills.{" "}
            </p>
            <div className=" flex justify-center gap-4 my-3 ">
              <Link to={"https://www.linkedin.com/in/vikash-kumar-75a507288/"}>
                <FaLinkedin className=" text-3xl " />
              </Link>
              <Link to={"https://github.com/VikashAlex"}>
                <FaGithub className=" text-3xl " />
              </Link>
            </div>
          </div>
          <div className=" shadow mx-3 text-center mt-3 sm:mt-0 col-span-1 p-4 bg-[#09294a] text-white rounded-xl ">
            <div className=" w-[150px] h-[150px] rounded-full overflow-hidden mx-auto  ">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHNqIEodkHzLQ/profile-displayphoto-shrink_800_800/B4EZXWXoMLHgAc-/0/1743058274489?e=1753920000&v=beta&t=RoGoJFj9jdnfSMntL5bTkNgr4oc3E-R5U1RGvVoQCWc"
                alt=""
              />
            </div>
            <h2 className=" text-xl font-semibold mt-2 ">Lokesh Kumar</h2>
            <p className=" text-gray-300 "> MERN Stack Developer </p>
            <p className="text-justify">
              {" "}
              Hi, I'm Lokesh Kumar — a MERN Stack Developer with a strong
              passion for building modern, responsive, and user-friendly web
              applications. I specialize in working with React, and Node.js to
              create full-stack projects. I enjoy turning ideas into real-world
              applications and constantly learning new tools and frameworks to
              improve my skills.{" "}
            </p>
            <div className=" flex justify-center gap-4 my-3 ">
              <Link to={"https://www.linkedin.com/in/lokesh-kumar-010926291/"}>
                <FaLinkedin className=" text-3xl " />
              </Link>
              <Link to={"https://github.com/lokesh-kumar8000"}>
                <FaGithub className=" text-3xl " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meet;
