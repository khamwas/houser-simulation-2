import React, { Component } from "react";
import { connect } from "react-redux";
import { setHouses, deleteHouse } from "../../reducks/reducer";
import { Link } from "react-router-dom";
import "./Dashbaord.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.setHouses();
  }

  deleteButton(id) {
    this.props.deleteHouse(id);
    this.props.setHouses();
  }

  render() {
    let display = this.props.houses.map(elem => (
      <div key={elem.id} className="houseContainer">
        <div>{elem.property_name}</div>
        <Link to={`/house/${elem.id}`}>
          <img className="houseImg" src={elem.img} alt={elem.property_name} />
        </Link>
        <div>{elem.address}</div>
        <div>
          {elem.city}, {elem.state}
        </div>

        <div>{elem.zip}</div>
        <div>
          Mortgage: ${elem.mortgage} Rent: ${elem.rent}
        </div>
        <button className="delete" onClick={() => this.deleteButton(elem.id)}>
          Delete
        </button>
      </div>
    ));
    return (
      <div>
        <div className="dashboardTop">
          <div className="dashTitle">Dashboard</div>
          <Link to="/wizard">
            <button className="dashButton">Add New Property</button>
          </Link>
        </div>
        <div>{display}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { houses } = state;
  return {
    houses
  };
}

export default connect(
  mapStateToProps,
  { setHouses, deleteHouse }
)(Dashboard);
