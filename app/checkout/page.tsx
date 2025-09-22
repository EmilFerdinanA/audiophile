import { CheckoutContainer } from "./container";

export default function page() {
  return (
    <main className="containers bg-[#f1f1f1]">
      <div className="flex-1 max-width base-p pt-4 pb-24 md:pt-12 md:pb-28 lg:pt-20 lg:pb-36">
        <button className="text-[15px] opacity-50 mb-6 lg:mb-10">
          Go Back
        </button>

        <CheckoutContainer />
      </div>
    </main>
  );
}
