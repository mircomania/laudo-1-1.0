import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './utils/scrollToTop';

const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));
const HomePage = lazy(() => import('./components/pages/HomePage'));
const FuncionaPage = lazy(() => import('./components/pages/FuncionaPage'));
const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));
const RequisitosPage = lazy(() => import('./components/pages/RequisitosPage'));
/* 

const FaqPage = lazy(() => import('./components/pages/FaqPage')); */

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacto" element={<ContactoPage />} />
                    <Route path="/como-funciona" element={<FuncionaPage />} />
                    <Route path="/requisitos" element={<RequisitosPage />} />
                    {/* 
                    <Route path="/faq" element={<FaqPage />} /> */}
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
