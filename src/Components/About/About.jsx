// src/Components/About/About.js
import React, { forwardRef } from 'react';
import { FaCode, FaInfinity } from 'react-icons/fa6';
import DetailCard from '../DetailCard/DetailCard';
import Home from '../../assets/images/Home.png';

<<<<<<< HEAD
function About() {
  return (
    <div className="flex flex-col bg-white m-5 mt-10 rounded-[18px] items-start p-5">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab">About</h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500  w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="flex flex-col items-center 2xl:flex-row 2xl:items-center 2xl:justify-around m-4  ">
        <img src={Home} alt="Home" className="w-96 lg:w-[30rem]" />
        <p className="font-poppins text-gray-600 tracking-wider lg:tracking-normal lg:text-lg">
          Senior developer experienced in developing high end, scalable and
          responsive web applications, REST Apis, SPAs with technologies
          including ReactJS with Redux, Ruby on Rails, Java and Mysql.
          <br />
          <br />
          My expertise are React, Javascript, Java and Spring boot. I have also
          worked on devops including cloud services with AWS and OCI, Jenkins,
          Docker, Terraform, Prometheus and monitoring apps.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="font-medium text-2xl font-poppins mt-5 ml-4 mb-6">
          What I Do!
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start">
          <div className="flex flex-col">
            <DetailCard
              classname="flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
              header={<FaCode className="text-red-500" />}
              title="Web Development"
              description="Have experience working in various web technologies, languages and frameworks including Java, JavaScript, Spring and Spring Boot"
            />
          </div>
          <div className="flex flex-col">
            <DetailCard
              classname="flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
              header={<FaInfinity className="text-purple-500" />}
              title="DevOps & Cloud"
              description="Have experience working on different cloud technologies including AWS & OCI, along with setting up devops pipeline for each of them"
            />
          </div>
=======
const About = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="flex flex-col bg-white m-5 mt-10 rounded-[18px] items-start p-5"
  >
    <div className="flex flex-row m-4 mt-10 items-center">
      <h1 className="font-bold text-3xl font-robotoslab">About</h1>
      <div className="bg-gradient-to-r to-pink-500 from-rose-500 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
    </div>
    <div className="flex flex-col items-center 2xl:flex-row 2xl:items-center 2xl:justify-around m-4">
      <img src={Home} alt="Home" className="w-96 lg:w-[30rem]" />
      <p className="font-poppins text-gray-600 tracking-wider lg:tracking-normal lg:text-lg">
        Senior developer experienced in developing high end, scalable and
        responsive web applications, REST Apis, SPAs with technologies including
        ReactJS with Redux, Ruby on Rails, Java and Mysql.
        <br />
        <br />
        My expertise are React, Javascript, Java and Spring boot. I have also
        worked on devops including cloud services with AWS and OCI, Jenkins,
        Docker, Terraform, Prometheus and monitoring apps.
      </p>
    </div>
    <div className="flex flex-col w-full">
      <h1 className="font-medium text-2xl font-poppins mt-5 ml-4 mb-6">
        What I Do!
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start">
        <div className="flex flex-col">
          <DetailCard
            classname="flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
            header={<FaCode className="text-red-500" />}
            title="Web Development"
            description="Have experience working in various web technologies, languages and frameworks including Java, JavaScript, Spring and Spring Boot"
          />
        </div>
        <div className="flex flex-col">
          <DetailCard
            classname="flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
            header={<FaInfinity className="text-purple-500" />}
            title="DevOps & Cloud"
            description="Have experience working on different cloud technologies including AWS & OCI, along with setting up devops pipeline for each of them"
          />
>>>>>>> e94c469 (Add scroll for sections)
        </div>
      </div>
    </div>
  </div>
));

export default About;
