import clsx from "clsx";

interface IProps {
  className?: string;
  label: string;
  placeholder: string;
}

export const Input = ({ className, label, placeholder }: IProps) => {
  return (
    <div className={clsx("w-full flex flex-col gap-2", className)}>
      <div className="flex justify-between">
        <label className="text-[12px] font-bold">{label}</label>
        {false && <p className="text-[12px] text-[#CD2C2C]">Wrong format</p>}
      </div>

      <input
        className="h-14 w-full rounded-lg border border-[#CFCFCF] focus:border-primary outline-none px-6"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
