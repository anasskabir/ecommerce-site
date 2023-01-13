import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__containter">
                    <div className="header__description">
                        <h1>America's most awarded online Library Platform</h1>
                        <h2>Find your favorite books with <span className="purple"></span>Library</h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />

                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing