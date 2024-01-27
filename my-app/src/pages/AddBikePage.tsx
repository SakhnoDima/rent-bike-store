import React from "react";

import Section from "../Components/Section/Section";
import List from "../Components/List/List";
import Forma from "../Components/Forms/Forma";
import Statistics from "../Components/Statistic/Statistics";

export const AddBike: React.FC = () => {
  return (
    <>
      <Section isPrime={true}>
        <List />
      </Section>
      <Section>
        <Forma />
        <Statistics />
      </Section>
    </>
  );
};
