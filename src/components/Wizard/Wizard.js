import React, { Component } from "react";
import "./Wizard.css";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { addHouse, setHouses } from "../../reducks/reducer";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      img: "",
      mortgage: null,
      rent: null
    };
  }

  changeHandler(key, e) {
    this.setState({ [key]: e.target.value });
    console.log(this.state);
  }

  clearFields() {
    this.setState({
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      img: "",
      mortgage: null,
      rent: null
    });
  }

  completeWizard() {
    this.props.addHouse(this.state);
    this.clearFields();
    this.props.setHouses();
  }

  render() {
    return (
      <div>
        <div className="wizardTop">
          <div className="wizardTitle">Add New Listing</div>

          <Link to="/">
            <button onClick={() => this.clearFields()} className="dashButton">
              Cancel
            </button>
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/wizard"
            render={() => (
              <div className="wizardContainer">
                <div>
                  <div className="input">
                    <div>Property Name</div>
                    <input
                      value={this.state.property_name}
                      onChange={e => this.changeHandler("property_name", e)}
                      type="text"
                    />
                  </div>
                  <div className="input">
                    <div>Address</div>
                    <input
                      value={this.state.address}
                      onChange={e => this.changeHandler("address", e)}
                      type="text"
                    />
                  </div>

                  <div className="fieldBottom">
                    <div className="input">
                      <div>City</div>
                      <input
                        value={this.state.city}
                        onChange={e => this.changeHandler("city", e)}
                        type="text"
                      />
                    </div>
                    <div className="input">
                      <div>State</div>
                      <input
                        value={this.state.state}
                        onChange={e => this.changeHandler("state", e)}
                        type="text"
                      />
                    </div>
                    <div className="input">
                      <div>Zip</div>
                      <input
                        value={this.state.zip}
                        onChange={e => this.changeHandler("zip", e)}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <Link to="/wizard/step2">
                  <button>Next</button>
                </Link>
              </div>
            )}
          />
          <Route
            path="/wizard/step2"
            render={() => (
              <div className="input">
                <div>Image</div>
                <input
                  value={this.state.img}
                  onChange={e => this.changeHandler("img", e)}
                  type="text"
                />
                <Link to="/wizard">
                  <button>Back</button>
                </Link>
                <Link to="/wizard/step3">
                  <button>Next</button>
                </Link>
              </div>
            )}
          />
          <Route
            path="/wizard/step3"
            render={() => (
              <div>
                <div>Suggested Rent: ${this.state.mortgage * 1.25}</div>
                <div className="input">
                  <div>Mortgage</div>
                  <input
                    value={this.state.mortgage}
                    type="number"
                    onChange={e => this.changeHandler("mortgage", e)}
                  />
                </div>
                <div className="input">
                  <div>Rent</div>
                  <input
                    value={this.state.rent}
                    type="number"
                    onChange={e => this.changeHandler("rent", e)}
                  />
                </div>
                <Link to="/wizard/step2">
                  <button>Back</button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => this.completeWizard()}
                    className="dashButton"
                  >
                    Complete
                  </button>
                </Link>
              </div>
            )}
          />
        </Switch>
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
  { addHouse, setHouses }
)(Wizard);
