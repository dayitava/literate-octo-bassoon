const Button = ({ type = "primary", children }) => (
  <button
    className={`theme-btn ${type === "primary" ? "black" : "white"} mr-3`}
  >
    {children}
  </button>
);

export default Button;
