import React from "react";

const td = {
  border: "1px solid black",
  borderCollapse: "collapse"
};

const table = {
  borderCollapse: "collapse"
};

export class Table extends React.Component {
  render() {
    return (
      <table style={table}>
        <tbody>
          <tr>
            {this.props.data[0].map((val) => (
              <th>{val}</th>
            ))}
          </tr>
          {this.props.data.slice(1).map((row) => (
            <tr>
              {row.map((val) => (
                <td style={td}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}