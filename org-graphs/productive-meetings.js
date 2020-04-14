const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} = Recharts;
const data = [
  {name: 'Jan', negative: -42, average: -23, positive: 35},
  {name: 'Feb', negative: -27, average: -43, positive: 30},
  {name: 'March', negative: -20, average: -45, positive: 35},
  {name: 'April', negative: -13, average: -67, positive: 20},
  {name: 'May', negative: -22, average: -48, positive: 30},
  {name: 'June', negative: -30, average: -50, positive: 20},
  {name: 'July', negative: -33, average: -57, positive: 10},
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
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="positive" name="We strike a fine balance!" fill="#4da8a0" stackId="stack">
         <LabelList dataKey="positive" position="inside" formatter={label => `${label}%`}/>
       </Bar>
       <Bar dataKey="average" name="Could cut down a few" fill="#ffcfcf" stackId="stack">
         <LabelList dataKey="average" position="inside" formatter={label => `${label}%`}/>
       </Bar>
       <Bar dataKey="negative" name="Meetings is all we do!" fill="#c92222" stackId="stack">
         <LabelList dataKey="negative" position="inside" formatter={label => `${label}%`}/> 
       </Bar>
      </BarChart>
    );
  }
})

ReactDOM.render(
  <SimpleBarChart />,
  document.getElementById('container')
);

