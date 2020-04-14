const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
  {name: 'Jan', twentyFifthPercentile: 39.8, average: 66.9, seventyFifthPercentile: 86.3},
  {name: 'Feb', twentyFifthPercentile: 55.7, average: 71.4, seventyFifthPercentile: 75.2},
  {name: 'March', twentyFifthPercentile: 46.3, average: 68.9, seventyFifthPercentile: 74.6},
  {name: 'April', twentyFifthPercentile: 51.7, average: 75.9, seventyFifthPercentile: 80.9},
  {name: 'May', twentyFifthPercentile: 41.2, average: 61.7, seventyFifthPercentile: 70.3},
  {name: 'June', twentyFifthPercentile: 36.6, average: 72.4, seventyFifthPercentile: 76.1},
  {name: 'July', twentyFifthPercentile: 48.8, average: 70.1, seventyFifthPercentile: 78.8},
];

const yAxisFormatter = (label) => {
	if (label === 0) return "";
  if (label === 25) return "Developers need improvement";
  if (label === 50) return "There are room for improvement";
  if (label === 75) return "Skillful";
  if (label === 100) return "Extremely Skilled";
  return label
}


const SimpleLineChart = React.createClass({
	render () {
  	return (
    	<LineChart width={600} height={600} data={data} margin={{top: 10, right: 30, left: 80, bottom: 0}}>
       <CartesianGrid strokeDasharray="5 5"/>
       <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
       <YAxis tickFormatter={yAxisFormatter} padding={{ top: 40 }}/>
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
