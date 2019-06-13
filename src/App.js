import React from 'react';

function App() {
    const [count,setCount] = React.useState(0);
    return (
        <div>
            <p>Você clicou {count} vezes!</p>
            <button onClick={() => {setCount(count + 1)}}>Contador</button>
        </div>
    );
}

export default App;