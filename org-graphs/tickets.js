const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
  {name: 'Jan', twentyFifthPercentile: 0.8, average: 3.9, seventyFifthPercentile: 4.3},
  {name: 'Feb', twentyFifthPercentile: 0.7, average: 3.4, seventyFifthPercentile: 4.2},
  {name: 'March', twentyFifthPercentile: 0.3, average: 2.9, seventyFifthPercentile: 4.6},
  {name: 'April', twentyFifthPercentile: 1.1, average: 2.45, seventyFifthPercentile: 4.9},
  {name: 'May', twentyFifthPercentile: 1.3, average: 3.7, seventyFifthPercentile: 4.5},
  {name: 'June', twentyFifthPercentile: 1.01, average: 4.01, seventyFifthPercentile: 4.7},
];

const yAxisFormatter = (label) => {
	if (label === 5) return "Say they finish much faster";
  if (label === 4) return "Say they finish a little early";
  if (label === 3) return "Say they finish on time";
  if (label === 2) return "Say they need a little more time";
  if (label === 1) return "Say they usually are severely delayed";
  if (label === 0) return "";
  return label
}


const SimpleLineChart = React.createClass({
	render () {
  	return (
    	<LineChart width={600} height={600} data={data} margin={{top: 10, right: 30, left: 80, bottom: 0}}>
       <CartesianGrid strokeDasharray="1 5"/>
       <XAxis dataKey="name" padding={{left: 30, right: 10}}/>
       <YAxis tickFormatter={yAxisFormatter} padding={{ top: 40 }} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]}/>
       <Tooltip/>
       <Legend height={80} />
       <Line type="monotone" name="25th Percentile" dataKey="twentyFifthPercentile" stroke="#8884d8" activeDot={{r: 10}}/>
       <Line type="monotone" name="Average" dataKey="average" stroke="#000000" activeDot={{r: 10}}/>
       <Line type="monotone" name="75th Percentile" dataKey="seventyFifthPercentile" stroke="#82ca9d" activeDot={{r: 10}}/>
      </LineChart>
    );
  }
})

ReactDOM.render(
  <SimpleLineChart />,
  document.getElementById('container')
);
