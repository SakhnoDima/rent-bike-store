import React from "react";
import { Field, Form, Formik } from "formik";

interface IFormInitValues {
  name: string;
  type: string;
  color: string;
  wheelSize: string;
  price: string;
  id: string;
  desc: string;
}

const inputStyle =
  "w-[235px] h-[29px] px-[16px] py-[5px] bg-gray-color rounded-[5px] placeholder:font-main placeholder:text-sm placeholder:font-normal ";
const inputs = [
  {
    name: "name",
    placeholder: "Name",
  },
  {
    name: "type",
    placeholder: "Type",
  },
  {
    name: "color",
    placeholder: "Color",
  },
  {
    name: "wheelSize",
    placeholder: "Wheel Size",
  },
  {
    name: "price",
    placeholder: "Price",
  },
  {
    name: "id",
    placeholder: "ID",
  },
];

const Forma: React.FC<{}> = () => {
  const initialValues: IFormInitValues = {
    name: "",
    type: "",
    color: "",
    wheelSize: "",
    price: "",
    id: "",
    desc: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });

        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div className="w-[481px] flex flex-wrap gap-x-[11px] gap-y-[10px] ">
          {inputs.map(({ name, placeholder }) => (
            <Field
              key={name}
              className={inputStyle}
              name={name}
              placeholder={placeholder}
            />
          ))}
        </div>
        <Field
          className={`my-[10px] ${inputStyle} w-[481px]`}
          name="desc"
          placeholder="Description"
        />

        <div>
          <button type="submit">SAVE</button>
          <button type="reset">CLEAR</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Forma;
