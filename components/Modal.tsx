import Image from "next/image";
import Check from "@/public/assets/Check.png";

export const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black/60 top-24 containers z-50 base-p">
      <div className="bg-white p-8 md:p-12 rounded-lg grid gap-6 md:gap-8">
        <div className="rounded-full bg-primary h-16 w-16 containers">
          <Image src={Check} alt={"check"} />
        </div>

        <div className="grid gap-4 md:gap-6">
          <h1 className="font-bold text-2xl md:text-[2rem] tracking-[0.86px] leading-7">
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>

          <p className="text-[15px] opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="grid grid-cols-5 md:mb-3">
          <div className="bg-[#F1F1F1] flex flex-col gap-3 p-6 rounded-t-lg md:rounded-none md:rounded-l-lg col-span-5 md:col-span-3">
            <div className="flex items-center justify-between font-bold">
              <div className="flex gap-4">
                <Image
                  src={"/assets/cart/image-xx99-mark-two-headphones.jpg"}
                  alt={"xx99-mark-two-headphones"}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[15px]">XX99 MK II</p>
                  <p className="text-sm opacity-50">$ 2,999</p>
                </div>
              </div>
              <p className="opacity-50">x1</p>
            </div>

            <hr className="opacity-10" />

            <p className="opacity-50 text-[12px] font-bold text-center">
              and 2 other item(s)
            </p>
          </div>

          <div className="bg-black rounded-b-lg md:rounded-none md:rounded-r-lg p-6 text-white col-span-5 md:col-span-2 place-content-center">
            <span className="opacity-50 text-[15px] mb-2">GRAND TOTAL</span>
            <p className="text-lg">$ 5,446</p>
          </div>
        </div>

        <button className="h-12 bg-primary text-white text-[13px] font-bold tracking-[1px]">
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};
