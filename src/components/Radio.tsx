import { FieldValues, UseFormRegister } from "react-hook-form";
import "./Radio.css";

interface InputProps {
  name: string;
  label?: string;
  value: string;
  onClick: () => void;
  isChecked: boolean;
  register: UseFormRegister<FieldValues>;
}

export const Radio: React.FC<InputProps> = ({
  label,
  name,
  value,
  onClick,
  isChecked,
  register,
}) => {
  return (
    <label
      className="relative flex items-center gap-4 h-14 rounded-lg bg-senary z-10"
      htmlFor="emil"
      onClick={onClick}
    >
      <input
        id="emil"
        type="radio"
        className="appearance-none"
        {...register(name)}
        value={value}
      />
      <div
        className="border border-[#cfcfcf] h-[20px] w-[20px] rounded-full relative"
        onClick={onClick}
      >
        {isChecked && (
          <div className="absolute bg-primary h-[10px] w-[10px] top-1 left-1 rounded-full" />
        )}
      </div>

      <span className="text-sm font-bold">e-Money</span>
    </label>
  );
};
