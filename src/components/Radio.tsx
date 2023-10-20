import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onClick: () => void;
  checked?: boolean;
  register: UseFormRegister<FieldValues>;
}

export const Radio: React.FC<InputProps> = ({
  label,
  name,
  value,
  onClick,
  checked,
  register,
}) => {
  return (
    <div className="radio h-14 rounded-lg bg-senary">
      <input
        id={value}
        type="radio"
        {...register(name)}
        value={value}
        checked={checked}
      />
      <label
        className="relative flex items-center h-full w-full"
        htmlFor={value}
        onClick={onClick}
      >
        {label}
      </label>
    </div>
  );
};
