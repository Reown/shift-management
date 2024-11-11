interface LabeledTextFieldProps {
  children: string[];
  onChange: (value: string) => void;
}

const LabeledTextField = ({ children, onChange }: LabeledTextFieldProps) => {
  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label>{children[0]}</label>
      <input
        type={children[1]}
        className="form-control textfield"
        onChange={handleChange}
        required
      ></input>
    </>
  );
};

export default LabeledTextField;
