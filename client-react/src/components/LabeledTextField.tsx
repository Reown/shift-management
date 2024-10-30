import { ReactNode } from "react";

interface LabeledTextFieldProps {
  children: string[];
  onChange: (value: string) => void;
}

export const LabeledTextField = ({
  children,
  onChange,
}: LabeledTextFieldProps) => {
  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };
  const label = children[0];
  const type = children[1];
  return (
    <div className="labeledtextfield">
      <label>{label}</label>
      <input
        type={type}
        className="form-control textfield"
        onChange={handleChange}
      ></input>
    </div>
  );
};
