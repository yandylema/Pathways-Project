import React from "react";
import Textbox from "../components/Textbox";
import { CancelButton } from "../components/CancelButton";
import InputText from "../components/InputText";
import { BackButton } from "../components/BackButton";

export function BorrowItemPage() {
  return (
    <div>
      <BackButton>Borrow Item</BackButton>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <InputText placeholderInput={"Item name: Vacuum"}></InputText>
          <InputText placeholderInput={"Type: Appliances"}></InputText>
          <InputText placeholderInput={"Lender: Stacey"}></InputText>
          <Textbox></Textbox>
        </div>
        <div>
          <img
            width={325}
            src="https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0"
            className="right-image"
            alt=""
          />
          <div>
            <CancelButton>Cancel</CancelButton>
            <button>Request to Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
