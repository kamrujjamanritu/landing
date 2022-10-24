import React from 'react';

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageMeta, handleModal }) => {

    const Meta = {
        title: "Migonest - Global University Admission Guideline",
        ...pageMeta
    }

    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, user-scalable=0" />
                <link rel="icon" href="./assets/images/favicon.ico" />
                <title>{Meta.title}</title>
                <meta name="keywords" content="Migonest, Admission, Global Admission" />
                <meta name="description" content="Global University Admission Guideline" />
                <meta name="author" content="Mohammad Wahedul Haque" />
            </Head>
            <Header handleModal={handleModal} />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
