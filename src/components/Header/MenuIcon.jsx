const MenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      className={props.className}
      onClick={props.onClick}
    >
      <g
        fill="currentColor"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <path d="M0 6h18M0 0h18M0 12h18" />
      </g>
    </svg>
  );
};

export default MenuIcon;
