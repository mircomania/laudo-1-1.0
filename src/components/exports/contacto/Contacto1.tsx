import chat from '../../../assets/images/icons/burbuja-dialogo-no-back.svg';
import phone from '../../../assets/images/icons/telefono.svg';
import { ContactForm } from '../../form/ContactForm';
import styles from '../../../styles/modules/contacto/contacto1.module.css';

const contacts = [
    { icon: chat, label: 'WHATSAPP', value: '+52 123 456 7890', accent: true },
    { icon: phone, label: 'OFICINA', value: '01 800 LAUDO' },
];

const schedules = [
    ['Lunes a Viernes', '08:30 - 18:30'],
    ['Sábados', '08:30 - 14:00'],
    ['Domingos', 'Cerrado'],
];

export function Contacto1() {
    return (
        <section className={styles.section}>
            <header>
                <h1>Contacta a un Experto</h1>

                <p>
                    Estamos aquí para asesorarle en la recuperación de saldos de subcuenta de vivienda.
                    <br />
                    Nuestro equipo institucional le brindará la claridad y seguridad que su patrimonio merece.
                </p>
            </header>

            <div className={styles.grid}>
                <ContactForm />

                <aside>
                    <div className={styles.immediate}>
                        <h2>Atención Inmediata</h2>
                        {contacts.map((item) => (
                            <div className={styles.contact} key={item.label}>
                                <span className={item.accent ? styles.accent : ''}>
                                    <img src={item.icon} alt="" />
                                </span>

                                <p>
                                    <small>{item.label}</small>
                                    <b>{item.value}</b>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.schedule}>
                        <h2>
                            <span aria-hidden="true">◷</span> Horarios de Atención
                        </h2>

                        {schedules.map(([day, time], i) => (
                            <p className={i === 2 ? styles.closed : ''} key={day}>
                                <span>{day}</span>
                                <b>{time}</b>
                            </p>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
