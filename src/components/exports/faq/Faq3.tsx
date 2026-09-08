import { BotonNav } from '../../utils/BotonNav';
import styles from '../../../styles/modules/faq/faq3.module.css';
export function Faq3() {
    return (
        <section className={styles.section}>
            <h2>¿Listo para recuperar lo que le corresponde?</h2>
            <p>
                Nuestros especialistas están disponibles para una evaluación confidencial y<br />
                sin compromiso de su caso.
            </p>
            <BotonNav to="/contacto" dataCta="faq-contacto-btn">
                Inicia tu consulta gratuita hoy&nbsp; →
            </BotonNav>
        </section>
    );
}
