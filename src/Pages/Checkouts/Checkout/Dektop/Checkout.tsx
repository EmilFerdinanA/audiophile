import { useForm } from "react-hook-form";

import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";

import zx9 from "/cart/image-xx99-mark-two-headphones.jpg";

export const CheckoutDesktop = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div className="xl:flex">
      <section className="mx-40 bg-tertiary rounded-lg px-12 py-14">
        <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <h2 className="text-primary font-bold mb-4">BILLING DETAILS</h2>
            <div className="flex gap-6 flex-wrap justify-between">
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
            <div className="flex gap-6 flex-wrap justify-between">
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
            <div className="flex justify-between">
              <span className="text-xs font-bold">Payment Method</span>
              <div className="flex flex-col gap-4 w-[48%]">
                <Radio
                  label="e-Money"
                  name="payment"
                  register={register}
                  value="e_money"
                  checked={true}
                />
                <Radio
                  label="Cash on Delivery"
                  name="payment"
                  register={register}
                  value="COD"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-6 justify-between">
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
        </form>
        <button onClick={handleSubmit(onSubmit)} type="submit">
          Emil
        </button>
      </section>

      <section className="bg-[#cfcfcf] rounded-lg px-8 mx-40 py-8">
        <h1 className="text-lg font-bold mb-8">SUMMARY</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center h-16 gap-4">
            <img className="rounded-lg object-cover h-full" src={zx9} />
            <div>
              <h6 className="text-sm font-bold">XX99 MK II</h6>
              <span className="text-sm font-bold text-septenary text-opacity-50">
                $ 2,999
              </span>
            </div>
          </div>
          <span className="text-sm font-bold text-septenary text-opacity-50">
            x1
          </span>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <div className="flex justify-between">
            <h6 className="text-base font-medium text-septenary text-opacity-50">
              TOTAL
            </h6>
            <span className="text-lg font-bold">$ 5,396</span>
          </div>
          <div className="flex justify-between">
            <h6 className="text-base font-medium text-septenary text-opacity-50">
              SHIPPING
            </h6>
            <span className="text-lg font-bold">$ 50</span>
          </div>
          <div className="flex justify-between">
            <h6 className="text-base font-medium text-septenary text-opacity-50">
              VAT (INCLUDE)
            </h6>
            <span className="text-lg font-bold">$ 50</span>
          </div>
          <div className="flex justify-between mt-4">
            <h6 className="text-base font-medium text-septenary text-opacity-50">
              GRAND TOTAL
            </h6>
            <span className="text-primary text-lg font-bold">$ 5,446</span>
          </div>
          <button className="bg-primary h-12 text-senary font-bold mt-6">
            CONTINUE & PAY
          </button>
        </div>
      </section>
    </div>
  );
};
