const card = {
  backgroundColor: "green",
  margin: "5px",
  height: "500px",
  width: "400px",
  boxShadow: "0px 0px 10px 0px",
  justifyContent: "center",
};
const cardImg = {
  textAlgin: "center",
};

export function PersonCard(props) {
  return (
    <div className="personCard" style={card}>
      <div>
        <div className="heart"> </div>
        <div className="personImg">
          <img
            src={props.image}
            style={{
              width: "230px",
              borderRadius: "50%",
              marinLeft: "3px",
              paddingTop: "30px",
            }}
          ></img>
          <h5> {props.name}</h5>
        </div>
        <div className="borrowedItem"> {props.items.map(item => <p>{item[0]}</p>)}</div>

        <div className="heart"> </div>
      </div>
    </div>
  );
}
