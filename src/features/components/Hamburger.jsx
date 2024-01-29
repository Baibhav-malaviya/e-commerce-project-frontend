function Hamburger({ className = "", onclick }) {
  return (
    <div className={`p-px rounded  bg-cyan-700 cursor-pointer ${className}`} onClick={onclick}>
      ✔️
    </div>
  );
}

export default Hamburger;
