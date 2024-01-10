import React from "react";

import Section from "../Components/Section/Section";
import List from "../Components/List/List";
import Forma from "../Components/Forma/Forma";
import Statistics from "../Components/Statistic/Statistics";

export const HomePage: React.FC = () => {
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
