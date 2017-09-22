class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Background source='https://i.imgur.com/9eDEcN5.jpg'/>
        <div className='display gitdisplay'>
          <div className='eyes'><div className='left eye'/><div className='right eye'/></div>
          <a href='https://www.github.com/CalebBlack/'><img className='github' src='https://i.imgur.com/9HLZFMT.png'/></a>
        </div>
        <h1 className='title'>Dream Developing</h1>
        <p className='name'>Caleb Black</p>
        <p className='description'>I have been coding for over 3 years, I have learned <span className='language java'>Java</span>, <span className='language javascript'>Javascript</span>, <span className='language ruby'>Ruby</span> and <span className='language python'>Python</span>
        <br/>I know <span className='stack rails'>Ruby on Rails</span>, but I specialize in the <span className='stack mern'>M.E.R.N.</span> stack</p>
        <div className='display'>
          <div className='row'>
            <div className='wiggle'><img className='nodejs' src='https://i.imgur.com/skPqQVm.png'/></div>
          </div>
          <div className='row'>
            <div className='jiggle'><img className='ruby' src='https://i.imgur.com/wb1tBWm.png'/></div>
            <div className='yflip'><img className='java' src='https://i.imgur.com/pYdTUZz.png'/></div>
            <div className='zspin'><img className='python' src='https://i.imgur.com/phaFwT9.png'/></div>
          </div>
        </div>
        <a href='https://www.github.com/CalebBlack/' className='githublink'>
          <h1>To Code!</h1>
          <div className='downarrow'/>
        </a>
        <div className='spotlight left'/><div className='spotlight right'/>
      </div>
    );
  }
}

class Background extends Component {
  constructor(){
    super();
    this.props = {};
  }
  render(){
    return (<div className='backgroundHolder'><img id='background' src={this.props.source || ''}/></div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
