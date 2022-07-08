import "./navbar.css";
import Badge from "@mui/material/Badge";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <header className="heading">
      <div className="heading-logo">
        <IconButton>
          <h3 className="heading-title">TeeRex</h3>
        </IconButton>
      </div>
      <nav className="navigation">
        <IconButton>
          <Inventory2OutlinedIcon className="icon" />
        </IconButton>
        <IconButton>
          <Badge color="primary">
            <ShoppingCartOutlinedIcon className="icon" />
          </Badge>
        </IconButton>
      </nav>
    </header>
  );
};

export default Navbar;
