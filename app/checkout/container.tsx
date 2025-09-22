"use client";

import { Checkout } from "@/components/Checkout";
import { Summary } from "@/components/Summary";
import { FormProvider, useForm } from "react-hook-form";

export const CheckoutContainer = () => {
  const methods = useForm();
  return (
    <div className="grid grid-cols-20 gap-y-5 md:gap-y-8 lg:gap-x-8 items-start">
      <FormProvider {...methods}>
        <Checkout />
        <Summary />
      </FormProvider>
    </div>
  );
};
