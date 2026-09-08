import image from '../../../assets/images/funciona/funciona-1-1.webp';
import check from '../../../assets/images/icons/check.svg';
import { BotonNav } from '../../utils/BotonNav';
import styles from '../../../styles/modules/funciona/funciona1.module.css';
export function Funciona1() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div>
                    <small>TRANSPARENCIA Y SEGURIDAD</small>

                    <h1>Su camino hacia la recuperación de tu subcuenta de vivienda</h1>

                    <p>
                        En Laudo, hemos simplificado el proceso legal para que la recuperación de sus saldos de subcuenta sea clara, segura y libre de
                        complicaciones.
                    </p>

                    <BotonNav to="/contacto" dataCta="funciona-contacto-btn">
                        Iniciar Consulta Gratis
                    </BotonNav>
                </div>

                <div className={styles.visual}>
                    <img src={image} alt="Vivienda junto a una lista de verificación" />

                    <aside>
                        <img src={check} alt="" />
                        <b>CERTIFICADO</b>

                        <span>
                            Más de 5,000 casos
                            <br />
                            resueltos exitosamente.
                        </span>
                    </aside>
                </div>
            </div>
        </section>
    );
}
