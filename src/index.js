import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Map from './components/Map.js'

class App extends React.Component{
    
    render(){
        return (
            <div>
                <Map />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));