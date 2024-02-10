import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../Components/Context';
import { MyDateTimePicker } from '../Components/DateTimePicker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export const DetailsScreen = ({ moviesData }) => {
  console.log("moviesData", moviesData);

  const { updateSelectedMovieData } = useMovieContext();

  const { imdbID } = useParams();
  const selectedMovie = moviesData?.Search.find((movie) => movie.imdbID === imdbID);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedTime, setSelectedTime] = useState();
  const [ticketPrice, setTicketPrice] = useState(500);

  const handleDateTimeChange = (selectedDateTime) => {
    setSelectedDateTime(selectedDateTime);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const notify = () => toast("Maximum 10 Tickets Only!");

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);

    const totalPrice = ticketQuantity > 0 ? ticketQuantity * ticketPrice : 0;

    updateSelectedMovieData({
      selectedMovieName: selectedMovie?.Title,
      totalPrice,
      ticketQuantity: quantity,
      imdbID: selectedMovie?.imdbID,
    });

    if (quantity > 10) {
      notify();
      setTicketQuantity(10);
    } else {
      setTicketQuantity(quantity);
    }
  };

  const handlePriceChange = (event) => {
    setTicketPrice(parseFloat(event.target.value));
  };

  const totalPrice = ticketQuantity > 0 ? ticketQuantity * ticketPrice : 0;

  console.log(selectedTime)
  console.log("Data in DetailsScreen:", selectedMovie?.Title, totalPrice, ticketQuantity);
  console.log(selectedMovie)
  console.log(selectedMovie?.Title)

  console.log("Location state in DetailsScreen component:", {
    selectedMovieName: selectedMovie?.Title,
    totalPrice: totalPrice.toFixed(2),
    ticket: ticketQuantity,
    imdbID: selectedMovie?.imdbID
  });

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img src={selectedMovie?.Poster} alt={selectedMovie?.imdbID} className="img-fluid mb-3" />
              <h5>{selectedMovie?.Title}</h5>
              <span>Kathmandu, Nepal</span>
              <div className="form-group"></div>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ marginLeft: "3%" }}>
          <div className="card">
            <div className="card-header">
              <h5>Event Details</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Date:</label>
                <br />
                <br />
                <MyDateTimePicker className='date' onChange={handleDateTimeChange} value={selectedDateTime} clockClassName="custom-clock-class form-control" />
                <br />
              </div>
              <div className="form-group">
                <label>Time:</label>
                <select className="form-control" onChange={handleTimeChange}>
                  <option value="morning">9 AM</option>
                  <option value="afternoon">12 PM</option>
                  <option value="evening">4 PM</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label>Ticket Quantity:</label>
                <input type="number" value={ticketQuantity} onChange={handleQuantityChange} min="1" className="form-control" />
                <ToastContainer position="top-right" autoClose={2000} />
              </div>
              <br />
              <div className="form-group">
                <label>Ticket Price ($):</label>
                <input type="number" value={ticketPrice} onChange={handlePriceChange} min="0" step="0.01" className="form-control" readOnly />
              </div>
              <br />
              <div className="form-group">
                <label>Total Price: {"$"+ totalPrice.toFixed(2)}</label>
              </div>
              <br />

              <Link to={`/invoice/${selectedMovie?.imdbID}/${encodeURIComponent(selectedMovie?.Title)}/${totalPrice}/${ticketQuantity}`} className="btn btn" style={{ background: "#e14658", color: "white" }}>
                  Buy Now
              </Link>

              {/* <Link
                to={{
                  pathname: `/invoice/${selectedMovie?.imdbID}`,
                  state: {
                    selectedMovieName: selectedMovie?.Title,
                    totalPrice: totalPrice.toFixed(2),
                    ticket: ticketQuantity,
                    imdbID: selectedMovie?.imdbID
                  },
                }}
                className="btn btn"
                style={{ background: "#e14658", color: "white" }}
              >
                Buy Now
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
