import React, {Component} from 'react';
import './App.css';
import {numbers, adjectives, subjectives, verb, adverb,} from "./dictionary";
import Slider from "react-slick";


class Slick extends Component {

    arrayOfStrings = [];

    settings = {
        infinite: true,
        vertical: true,
        autoplay: false,
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
            pwNum: this.getRandom(numbers),
            pwAdj1: this.getRandom(adjectives),
            pwAdj2: this.getRandom(adjectives),
            pwSub: this.getRandom(subjectives),
            pwVerb: this.getRandom(verb),
            pwAdverb: this.getRandom(adverb),
            pwSpecial: ['!', '?', ':)', ':D', '*']
        };
        this.play = this.play.bind(this);
        this.stopSpin = this.stopSpin.bind(this);
        this.grabSliderReference = this.grabSliderReference.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }

    getRandom(array) {
        const response = [];
        for (let i = 0; i < 20; i++) {
            response.push(array[Math.floor(Math.random() * array.length)])
        }
        return response;
    }


    play() {
        this.arrayOfStrings.forEach(slider => {
            slider.slickPlay();
        })
    }

    stopSpin() {
        this.arrayOfStrings.forEach(slider => {
            slider.slickPause();
        })
    }

    grabSliderReference(slider) {
        this.arrayOfStrings.push(slider)
    }

    render() {

        return (
            <div className="body">
                <div className="machine">
                    <div className="container">
                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwNum.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwAdj1.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>


                        {/*<div className="slotbox">*/}
                        {/*<div className="slots03">*/}
                        {/*<div className="frame">*/}
                        {/*{this.state.spin &&*/}
                        {/*<Slider ref={this.grabSliderReference} {...this.settings}>*/}
                        {/*{this.state.pwAdj2.map((i) => <div className="pwCard03">{i}</div>)*/}
                        {/*}*/}
                        {/*</Slider>*/}
                        {/*}*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}


                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwSub.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwVerb.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwAdverb.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.settings}>
                                        {this.state.pwSpecial.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lever on" id="lever">
                        <div className="track">
                            <div className="stick"></div>
                            <div className="ball">
                                <div className="ripple" id="ripple"></div>
                                <button id="trigger" onClick={this.play}></button>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="buttonArea">
                    {/*<button className="spinStart" onClick={this.play}>Spin</button>*/}
                    <button className="spinStop" onClick={this.stopSpin}>Stop</button>
                </div>
            </div>
        )
    }
}

export default Slick
