import React, { useEffect } from "react";
import { useListItem } from "api/home";
import Corporation from "../../molecules/Corporation/Corporation";
import Banner from "../../organisms/Banner/Banner";
import Food from "../../organisms/Food/Food";

const Home = () => {
    const { execute, isLoading, response, error } = useListItem();
    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                console.log(res);
            },
        });
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            if (
                document.querySelector(".main").getBoundingClientRect().bottom <
                window.innerHeight
            ) {
                document
                    .querySelector(".banner")
                    .setAttribute(
                        "style",
                        `position:absolute; top: ${
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
