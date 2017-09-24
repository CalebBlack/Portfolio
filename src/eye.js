import React from 'react';
class Eye extends React.Component {
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
        eyeDiv.style[this.props.side] = 'calc(40% + '+ (this.props.side === 'left' ? mouseX : -mouseX) + 'px)';
        eyeDiv.style.top = 'calc(50% + '+mouseY+'px)';
      });
    }
  }
}
function getPosition(element) {
    for (var x=0, y=0; element != null; x += element.offsetLeft, y += element.offsetTop, element = element.offsetParent);
    return [x,y];
}
export default Eye;
