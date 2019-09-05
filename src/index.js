import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Welcome from './components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root')

ReactDOM.render(<div>
                    <Welcome
                        username="Jesus"
                    />
                    < Card
                        title="Technique Guides"
                        description="Learn amazing street workout and calit"
                        leftColor="#A74CF2"
                        rightColor="#617BFB"
                    />
                </div>, container);
