
/*import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.Header}>
            <h1>travel agency</h1>

            <nav className={style.nav}>
                <a href="#">Accueil</a>
                <a href="#">Destination</a>
                <a href="#">Contacts</a>
            </nav>
        </header>
    );
}

export default Header;*/
/*import { Link,NavLink } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>

            <h1>Travel Agency</h1>

            <nav className={styles.nav}>

         <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        Accueil
      </NavLink>

      <NavLink
        to="/destinations"
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        Destinations
      </NavLink>

      <NavLink
        to="/apropos"
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        À propos
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        Sign in
      </NavLink>

    </nav>

        </header>
    );
}

export default Header;*/


import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>

      <h1 className={styles.logo}>
        Travel Agency
      </h1>

      <nav className={styles.nav}>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/destinations"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Destinations
        </NavLink>

        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          À propos
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
        >
          Sign in
        </NavLink>

      </nav>

    </header>
  );
}

export default Header;
