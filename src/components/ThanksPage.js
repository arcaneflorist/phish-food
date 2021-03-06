import React, { Component, Fragment } from 'react'
import {
  Redirect
} from 'react-router-dom'
import Anime from 'react-anime';

export default class ThanksPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1600)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }
    render() {
      return (          
        this.state.redirect
      ? <Redirect to="/" />
      :            
      <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
      <div className="tc pv4 pv5-ns">
              <div className="ttu tracked">
              <p style={{color: '#ff80cc'}}>Message sent <i class="far fa-paper-plane"></i>  </p>
              </div>
              
            </div>    
        </Anime>
        
      )
    }
};