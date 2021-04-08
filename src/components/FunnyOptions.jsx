import React from "react";
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";

const FunnyOptions = () => {
  return (
    <div>
      <Menu>
        <MenuButton>
          Report <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => {}} ></MenuItem>
          <MenuItem onSelect={() => {}} ></MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default FunnyOptions;
