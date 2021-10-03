import React from 'react';
import axios from 'axios';


class Quotes extends React.Component{
    constructor() {
        super();
        this.state = {
            Quotes:[],
            day:{}
        }
    }
    componentDidMount() {
        
        axios({
            url: 'https://blog-appbackend.herokuapp.com/Quotes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ Quotes: respone.data.Quotes })
            })
            .catch()
            axios({
                url: 'https://blog-appbackend.herokuapp.com/qofday',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(respone => {
                    this.setState({ day: respone.data.day })
                })
                .catch()
    }
    render(){
        const{Quotes}= this.state;
        return(
            <div>
              <div id="heading" class="container justify-content-center text-light">
            <h1 id="h1" class="h1">Quote Of The Day</h1>
            <h3 id="h3" class="h3 justify-content-center">{day.name}</h3>
          </div>
          <div>
                <section class="container">
                        <div id="daily" class="container text-light" >
                        <h1 class="h1 text-light">Quote</h1>
                        <br />
                            <div>
                           <h2 id="moto" class="h2 text-light"> {Quotes.name} </h2>
                      
                       
                            </div>
                    
               
                        
                        {/* 
                         <br />
                        <div class="d-flex flex-row-reverse bd-highlight ratio-1x1">
                            <div id="img1" class="p-2 bd-highlight ratio-1x1">
                                <img src="./Assets/sky.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img2" class="p-2 bd-highlight">
                                <img src="./Assets/rain.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img3" class="p-2 bd-highlight">
                                <img src="./Assets/steps.jpg" class="img-thumbnail" alt="..." />
                            </div>
                        </div>
                        <br /><br />
                        
                        
                        <h2 id="friend" class="h2 text-light"> Friendship </h2>
                        <br />
                        <div class="d-flex flex-row-reverse bd-highlight ratio-1x1">
                            <div id="img1" class="p-2 bd-highlight ratio-1x1">
                                <img src="./Assets/friend.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img2" class="p-2 bd-highlight">
                                <img src="./Assets/road.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img3" class="p-2 bd-highlight">
                                <img src="./Assets/rail.jpg" class="img-thumbnail" alt="..." />
                            </div>
                        </div>
                        <br /><br />
                        <h2 id="life" class="h2 text-light"> life and love</h2>
                        <br />
                        <div class="d-flex flex-row-reverse bd-highlight ratio-1x1">
                            <div id="img1" class="p-2 bd-highlight ratio-1x1">
                                <img src="./Assets/life.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img2" class="p-2 bd-highlight">
                                <img src="./Assets/sea.jpg" class="img-thumbnail" alt="..." />
                            </div>
                            <div id="img3" class="p-2 bd-highlight">
                                <img src="./Assets/dost.jpg" class="img-thumbnail" alt="..." />
                            </div>
                        </div> */}
                    </div>
                </section>
               

            </div>

            </div>
        )
    }
}
export default Quotes;