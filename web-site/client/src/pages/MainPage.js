import React from 'react';

import Header from "../components/Layout/Header/Header";
import Addictions from "../components/Addictions/Addictions";
import PageWrapper from "../components/Layout/PageWrapper/PageWrapper";

const MainPage = () => {
    return (
        <PageWrapper>
            <Header/>
            <Addictions/>
        </PageWrapper>
    )
};

export default MainPage;