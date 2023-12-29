import React from "react";
import Forma from "../Forma/Forma";
import Statistics from "../Statistic/Statistics";
import List from "../List/List";
import Section from "../Section/Section";

const Body = () => {
  return (
    <main className="flex-auto flex">
      <Section isPrime={true}>
        <List />
      </Section>
      <Section>
        <Forma />
        <Statistics />
      </Section>
    </main>
  );
};

export default Body;
