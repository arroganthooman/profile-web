import React, { useEffect } from 'react'
import fotoFikri from './img/fikri.jpeg'

const Homepage = () => {

    const TypeWriter = function (txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
        };
        
        // Type Method
        TypeWriter.prototype.type = function () {
        // Current index of words
        const current = this.wordIndex % this.words.length;
        
        // Get full text of current
        const fulltxt = this.words[current];
        
        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        
        //Insert txt to element
        this.txtElement.innerHTML = '<span class="txt">' + this.txt + "</span>";
        
        // Initial Type Speed
        let typeSpeed = 100;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if (!this.isDeleting && this.txt === fulltxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
        };
    

    useEffect(() => {
        const txtElement = document.querySelector(".txt-type");
        //   const words = JSON.parse(txtElement.getAttribute("data-words"));
        const wait = txtElement.getAttribute("data-wait");
        const words = [
            " Fikri Akmal.",
            " 19 years old.",
            " currently studying CS.",
            " a software engineer wanna-be.",
        ];
        
        //Init TypeWriter
        new TypeWriter(txtElement, words, wait);
    })



    return (
        <div>
            <section className="homepage d-flex align-items-center">
            <div className="container-fluid home-content heading-margin">
                {/* <!-- image --> */}
                <div className="row d-flex justify-content-center row-foto">
                <img className="fikri" src={fotoFikri} alt="" />
                </div>

                <div className="container d-flex flex-column align-items-center">
                <div className="row hello">
                    <h3>Hello,</h3>
                </div>

                {/* <!-- typewriter --> */}
                <div className="row typewriter d-flex justify-content-center">
                    <h3>
                    i'm
                    <span className="txt-type" data-wait="2000"> </span>
                    </h3>
                </div>
                </div>
                {/* <!-- end of typewriter --> */}

                {/* <!-- scroll to see more --> */}
                <div className="row d-flex justify-content-center more-info">
                <p>Happy surfing!!</p>
                </div>
                <div className="row d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Homepage
