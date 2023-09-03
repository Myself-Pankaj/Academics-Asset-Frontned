import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";
import toast from 'react-hot-toast';
import { saveShippingInfo } from '../../redux/actions/cartAction';


const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setaddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState(shippingInfo.country);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      toast.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/confirmorder");
  };

  return (
    <section className="shipping">
    <main>
      <h1>Shipping Details</h1>
      <form onSubmit={shippingSubmit}>
        <div>
          <label>Address.</label>
          <input
            type="text"
            placeholder="Enter House No."
            value={address}
            required
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Country</label>

          <select
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Country</option>
            {Country &&
              Country.getAllCountries().map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
          </select>
        </div>

        {country && (
          <div>
            <label>State</label>
            <select
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(country).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        <div>
          <label>Pin Code</label>
          <input
            type="number"
            placeholder="Enter Pincode"
            required
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div>
          <label>Phone No.</label>
          <input
            type="number"
            placeholder="Enter Phone No."
            value={phoneNo}
            required
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <button type="submit">Confirm Order</button>
      </form>
    </main>
  </section>
  )
}

export default Shipping