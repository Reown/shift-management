interface LabeledDropDownProps {
  children: string[];
  shifts: string[];
  onClick: (value: string) => void;
}

export const LabeledDropDown = ({
  children,
  shifts,
  onClick,
}: LabeledDropDownProps) => {
  const handleSelect = (e: any) => {
    onClick(e.target.innerText);
  };

  return (
    <>
      <label>{children[0]}</label>
      <button
        className="btn shiftbtn dropdown-toggle text-start"
        type="button"
        data-bs-toggle="dropdown"
      >
        Shift: {children[1]}
      </button>
      <ul className="dropdown-menu">
        {shifts.map((shift) => (
          <li key={shift}>
            <a className="dropdown-item" onClick={handleSelect}>
              {shift}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
