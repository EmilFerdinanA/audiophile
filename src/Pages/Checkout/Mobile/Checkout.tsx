import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";

export const CheckoutMobile = () => {
  const [isChecked, setIsChecked] = useState(false);

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
          <div className="flex flex-col gap-6">
            <Input label="Name" name="name" register={register} />
            <Input
              type="email"
              label="Email Adress"
              name="email"
              register={register}
            />
            <Input
              type="number"
              label="Phone Number"
              name="phone_number"
              register={register}
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-primary font-bold mb-4">SHIPPING INFO</h2>
          <div className="flex flex-col gap-6">
            <Input label="Your Address" name="address" register={register} />
            <Input
              type="number"
              label="ZIP Code"
              name="zip_code"
              register={register}
            />
            <Input label="City" name="city" register={register} />
            <Input label="Country" name="country" register={register} />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-primary font-bold mb-4">PAYMENT DETAILS</h2>
          <div className="flex flex-col gap-4">
            <Radio
              label="Payment Method"
              name="payment"
              register={register}
              value="e_money"
              onClick={handleRadioChange}
              isChecked={isChecked}
            />
            <Radio
              label="Payment Method"
              name="payment"
              register={register}
              value="sundel"
              onClick={handleRadioChange}
              isChecked={isChecked}
            />
          </div>
        </section>
        <button type="submit">Emil</button>
      </form>
    </div>
  );
};
