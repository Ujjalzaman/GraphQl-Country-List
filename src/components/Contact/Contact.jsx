import React, { useState } from 'react';
import './Contact.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Contact = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        zip: '',
    })
    const hanldleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleCountry = (e) => {
        setData({ ...data, country: e })
    }
    const handleRegion = (e) => {
        setData({ ...data, region: e })
    }

    const handleOnSubmit = (e) => {
        console.log(data)
        e.preventDefault()
    }
    return (
        <div className="contact">
            <div className="testbox">
                <form onSubmit={handleOnSubmit}>
                    <h1>Online Form Submis</h1>
                    <div className="item">
                        <p>Your Full Legal Name </p>
                        <div className="name-item">
                            <input onChange={(e) => hanldleOnChange(e)} type="text" name="firstName" placeholder="First Name" required />
                            <input onChange={(e) => hanldleOnChange(e)} type="text" name="lastName" placeholder="Last Name" required />
                        </div>
                    </div>
                    <h1>added</h1>

                    <div className="item">
                        <p>Address</p>
                        <input type="text" name="name" placeholder="Street address" onChange={(e) => hanldleOnChange(e)} required />
                        <input type="text" name="name" placeholder="Street address line 2" onChange={(e) => hanldleOnChange(e)} required />
                        <div className="city-item">
                            <CountryDropdown className="form-control"
                                country={data.country}
                                value={data.country}
                                name={data.country}
                                valueType="short"
                                showDefaultOption={true}
                                defaultOptionLabel={"Select Country"}
                                onChange={(e) => handleCountry(e)}
                                required={true}
                            />
                            <RegionDropdown
                                disableWhenEmpty={true}
                                country={data.country}
                                value={data.region}
                                name={data.region}
                                valueType="short"
                                countryValueType="short"
                                showDefaultOption={true}
                                defaultOptionLabel={"Select Region"}
                                onChange={(e) => handleRegion(e)}
                                required={true}
                            />
                            <input type="text" name="zip" placeholder="Postal / Zip code" onChange={(e) => hanldleOnChange(e)} required />
                        </div>
                    </div>


                    <div className="btn-block">
                        <button type="submit" href="/">SEND</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;