import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import { getDayName } from "../../Helpers/Date";

const LineChart = ({ weather }) => {
  const svgRef = useRef();
  const days = weather.data.weather;

  const daysData = days.map((item, i) => ({
    x: i === 0 ? "Today" : getDayName(item.date, "en-US"),
    y: item.avgtempC,
  }));

  const updateChart = () => {
    const svg = d3.select(svgRef.current);
    const container = svgRef.current.parentElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = container.clientWidth - margin.right - margin.left;
    const height = container.clientHeight - margin.top - margin.bottom;

    // Clear existing content
    svg.selectAll("*").remove();

    // Update SVG dimensions
    svg
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");

    // Scales
    const xScale = d3
      .scaleBand() // for categorical x-axis
      .domain(daysData.map((d) => d.x)) //days name
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 70]) // Use maximum temperature for y-axis domain
      .nice()
      .range([height, 0]);

    // Line generator
    const generateScaledLine = d3
      .line()
      .x((d) => xScale(d.x) + xScale.bandwidth() / 2) // Center the line on the band
      .y((d) => yScale(d.y))
      .curve(d3.curveCardinal);

    // Draw gridlines
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).ticks(7).tickSize(-width))
      .selectAll(".tick")
      .style("stroke-width", "0.2px")
      .style("stroke-dasharray", "1");

    // Axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(daysData.length)
      .tickFormat((d) => d)
      .tickSize(6);

    // // Draw axes
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${height})`)
      .attr("class", "x-axis");

    // Draw line
    const path = svg
      .append("path")
      .datum(daysData)
      .attr("d", generateScaledLine)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2);

    const length = path.node().getTotalLength(); // Get the total length of the path

    path
      .attr("stroke-dasharray", length + " " + length) //hide the line by making a dashed pattern
      .attr("stroke-dashoffset", length)
      .transition()
      .duration(2000)
      .attr("stroke-dashoffset", 0);

    //line circles
    svg
      .selectAll("circle")
      .data(daysData)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.x) + xScale.bandwidth() / 2)
      .attr("cy", (d) => yScale(d.y))
      .attr("r", 5)
      .attr("fill", "red")
      .transition()
      .duration(2050)
      .attr("r", 3);

    // Add data labels
    svg
      .selectAll(".data-labels")
      .data(daysData)
      .enter()
      .append("text")
      .attr("class", "data-labels")
      .attr("x", (d) => xScale(d.x) + xScale.bandwidth() / 2) // Center the label on the circle
      .attr("y", (d) => yScale(d.y) - 10) // Position the label above the circle
      .attr("text-anchor", "middle") // Center text horizontally
      .text((d) => d.y) // Label text (temperature)
      .style("font-size", "12px") // Font size
      .style("fill", "black"); // Font color
  };

  useEffect(() => {
    // Initial chart rendering
    updateChart();

    // Resize handler
    const handleResize = () => {
      updateChart();
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [daysData]); // Dependencies: update the chart when data changes

  return (
    <div className="bg-white/25 backdrop-blur-lg border border-white/60 rounded-xl p-2 flex flex-col items-center">
      <h2 className="font-semibold p-1">Average Weekly Temperatures</h2>
      <div
        className="shadow-sm rounded-lg p-4 flex justify-center mt-6"
        style={{ width: "100%", height: "350px" }}>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default LineChart;

// const yAxis = d3
//   .axisLeft(yScale)
//   .ticks(7)
//   .tickFormat((d) => d + "°")
//   .tickSize(6);

// svg.append("g").call(yAxis).attr("class", "y-axis");
