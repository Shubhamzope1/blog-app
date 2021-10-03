import React from 'react';
import axios from 'axios';
import '../Styles/home.css';
class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            Quotes: []
        }
    }
    componentDidMount() {
        axios({
            url: 'http://localhost:2023/Quotes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ Quotes: response.data.Quotes })
                console.log(response.data.Quotes)
            })
            .catch()

    }
    render() {
        const { Quotes } = this.state;
        return (
            <div>
                <div id="heading" class="container justify-content-center text-light">
                    <h1 id="h1" class="h1">Quote Of The Day</h1>
                    <h3 id="h3" class="h3 justify-content-center">Keep Yourself Motivated to learn new things</h3>
                </div>
                <div>
                    <section class="container">
                        <div id="daily" class="container text-light" >
                            <h1 class="h1 text-light">Quote</h1>
                            <br />
                            <div>
                                <div>
                                    {Quotes.length > 0 ? Quotes.map((item, index) => {
                                        return <div key={index}>
                                            <div>
                                                <h1 className="TheBig">{item.name}</h1>
                                                
                                            </div>
                                            <div>
                                            <div className="row">
                                            {Quotes && item.thumb && item.thumb.map((image) => {
                                                     
                                                        return <div class="col-lg-4 col-md-6 col-sm-12 g-0 box">
                                                            <img src={image} className="l_img" alt="Sorry for the Inconvinience" />
                                                        </div>
                                                    
                                            
                                                    })}
                                                        </div>
                                            </div>
                                           
                                        </div>
                                    }) : null}


                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>
        )
    }

}
export default Quotes;