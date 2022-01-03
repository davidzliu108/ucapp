import React, { useState, useEffect } from 'react';
import { Header } from "./common";
import Article from './Article';
import './Reddit.css';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"

const StyledApp = styled.div`
`

export default function Reddit() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light");
    }

    useEffect(() => {
        fetch("https://www.reddit.com/r/UlcerativeColitis/.json").then(res => {
            if (res.status !== 200) {
                console.log("Error");
                return;
            }
            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            })
        })
    }, [subreddit]);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <br></br>
            <GlobalStyles />
            <StyledApp>
                <div class="text-center" ><h2 > UC Center</h2></div>
                <Header />
                <p>*Forum posts taken from r/ulcerativecolitis Subreddit</p>
                <button className = "btn btn-dark" onClick={() => themeToggler()}>Change Theme</button>
                <hr></hr>
                <div class="posts">
                    {
                        (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
                    }
                </div>

            </StyledApp>
        </ThemeProvider>

    )
} 
