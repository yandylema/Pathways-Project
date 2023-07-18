import { Item } from "./Item";
export function ItemsToBorrowList(props) {
  return (
    <div>
      {props.showSearchBar ? (
        <input
          type="text"
          style={{
            width: "95%",
            display: "block",
            margin: "auto",
            backgroundColor: "rgb(129 199 9 / 13%)",
            border: "2px solid green",
            borderRadius: "15px",
            height: "25px",
            color: "black",
            marginBottom: "20px",
          }}
        ></input>
      ) : null}
      <div>
        {props.data.map((item) => (
          <Item borrowOrReturn={props.borrowOrReturn} item={item}></Item>
        ))}
      </div>
    </div>
  );
}
