import { TitleSEO } from '../../utils/TitleSEO';

import { Home1 } from '../exports/home/Home1';
import { Home2 } from '../exports/home/Home2';
import { Home3 } from '../exports/home/Home3';
import { Home4 } from '../exports/home/Home4';

function HomePage() {
    return (
        <main>
            <TitleSEO
                title="Laudo | Recuperación de subcuenta de vivienda"
                description="Recupera el saldo de tu subcuenta de vivienda mediante un proceso legal transparente y seguro."
                canonical="https://www.recuperacionsubcuentavivienda.com/"
            />

            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </main>
    );
}

export default HomePage;
