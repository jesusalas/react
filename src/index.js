import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root')

ReactDOM.render(< Card
                title="Technique Guides"
                description="Learn amazing street workout and calit"
                leftColor="#A74CF2"
                rightColor="#617BFB"
                />, container);
