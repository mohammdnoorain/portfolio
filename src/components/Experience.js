import React from 'react';

const Experience = () => {
  return (
    <div className='py-10 bg-[#232325]' id='experience'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
          <p>PitchCats Pvt Ltd</p>
          <p className='text-gray-400'>(Jan 2024 - Dec 2024)</p>
          <p className='text-gray-500'>
            At PitchCats Pvt Ltd, I worked as a DevOps Engineer, where I contributed to creating and maintaining 
            CI/CD pipelines using Jenkins and GitLab CI. I automated infrastructure provisioning with tools like 
            Ansible and Terraform and managed containerized applications with Docker and Kubernetes. I also 
            implemented monitoring solutions using Prometheus and Grafana, improving system reliability and reducing 
            downtime.
          </p>
        </div>

        <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>

        <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
          <p>Software Solution & Services</p>
          <p className='text-gray-400'>(March 2023 - Dec 2023)</p>
          <p className='text-gray-500'>
            At Software Solution & Services, I worked as a Full Stack Developer, where I developed dynamic 
            web applications using technologies like React.js, Node.js, Express.js, MongoDB, and MySQL. I was 
            involved in both frontend and backend development, collaborating with teams to design and implement 
            user-centric features and improve application performance. Additionally, I was responsible for 
            optimizing database queries and ensuring seamless integration between the front and back end.
          </p>
        </div>
    </div>
  );
};

export default Experience;
