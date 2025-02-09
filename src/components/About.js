import React from "react";
import aboutImg from "..//assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h=[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-grey-300 my-3">
              <h1 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h1>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I'm Mohammad Noorain, a <span className="primary-text">DevOps Engineer</span> with expertise in automating workflows, optimizing deployments, and enhancing system reliability. My <span className="primary-text">DevOps</span> skills include creating robust <span className="primary-text">CI/CD pipelines</span> with <span className="primary-text">Jenkins</span>, automating infrastructure using <span className="primary-text">Ansible</span> and <span className="primary-text">Terraform</span>, and managing containerized environments with <span className="primary-text">Docker</span> and <span className="primary-text">Kubernetes</span>. I am proficient in monitoring and alerting systems using <span className="primary-text">Prometheus</span> and <span className="primary-text">Grafana</span> and scripting with <span className="primary-text">Python</span> and <span className="primary-text">Shell/Bash</span> to streamline operations.

                Additionally, I bring strong knowledge of <span className="primary-text">Full Stack Development</span> technologies like <span className="primary-text">React.js</span>, <span className="primary-text">Node.js</span>, <span className="primary-text">Express.js</span>, <span className="primary-text">MongoDB</span>, <span className="primary-text">MySQL</span>, and <span className="primary-text">JavaScript</span>. With a solid understanding of the <span className="primary-text">Software Development Life Cycle</span> and a problem-solving mindset, I deliver scalable and efficient solutions that drive impactful results.
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">11<span className="primary-text">+</span>{" "}</h3>
              <p><span className="md:text-base text-xs">Projects</span></p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">2<span className="primary-text">+</span>{" "}</h3>
              <p><span className="md:text-base text-xs">Overall Years Experience</span></p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white ">11<span className="primary-text">+</span>{" "}</h3>
              <p><span className="md:text-base text-xs">Happy Clients</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
