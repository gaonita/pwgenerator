import React, {Component} from 'react';
import './App.css';
import {numbers, adjectives, subjectives, verb, adverb,} from "./dictionary";
import Slider from "react-slick";


class Slick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: true,
            pwNum: Slick.getRandom(numbers),
            pwAdj1: Slick.getRandom(adjectives),
            pwAdj2: Slick.getRandom(adjectives),
            pwSub: Slick.getRandom(subjectives),
            pwVerb: Slick.getRandom(verb),
            pwAdverb: Slick.getRandom(adverb),
            pwSpecial: ['!', '?', ':)', ':D', '*'],
            settings: {
                infinite: true,
                vertical: true,
                autoplay: false,
                autoplaySpeed: 0,
                easing: 'none',
                speed: 100,
                arrows: false,
                rtl: true
            }
        };
        this.play = this.play.bind(this);
        this.stopSpin = this.stopSpin.bind(this);
        this.grabSliderReference = this.grabSliderReference.bind(this);
    }


    static getRandom(array) {
        const response = [];
        for (let i = 0; i < 20; i++) {
            response.push(array[Math.floor(Math.random() * array.length)])
        }
        return response;
    }

    play() {
        this.setState({
            settings:{...this.state.settings, speed: 100, autoplay: true}
        });
        this.sliders.forEach(slider => {
            slider.slickPlay();
        })
    }

    sliders = [];

    grabSliderReference(slider) {
        this.sliders.push(slider)
    }

    stopSpin(slide) {
        if(this.state.settings.speed < 1100){
            this.timeout = setTimeout(() => {
                this.setState({
                    settings: {...this.state.settings, speed:this.state.settings.speed + 100, autoplay: true},
                });
                this.stopSpin();
            }, 500);
        }else {
            this.setState({
                settings:{...this.state.settings, autoplay: false}
            })
        }

    }

    // this.sliders.forEach(slider => {
    //     slider.slickPause();
    // })}



    render() {

        return (
            <div className="body">
                <div className="machine">
                    <h4>RANDOM PASS PHRASE MACHINE</h4>

                    <div className="container">
                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwNum.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={() => this.stopSpin(this.sliders[0])}>STOP</button>
                        </div>


                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwAdj1.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={this.stopSpin}>STOP</button>
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
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwSub.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={this.stopSpin}>STOP</button>
                        </div>

                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwVerb.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={this.stopSpin}>STOP</button>
                        </div>


                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwAdverb.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={this.stopSpin}>STOP</button>
                        </div>

                        <div className="slotbox">
                            <div className="slots03">
                                <div className="frame03">
                                    {this.state.spin &&
                                    <Slider ref={this.grabSliderReference} {...this.state.settings}>
                                        {this.state.pwSpecial.map((i) => <div className="pwCard03">{i}</div>)
                                        }
                                    </Slider>
                                    }
                                </div>
                            </div>
                            <button className="spinStop" onClick={this.stopSpin}>STOP</button>

                        </div>
                    </div>

                    {/*<div className="lever on" id="lever">*/}
                    {/*<div className="track">*/}
                    {/*<div className="stick"></div>*/}
                    {/*<div className="ball">*/}
                    {/*<div className="ripple" id="ripple"></div>*/}
                    {/*<button id="trigger" onClick={this.play}></button>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    <div className="buttonArea">
                        <button className="spinStart" onClick={this.play}>SPIN</button>
                    </div>

                    {/*<div className="buttonArea">*/}
                        {/*<button className="spinStop" onClick={this.stopSpin}>STOP</button>*/}
                    {/*</div>*/}


                </div>

            </div>
        )
    }
}

export default Slick
