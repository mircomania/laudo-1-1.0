import styles from '../../../styles/modules/faq/faq2.module.css';
const faqs = [
    {
        q: '¿Qué es el programa de recuperación de subcuenta de vivienda?',
        a: (
            <p>
                El programa de recuperación de subcuenta de vivienda es un servicio legal especializado diseñado para asistir a trabajadores en la
                restitución de fondos no reclamados en sus cuentas de retiro. Nuestro equipo legal gestiona el proceso administrativo e institucional
                para asegurar que sus derechos financieros sean respetados.
            </p>
        ),
    },
    {
        q: '¿Cuáles son los requisitos exactos de edad y monto?',
        a: (
            <p>
                Para ser elegible y garantizar la viabilidad del proceso legal, requerimos que el titular tenga <b>48 años o más.</b> Adicionalmente,
                el saldo mínimo a recuperar en la subcuenta debe ser de al menos{' '}
                <b>$100,000 MXN para justificar los honorarios de gestión y hacer el proceso rentable para usted.</b>
            </p>
        ),
    },
    {
        q: '¿Cuánto tiempo tarda el proceso?',
        a: (
            <p>
                El tiempo estimado de resolución varía según la institución y la complejidad del expediente administrativo, pero típicamente oscila
                entre 2 a 6 meses. Proveemos actualizaciones periódicas y un canal de comunicación directo durante todo el trámite.
            </p>
        ),
    },
    {
        q: '¿Qué documentos necesito?',
        a: (
            <>
                <p>Para iniciar su expediente, requerimos la siguiente documentación básica en copia legible:</p>
                <ul>
                    <li>Identificación oficial vigente (INE/IFE o Pasaporte).</li>
                    <li>Comprobante de domicilio reciente (no mayor a 3 meses).</li>
                    <li>Estado de cuenta de su Afore más reciente.</li>
                    <li>Documento que contenga su Número de Seguridad Social (NSS).</li>
                </ul>
            </>
        ),
    },
];
export function Faq2() {
    return (
        <section className={styles.section}>
            <div>
                {faqs.map((item) => (
                    <article key={item.q}>
                        <h2>{item.q}</h2>
                        {item.a}
                    </article>
                ))}
            </div>
        </section>
    );
}
