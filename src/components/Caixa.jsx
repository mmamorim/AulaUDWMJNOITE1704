import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Icon } from '@iconify/react';

class Caixa extends React.Component {
    
    constructor() {
        super()
        console.log('passei aqui');
        this.state = {
            counter: 0,
            msg: 'oi gente'
        }
    }

    componentDidMount() {
        console.log('passei pelo componentDidMount');
    }

    render() {
        return (
            <div>
                <Icon icon="material-symbols:arrow-outward" width="18pt"/>
                <Icon icon="bi:1-circle" width="18pt"/>
                <Icon icon="bi:balloon" className="text-primary" width="18pt"/>
                <button className="btn btn-primary btn-sm m-2" onClick={() => { this.setState({ counter: this.state.counter+1 })}}>
                    {this.state.counter}
                </button>
                <button className="btn btn-primary btn-sm m-2" onClick={() => { this.setState({ msg: 'mudei' })}}>
                    mudar msg
                </button>
                <div className="border w-60 rounded bg-orange-500 p-1 text-blue-200">
                    Caixa {this.state.msg}
                </div>
            </div>
        )
    }
}

export default Caixa