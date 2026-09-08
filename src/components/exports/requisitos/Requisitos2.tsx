import image from '../../../assets/images/requisitos/requisitos-2-1.webp';
import check from '../../../assets/images/icons/check-no-back.svg';
import { BotonNav } from '../../utils/BotonNav';
import styles from '../../../styles/modules/requisitos/requisitos2.module.css';
const requirements = [
    ['Edad de 48 años o superior', 'Requisito para procesos de reclamo de saldos de subcuenta.'],
    ['Monto Mínimo de $100,000 MXN', 'Para garantizar la viabilidad jurídica y financiera de su representación.'],
];
export function Requisitos2() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div>
                    <h2>¿Cumples con el perfil?</h2>

                    <p>
                        Nuestro servicio está especializado en casos con alta probabilidad de éxito. Verifique si su perfil coincide con los
                        parámetros de nuestra firma.
                    </p>

                    <ul>
                        {requirements.map(([title, text]) => (
                            <li key={title}>
                                <img src={check} alt="" />
                                <span>
                                    <b>{title}</b>
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <BotonNav to="/contacto" dataCta="requisitos-contacto-btn">
                        Iniciar Consulta Gratis
                    </BotonNav>
                </div>

                <img src={image} alt="Representación de una persona solicitante" />
            </div>
        </section>
    );
}
