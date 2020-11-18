import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStatetoProps = (state) => {
  return {
    id: state.auth.userId,
  }
}

const NavbarConatainer = connect(mapStatetoProps)(Navbar);

export default NavbarConatainer;
