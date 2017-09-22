class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Background source='https://i.imgur.com/9eDEcN5.jpg'/>
        <div id='gitdisplay' className='display gitdisplay'>
          <div className='eyes'><Eye radius={5} side='left'/><Eye radius={5} side='right'/></div>
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

class Background extends React.Component {
  constructor(){
    super();
    this.props = {};
  }
  render(){
    return (<div className='backgroundHolder'><img id='background' src={this.props.source || ''}/></div>)
  }
}

class Eye extends Component {
  constructor(){
    super();
    this.props = {};
    this.state = {hovered: false, blinking: false};
    this.makeMoving = this.makeMoving.bind(this);
    this.makeBlinking = this.makeBlinking.bind(this);
  }
  componentDidMount(){
    if (this.eye) {
      this.makeMoving(this.eye);
      this.makeBlinking(this.eye);
    }
  }
  render(){
    return (<div ref={(eye)=>{this.eye = eye}} style={{opacity:(this.state.hovered || this.state.blinking || false) ? 1 : 0}} className={this.props.side ? 'eye '+this.props.side.trim() : 'eye'}/>)
  }
  makeBlinking(eyeDiv){
    const blink = ()=>{
      this.setState(Object.assign({},this.state,{blinking:true}));
      setTimeout(()=>{
        this.setState(Object.assign({},this.state,{blinking:false}));
      },2000);
    };
    blink();
    setInterval(blink,10000);
  }
  makeMoving(eyeDiv){
    const computedStyle = window.getComputedStyle(eyeDiv,null);
    var original = window.getComputedStyle(eyeDiv,null).getPropertyValue(this.props.side);
    original = parseInt(original.substring(0,original.length-2));
    const gitdisplay = document.getElementById('gitdisplay');
    gitdisplay.addEventListener('mousemove',()=>{
      if (this.state.hovered !== true) {
        this.setState(Object.assign({},this.state,{hovered:true}));
      }
    });
    gitdisplay.addEventListener('mouseout',()=> {
      if (this.state.hovered !== false) {
        this.setState(Object.assign({},this.state,{hovered:false}));
      }
    });
    if (gitdisplay) {
      document.addEventListener('mousemove',(event)=>{
        const [x, y] = getPosition(eyeDiv);
        var mouseX = event.clientX - x;
        var mouseY = event.clientY - y;
        mouseX = Math.min(Math.max(mouseX,-this.props.radius),this.props.radius);
        mouseY = Math.min(Math.max(mouseY,-this.props.radius),this.props.radius);
        eyeDiv.style[this.props.side] = original + (this.props.side === 'left' ? mouseX : -mouseX) + 'px';
        eyeDiv.style.top = 'calc(50% + '+mouseY+'px)';
      });
    }
  }
}


function getPosition(element) {
    for (var x=0, y=0; element != null; x += element.offsetLeft, y += element.offsetTop, element = element.offsetParent);
    return [x,y];
}
ReactDOM.render(<App />, document.getElementById('root'));
