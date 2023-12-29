import React from "react";

interface ISection {
  children?: React.ReactNode;
  isPrime?: boolean;
}

const Section: React.FC<ISection> = ({ children, isPrime = false }) => {
  return (
    <section
      className={`p-[10px] ${
        isPrime
          ? "h-[100vh] overflow-y-scroll p-[10px] border-r-[1px] border-[#C4C4C4]"
          : " "
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
