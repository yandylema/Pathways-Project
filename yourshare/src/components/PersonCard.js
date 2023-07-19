const card = {
  backgroundColor: "rgb(129 199 9 / 13%)",
  margin: "5px",
  height: "500px",
  width: "400px",
  boxShadow: "0px 0px 10px 0px",
  justifyContent: "center",
};

export function PersonCard(props) {
  return (
    <div className="personCard" style={card}>
      <div className="heart"> </div>
      <div className="personImg">
        <img
          src={props.image}
          style={{
            width: "230px",
            borderRadius: "50%",
            marginLeft: "13px",
            marginTop: "40px",
          }}
        ></img>
        <h5 style={{ textAlign: "center", paddingTop: "30px" }}>
          {" "}
          {props.name}
        </h5>
      </div>
      {props.itemsBorrowed.length > 0 ? (
        <>
          <div style={{ padding: "10px" }}>
            {" "}
            <b> Borrowed items: </b>
          </div>
          <li style={{ paddingLeft: "12px" }}> {props.itemsBorrowed[0]} </li>
          <li style={{ paddingLeft: "12px" }}> {props.itemsBorrowed[1]} </li>
        </>
      ) : (
        <div style={{ display: "block" }}></div>
      )}
      {props.itemsLent.length > 0 ? (
        <>
          <div style={{ padding: "10px" }}>
            {" "}
            <b> Lent items: </b>
          </div>
          <li style={{ paddingLeft: "12px" }}> {props.itemsLent[0]} </li>
          <li style={{ paddingLeft: "12px" }}> {props.itemsLent[1]} </li>
        </>
      ) : (
        <div style={{ display: "block" }}></div>
      )}
    </div>
  );
}
