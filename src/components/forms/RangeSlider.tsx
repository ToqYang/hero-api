export const RangeSlider = ({ title, name, value, handleInputChange }: any) => {
  return (
    <div>
      <label htmlFor={name}>
        {title}({value}):{" "}
      </label>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
