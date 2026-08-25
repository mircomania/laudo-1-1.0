import { TitleSEO } from '../../utils/TitleSEO';
import { Funciona1 } from '../exports/funciona/Funciona1';
/* import { Funciona2 } from '../exports/funciona/Funciona2';
import { Funciona3 } from '../exports/funciona/Funciona3'; */

export default function FuncionaPage() {
    return (
        <main>
            <TitleSEO
                title="Laudo | ¿Cómo funciona?"
                description="Conoce paso a paso el proceso para recuperar el saldo de tu subcuenta de vivienda."
            />

            <Funciona1 />

            {/* <Funciona2 />

            <Funciona3 /> */}
        </main>
    );
}
