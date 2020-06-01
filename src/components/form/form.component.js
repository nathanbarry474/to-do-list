import React, { useState } from "react";
import './form.styles.scss'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit, ref }) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <div>
        <form
        ref={ref}
        onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}
        >
            <input {...text} />
        </form>
    </div>
  );
};