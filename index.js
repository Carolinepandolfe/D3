let data = [56, 89, 125, 264, 397, 451, 582, 654];

let scale = d3.scale.linear().domain([0, 654]).range([0, 400]);

d3.select('.chart')
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style('width', (d) => {
    return scale(d) + 'px';
  })
  .text((d) => {
    return 'R$ ' + d;
  });
