import React from 'react';
import '../Styles/home.css';
import axios from 'axios';


class profs extends React.Component {
    constructor() {
        super();
        this.state = {
            profs: []
        }
    }
    componentDidMount() {
        axios({
            url: 'https://blog-appbackend.herokuapp.com/profs',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ profs: respone.data.profs })
            })
            .catch()

    }

    render() {
        const { profs } = this.state;
        return (
            <div>

                <div id="pro" class="container text-light">
                    {profs.map((item) => {
                        return <div>
                            <h1 class="h1 text-light">professional</h1><br />
                            <h4 class="container text-light">Topic:- {item.name}</h4><br />
                            <div>{item.content}</div>
                        </div>


                    })}



                </div>
            </div>
        )
    }
}
export default profs;