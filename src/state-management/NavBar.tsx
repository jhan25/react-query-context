import useCounterStore from "./counter/store";
import LoginStatus from "./auth/LoginStatus";

const NavBar = () => {
  // use selectors to prevent unnecessary re-renders
  const counter = useCounterStore((s) => s.counter);

  console.log("rerendered!");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
