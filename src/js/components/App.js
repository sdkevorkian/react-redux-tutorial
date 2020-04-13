import React from 'react';
import List from './List';
import Form from './Form';

const App = () => (
    <>
    <div>
        <h1>Articles</h1>
        <List />        
    </div>
    <div>
        <h1>Add a new article</h1>
        <Form/>
    </div>
    </>
)

export default App;