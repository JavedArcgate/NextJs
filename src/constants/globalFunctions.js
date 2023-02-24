import { useState } from "react";

  const disposeError = (errType) => {
    const [errorMessages, setErrorMessages] = useState("");
    switch (errType) {
      case "Error":
        setTimeout(() => {
          setErrorMessages("");
        }, 10000);
        break;

      case "Success":
        setTimeout(() => {
          setSuccessMessages("");
        }, 10000);

      default:
        break;
    }
  };

export default disposeError;
