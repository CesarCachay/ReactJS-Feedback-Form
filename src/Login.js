import React from "react";

function Login() {
  const [user, setUser] = React.useState("");

  return (
    <form>
      <input type="text" placeholder="Enter your name" />
      <input type="submit" value="Continue" />
    </form>
  );
}

export default Login;
