import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="mainSection1Cluster mainSection1Cluster1">
                        <div className="s1cSub s1c1Sub">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <h2>Lorem, ipsum dolor!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, nemo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button>Click</button>
                        </div>
                        <img src={require("../assets/headerImg.jpg")} alt="" />
                    </div>
                    <div className="mainSection1Cluster mainSection1Cluster2">
                        <img src={require("../assets/headerImg.jpg")} alt="" />
                        <div className="s1cSub">
                            <h3>Lorem ipsum dolor sit.</h3>
                            <h2>Lorem, ipsum dolor!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, nemo.</p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button>Click</button>
                        </div>
                    </div>
                    <div className="mainSection1Cluster mainSection1Cluster3">
                        <div>
                            <img src={require("../assets/mainImg.jpg")} alt="" />
                            <div className="s1c3Sub">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vitae cum libero suscipit quisquam soluta.</p>
                                <button>Click</button>
                            </div>
                        </div>
                        <div>
                            <img src={require("../assets/mainImg.jpg")} alt="" />
                            <div className="s1c3Sub">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vitae cum libero suscipit quisquam soluta.</p>
                                <button>Click</button>
                            </div>
                        </div>
                    </div>
                    <div className="mainSection2">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit.</p>
                        <div className="mainSection2C">
                            <div className="s2c2Sub">
                                <img src={require("../assets/mainImg.jpg")} alt="" />
                                <div className="s2c2SubC">
                                    <h3>Lorem, ipsum.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vitae cum libero suscipit quisquam soluta.</p>
                                    <button>Click</button>
                                </div>
                            </div>
                            <div className="s2c2Sub">
                                <img src={require("../assets/mainImg.jpg")} alt="" />
                                <div className="s2c2SubC">
                                    <h3>Lorem, ipsum.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vitae cum libero suscipit quisquam soluta.</p>
                                    <button>Click</button>
                                </div>
                            </div>
                            <div className="s2c2Sub">
                                <img src={require("../assets/mainImg.jpg")} alt="" />
                                <div className="s2c2SubC">
                                    <h3>Lorem, ipsum.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vitae cum libero suscipit quisquam soluta.</p>
                                    <button>Click</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;