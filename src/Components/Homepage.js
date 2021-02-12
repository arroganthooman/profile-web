import React, {Component, useEffect} from 'react'
import fotoFikri from './img/fikri.jpeg'

export class Homepage extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      window.onload = this.typing()
    }

    // componentDidUpdate() {
    //   this.typing()
    // }

    
    render() {
        return (
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
                <p>scroll to see more about me</p>
                </div>
                <div className="row d-flex justify-content-center">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
                </div>
            </div>
            </section>
            
        )
    }

    typing() {
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
      // Init On DOM Load
      document.addEventListener("DOMContentLoaded", init);
      
      // Init App
      function init() {
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
      }  
    }
}

export default Homepage
