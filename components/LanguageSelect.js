import React from "react";
// MaterialUI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu({ selectLanguage, language }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if (!event.target.innerText) return;

    selectLanguage(event.target.innerText);
  };

  const defineNotSelectedLang = () => {
    if (language === "English") {
      return "Español";
    }
    return "English";
  };
  return (
    <div className="language">
      <Button
        className="btn--language-select"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {language} <small className="language__arrow">&#9947;</small>
      </Button>

      <Menu
        className="language__dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="language__menu-item" onClick={handleClose}>
          {defineNotSelectedLang()}
        </MenuItem>
      </Menu>
    </div>
  );
}
