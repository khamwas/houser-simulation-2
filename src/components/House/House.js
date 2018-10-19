import React from "react";
import { deleteHouse } from "../../reducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./House.css";

function House(props) {
  let singleHouse = props.houses // eslint-disable-next-line
    .filter(item => item.id == props.match.params.id)
    .map(elem => (
      <div key={elem.id} className="singleHouseContainer">
        <div className="houseTitle">{elem.property_name}</div>
        <img
          className="singleHouseImg"
          src={elem.img}
          alt={elem.property_name}
        />
        <div>{elem.address}</div>
        <div>
          {elem.city}, {elem.state}
        </div>

        <div>{elem.zip}</div>
        <div>
          Mortgage: ${elem.mortgage} Rent: ${elem.rent}
        </div>
        <Link to="/">
          <button>Back</button>
          <button className="delete" onClick={() => props.deleteHouse(elem.id)}>
            Delete
          </button>
        </Link>
      </div>
    ));
  return (
    <div>
      {/* {console.log(props.houses)} */}
      {singleHouse}
    </div>
  );
}

function mapStateToProps(state) {
  const { houses } = state;
  return {
    houses
  };
}

export default connect(
  mapStateToProps,
  { deleteHouse }
)(House);
