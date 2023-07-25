import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faTaxi,
  faGamepad,
  faCar,
  faPlaneDeparture,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {useNavigate} from 'react-router-dom';

const Header = ({type}) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 2,
    children: 1,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
 

  function handleClick(name, operation) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  function handleSearch(){
    navigate('/hotels',{state:{destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type=== "list" ? 'headerContainer listMode' : 'headerContainer' }>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faGamepad} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <React.Fragment>
            <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search deals on hotels, homes, and much more...
        </p>
        <button className="headerButton">Sing in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              value={destination}
              onChange={(e)=> setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span  onClick={()=>setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adults} Adults ${options.children} children ${options.room} rooms`}</span>
           { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adults <= 1}
                    className="optionCounterBtn"
                    onClick={() => handleClick("adults", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterBtn"
                    onClick={() => handleClick("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterBtn"
                    onClick={() => handleClick("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button onClick={handleSearch} className="headerButton">search</button>
          </div>
          </div>
          </React.Fragment>
        }
        
      </div>
    </div>
  );
};

export default Header;
