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
            url: 'https://rocky-cliffs-40299.herokuapp.com/profs',
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

                <div id="pro" className="container text-light">
                    {profs.map((item) => {
                        return <div className="whitespace">
                            <h1 className="h1 text-light">professional</h1><br />
                            <h4 className="container text-light">Topic:- {item.name}</h4><br />
                            <div>{item.content}</div>
                        </div>


                    })}



                </div>
            </div>
        )
    }
}
export default profs;