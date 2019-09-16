import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {flipOutX} from "react-animations";
import {slideOutDown} from "react-animations";
import './App.css';
import {adjectives} from "./dictionary";

const time = 0.5;
const FlipOutX = styled.div`animation: ${time}s ${keyframes`${flipOutX}`} infinite`;
const SlideOutDown = styled.div`animation: ${time}s ${keyframes`${slideOutDown}`} infinite`;

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: true,
            word: adjectives[Math.floor(Math.random() * adjectives.length)]
        };
        this.stopSpin = this.stopSpin.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                word: adjectives[Math.floor(Math.random() * adjectives.length)]})
        }, time * 1000)
    }

    stopSpin() {
        clearInterval(this.interval);
        this.setState({spin: false})
    }


    render() {
        return (
            <div className="demo">
                <div className="slots">
                    <div className="frame">
                    {this.state.spin &&
                    <SlideOutDown>
                        <div className="pwCard">{this.state.word}</div>
                    </SlideOutDown>
                    }
                    {!this.state.spin &&
                    <div className="pwCard">{this.state.word}</div>
                    }
                    </div>
                    <button className="spin" onClick={this.stopSpin}>Stop</button>
                </div>

            </div>
        )
    }
}
