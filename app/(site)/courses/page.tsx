import React from "react";
import { Metadata } from "next";
import Courses from "@/components/Courses";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-10 pt-10">
      <Courses />
    </div>
  );
};

export default SupportPage;
