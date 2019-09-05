import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component {
    render() {
        return(
            <div>
                <Welcome
                    username="Jesus"
                />
                < Card
                    title="Technique Guides"
                    description="Learn amazing street workout and calit"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />
            </div>
        )
    }
}

export default Exercises