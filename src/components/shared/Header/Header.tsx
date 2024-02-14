// Header.js
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className={styles.container}>
        <Link className={styles.brand} href="#">
          LogiCrak
        </Link>
        <div >
          <ul className={styles.menu}>
            <li><Link className={styles.link} href="#">Inicio</Link></li>
            <li><Link className={styles.link} href="#">Maestros</Link>
              <ul className={styles.submenu}>
                <li><Link className={styles.link} href="#">Ubicaciones</Link></li>
                <li><Link className={styles.link} href="#">Conductores</Link></li>
                <li><Link className={styles.link} href="#">Vehiculos</Link></li>
                <li><Link className={styles.link} href="#">Rutas</Link></li>
                <li><Link className={styles.link} href="#">Productos</Link></li>
                <li><Link className={styles.link} href="#">Categorias Vehiculos</Link></li>
              </ul>
            </li>
            <li><Link className={styles.link} href="#">Administrador</Link></li>
            <li><Link className={styles.link} href="#">Informes</Link></li>
          </ul>
        </div>
        <button className="btn btn-outline-light my-2 my-sm-0 btn-sm" type="submit">Cerrar</button>
      </div>

    </nav>
  );
}

export default Header;


