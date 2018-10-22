import { Component } from 'react'
import io from 'socket.io-client'

class Test extends Component {
    state= {
        hello: 'iii'
    }

    componentDidMount (){
        
        const socket = io('localhost:3000')
        console.log('aaaa','xxxxx', socket)
        socket.on('xxxxxxxxx', data => {

            console.log("aaaaaaaa", data)
            this.setState({
                hello: data.message
            })
        })
    }

    render() {
        return(
            <h1> aaaa {this.state.hello} bbbb </h1>
        )
    }
}

export default Test 
