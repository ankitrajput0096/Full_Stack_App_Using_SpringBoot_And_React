import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as IncDecActions, selectors as IncDecSelectors } from './duck';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {   //State variable for this component
      id: '-1',
      name: 'No Name',
      desc: 'No Description',
    };
  }


  static propTypes = {
    incrementAction: PropTypes.func.isRequired,
    decrementAction: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  _handleDecrement = event => {
    event.stopPropagation();
    const { decrementAction } = this.props;
    decrementAction();
  };

  _handleIncrement = event => {
    event.stopPropagation();
    const { incrementAction } = this.props;
    //invoking the increment action
    incrementAction();
  };

  _handleGETApiCall = event => {
    const { getGETApiData } = this.props;
    getGETApiData();
  }

  _handleGETApiCallWithDelay = event => {
    const { getGETApiDataWithDelay } = this.props;
    getGETApiDataWithDelay();
  }

  _renderGETdata() {
    const { getData } = this.props;
    if(getData.length > 0) {
      return (
        getData.map((ele) => (
          <div>
            <p>ID: {ele.id}</p>
            <p>Name: {ele.name}</p>
            <p>description: {ele.description}</p>
          </div>
        ))
      )
    }
    return 'No Data';
  }

  handleChange(event) {
    console.log("the event", event);

    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(Type) {
    // alert('A topic was submitted: ');
    const { 
      postMethodCall, 
      putMethodCall,
      deleteMethodCall
    } = this.props;
    
    if ( Type === 'postAPI') {
      postMethodCall(this.state.id, this.state.name, this.state.desc);
    }
    else if ( Type === 'putAPI') {
      putMethodCall(this.state.id, this.state.name, this.state.desc);
    }
    else if( Type === 'deleteAPI') {
      deleteMethodCall(this.state.id);
    }
  }

  _renderPostData() {
    return (
      <div>
        <label>
          id:
          <input type="text" value={this.state.id} onChange={(e) => {this.handleChange(e)}} name="id" />
        </label>
        <label>
          name:
          <input type="text" value={this.state.name} onChange={(e) => {this.handleChange(e)}} name="name" />
        </label>
        <label>
          description:
          <input type="text" value={this.state.desc} onChange={(e) => {this.handleChange(e)}} name="desc" />
        </label>
        <button onClick={(e) => {this.handleSubmit('postAPI')}}> Post method Call</button>
      </div>
    );
  }

  _renderPutData() {
    return (
      <div>
        <label>
          id:
          <input type="text" value={this.state.id} onChange={(e) => {this.handleChange(e)}} name="id" />
        </label>
        <label>
          name:
          <input type="text" value={this.state.name} onChange={(e) => {this.handleChange(e)}} name="name" />
        </label>
        <label>
          description:
          <input type="text" value={this.state.desc} onChange={(e) => {this.handleChange(e)}} name="desc" />
        </label>
        <button onClick={(e) => {this.handleSubmit('putAPI')}}> Put method Call</button>
      </div>
    );
  }

  _renderDeleteData() {
    return (
      <div>
        <label>
          id:
          <input type="text" value={this.state.id} onChange={(e) => {this.handleChange(e)}} name="id" />
        </label>
        <button onClick={(e) => {this.handleSubmit('deleteAPI')}}> Delete method Call</button>
      </div>
    );
  }


  render() {
    const { value, isFetching } = this.props;

    if ( isFetching ) {
      return (
      <h1>
        Loading
      </h1>
      );
    }
    else {
      return (
          <div>
            <h2>Contact</h2>
            {value}
            <button type="button" onClick={this._handleIncrement}>
              Increment
            </button>
            <button type="button" onClick={this._handleDecrement}>
              Decrement
            </button>
            {this._renderGETdata()}
            <button type="button" onClick={this._handleGETApiCall}>
              Get API Data from backend
            </button>
            <button type="button" onClick={this._handleGETApiCallWithDelay}>
              Get API Data from backend with Delay
            </button>
            {this._renderPostData()}
            {this._renderPutData()}
            {this._renderDeleteData()}
            <NavLink to='/'>Click here to go HomePage </NavLink>
          </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  value: IncDecSelectors.getValue(state),
  getData: IncDecSelectors.getGETApitData(state),
  isFetching: IncDecSelectors.isFetching(state),
  //can add more redux variable to props of component
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction: IncDecActions.increment,
      decrementAction: IncDecActions.decrement,
      getGETApiData: IncDecActions.getTodos,
      postMethodCall: IncDecActions.postMethodCall,
      putMethodCall: IncDecActions.putMethodCall,
      deleteMethodCall: IncDecActions.deleteMethodCall,
      getGETApiDataWithDelay: IncDecActions.getGETApiDataWithDelay,
      //can add more actions which can be dispatched from this component
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);