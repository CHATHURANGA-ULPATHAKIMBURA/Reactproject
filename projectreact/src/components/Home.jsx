import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const topic = "100000";
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Calculate Salary</h5>
                <form>
                  <input type="reset" value={"code"}></input>
                  <div class="form-group">
                    <label className="basicSala">Basic Salary</label>
                    <input style={{ width: 400 }} class="form-control"></input>
                    <br></br>
                    <label style={{ marginBottom: 0 }}>Earings</label>
                    <small id="emailHelp" class="form-text text-muted">
                      Allownce,Fixed Allowance,Bonus and etc.
                    </small>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                      <label class="form-check-label" for="flexCheckDefault">
                        EPF/ETF
                      </label>
                    </div>
                    <input style={{ width: 400 }} class="form-control"></input>
                    <button style={{ top: 50 }} onclick="myFunction()">
                      <img src="images.png" />
                    </button>
                    <br></br>
                    <div>
                      <input
                        id="myList"
                        style={{ width: 400 }}
                        class="form-control"
                      ></input>
                      <button onclick="myFunction()">
                        <img src="C:\Users\Admin\Desktop\Reactprojectimages.png" />
                      </button>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      ></input>
                      <label class="form-check-label" for="flexCheckDefault">
                        EPF/ETF
                      </label>
                    </div>
                    <label style={{ marginBottom: 0 }}>Deductions</label>
                    <small id="emailHelp" class="form-text text-muted">
                      Salary Advances,Loan Deductions and all
                    </small>
                    <input style={{ width: 400 }} class="form-control"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body"></div>
              <input></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
