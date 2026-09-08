import { TitleSEO } from '../../utils/TitleSEO';
import { Faq1 } from '../exports/faq/Faq1';
import { Faq2 } from '../exports/faq/Faq2';
import { Faq3 } from '../exports/faq/Faq3';

export default function FaqPage() {
    return (
        <main>
            <TitleSEO
                title="Laudo | Preguntas frecuentes"
                description="Respuestas sobre el proceso, requisitos y documentos para recuperar fondos de la subcuenta de vivienda."
                canonical="https://www.recuperacionsubcuentavivienda.com/faq"
            />
            <Faq1 />
            <Faq2 />
            <Faq3 />
        </main>
    );
}
