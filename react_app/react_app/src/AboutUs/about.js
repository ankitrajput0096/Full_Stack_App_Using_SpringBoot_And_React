import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as IncDecActions, selectors as IncDecSelectors } from './duck';

class Contact extends Component {

  //constructor of the component
  constructor(props) {
    super(props);
    this.state = {   //State variable for this component
      postId: '-1',
      postName: 'No Name',
      postDesc: 'No Description',
      putId: '-1',
      putName: 'No Name',
      putDesc: 'No Description',
      deleteId: '-1',
    };
  }

  //Protypes of the object which are coming as props to
  //this component.
  static propTypes = {
    incrementAction: PropTypes.func.isRequired,
    decrementAction: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

  //Default values of the objects which are coming as 
  //props to this component
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
          <h2>
          <div>
            <p>ID: {ele.id}</p>
            <p>Name: {ele.name}</p>
            <p>description: {ele.description}</p>
          </div>
          </h2>
        ))
      )
    }
    return <h2>No Data in the Beginning</h2>;
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
      postMethodCall(this.state.postId, this.state.postName, this.state.postDesc);
      this.setState({             //changing the values back to default values.
        postId: '-1',
        postName: 'No Name',
        postDesc: 'No Description'
      });
    }
    else if ( Type === 'putAPI') {
      putMethodCall(this.state.putId, this.state.putName, this.state.putDesc);
      this.setState({             //changing the values back to default values.
        putId: '-1',
        putName: 'No Name',
        putDesc: 'No Description'
      });
    }
    else if( Type === 'deleteAPI') {
      deleteMethodCall(this.state.deleteId);
      this.setState({             //changing the values back to default values.
        deleteId: '-1',
      });
    }
  }

  _renderGetData() {
    return (
      <div class="tabcontent">
        <h1> Data from Spring boot Server</h1>
        {this._renderGETdata()}
        <br></br>
        <button type="button" class='button' onClick={this._handleGETApiCall}>
          Get API Data from backend
        </button>
        <button type="button" class='button' onClick={this._handleGETApiCallWithDelay}>
          Get API Data from backend with Delay
        </button>
      </div>
    );
  }

  _renderPostData() {
    return (
      <div class="tabcontent">
        <h2> This is to add new Topic entries </h2>
        <br/>
        <label>
          <h2>id:</h2>
          <input class='inputtext' type="text" value={this.state.postId} onChange={(e) => {this.handleChange(e)}} name="postId" />
        </label>
        <label>
          <h2>name:</h2>
          <input class='inputtext'  type="text" value={this.state.postName} onChange={(e) => {this.handleChange(e)}} name="postName" />
        </label>
        <label>
          <h2>description:</h2>
          <input class='inputtext' type="text" value={this.state.postDesc} onChange={(e) => {this.handleChange(e)}} name="postDesc" />
        </label>
        <br/>
        <button class='button' onClick={(e) => {this.handleSubmit('postAPI')}}> Post method Call</button>
        <br/>
      </div>
    );
  }

  _renderPutData() {
    return (
      <div class="tabcontent">
        <h2> This is to modify the existing topic entries</h2>
        <br/> 
        <label>
          <h2>id:</h2>
          <input class='inputtext' type="text" value={this.state.putId} onChange={(e) => {this.handleChange(e)}} name="putId" />
        </label>
        <label>
          <h2>name:</h2>
          <input class='inputtext' type="text" value={this.state.putName} onChange={(e) => {this.handleChange(e)}} name="putName" />
        </label>
        <label>
          <h2>description</h2>
          <input class='inputtext' type="text" value={this.state.putDesc} onChange={(e) => {this.handleChange(e)}} name="putDesc" />
        </label>
        <br/>
        <button class='button' onClick={(e) => {this.handleSubmit('putAPI')}}> Put method Call</button>
        <br/>
      </div>
    );
  }

  _renderDeleteData() {
    return (
      <div class="tabcontent">
        <h2>This is to delete the topic entry</h2>
        <br/> 
        <label>
          <h2>id:</h2>
          <input class='inputtext' type="text" value={this.state.deleteId} onChange={(e) => {this.handleChange(e)}} name="deleteId" />
        </label>
        <br/>
        <button class='button' onClick={(e) => {this.handleSubmit('deleteAPI')}}> Delete method Call</button>
        <br/>
      </div>
    );
  }


  render() {
    const { value, isFetching } = this.props;

    if ( isFetching ) {   // Showing loader during the API call
      return (
      <h1>
        Loading         {/* Can add here custom loader here */}
      </h1>
      );
    }
    else {                // Displaying value when data is present from API call
      return (
          <div>
            <h1>React Redux State Management - In Action !!</h1>
            <h2> 
              This counter is controlled by Redux State Management variables.
            </h2>
            <h1> 
              {value}
            </h1>
            <br></br>
            <button type="button" class="button" onClick={this._handleIncrement}>
              <h2>Increment</h2>
            </button>
            <button type="button" class="button" onClick={this._handleDecrement}>
              <h2>Decrement</h2>
            </button>
            {this._renderGetData()}
            {this._renderPostData()}
            {this._renderPutData()}
            {this._renderDeleteData()}
            <NavLink to='/'>
              <button type='button' class='button'>
                Click here to go HomePage 
              </button>
            </NavLink>
          </div>
      );
    }
  }
}

//Here, we are mapping redux state variables to props.
const mapStateToProps = state => ({
  value: IncDecSelectors.getValue(state),
  getData: IncDecSelectors.getGETApitData(state),
  isFetching: IncDecSelectors.isFetching(state),
  //can add more redux variable to props of component
});

//Here, we are mapping actions to props.
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementAction: IncDecActions.increment,
      decrementAction: IncDecActions.decrement,
      getGETApiData: IncDecActions.getGETApiData,
      postMethodCall: IncDecActions.postMethodCall,
      putMethodCall: IncDecActions.putMethodCall,
      deleteMethodCall: IncDecActions.deleteMethodCall,
      getGETApiDataWithDelay: IncDecActions.getGETApiDataWithDelay,
      //can add more actions which can be dispatched from this component
    },
    dispatch
  );

// Higher order component which connects 'mapStateToProps' and 
// 'mapDispatchToProps' with the component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);