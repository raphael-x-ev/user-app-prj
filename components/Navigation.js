import Link from "next/link";
import navigationStyles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={navigationStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/add-new-user">Register User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
