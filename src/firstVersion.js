import React from "react";
import {adjectives, adverb, specials, subjectives, verb} from "./dictionary";

class FirstVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            result: '',
            entropy: 0,
        };
        // this.show = this.show.bind(this);
    }

    //STATIC METHOD?!
    static randomeEl(arr) {
        const num = Math.floor(Math.random() * arr.length);
        return arr[num]
    }

    static log2(n) {
        return Math.log(n) / Math.log(2)
    }

    show = () => {
        this.setState({
            visibility: !this.state.visibility
        })

    };


    render() {

        const pwNum = Math.floor((Math.random() * 10));
        const pwAdj1 = FirstVersion.randomeEl(adjectives);

        //To not have duplicate adjectives
        const pwAdj1Index = adjectives.indexOf(pwAdj1);
        adjectives.splice(pwAdj1Index, 1);
        const pwAdj2 = FirstVersion.randomeEl(adjectives);
        adjectives.push(pwAdj1);

        const pwSub = FirstVersion.randomeEl(subjectives);
        const pwVerb = FirstVersion.randomeEl(verb);
        const pwAdv = FirstVersion.randomeEl(adverb);

        const pwSpecial = specials.charAt(Math.floor(Math.random() * specials.length));

        const entropy = FirstVersion.log2(9) + FirstVersion.log2(adjectives.length) + FirstVersion.log2(adjectives.length - 1)
            + FirstVersion.log2(subjectives.length) + FirstVersion.log2(verb.length) + FirstVersion.log2(adverb.length)
            + FirstVersion.log2(specials.length);




        return (
            <div className="content">
                {/*<div className="passwordBox">*/}
                {/*<div className="password slidingVertical">*/}
                {/*{adjectives.slice(0, 20).map((adjective, index) =>*/}
                {/*<p style={{"animation-delay": `${0.5 * index}s`}}>{adjective}</p>*/}
                {/*)}*/}
                {/*</div>*/}
                {/*<button>Stop</button>*/}
                {/*</div>*/}

                <div className="passwordBox">
                    <div
                        className={"password pwNumCard" + (this.state.visibility ? " visible" : "")}>{pwNum}</div>
                    <div
                        className={"password pwAdj1Card" + (this.state.visibility ? " visible" : "")}>{pwAdj1}</div>
                    <div
                        className={"password pwAdj2Card" + (this.state.visibility ? " visible" : "")}>{pwAdj2}</div>
                    <div
                        className={"password pwSubCard" + (this.state.visibility ? " visible" : "")}>{pwSub}</div>
                    <div
                        className={"password pwVerbCard" + (this.state.visibility ? " visible" : "")}>{pwVerb}</div>
                    <div
                        className={"password pwAdvCard" + (this.state.visibility ? " visible" : "")}>{pwAdv}</div>
                    <div
                        className={"password pwSpecialCard" + (this.state.visibility ? " visible" : "")}>{pwSpecial}</div>
                </div>

                {this.state.visibility && <div className="entropy"> Entropy: {entropy} </div>}

                {this.state.visibility ?
                    <button onClick={this.show}> Go back </button> :
                    <button id="generate-button" onClick={this.show}>Get Password</button>
                }

            </div>
        )
    }

}

export default FirstVersion;
