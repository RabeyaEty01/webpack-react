import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return (
      <div>
            <h1>Hello from react</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda doloremque voluptatem provident iste, praesentium aperiam, nesciunt soluta velit natus modi minima, maiores similique consequuntur? Sequi architecto culpa rem. Sint!</p>
      </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"))

if(module.hot){
    module.hot.accept()
}