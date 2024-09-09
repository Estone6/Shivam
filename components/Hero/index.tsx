"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Adjusted flex for responsiveness */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 A Complete Training and Placement Guide
              </h4>
              <h1 className="mb-5 pr-0 lg:pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Unlock your potential with{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  Tech Unicorn
                </span>
              </h1>
              <p>
                Tech Unicorn Academy offers comprehensive, hands-on training for aspiring IT and Non-IT professionals. Learn from industry experts and master the latest technologies to advance your career.
              </p>

              <div className="mt-10">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center">
                  <div className="w-full md:w-1/2 min-w-[265px]">
                    <span className="mr-2 inline-flex rounded-full bg-meta px-4.5 py-1 text-lg font-bold uppercase text-white ">
                  100%
                </span> <span className="text-lg font-bold text-black dark:text-white">Placement guarantee</span>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Link href="/support">
                      <button
                        aria-label="get started button"
                        className="flex rounded-full justify-center bg-black px-7.5 min-w-[147px] w-full py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Image content */}
            <div className="w-full lg:w-1/2 animate_right">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light-1.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-light-1.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
