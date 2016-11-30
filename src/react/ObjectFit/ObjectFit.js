import {PropTypes, PureComponent, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';

import calcFitDimensions from 'display/calcFitDimensions';

export default class ObjectFit extends PureComponent {
  static propTypes = {
    refWidth: PropTypes.number.isRequired,
    refHeight: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    upscale: PropTypes.bool.isRequired
  }

  static defaultProps = {
    upscale: true
  }

  constructor (props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      width: 'auto',
      height: 'auto'
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillReceiveProps (nextProps) {
    this.calcDimensions(nextProps);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize () {
    this.calcDimensions(this.props);
  }

  calcDimensions (props) {
    const el = findDOMNode(this);
    const parentEl = el.parentElement;

    const {refWidth, refHeight} = props;
    // const parentDim = parentEl.getBoundingClientRect();
    const parentStyle = window.getComputedStyle(parentEl);

    const options = {upscale: props.upscale};
    const newState = calcFitDimensions(refWidth, refHeight, parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10), options);
    this.setState(newState);
  }

  render () {
    return cloneElement(this.props.children, {
      style: this.state
    });
  }
}
