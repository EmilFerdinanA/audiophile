import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";

export const CheckoutMobile = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div className="mx-6 sm:mx-10 xl:mx-40 mt-4 mb-6 sm:mt-8 xl:mt-20 xl:mb-14 bg-tertiary rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2 className="text-primary font-bold mb-4">BILLING DETAILS</h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
            <Input
              label="Name"
              name="name"
              register={register}
              className="sm:w-[48%]"
            />
            <Input
              className="sm:w-[48%]"
              type="email"
              label="Email Adress"
              name="email"
              register={register}
            />
            <Input
              className="sm:w-[48%]"
              type="number"
              label="Phone Number"
              name="phone_number"
              register={register}
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-primary font-bold mb-4">SHIPPING INFO</h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
            <Input
              label="Your Address"
              name="address"
              register={register}
              className="sm:w-full"
            />
            <Input
              type="number"
              label="ZIP Code"
              name="zip_code"
              register={register}
              className="sm:w-[48%]"
            />
            <Input
              label="City"
              name="city"
              register={register}
              className="sm:w-[48%]"
            />
            <Input
              label="Country"
              name="country"
              register={register}
              className="sm:w-[48%]"
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-primary font-bold mb-4">PAYMENT DETAILS</h2>
          <div className="sm:flex sm:justify-between">
            <span className="text-xs font-bold">Payment Method</span>
            <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:w-[48%]">
              <Radio
                label="e-Money"
                name="payment"
                register={register}
                value="e_money"
                onClick={handleRadioChange}
                checked={true}
              />
              <Radio
                label="Cash on Delivery"
                name="payment"
                register={register}
                value="COD"
                onClick={handleRadioChange}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:justify-between">
            <Input
              type="number"
              label="e-Money Number"
              name="e_money_number"
              register={register}
              className="w-[48%]"
            />
            <Input
              type="number"
              label="e-Money PIN"
              name="e_money_pin"
              register={register}
              className="w-[48%]"
            />
          </div>
        </section>
        <button type="submit">Emil</button>
      </form>
    </div>
  );
};
