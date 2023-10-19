import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type?: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  name,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold">{label}</label>
      <input
        type={type}
        className="w-full border border-[#cfcfcf] h-14 rounded-lg px-6 ring-none focus:outline-none focus:border-primary invalid:border-2 invalid:border-[#CD2C2C]"
        placeholder="Alexai Ward"
        {...register(name)}
      />
    </div>
  );
};
