import React from "react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

const DeletePatchOptions = (props) => {
  const { deleteComment, comment_id } = props
  return (
    <div>
      <Menu>
        <MenuButton>
          Options <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => {}} >Edit</MenuItem>
          <MenuItem onSelect={() => deleteComment(comment_id)} >Delete Comment</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DeletePatchOptions;
