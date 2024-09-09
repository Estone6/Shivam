"use client";
import React from "react";
import coursesData from "./coursesData";
import SectionHeader from "../Common/SectionHeader";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <>
      {/* <!-- ===== Courses Section Start ===== --> */}
      <section id="courses" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "TECH UNICORN ACADEMY COURSES",
              subtitle: "Our Popular Courses",
              description: `Explore our range of coding and non-coding courses designed to boost your career in the tech industry.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div id="courses" className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Course Cards Start --> */}
            {coursesData.map((course, key) => (
              <CourseCard feature={course} key={key} />
            ))}
            {/* <!-- Course Cards End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Courses Section End ===== --> */}
    </>
  );
};

export default Courses;
