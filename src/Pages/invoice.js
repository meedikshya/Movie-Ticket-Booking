import React from 'react';
import { useParams } from 'react-router-dom';


export const Invoice = ({moviesData}) => {
  console.log("moviesData", moviesData);

  const { imdbID, selectedMovieName, totalPrice} = useParams();
  
   console.log("Location state in invoice component:", {
    selectedMovieName ,   
     totalPrice,
    imdbID
  });

  const ticketSubtotal = parseFloat(totalPrice) || 0;
  const taxRate = 0.13;
  const taxAmount = ticketSubtotal * taxRate;

  const discountPercentage = 0.15;
  const discountAmount = (ticketSubtotal * discountPercentage);
  const grandAmount = ticketSubtotal + taxAmount - discountAmount;

  const containerStyle = {
    border: '1px solid #ccc', 
    padding: '20px', 
    marginLeft: '100px', 
    marginRight: 'auto', 
    maxWidth: '30%',
  };

  const ticketSummaryStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    position: 'fixed',
    top: '15%',
    right: '10%',
    width: '30%',
  };

  console.log("movie name" , selectedMovieName);
  return (
    <div className="container-fluid mt-5" style={containerStyle}>
      <h2>Contact Information</h2>
      <div className="row">
        {/* Full Name */}
        <div className="col-md-12 mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="fullName" />
        </div>

        {/* Email and Address */}
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input type="text" className="form-control" id="address" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"  style={ticketSummaryStyle}>
          <h4>Ticket Summary</h4>
          <p>Selected Movie: {selectedMovieName} </p>
          <p>Total: $ {totalPrice} </p>
          <p>Tax (13%): $  {taxAmount.toFixed(2)} </p>
          <p>Discount (10%): $ {discountAmount.toFixed(2)} </p>
          <hr />
          <p>Grand Total: $ {grandAmount.toFixed(2)} </p>
          <br />
          <button className="btn btn-primary">Confirm and Pay</button>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
