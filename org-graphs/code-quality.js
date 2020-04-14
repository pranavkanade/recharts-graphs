const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
  {name: '', jan: 0, feb: 0},
  {name: 'Poor', jan: 5, feb: 2},
  {name: 'Improvable', jan: 4, feb: 5},
  {name: 'Okay', jan: 4, feb: 6},
  {name: 'Very Good', jan: 6, feb: 7},
  {name: 'Perfect', jan: 7, feb: 8},
  {name: '', jan: 0, feb: 0},
];
const SimpleAreaChart = React.createClass({
	render () {
  	return (
      <AreaChart width={730} height={450} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.5}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff9830" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="#ff9830" stopOpacity={0.5}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]}/>
        <CartesianGrid strokeDasharray="3" vertical={false}/>
        <Tooltip />
        <Legend layout="vertical" iconType="rect"/>
        <Area type="monotone" name="January" dataKey="jan" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" name="February" dataKey="feb" stroke="#ff9830" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    );
  }
})

ReactDOM.render(
  <SimpleAreaChart />,
  document.getElementById('container')
);
