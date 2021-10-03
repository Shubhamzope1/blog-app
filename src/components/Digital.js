import React from 'react';
import '../Styles/home.css';
import axios from 'axios';


class Digital extends React.Component {
    constructor() {
        super();
        this.state = {
            Digital: []
        }
    }
    componentDidMount() {
        sessionStorage.clear();
        axios({
            url: 'http://localhost:2023/Digital',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ Digital: respone.data.Digital })
            })
            .catch()

    }

    render() {
        const { Digital } = this.state;
        return (
            <div>
                <div id="digco" class="container text-light">
                    <h1 id="digital" class="h1 text-light">Digital</h1>
                    <br />
                    {Digital.map((item) => {
                        return <div>
                            <h4 id="h4" class="container text-light">Topic-{item.name} </h4>
                            <p id="P" class="container text-light">{item.content}
                                <h5>THANK YOU</h5>
                            </p>
                        </div>


                    })}




                </div>
            </div>
        )
    }
}
export default Digital;