const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} = Recharts;
const data = [
  {name: 'Jan', 	negative: -42, positive: 23, average: -35},
  {name: 'Feb', 	negative: -27, positive: 43, average: -30},
  {name: 'March', negative: -20, positive: 45, average: -35},
  {name: 'April', negative: -13, positive: 67, average: -20},
  {name: 'May', 	negative: -22, positive: 48, average: -30},
  {name: 'June', 	negative: -20, positive: 55, average: -20},
  {name: 'July',	negative: -23, positive: 62, average: -10},
];

const SimpleBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={700} height={500} data={data} stackOffset="sign" barGap={"10%"}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis domain={[-100, 100]} tickFormatter={label => `${label}%`}/>
       <Tooltip/>
       <Legend layout="vertical"/>
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="positive" name="Never push my code without writing good documentation" fill="#4da8a0" stackId="stack">
         <LabelList dataKey="positive" position="top" formatter={label => `${label}%`}/>
       </Bar>
       <Bar dataKey="average" name="Only if needed" fill="#ffcfcf" stackId="stack"/>
       <Bar dataKey="negative" name="Don't see a point in doing that!" fill="#c92222" stackId="stack"/>
      </BarChart>
    );
  }
})

ReactDOM.render(
  <SimpleBarChart />,
  document.getElementById('container')
);

