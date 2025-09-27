import Image from "next/image";
import { useFormContext } from "react-hook-form";

export const Summary = () => {
  const { handleSubmit } = useFormContext();
  const onSubmit = (data: unknown) => {
    console.log("DATA", data);
  };
  return (
    <section className="px-6 md:px-8 py-8 bg-white col-span-20 lg:col-span-7 flex flex-col gap-8 rounded-lg">
      <h1 className="uppercase text-lg tracking-[1.29px] font-bold">Summary</h1>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between font-bold">
          <div className="flex gap-4">
            <Image
              src={"/assets/cart/image-xx99-mark-two-headphones.jpg"}
              alt={"xx99-mark-two-headphones"}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[15px]">XX99 MK II</p>
              <p className="text-sm opacity-50">$ 2,999</p>
            </div>
          </div>
          <p className="opacity-50">x1</p>
        </div>
        <div className="flex items-center justify-between font-bold">
          <div className="flex gap-4">
            <Image
              src={"/assets/cart/image-xx99-mark-two-headphones.jpg"}
              alt={"xx99-mark-two-headphones"}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[15px]">XX99 MK II</p>
              <p className="text-sm opacity-50">$ 2,999</p>
            </div>
          </div>
          <p className="opacity-50">x1</p>
        </div>
      </div>

      <dl className="flex flex-col gap-2">
        <div className="flex justify-between">
          <dt className="opacity-50">TOTAL</dt>
          <dd className="text-lg">$ 5,396</dd>
        </div>
        <div className="flex justify-between">
          <dt className="opacity-50">SHIPPING</dt>
          <dd className="text-lg">$ 5,396</dd>
        </div>
        <div className="flex justify-between mb-4">
          <dt className="opacity-50">VAT (INCLUDED)</dt>
          <dd className="text-lg">$ 5,396</dd>
        </div>
        <div className="flex justify-between">
          <dt className="opacity-50">GRAND TOTAL</dt>
          <dd className="text-lg text-primary">$ 5,396</dd>
        </div>
      </dl>

      <button
        onClick={handleSubmit(onSubmit)}
        className="containers bg-primary text-sm text-white h-12 font-bold"
      >
        CONTINUE & PAY
      </button>
    </section>
  );
};
