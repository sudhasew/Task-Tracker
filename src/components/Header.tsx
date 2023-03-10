import React from "react";
import Button from "./Button";
import "../Header.css";
interface Props {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
}

const Header = ({ title, onAdd, showAdd }: Props) => {
  return (
    <header>
      <div className="header">
        <h1 className="title">{title}</h1>
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      </div>
    </header>
  );
};

export default Header;
