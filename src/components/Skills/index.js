import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

import './index.css';
import * as skills from './skills.js';

export default class Skills extends Component {

  node = React.createRef();

  componentDidMount() {
    this.createChart();
  }

  createChart = () => {
    const node = this.node.current;
    const ratings = skills.skills.map(element => element.rating);
    const tech = skills.skills.map(element => element.name);

    const xScale = scaleLinear()
      .domain([0, 9])
      .range([0, 275]);
    const xAxis = axisBottom(xScale)
      .ticks(3.5)
      .tickValues([3, 6, 9])

    select(node)
        .selectAll('rect')
        .data(ratings)
        .enter()
        .append('rect');

    select(node)
        .selectAll('rect')
        .data(ratings)
        .attr('x', 10)
        .attr('y', (d, i) => i * 45)
        .attr('width', xScale)
        .attr('height', 37.5)
        .style('fill', (d) => {
          if (d >= 7) {
            return '#63B995';
          } else if (d >= 4) {
            return '#B4C5E4';
          } else { 
            return '#f3b8f7';
          }
        });

    select(node)
        .selectAll('text')
        .data(tech)
        .enter()
        .append('text')
        .text((d) => d)
        .attr('x', 15)
        .attr('y', (d, i) => i * 45 + 25); 

    select(node)
        .append('g')
        .attr('transform', `translate(10, ${325})`)
        .call(xAxis)
  }

  render() {
    return (
      <section className='skills' id='skills'>
        <h2 className='subtitle'>Tech Skills</h2>
        <svg ref={this.node} width={320} height={370} className='svg' />
        <p className='skills-copy'>I began teaching myself to code in 
        April 2017. Along the way I documented my experience and so you can see
        all the learning resources that I have used, as well as the projects that I 
        built, on this <a 
        href='https://docs.google.com/spreadsheets/d/1yVy5vb2RABxIeS_hpSw88r6Q-BahlSUcRBpDHBRlFzg/edit?usp=sharing' 
        target='_blank' 
        rel='noopener noreferrer'
        className='sheet-link'>Google Sheet</a>.</p>
      </section>
    )
  }
}

/** To Do:
 * Scale the SVG with the viewport size/make as big as possible and don't change size
 * change to words broken into 3 sections. comfortable, learning, confident
 * these sections take up a 1/3 of the x axis and are styled appropriately
 * https://medium.com/@caspg/responsive-chart-with-react-and-d3v4-afd717e57583
 * hover state on bar => tooltip
 */