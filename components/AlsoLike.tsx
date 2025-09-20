import { AlsoLikeCard } from "./AlsoLikeCard";

const DUMMY_IMAGE = [
  {
    title: "XX99 MARK I",
    image: {
      mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    },
  },
  {
    title: "XX59",
    image: {
      mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
    },
  },
  {
    title: "ZX9 SPEAKER",
    image: {
      mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    },
  },
];

export const AlsoLike = () => {
  return (
    <section className="containers !flex-col gap-10">
      <h1 className="uppercase text-2xl tracking-[0.86px] font-bold">
        you may also like
      </h1>

      <div className="containers !flex-col gap-14">
        {DUMMY_IMAGE.map(({ title, image }) => (
          <AlsoLikeCard key={title} title={title} image={image} />
        ))}
      </div>
    </section>
  );
};
