import { Item } from "./Item"
export function ItemsToBorrowList(props) {
    return(
        <div>
            {props.showSearchBar ? <input type="text" style={{
                width: "95%",
                display: "block",
                margin: "auto",
                backgroundColor: "#21202c",
                border: "2px solid white",
                borderRadius: "15px",
                height: "25px",
                color: "white",
                marginBottom: "20px"
            }}></input> : null}
            <div>
                {props.data.map(item => <Item borrowOrReturn={props.borrowOrReturn} item={item}></Item>)}
            </div>
        </div>
    )
}