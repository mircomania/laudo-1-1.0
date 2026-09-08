import { TitleSEO } from '../../utils/TitleSEO';
import { Requisitos1 } from '../exports/requisitos/Requisitos1';
import { Requisitos2 } from '../exports/requisitos/Requisitos2';
import { Requisitos3 } from '../exports/requisitos/Requisitos3';

export default function RequisitosPage() {
    return (
        <main>
            <TitleSEO
                title="Laudo | Requisitos"
                description="Consulta los requisitos y documentos para iniciar la recuperación de tu subcuenta de vivienda."
                canonical="https://www.recuperacionsubcuentavivienda.com/requisitos"
            />

            <Requisitos1 />

            <Requisitos2 />

            <Requisitos3 />
        </main>
    );
}
