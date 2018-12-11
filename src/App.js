import React, { Component } from 'react';
import './App.css';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

class App extends Component {

  getTime(){
    return (new Date()).toLocaleTimeString();
  }

  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Sam"
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Alex"
            avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Jane"
            avatar={faker.image.avatar()} 
           />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
