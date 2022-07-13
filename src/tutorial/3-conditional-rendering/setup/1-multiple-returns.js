import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default user");
  let erCode = 200;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          erCode = resp.status;
          console.log(resp);
          return resp.json();
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .then((data) => {
        const { login } = data;
        setLoading(false);
        setUser(login);
        // console.log(login);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading ........</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error {erCode}!!!!</h1>
      </div>
    );
  }
  return (
    <>
      <h1>{user}</h1>
    </>
  );
};

export default MultipleReturns;
