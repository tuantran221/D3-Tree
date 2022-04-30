import React from "react";
import Tree from "react-d3-tree";


const containerStyles = {
  width: "100%",
  // height: "100vh",

 
};

const svgSquare = {
shape: "rect",
shapeProps: {
  width: 20,
  height: 20,
  x: -10,
  y: -10
}
};
const nodeSize = {
  x: 150, y: 120
}


export default class CenteredTree extends React.PureComponent {
state = {};

componentDidMount() {
  const dimensions = this.treeContainer.getBoundingClientRect();
  console.log("dimensions", dimensions)
  this.setState({
    translate: {
      x: 500,
      y: dimensions.height / 2.8
    }
  });
}

render() {
  return (
    <div style={containerStyles} ref={(tc) => (this.treeContainer = tc)}>
      <Tree
        data={this.props.task}
        translate={this.state.translate}
        orientation={'vertical'}
        nodeSvgShape={svgSquare}
        circleRadius={5}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        nodeSize={nodeSize}
        pathClassFunc={() => "node__link"}
        initialDepth={0}
       
      />
    </div>
  );
}
}

