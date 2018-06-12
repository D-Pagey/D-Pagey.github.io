import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

import './index.css';

export default class Skills extends Component {

  node = React.createRef();

  componentDidMount() {
    this.createChart();
  }

  createChart = () => {
    const rating = [7, 10, 9];
    const tech = ['javascript', 'html', 'css'];
    const node = this.node.current;

    const xScale = scaleLinear()
      .domain([0, max(rating)])
      .range([0, 275]);
    const xAxis = axisBottom(xScale);

    select(node)
        .selectAll('rect')
        .data(rating)
        .enter()
        .append('rect');

    select(node)
        .selectAll('rect')
        .data(rating)
        .attr('x', 10)
        .attr('y', (d, i) => i * 50)
        .attr('width', xScale)
        .attr('height', 35)
        .style('fill', '#FFC18B')

    select(node)
        .selectAll('text')
        .data(tech)
        .enter()
        .append('text')
        .text((d) => d)
        .attr('x', 20)
        .attr('y', (d, i) => i * 50 + 22); 

    select(node)
        .append('g')
        .attr('transform', `translate(10, ${150})`)
        .call(xAxis)
  }


  render() {
    return (
      <section className='skills' id='skills'>
        <h2 className='subtitle'>Skills</h2>
        <svg ref={this.node} width={300} height={200} className='svg' />
        <p className='skills-copy'>I initially began teaching myself to code in 
        April 2017. Along the way I documented my experience and so you can see
        all the learning resources that I used as well as the projects I built 
        on this <a href='https://docs.google.com/spreadsheets/d/1yVy5vb2RABxIeS_hpSw88r6Q-BahlSUcRBpDHBRlFzg/edit?usp=sharing' 
        target='_blank' className='sheet-link'>Google Sheet</a>.</p>
      </section>
    )
  }
}

// Add conditional styling depending on strength of tech.