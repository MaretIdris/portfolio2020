import React from 'react';
import Banner from "./Banner";

const Home = () => {
    return (
        <React.Fragment>
            <Banner
                strings={[
                    "am a product designer",
                    "express ideas through code",
                    "am startup tested"
                ]}
            />
            {/*<DesignProjects />*/}
            {/*<CodingProjects />*/}
            {/*<Recommendations />*/}
            {/*<Footer />*/}
        </React.Fragment>
    );
};

export default Home;