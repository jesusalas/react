import React from 'react'
import exerciseImg from '../images/exercise.png'
import './styles/Card.css'

class Card  extends React.Component {
   render() {
       const { title, description, img, leftColor, rightColor } = this.props 
       return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg}className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
   }
}

export default Card