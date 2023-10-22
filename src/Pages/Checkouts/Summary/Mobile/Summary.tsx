import zx9 from "/cart/image-xx99-mark-two-headphones.jpg";

export const SummaryMobile = () => {
  return (
    <section className="mx-6 bg-[#cfcfcf] rounded-lg px-6 sm:mx-10 py-8">
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
  );
};
