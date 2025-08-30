import { SeeProductButton } from "./SeeProduct";

export default function ZX9() {
  return (
    <div className="containers !flex-col mt-32 h-[600px] bg-[#D87D4A] rounded-lg text-white text-center gap-6 px-3">
      <h1 className="font-bold text-4xl px-20">ZX9 SPEAKER</h1>
      <p className="text-[15px]/6 opacity-75">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <SeeProductButton variant="tertiary" />
    </div>
  );
}
