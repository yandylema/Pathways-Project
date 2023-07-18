export function Persona(props) {
  console.log(props.img);
  return (
    <img
      style={{ width: "50px", height: "50px", borderRadius: "100%" }}
      src={props.img}
    ></img>
  );
}
