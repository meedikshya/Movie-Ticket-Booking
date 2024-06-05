import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Invoice = ({ moviesData }) => {
  const navigate = useNavigate();
  const { selectedMovieName, totalPrice } = useParams();
  const [confirmed, setConfirmed] = useState(false);

  // State for contact information
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  // Function to handle input change in contact form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Function to handle confirmation and payment
  const handleConfirmAndPay = () => {
    const { fullName, email, address, phoneNumber } = contactInfo;

    // Checking if any of the required fields are empty
    if (
      fullName.trim() === '' ||
      email.trim() === '' ||
      address.trim() === '' ||
      phoneNumber.trim() === ''
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Constructing the content of the text file
    const content = `Contact Information:\nFull Name: ${fullName}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}\n\nInvoice Details:\nSelected Movie: ${selectedMovieName}\nTotal Price: $${grandAmount}`;

    // Create a Blob object
    const fileBlob = new Blob([content], { type: 'text/plain' });

    // Create a URL for the Blob object
    const fileURL = URL.createObjectURL(fileBlob);

    // Create a link element
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = `${fullName}.txt`;

    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
    setConfirmed(true);
  };

  // Navigating to the home page after confirmation
  if (confirmed) {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  // Calculations for invoice details
  const ticketSubtotal = parseFloat(totalPrice) || 0;
  const taxRate = 0.13;
  const taxAmount = ticketSubtotal * taxRate;
  const discountPercentage = 0.15;
  const discountAmount = ticketSubtotal * discountPercentage;
  const grandAmount = ticketSubtotal + taxAmount - discountAmount;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              <h2>Contact Information</h2>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={contactInfo.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={contactInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phoneNumber"
                    value={contactInfo.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-3">
          <div className="card">
            <div className="card-body">
              <h4>Ticket Summary</h4>
              <p>Selected Movie: {selectedMovieName}</p>
              <p>Total: ${totalPrice}</p>
              <p>Tax (13%): ${taxAmount.toFixed(2)}</p>
              <p>Discount (15%): ${discountAmount.toFixed(2)}</p>
              <hr />
              <p>Grand Total: ${grandAmount.toFixed(2)}</p>
              <br />
              <button className="btn btn-primary" onClick={handleConfirmAndPay}>
                Confirm
              </button>
              {confirmed && (
                <div className="alert alert-success mt-3" role="alert">
                  Thank you for your purchase!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Invoice;
