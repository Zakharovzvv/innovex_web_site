import React, {Component, FC} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "@mui/material";
import Content from "../components/Content";

//import Head from "next/head";

export interface MainLayoutProps {
    children: any
    title?: string;
    description?: string;
    keywords?: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            {/*<Head>*/}
            {/*    <title>{title || 'Музыкальная площадка'}</title>*/}
            {/*    <meta name="description" content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + description}/>*/}
            {/*    <meta name="robots" content="index, follow"/>*/}
            {/*    <meta name="keywords" content={keywords || "Музыка, треки, артисты"}/>*/}
            {/*    <meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
            {/*</Head>*/}
            <Container>
                <Header/>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </Container>

        </>
    );
};

export default MainLayout
