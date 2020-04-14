const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} = Recharts;
const data = [
  {name: 'Jan', 	negative: -42, positive: 23, average: -35},
  {name: 'Feb', 	negative: -27, positive: 43, average: -30},
  {name: 'March', negative: -10, positive: 55, average: -35},
  {name: 'April', negative: -13, positive: 67, average: -20},
  {name: 'May', 	negative: -4, positive: 66, average: -30},
  {name: 'June', 	negative: -7, positive: 73, average: -20},
];


const renderCustomizedLabel = (props, data) => {
  const { x, y, width, height, value } = props;
  const currentData = data.find(d => d.name === value);
  console.log('currentData : ', currentData);
  if (currentData) {
  	const label = currentData.four + currentData.five;
    return `${label}%`;
  } else {
    return null;
};

const SimpleBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={700} height={500} data={data} stackOffset="sign" barGap={"10%"}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis domain={[-100, 100]} tickFormatter={label => `${label}%`}/>
       <Tooltip/>
       <Legend layout="vertical"/>
       <Bar dataKey="positive" name="Very Clear" fill="#4da8a0" stackId="stack">
         <LabelList dataKey="positive" position="top" formatter={label => `${label}%`} content={(props) => renderCustomizedLabel(props, data)}/>
       </Bar>
       <Bar dataKey="average" name="Somewhat Clear" fill="#ffcfcf" stackId="stack"/>
       <Bar dataKey="negative" name="Not Clear" fill="#c92222" stackId="stack"/>
      </BarChart>
    );
  }
})

ReactDOM.render(
  <SimpleBarChart />,
  document.getElementById('container')
);

