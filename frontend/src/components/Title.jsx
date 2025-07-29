function Title({ text1, text2 }) {
  return (
    <div className="d-flex align-items-center gap-3 justify-content-center ">
      <p className="text-secondary m-0" style={{ fontSize: "1.5rem" }}>
        {text1} <b>{text2}</b>
      </p>
      <span
        className="d-block bg-secondary"
        style={{ width: "100px", height: "2px" }}
      ></span>
    </div>
  );
}

export default Title;
