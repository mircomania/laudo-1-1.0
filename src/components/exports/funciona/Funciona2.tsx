import chat from '../../../assets/images/icons/burbuja-dialogo-solida.svg';
import doc from '../../../assets/images/icons/documento.svg';
import gavel from '../../../assets/images/icons/martillo-juez.svg';
import money from '../../../assets/images/icons/billetes.svg';
import styles from '../../../styles/modules/funciona/funciona2.module.css';
const steps = [
    {
        icon: chat,
        title: '1. Consulta Gratuita',
        text: 'Realizamos un análisis preliminar sin costo para determinar la viabilidad de su caso y los montos recuperables.',
    },
    {
        icon: doc,
        title: '2. Revisión de Documentos',
        text: 'Nuestro equipo de expertos valida su información oficial para estructurar la estrategia adecuada.',
    },
    { icon: gavel, title: '3. Inicio de Gestión', text: 'Iniciamos el proceso de manera eficiente con total transparencia' },
    { icon: money, title: '4. Recuperación de Fondos', text: 'Una vez resuelto favorablemente, el monto se deposita directamente en su cuenta.' },
];
export function Funciona2() {
    return (
        <section className={styles.section}>
            <h2>Proceso Paso a Paso</h2>

            <div className={styles.timeline}>
                {steps.map((step, index) => (
                    <article key={step.title} className={index % 2 === 0 ? styles.left : styles.right}>
                        <div className={styles.content}>
                            <h3>{step.title}</h3>

                            <p>{step.text}</p>
                        </div>

                        <span className={styles.icon}>
                            <img src={step.icon} alt="" />
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
