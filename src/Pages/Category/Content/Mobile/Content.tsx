// import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Headphone {
//   id: number;
//   image: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
//   title: string;
//   description: string;
// }

// export const ContentMobile = () => {
//   const [content, setContent] = useState<Headphone[]>([]);
//   const isMobile = window.innerWidth <= 640;

//   const fetchCategory = async () => {
//     const response = await axios.get("src/data/Category/Category.json");
//     setContent(response.data);
//   };

//   useEffect(() => {
//     fetchCategory();
//   }, []);

//   return (
//     <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
//       {content?.map((e: Headphone, index: number) => (
//         <div
//           className="flex flex-col gap-6 justify-center items-center"
//           key={e.id}
//         >
//           <div
//             className={`bg-tertiary bg-cover bg-center h-80 sm:h-96 ${
//               isMobile ? e?.image.mobile : e?.image.tablet
//             } w-full rounded-lg`}
//           />
//           {index === 0 && (
//             <span className="text-primary tracking-[10px]">NEW PRODUCT</span>
//           )}
//           <span className="text-3xl sm:text-5xl sm:w-1/2 font-bold text-center">
//             {e?.title}
//           </span>
//           <p className="font-medium text-septenary text-opacity-50 text-center sm:w-3/4">
//             {e?.description}
//           </p>
//           <ButtonSeeProduct />
//         </div>
//       ))}
//     </section>
//   );
// };
