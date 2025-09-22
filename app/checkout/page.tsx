import { Checkout } from "@/components/Checkout";
import { Summary } from "@/components/Summary";

export default function page() {
  return (
    <main className="containers bg-[#f1f1f1]">
      <div className="flex-1 max-width base-p pt-4 pb-24 md:pt-12 md:pb-28 lg:pt-20 lg:pb-36">
        <button className="text-[15px] opacity-50 mb-6 lg:mb-10">
          Go Back
        </button>

        <div className="grid grid-cols-20 gap-y-5 md:gap-y-8 lg:gap-x-8 items-start">
          <Checkout />

          <Summary />
        </div>
      </div>
    </main>
  );
}
