import React from 'react';
import './PokeMartView.css';
import pokemartbackground from '../../img/pokemartbackgroundv3.jpg'
import { Card, ListGroupItem } from 'react-bootstrap'
import greatBall from "../../img/greatball.png"
import pokeBall from "../../img/pokeballsprite.png"
import ultraBall from "../../img/ultraball.png"
import masterBall from "../../img/masterballsprite.png"



function PokeMartView() {

    const handleBuy = () => {
        
    }

    return (
        <div className='pokemart-view'>
            <div className='pokemart-background'>
                <img className='stretch' src={pokemartbackground} alt='pokemart background'></img>
            </div>
            <h1>Pokemon PokeMart</h1>
            <a id="backhome" href='/encounter' style={{color: 'yellow'}}> Back home</a>
            <div id="pokemenu">
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={pokeBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Poke Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$50</Card.Text>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text">X</span>

                            </div>
                        <input type="number" className="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={greatBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Great Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$100</Card.Text>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text">X</span>

                            </div>
                        <input type="number" className="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={ultraBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Ultra Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$300</Card.Text>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text">X</span>

                            </div>
                        <input type="number" className="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={masterBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Master Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$800</Card.Text>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span classNames="input-group-text">X</span>

                            </div>
                        <input type="number" className="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
            </div>
                <button type="button" id="checkout" className="btn btn-success">Check Out</button>
        </div>
    )

};

export default PokeMartView;