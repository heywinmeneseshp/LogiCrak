import React from 'react';
import Head from 'next/head';

import { ProviderAuth } from '@hooks/useAuth';


import MainLayout from '@layout/MainLayout';


//CSS
import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function MyApp({ Component, pageProps }) {


    const initialMenu = useMenu();
    const initialAdminMenu = useAdminMenu();
    const initialAlmacenMenu = useAlmacenMenu();
    const initialInfoMenu = useInfoMenu();
    const gestionNotificacion = useNotificacion();
    const gestionPedido = usePedido();

    return (
        <>
            <ProviderAuth>
                <AppContext.Provider value={{
                    gestionNotificacion,
                    initialMenu,
                    initialAdminMenu,
                    initialAlmacenMenu,
                    initialInfoMenu,
                    gestionPedido
                }}>

                    <Head>
                        <title>LogiCrack</title>
                        <meta name="Banarica - App para gestión de inventario" content="Creado por Craken.com.co" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>

                </AppContext.Provider>
            </ProviderAuth>
        </>
    );
}

export default MyApp;
