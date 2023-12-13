import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Form/index.css";

const Form = () => {
  const [url, setUrl] = useState("");
  const [inputError, setInputError] = useState("");

  const getData = async () => {
    try {
      if (!url) {
        setInputError("Please add a link");
        return;
      }

      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      setUrl(response.data.result.short_link);
      setInputError("");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
      <div className="form">
        <div className="form-wrapper">
          <>
            <input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setInputError("");
              }}
              placeholder="Shorten a link here..."
              style={{ border: inputError ? "2px solid red" : "none" }}
            />
            {inputError && (
              <p style={{ color: "red", marginLeft: "10px" }}>{inputError}</p>
            )}
          </>

          <>
            <button onClick={getData}>Shorten It!</button>
          </>
        </div>
      </div>

  );
};

export default Form;
