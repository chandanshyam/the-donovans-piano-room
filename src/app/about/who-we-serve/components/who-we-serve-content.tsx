import Image from "next/image";
import React from "react";

export default function WhoWeServeContent() {
  return (
    <div className="flex h-full flex-row">
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="w-[325px]">
          <h2 className=" font-montserrat text-6xl font-semibold text-primary-brown 3xl:text-7xl 4xl:text-8xl">
            Music for <br /> everybody
          </h2>
          <p className="mt-4 text-2xl text-primary-gray">
            Our program offers a well-rounded approach to musical growth, from
            learning to read music, to help preparing for college. We offer a
            range of programs to help children of any age and skill level
            continue to learn.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-[90%] flex-col gap-6">
          <div className="flex w-full items-center gap-[51px] rounded-3xl border-2 border-[#FCF0D8] bg-white px-12 py-5 shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px] shadow-[#AC7A2280]">
            <div className="flex w-36 flex-col items-center gap-2">
              <Image
                src="/about/who-we-serve/Icon1.svg"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <ul className="list-disc">
              <li className="text-[16px] text-primary-gray">
                Foster cognitive, social, & emotional growth
              </li>
              <li className="text-[16px] text-primary-gray">
                Develop a lifelong appreciation for the arts
              </li>
              <li className="text-[16px] text-primary-gray">
                Improve academic performance
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center gap-[51px] rounded-3xl border-2 border-[#FCF0D8] bg-white px-12 py-5 shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px] shadow-[#AC7A2280]">
            <div className="flex w-36 flex-col items-center gap-2">
              <Image
                src="/about/who-we-serve/Icon2.svg"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <ul className="list-disc">
              <li className="text-[16px] text-primary-gray">
                Explore creative expression
              </li>
              <li className="text-[16px] text-primary-gray">
                Develop social skills
              </li>
              <li className="text-[16px] text-primary-gray">
                Band, orchestra, and choral enrichment
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center gap-[51px] rounded-3xl border-2 border-[#FCF0D8] bg-white px-12 py-5 shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px] shadow-[#AC7A2280]">
            <div className="flex w-36 flex-col items-center gap-2">
              <Image
                src="/about/who-we-serve/Icon3.svg"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <ul className="list-disc">
              <li className="text-[16px] text-primary-gray">
                Explore self-expression and creativity
              </li>
              <li className="text-[16px] text-primary-gray">
                Practice discipline
              </li>
              <li className="text-[16px] text-primary-gray">
                Band, orchestra, and choral enrichment
              </li>
              <li className="text-[16px] text-primary-gray">
                AP Music Theory and college prep
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
