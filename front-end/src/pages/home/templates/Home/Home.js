import React, { useEffect } from "react";
import Corporation from "../../molecules/Corporation/Corporation";
import Banner from "../../organisms/Banner/Banner";
import Food from "../../organisms/Food/Food";

const Home = () => {
    useEffect(() => {
        window.onscroll = () => {
            let main = document.querySelector(".main");
            if (!main) return;
            if (main.getBoundingClientRect().bottom < window.innerHeight) {
                document
                    .querySelector(".banner")
                    .setAttribute(
                        "style",
                        `position: absolute; top: ${
                            document.querySelector(".main").clientHeight -
                            (window.innerHeight < 1050
                                ? window.innerHeight * 0.85
                                : 1050)
                        }px`
                    );
            } else {
                document
                    .querySelector(".banner")
                    .setAttribute("style", `position:fixed; top: 70px`);
            }
        };
    }, []);
    return (
        <>
            <Banner />
            <Food />
            <Corporation />
        </>
    );
};

export default Home;
