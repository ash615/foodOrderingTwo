import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
//import { pizza1 } from '../'

import './menu.css';
import FoodItemsService from '../../actions/foodItems';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        FoodItemsService.getFoodItems().then((res) => {
            this.setState({ menu: res.data });
        });
    }

    render() {
        const menuItems = this.state.menu.map((item) => {
            return (

                <div key={item.id} className="col-12 col-md-3">
                    <Figure>
                        <Figure.Image className="figure" alt={item.name} src= { require("F:/BOARDINFINITYMERNSTACK/CapstoneProjects/food-ordering-portal-master/food-ordering-portal-master/client/src/pizza1.jpg") } roundedCircle />
                        <Figure.Caption className="caption">
                            <Link className="link" to={{ pathname: '/pizza', data: item.subItems }}><b>{item.name}</b></Link>
                        </Figure.Caption>
                    </Figure>
                </div>

            );
        })
        return (
            <div className="container container-left">
                <div className="row mt-5">
                    {menuItems}
                </div>
            </div>
        )
    }
}

export default Menu;