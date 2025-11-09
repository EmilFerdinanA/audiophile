import Image from "next/image";

export const CartItem = ({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) => (
  <div className="flex items-center justify-between font-bold">
    <div className="flex gap-4">
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[15px]">{name}</p>
        <p className="text-sm opacity-50">$ {price.toLocaleString()}</p>
      </div>
    </div>

    <div className="flex gap-4 mt-2">
      <div className="containers bg-[#F1F1F1] h-8 w-24 px-3">
        <button className="cursor-pointer">-</button>
        <div>1</div>
        <button className="cursor-pointer">+</button>
      </div>
    </div>
  </div>
);
