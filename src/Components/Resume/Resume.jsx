import React from 'react';
import { FaGoogleScholar, FaWandMagicSparkles } from 'react-icons/fa6';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { DiCodeigniter } from 'react-icons/di';
import {
  SiTerraform,
  SiSplunk,
  SiPrometheus,
  SiPowershell,
  SiOracle,
  SiRabbitmq,
} from 'react-icons/si';
import { FaDocker, FaJenkins, FaAws } from 'react-icons/fa';
import Skill from '../Skill/Skill';
import KnowledgeCard from '../KnowledgeCard/KnowledgeCard';
import DetailCard from '../DetailCard/DetailCard';

function Resume() {
  return (
    <div className="flex flex-col bg-white m-5 mt-10 rounded-[18px] items-start p-5 ">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab">Resume</h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500  w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:mt-5  mb-10">
          <div className="lg:mt-5">
            <div className="flex justify-center items-center m-4 lg:mt-0">
              <FaWandMagicSparkles className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium ">
                Expertise
              </p>
            </div>
            <div className="self-center">
              <Skill />
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex justify-center items-center m-4 mb-7 mt-6 lg:mt-5">
              <DiCodeigniter className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium ">
                Working Skills
              </p>
            </div>
            <div className="m-3 ml-5 flex w-[90%] justify-around ">
              <div className="flex flex-col">
                <KnowledgeCard
                  name="Terraform"
                  icon={
                    <SiTerraform className="text-purple-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Jenkins"
                  icon={
                    <FaJenkins className="text-black-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="AWS"
                  icon={
                    <FaAws className="text-orange-400 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="OCI"
                  icon={
                    <SiOracle className="text-red-500 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Docker"
                  icon={
                    <FaDocker className="text-sky-500 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="RabbitMQ"
                  icon={
                    <SiRabbitmq className="text-orange-500 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="Splunk"
                  icon={
                    <SiSplunk className="text-green-500 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Prometheus"
                  icon={
                    <SiPrometheus className="text-red-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Shell Script"
                  icon={
                    <SiPowershell className="text-black-600 text-3xl lg:text-xl" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px self-center w-[90%] bg-rose-300 border-0 mb-10" />
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:p-2 lg:m-2">
          <div className="flex flex-col">
            <div className="flex justify-center items-center m-4 mt-5 mb-7 lg:mt-0">
              <IoBriefcaseOutline className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium ">
                Experience
              </p>
            </div>
            <DetailCard
              classname="flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
              header="2022 Jun - Present"
              title="Associate Senior Software Engineer"
              description="Oracle Cerner"
            />
            <DetailCard
              classname="flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
              header="2020 Jun - 2022 Jun"
              title="Software Engineer"
              description="Cerner Corporation"
            />
            <DetailCard
              classname="flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
              header="2020 Jan - 2020 Jun"
              title="Software Engineer Intern"
              description="Cerner Corporation"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center m-4 mt-8 mb-7 lg:mt-0">
              <FaGoogleScholar className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium ">
                Education
              </p>
            </div>
            <div className=" flex justify-center items-center flex-col lg:ml-4">
              <DetailCard
                classname="flex flex-col bg-sky-100 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                header="2018 Jun - 2020 Jun"
                title="Masters of Computer Applications"
                description="RV College of Engineering, Bangalore"
              />
              <DetailCard
                classname="flex flex-col bg-rose-50 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                header="2015 Jun - 2018 Jun"
                title="Bachelor of Computer Applications"
                description="Surana College, Bangalore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
