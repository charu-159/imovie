i
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
if (token) {
  const user = jwtDecode(token);
  console.log("Logged in user:", user);
}
