"use client";

import Header from "@/components/Header/page";
import Sidebar from "@/components/Sidebar/page";
import React from "react";
import { useState } from "react";
import HtmlImage from "@/Images/html.png";
import Image from "next/image";
import SkilltestModal from "@/components/SkilltestModal/page";
import { Award, Calendar, CheckSquare } from "lucide-react";
import { useFormData } from "@/context/FormContext";
import ProgressBar from "@/components/ProgressBar/page";
import CircleProgressBar from "@/components/CircleProgressBar/page";
import PercentileGraph from "@/components/PercentileGraph/page";

const SkillTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formData } = useFormData();

  return (
    <div>
      <Header />
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <section className="md:ml-64 pt-16">
        <div className="p-10">
          <p className="mb-10">Skill Test</p>
          <div className="flex gap-6">
            <div>
              <div className="inline-block">
                <div className="flex items-center gap-2 border-2 p-3 rounded-lg">
                  <Image
                    className="w-20 h-20"
                    src={HtmlImage}
                    width={300}
                    height={300}
                    alt="html"
                  />
                  <div>
                    <p className="font-bold">Hyper Text Markup Language</p>
                    <p className="text-sm">
                      Questions: 08 | Duration: 15mins | Submitted on 5th June
                      2021
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-950 text-white py-3 px-5 rounded-lg text-xs font-bold"
                  >
                    Update
                  </button>
                </div>
                <div className="my-8 border-2 p-3 rounded-lg">
                  <p>Quick Statistics</p>
                  <div className="flex justify-between m-5">
                    <div className="flex items-center gap-3">
                      <Award
                        size={40}
                        color="black"
                        className="bg-slate-200 p-2 rounded-full"
                      />
                      <div>
                        <h1 className="font-bold">{formData.rank}</h1>
                        <p className="text-xs">YOUR RANK</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar
                        size={40}
                        color="black"
                        className="bg-slate-200 p-2 rounded-full"
                      />
                      <div>
                        <h1 className="font-bold">{formData.percentile}%</h1>

                        <p className="text-xs">PERCENTILE</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckSquare
                        size={40}
                        color="black"
                        className="bg-slate-200 p-2 rounded-full"
                      />
                      <div>
                        <h1 className="font-bold">
                          {formData.currentScore}/15
                        </h1>
                        <p className="text-xs">CORRECT ANSWERS</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-8 border-2 p-3 rounded-lg">
                  <p>Comparison Graph</p>
                  <p className="text-xs">
                    You scored {formData.percentile}% percentile which is lower
                    than the average percentile 72% of all the engineers who
                    took the assessment
                  </p>
                  <PercentileGraph
                    percentile={formData.percentile}
                    width={600}
                    height={200}
                    showLabel={true}
                    className="my-4"
                  />
                </div>
              </div>
            </div>

            {/* Second section */}
            <div className="container mx-auto w-1/3 ">
              <div className="border-2 p-6 rounded-lg flex flex-col gap-5">
                <p className="font-bold">Syllabus Wise Analysis</p>

                <div className="flex flex-col gap-3">
                  <p className="text-sm">HTML Tools, Forms, History</p>
                  <div className="flex items-center gap-6">
                    <ProgressBar
                      percentage={80}
                      color={"bg-blue-500"}
                      bgColor={"bg-blue-50"}
                    />
                    <p className="text-blue-500 font-bold">80%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm">Tags & References in HTML</p>
                  <div className="flex items-center gap-6">
                    <ProgressBar
                      percentage={60}
                      color={"bg-orange-500"}
                      bgColor={"bg-orange-50"}
                    />
                    <p className="text-orange-500 font-bold">60%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm">Tables & References in HTML</p>
                  <div className="flex items-center gap-6">
                    <ProgressBar
                      percentage={24}
                      color={"bg-red-500"}
                      bgColor={"bg-red-50"}
                    />
                    <p className="text-red-500 font-bold">24%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm">Tables & CSS Basics</p>
                  <div className="flex items-center gap-6">
                    <ProgressBar
                      percentage={96}
                      color={"bg-green-500"}
                      bgColor={"bg-green-50"}
                    />
                    <p className="text-green-500 font-bold">96%</p>
                  </div>
                </div>
              </div>

              <div className="border-2 p-6 rounded-lg mt-5">
                <div className="flex font-bold justify-between text-sm">
                  <p>Question Analysis</p>
                  <p className="text-blue-500">{formData.currentScore}/15</p>
                </div>
                <p className="text-xs my-3">
                  <span className="font-bold">
                    You scored {formData.currentScore} questions out of 15.
                  </span>{" "}
                  However it still needs some improvements.
                </p>
                <CircleProgressBar current={formData.currentScore} total={15} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkilltestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SkillTest;
