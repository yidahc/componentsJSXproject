import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author= "Sam"
          timeAgo="Today at 4:45PM"
          text="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author= "Alex"
          timeAgo="Today at 2:00AM"
          text="Sup dude!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author= "Katie"
        timeAgo="Yesterday at 8:30PM"
        text="Hello!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(
   <App />,
   document.querySelector('#root')
);


faker.image.avatar()
/*
Given positive integer num_insects, write a while loop that prints that number doubled without exceeding 100. Follow each number with a space. Ex: If num_insects = 8, print:
8 16 32 64
*/

//https://semantic-ui.com
//semantic-ui cdn
// npm install --save faker
//https://github.com/marak/Faker.js/


/*
Creating a Reusable, configurable component
Identify the JSX that appears to be duplicated
What is the purpose of the block of JSX? Think of a descriptive name for what it does.
Create a new file to house this new component. It should have the same name as the component
Create a new component in the new file, paste the JSX into it
Make the new component configurable by using React's 'props' system

Props: customize or configure a child component (passing data from parent to child component)
*/
