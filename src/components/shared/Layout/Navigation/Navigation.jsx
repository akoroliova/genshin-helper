import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

//a react-router-dom's feature, we can add a function as a className prop's value, if the current page is active - it returns additional css class/ in this case with the help of clsx lib.
const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  //As opposed to Link, NavLink stays on the page when user navigates.
  return (
    <nav>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/charbuilder" className={getNavLinkClass}>
        Character Builder
      </NavLink>
      <NavLink to="/tasks" className={getNavLinkClass}>
        To Do Today
      </NavLink>
    </nav>
  );
}
