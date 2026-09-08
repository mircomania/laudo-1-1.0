import { TitleSEO } from '../../utils/TitleSEO';
import { Contacto1 } from '../exports/contacto/Contacto1';
import { Contacto2 } from '../exports/contacto/Contacto2';

export default function ContactoPage() {
    return (
        <main>
            <TitleSEO
                title="Laudo | Contacto"
                description="Contacta a un experto de Laudo para recibir asesoría sobre la recuperación de tu subcuenta de vivienda."
                canonical="https://www.recuperacionsubcuentavivienda.com/contacto"
            />
            <Contacto1 />
            <Contacto2 />
        </main>
    );
}
