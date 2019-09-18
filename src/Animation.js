import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {slideOutDown} from "react-animations";
import './App.css';
import {adjectives, adverb, specials, subjectives, verb} from "./dictionary";

const time = 0.7;
// const FlipOutX = styled.div`animation: ${time}s ${keyframes`${flipOutX}`} infinite`;
const SlideOutDown = styled.div`animation: ${time}s ${keyframes`${slideOutDown}`} infinite`;

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: true,
            pwNum: Math.floor((Math.random() * 10)),
            pwAdj1: adjectives[Math.floor(Math.random() * adjectives.length)],
            pwAdj2: adjectives[Math.floor(Math.random() * adjectives.length)],
            pwSub: subjectives[Math.floor(Math.random() * subjectives.length)],
            pwVerb: verb[Math.floor(Math.random() * verb.length)],
            pwAdverb: adverb[Math.floor(Math.random() * adverb.length)],
            pwSpecial: specials.charAt(Math.floor(Math.random() * specials.length))
        };
        this.stopSpin = this.stopSpin.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                pwNum: Math.floor((Math.random() * 10)),
                pwAdj1: adjectives[Math.floor(Math.random() * adjectives.length)],
                pwAdj2: adjectives[Math.floor(Math.random() * adjectives.length)],
                pwSub: subjectives[Math.floor(Math.random() * subjectives.length)],
                pwVerb: verb[Math.floor(Math.random() * verb.length)],
                pwAdverb: adverb[Math.floor(Math.random() * adverb.length)],
                pwSpecial: specials.charAt(Math.floor(Math.random() * specials.length))
            })
        }, time * 1000)
    }

    stopSpin() {
        clearInterval(this.interval);
        this.setState({spin: false})
    }


    render() {
        return (
            <div className="body">
                <div className="demo">

                    {/*Random Number*/}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                                <SlideOutDown>
                                    <div className="pwCard">{this.state.pwNum}</div>
                                    <div className="pwCard">{this.state.pwNum} </div>
                                </SlideOutDown>


                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwNum}</div>
                            }
                        </div>
                    </div>

                    {/*Random Adjective 01*/}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                            <div className="pwCard">
                                <SlideOutDown>
                                    {this.state.pwAdj1}
                                </SlideOutDown>
                            </div>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwAdj1}</div>
                            }
                        </div>
                    </div>

                    {/*Random Adjective 02*/}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                            <div className="pwCard">
                                <SlideOutDown>
                                    {this.state.pwAdj2}
                                </SlideOutDown>
                            </div>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwAdj2}</div>
                            }
                        </div>
                    </div>

                    {/*Random Subjective */}
                    <div className="slots">
                        <div className="frame">

                            {this.state.spin &&
                            <SlideOutDown>
                                <div className="pwCard">{this.state.pwSub}</div>

                                <div className="pwCard">{this.state.pwSub}</div>

                                <div className="pwCard">{this.state.pwSub}</div>
                            </SlideOutDown>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwSub}</div>
                            }
                        </div>
                    </div>

                    {/*Random Verb */}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                            <SlideOutDown>
                                <div className="pwCard">{this.state.pwVerb}</div>
                            </SlideOutDown>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwVerb}</div>
                            }
                        </div>
                    </div>

                    {/*Random Adverb */}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                            <SlideOutDown>
                                <div className="pwCard">{this.state.pwAdverb}</div>
                            </SlideOutDown>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwAdverb}</div>
                            }
                        </div>
                    </div>

                    {/*Random Special Character */}
                    <div className="slots">
                        <div className="frame">
                            {this.state.spin &&
                            <SlideOutDown>
                                <div className="pwCard">{this.state.pwSpecial}</div>
                            </SlideOutDown>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwSpecial}</div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <button className="spin" onClick={this.stopSpin}>Stop</button>
                </div>
            </div>

        )
    }
}

export default Animation
