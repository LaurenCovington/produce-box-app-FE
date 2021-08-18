// when you click an offering, this is the comp that shows its detail info (price, etc)
import React, { Component } from 'react';
import { ProductConsumer } from '../store/appContext';
import Navbar from './navbar';
import { withRouter } from "react-router";


class OfferingDetails extends Component {
    
    render(props) {
        return (
            <ProductConsumer>
                
                {value => {
                    // let { givenid } = useParams();
                    const {data, addToCart}=value;

                    // const cart = [];

                    const givenid = 1;
                    // console.log('data: ', data)
                    //console.log('HEY: ', this.props.match.params.id);
                    //let results = data.find(item=>item.id===parseInt(this.props.match.params.id));
                    console.log(':::: ', givenid)

                    return(
                        // <h1>{data[givenid].name}</h1>

                        <div className="det">
                            <Navbar />
                            <div className="inside-container">
                                <h2>Offering Details</h2>

                                <div className="det-center">
                                    <div className="det-img">
                                        <img src='https://images.unsplash.com/photo-1600398811198-f11d97598a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt="Kale pictured"/> {/* was src={results.img} */}
                                    </div>

                                    <div className="det-info">
                                        <h3>{data[givenid].name}</h3> {/* <h3>{results.title}</h3> */}
                                        <p>{data[givenid].details}</p> {/* <p>{results.details}</p> */}
                                        <p>Contribution Date: {data[givenid].contribution_date}</p> {/* added */}
                                        <h4>Batch Value: <span>${data[givenid].price}</span></h4> {/* <h4>Batch Value: <span>${results.price}</span></h4> */}

                                        <div className="but-options">
                                            <a href="/showOfferings"><button className="back-products">Back to Offerings</button></a>
                                            <button className="add-toCart" onClick={()=>addToCart([givenid])}>Add to Cart</button> {/* <button className="add-toCart" onClick={()=>addToCart(results.id)}>Add to Cart</button> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }}

            </ProductConsumer>
        )
            }
        }
        export default withRouter(OfferingDetails);
        