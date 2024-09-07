import * as d3 from "d3";
import React, { useRef, useState, useEffect } from "react";

const LineChart = () => {
  const svgRef = useRef();
  const [data, setData] = useState([
    0, 70, 45, 60, 90, 44, 60, 32, 80, 40, 100,
  ]);

  useEffect(() => {
    //select the svg using the ref hook.
    const width = 500;
    const height = 250;
    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("overflow", "visible");
    //   .style("background", "#ded6d5");

    //scaleing x,y
    //xscales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    //yscales
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    //draw Lines
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      //show a tick on x axis for each data point
      .ticks(1 + data.length)
      //to make the x axis begin from number 1 not 0
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(7).tickFormat((d) => d + "°");
    // drawing the axes on the svg
    svg.append("g").call(xAxis).attr("transform", `translate(0,${height})`);
    svg.append("g").call(yAxis);

    // setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 3);


      //recalculates the width and height based on the current SVG element dimensions
      // and updates the scales and axes accordingly.
      const resizeHandler = () => {
        const width = svgRef.current.clientWidth;
        const height = svgRef.current.clientHieght;

        xScale.range([0, width]);
        yScale.range([height, 0]);
      }

      window.addEventListener('resize', resizeHandler);
      resizeHandler();

  }, [data]);

  return (
    <div className="bg-white/25 backdrop-blur-lg border border-white/60 rounded-xl p-2 flex flex-col items-center">
      <h2 className="font-semibold p-1">Line Charts</h2>
      <hr className="h-1 mb-1 rounded-full" />
      <div className="shadow-sm rounded-lg p-4 flex justify-center">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default LineChart;
