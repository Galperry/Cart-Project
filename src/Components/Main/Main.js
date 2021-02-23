import './Main.css';
import React, {Component} from 'react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            divArray: [
                {innerTxt: "Zero", id: "1"},
                {innerTxt: "Zero", id: "2"},
                {innerTxt: "Zero", id: "3"},
                {innerTxt: "Zero", id: "4"}]
        }
    }

    addNum(e) {
        let newArray = [...this.state.divArray]
        for (let obj of newArray) {
            if (e.target.id === obj.id) {
                if (obj.innerTxt == "Zero")
                    obj.innerTxt = 1;
                else
                    obj.innerTxt += 1;
            }
        }
        this.setState({divArray: newArray},this.changeAmount)
    }

    lessNum = (e) => {
        let newArray = [...this.state.divArray]
        for (let obj of newArray) {
            if (e.target.id === obj.id) {
                if (obj.innerTxt > 1)
                    obj.innerTxt -= 1;
                else
                    obj.innerTxt = "Zero";
            }
        }
        this.setState({divArray: newArray},this.changeAmount)
    }

    doRefresh = () => {
        let newArray = [...this.state.divArray];
        for (let obj of newArray)
            obj.innerTxt = "Zero"
        this.setState({divArray: newArray},this.changeAmount)
    }

    changeAmount() {
        let StatesArray = [...this.state.divArray]
        let count = 0;
        for (let obj of StatesArray) {
            if (obj.innerTxt !== "Zero")
                count += 1;
        }
        this.props.changeCount(count);
    }

    removeDiv = (e) => {
        let trashId = e.target.id;
        let StatesArray = [...this.state.divArray]
        StatesArray = StatesArray.filter(obj => obj.id !== trashId)
        this.setState({divArray: StatesArray}, this.changeAmount)
    }

    restoreDivs = () => {
        if (!this.state.divArray.length)
            window.location.reload();
    }


  render() {
    return (
      <div className="container">
          <button type="button" className={`btn btn-success mx-3 ${this.state.divArray.length ? '' : 'disabled'}`} onClick={this.doRefresh.bind(this)}>
            <i className="fas fa-sync-alt"></i>
          </button>
          <button type="button" className={`btn btn-primary ${this.state.divArray.length ? 'disabled' : ''}`} onClick={this.restoreDivs.bind(this)}>
            <i className="fas fa-recycle"></i>
          </button>
          {this.state.divArray.map((item,key) => {
              return (
                    <div className="row my-3" key={key}>
                        <div className="col">
                            <button type="button" className="numContainer btn btn-warning font-weight-bold mx-1">
                                {item.innerTxt}
                            </button>
                            <button type="button" id={item.id} className="btn btn-secondary mx-1" onClick={(e) => this.addNum(e)}>
                                <i className="fas fa-plus-circle" id={item.id}></i>
                            </button>
                            <button type="button" id={item.id} className="btn btn-primary mx-1" onClick={(e) => this.lessNum(e)}>
                                <i className="fas fa-minus-circle" id={item.id}></i>
                            </button>
                            <button type="button" className="btn btn-danger mx-1" id={item.id} onClick={(e) => this.removeDiv(e)}>
                                <i className="fas fa-trash-alt" id={item.id}></i>
                            </button>
                        </div>
                    </div>       
              )
          })}
      </div>
    );
  }
}

export default Main;