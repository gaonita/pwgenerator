import React, {Component} from 'react';
import './App.css';
import {adjectives, adverb, specials, subjectives, verb} from "./dictionary";
import Slider from "react-slick";


class Slick extends Component {

    settings = {
        infinite: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 0,
        easing: 'none',
        speed: 200,
        arrows: false,
        rtl: true
    };

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


    stopSpin() {
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
                            <Slider {...this.settings}>
                                <div className="pwCard">{this.state.pwNum}</div>
                                <div className="pwCard">{this.state.pwNum}</div>
                                <div className="pwCard">{this.state.pwNum}</div>
                                <div className="pwCard">{this.state.pwNum}</div>
                                <div className="pwCard">{this.state.pwNum}</div>
                                <div className="pwCard">{this.state.pwNum}</div>

                            </Slider>

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
                            <Slider {...this.settings}>
                                {adjectives.map((adjective, index) => <p>{adjective}</p>)}
                            </Slider>
                            }
                            {!this.state.spin &&
                            <div className="pwCard">{this.state.pwAdj1}</div>
                            }
                        </div>
                    </div>

                    {/*/!*Random Adjective 02*!/*/}
                    {/*<div className="slots">*/}
                    {/*<div className="frame">*/}
                    {/*{this.state.spin &&*/}
                    {/*<div className="pwCard">*/}
                    {/*<SlideOutDown>*/}
                    {/*{this.state.pwAdj2}*/}
                    {/*</SlideOutDown>*/}
                    {/*</div>*/}
                    {/*}*/}
                    {/*{!this.state.spin &&*/}
                    {/*<div className="pwCard">{this.state.pwAdj2}</div>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*/!*Random Subjective *!/*/}
                    {/*<div className="slots">*/}
                    {/*<div className="frame">*/}

                    {/*{this.state.spin &&*/}
                    {/*<SlideOutDown>*/}
                    {/*<div className="pwCard">{this.state.pwSub}</div>*/}

                    {/*<div className="pwCard">{this.state.pwSub}</div>*/}

                    {/*<div className="pwCard">{this.state.pwSub}</div>*/}
                    {/*</SlideOutDown>*/}
                    {/*}*/}
                    {/*{!this.state.spin &&*/}
                    {/*<div className="pwCard">{this.state.pwSub}</div>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*/!*Random Verb *!/*/}
                    {/*<div className="slots">*/}
                    {/*<div className="frame">*/}
                    {/*{this.state.spin &&*/}
                    {/*<SlideOutDown>*/}
                    {/*<div className="pwCard">{this.state.pwVerb}</div>*/}
                    {/*</SlideOutDown>*/}
                    {/*}*/}
                    {/*{!this.state.spin &&*/}
                    {/*<div className="pwCard">{this.state.pwVerb}</div>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*/!*Random Adverb *!/*/}
                    {/*<div className="slots">*/}
                    {/*<div className="frame">*/}
                    {/*{this.state.spin &&*/}
                    {/*<SlideOutDown>*/}
                    {/*<div className="pwCard">{this.state.pwAdverb}</div>*/}
                    {/*</SlideOutDown>*/}
                    {/*}*/}
                    {/*{!this.state.spin &&*/}
                    {/*<div className="pwCard">{this.state.pwAdverb}</div>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*/!*Random Special Character *!/*/}
                    {/*<div className="slots">*/}
                    {/*<div className="frame">*/}
                    {/*{this.state.spin &&*/}
                    {/*<SlideOutDown>*/}
                    {/*<div className="pwCard">{this.state.pwSpecial}</div>*/}
                    {/*</SlideOutDown>*/}
                    {/*}*/}
                    {/*{!this.state.spin &&*/}
                    {/*<div className="pwCard">{this.state.pwSpecial}</div>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
                <div>
                    <button className="spin" onClick={this.stopSpin}>Stop</button>
                </div>
            </div>

        )
    }
}

export default Slick
