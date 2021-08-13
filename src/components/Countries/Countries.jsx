import React, { useState } from 'react';
import { country } from './data';
import './Contries.css';
import { FaBeer, FaMinus, FaPlus } from 'react-icons/fa';

const Countries = () => {
    const [data, setData] = useState(country);
    const [show, setShow] = useState(false);


    const handleShow = (index) => {
        if (show === index) {
            return setShow(null)
        }
        setShow(index)
    }

    return (
        <div className="container">
            <h1 className="title">World Country</h1>
            <div className="content">
                {data.map((item, index) => {
                    return (
                        <div className="main-div">
                            <div className="show-content" onClick={() => handleShow(index)} key={index}>
                                <h1>{item.country} </h1>
                                <span>{show === index ? <FaMinus /> : <FaPlus />} </span>
                            </div>
                            {show === index ? (
                                <div className="hide-content">
                                    {item.children.map((ele, index) =>
                                        <div className="hide-content-children" key={index}>
                                            <h4 >{ele.name}</h4>
                                        </div>)}
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Countries;