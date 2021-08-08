import React, { useEffect, useState } from "react";

function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const StatefulInput = ({
  inputType = "email",
  initialValue,
  onChange
}) => {
  const [error, setError] = useState();
  const [value, setValue] = useState("");
  const isInputValid = React.useMemo(() => {
    if (inputType === "email") {
      return isEmail(value)
    }
    return true;
  }, [value, inputType]);
  
  useEffect(() => {
    onChange(value)
  }, [value]);
  return <>
  <input type={"text"} value={initialValue} onChange={(e) => setValue(e.target.value)}>
  </input>
  {!isInputValid && <span>input is not valid</span>}

  </>
};
export default StatefulInput;