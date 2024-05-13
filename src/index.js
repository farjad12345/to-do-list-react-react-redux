import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './Redux/store';
import { addTodoACtion } from './Redux/store/Todos';
// store.dispatch(addTodoACtion({title:"123"}))
// store.dispatch(addTodoACtion({title:"456"}))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <App />
      </Provider>

);

