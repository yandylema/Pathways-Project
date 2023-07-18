import { Persona } from "./Persona";

export function Item(props) {
  const buttonText = props.borrowOrReturn === "return" ? "Return" : "Borrow";
  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
        backgroundColor: "#d3d3d3",
        borderRadius: "20px",
        padding: "18px",
        paddingTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 style={{ marginBottom: "5px" }}>{props.item[0]}</h5>
        <Persona></Persona>
      </div>
      <img style={{ width: "150px" }} src={props.item[2]}></img>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            display: "block",
            backgroundColor: "#324a5f",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "80%",
            marginTop: "10px",
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
