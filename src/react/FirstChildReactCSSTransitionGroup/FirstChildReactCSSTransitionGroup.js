import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Custom Component for rendering nonly one element which doesnt encapsulate
 * the children in a <span> element
 * @reference https://facebook.github.io/react/docs/animation.html#rendering-a-single-child
 */
function FirstChild (props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export default class FirstChildReactCSSTransitionGroup extends Component {
  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.element
  }

  render () {
    const {children, component, ...rest} = this.props;

    const group = (
      <ReactCSSTransitionGroup {...rest} component={FirstChild}>
        {children || null}
      </ReactCSSTransitionGroup>
    );

    return component
      ? (<component>{group}</component>)
      : group;
  }
}
