import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface IProps {
  id: string;
  label: string;
  className?: string;
  name: string;
  value: string;
}
export const Radio = ({ label, className, id, name, value }: IProps) => {
  const { register } = useFormContext();
  return (
    <div
      className={clsx(
        "h-14 rounded-lg border border-[#CFCFCF] w-full flex items-center gap-4 px-4",
        "has-[input:checked]:border-primary",
        className
      )}
    >
      <input
        type="radio"
        id={id}
        value={value}
        className="peer hidden"
        {...register(name)}
        defaultChecked
      />
      <label
        htmlFor={id}
        className="containers h-5 w-5 border border-[#CFCFCF] rounded-full cursor-pointer peer-checked:[&>span]:flex"
      >
        <span className="hidden w-2.5 h-2.5 bg-primary rounded-full" />
      </label>
      <span className="text-sm font-bold tracking-[-0.25px]">{label}</span>
    </div>
  );
};
