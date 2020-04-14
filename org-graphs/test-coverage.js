const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} = Recharts;
const data = [
  {name: 'Jan',   one: -15, two: -23, three: -22, four: 17, five: 22},
  {name: 'Feb',   one: -9, two: -11, three: -30, four: 20, five: 30},
  {name: 'March', one: -10, two: -16, three: -14, four: 25, five: 35},
  {name: 'April', one: -13, two: -7, three: -10, four: 46, five: 24},
  {name: 'May',   one: -12, two: -10, three: -18, four: 30, five: 30},
  {name: 'June',  one: -5, two: -15, three: -30, four: 22, five: 28},
];
const SimpleBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={700} height={500} data={data} stackOffset="sign" barGap={"10%"}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis domain={[-100, 100]}/>
       <Tooltip/>
       <Legend layout="vertical"/>
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="four" name="Say they write test only for important features" fill="#02bfaf" stackId="stack" />
       <Bar dataKey="five" name="Say they write tests for all code developed" fill="#13877d" stackId="stack"/>
       <Bar dataKey="three" name="Say they could write more tests" fill="#ffcfcf" stackId="stack" />
       <Bar dataKey="two" name="Say they don't see a reason for writing tests" fill="#d15e5e" stackId="stack" />
       <Bar dataKey="one" name="Say they don't write tests" fill="#c91010" stackId="stack" />
      </BarChart>
    );
  }
})

ReactDOM.render(
  <SimpleBarChart />,
  document.getElementById('container')
);

