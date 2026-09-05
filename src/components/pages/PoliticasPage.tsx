import { TitleSEO } from '../../utils/TitleSEO';
import { Politicas1 } from '../exports/politicas/Polticas1';

export default function PoliticasPage() {
    return (
        <main>
            <TitleSEO title="Laudo | Políticas" description="Conoce nuestras políticas de privacidad y términos de servicio." />

            <Politicas1 />
        </main>
    );
}
