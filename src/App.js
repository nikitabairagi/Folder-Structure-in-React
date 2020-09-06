import React from "react";

class TreeNode extends React.Component {
  // console.log(props.data);
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  handleClick(event) {
    event.stopPropagation();
    this.setState({
      data: Object.assign({}, this.state.data, {
        expanded: !this.state.data.expanded
      })
    });
  }

  render() {
    return (
      <li onClick={(event) => this.handleClick(event)}>
        {this.state.data.value}
        <ul>
          {this.state.data.expanded &&
            this.state.data.children &&
            this.state.data.children.map((child) => <TreeNode data={child} />)}
        </ul>
      </li>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "Folder1",
          expanded: true,
          children: [
            {
              value: "SubFolder1",
              expanded: true,
              children: [
                {
                  value: "File1",
                  expanded: true,
                  children: []
                }
              ]
            },
            {
              value: "SubFolder2",
              expanded: true,
              children: []
            }
          ]
        },
        {
          value: "Folder2",
          expanded: true,
          children: [
            {
              value: "File1",
              children: []
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.data.map((node) => (
          <TreeNode data={node} />
        ))}
      </ul>
    );
  }
}

export default App;
