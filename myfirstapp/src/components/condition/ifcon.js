import React from 'react';

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MissedGoal />;
  }
  else { return <MadeGoal /> };

}
export default Goal;