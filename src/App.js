import React from 'react';
import './App.css';
import {adjectives, adverb, specials, subjectives, verb} from "./dictionary";
import Header from "./Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            result: '',
            entropy: 0,
        };

        this.show = this.show.bind(this);
    }

    //STATIC METHOD?!

    static randomeEl(arr) {
        const num = Math.floor(Math.random() * arr.length);
        return arr[num]
    }

    static log2(n) {
        return Math.log(n) / Math.log(2)
    }

    show() {
        if (this.state.visibility) {
            this.setState({
                visibility: false
            })
        } else {
            this.setState({
                visibility: true
            })
        }
    };


    render() {


        const pwNum = Math.floor((Math.random() * 10));
        const pwAdj1 = App.randomeEl(adjectives);
        const pwAdj2 = App.randomeEl(adjectives);
        const pwSub = App.randomeEl(subjectives);
        const pwVerb = App.randomeEl(verb);
        const pwAdv = App.randomeEl(adverb);
        const pwSpecial = specials.charAt(Math.floor(Math.random() * specials.length));
        const entropy = App.log2(9) + (2 * App.log2(adjectives.length)) + App.log2(subjectives.length) + App.log2(verb.length) + App.log2(adverb.length) + App.log2(specials.length)
        ;

        if (!this.state.visibility) {

            return (
                <div>
                    <Header/>
                    <div className="content">

                        <div className="passwordBox">
                            <div id="password">Number:</div>
                            <div id="password">Adjective01:</div>
                            <div id="password">Adjective02:</div>
                            <div id="password">Subjective:</div>
                            <div id="password">Verb:</div>
                            <div id="password">Adverb:</div>
                            <div id="password">Special:</div>
                        </div>

                        <div className="entropy">
                            <p>Entropy:{entropy}</p>
                        </div>

                        <button id="generate-button" onClick={this.show}>Skapa lösenord</button>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div>
                    <Header/>
                    <div className="content">
                        <div className="passwordBox">
                            <div id="password">Number:<br/> {pwNum} </div>
                            <div id="password">Adjective01:<br/> {pwAdj1} </div>
                            <div id="password">Adjective02:<br/> {pwAdj2} </div>
                            <div id="password">Subjective:<br/> {pwSub} </div>
                            <div id="password">Verb:<br/> {pwVerb} </div>
                            <div id="password">Adverb:<br/> {pwAdv} </div>
                            <div id="password">Special:<br/> {pwSpecial}</div>
                        </div>

                        <div className="entropy">
                            <p>Entropy:{entropy}</p>
                        </div>

                        <button id="generate-button" onClick={this.show}>Go back</button>
                    </div>
                </div>

            )
        }
    }
}

export default App;
