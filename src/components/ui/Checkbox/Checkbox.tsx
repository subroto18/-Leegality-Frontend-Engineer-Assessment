import { Checkbox as AntCheckbox } from "antd";
import type { CheckboxProps } from "antd";
import clsx from "clsx";

interface Props extends CheckboxProps {
  label?: React.ReactNode;
  className?: string;
}

const Checkbox = ({ label, className, ...props }: Props) => {
  return (
    <label
      className={clsx(
        "flex items-center gap-3 cursor-pointer select-none",
        className,
      )}
    >
      <AntCheckbox {...props} />

      {label && <span className="text-gray-700 text-base">{label}</span>}
    </label>
  );
};

export default Checkbox;
