import React from 'react';
import Banner from '../Component/Banner';
import TuitionTypes from '../Component/TuitionTypes';
import StatsSection from '../Component/StatsSection';
import LanguageCategory from '../Component/LanguageCategory';
import Reviews from '../Component/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TuitionTypes></TuitionTypes> 
            <LanguageCategory></LanguageCategory>
            <Reviews></Reviews>
            <StatsSection></StatsSection>

        </div>
    );
};

export default Home;