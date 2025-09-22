import React from "react";
import { Input } from "./Input";
import { Radio } from "./Radio";

export const Checkout = () => {
  return (
    <section className="bg-white col-span-20 lg:col-span-13 rounded-lg p-6 md:px-7 md:py-8 lg:px-12 lg:py-14">
      <div className="flex flex-col gap-8 md:gap-12">
        <h1 className="font-bold text-[1.75rem] md:text-[2rem] tracking-[1px] uppercase break-words">
          Checkout
        </h1>

        <div>
          <h2 className="text-primary tracking-[1px] text-[13px] font-bold uppercase mb-4">
            Billing details
          </h2>

          <div className="grid grid-cols-2 gap-6 md:gap-4">
            <Input
              label="Name"
              className="col-span-2 md:col-span-1"
              placeholder={"Alexei Ward"}
            />
            <Input
              label="Email Address"
              className="col-span-2 md:col-span-1"
              placeholder={"alexeiward@mail.com"}
            />
            <Input
              label="Phone Number"
              className="col-span-2"
              placeholder={"+1 202-555-0136"}
            />
          </div>
        </div>

        <div>
          <h2 className="text-primary tracking-[1px] text-[13px] font-bold uppercase mb-4">
            shipping info
          </h2>

          <div className="grid grid-cols-2 gap-6 md:gap-4">
            <Input
              label="Address"
              className="col-span-2"
              placeholder={"1137 William Avenue"}
            />
            <Input
              label="ZIP Code"
              className="col-span-2 md:col-span-1"
              placeholder={"10001"}
            />
            <Input
              label="City"
              className="col-span-2 md:col-span-1"
              placeholder={"New York"}
            />
            <Input
              label="Country"
              className="col-span-2 md:col-span-1"
              placeholder={"United States"}
            />
          </div>
        </div>

        <div>
          <h2 className="text-primary tracking-[1px] text-[13px] font-bold uppercase mb-4">
            payment details
          </h2>

          <div className="grid grid-cols-2 gap-6 md:gap-4">
            <label className="text-[12px] font-bold col-span-2 md:col-span-1">
              Payment Method
            </label>
            <Radio
              id={"e-money"}
              label="e-Money"
              className="col-span-2 md:col-span-1"
            />
            <Radio
              id={"cod"}
              label="Cash on Delivery"
              className="col-span-2 md:col-span-1 md:col-start-2"
            />
            <Input
              label={"e-Money Number"}
              placeholder={"238521993"}
              className="col-span-2 md:col-span-1"
            />
            <Input
              label={"e-Money PIN"}
              placeholder={"6891"}
              className="col-span-2 md:col-span-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
