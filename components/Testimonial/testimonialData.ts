import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anjali Verma",
    designation: "FFull Stack Developer @TechSpark",
    image: image1,
    content:
      "The Java Full Stack course at Tech Unicorn Academy has been transformative. The hands-on projects and expert guidance have boosted my confidence, and I landed a job within three months of completing the course!",
  },
  {
    id: 2,
    name: "Ravi Patel",
    designation: "Founter @democompany",
    image: image2,
    content:
      "I enrolled in the Automation Testing course to enhance my testing skills. The practical exercises and real-world case studies helped me transition to an automation role, and I'm now leading a team!",
  },
  {
    id: 4,
    name: "Meera Singh",
    designation: "Founter @democompany",
    image: image2,
    content:
      "The Big Data course at Tech Unicorn Academy opened new career opportunities for me. The in-depth learning modules on Hadoop and Spark were invaluable, and I received a promotion right after completing the course.",
  },
];
