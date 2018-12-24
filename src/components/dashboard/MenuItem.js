import React, {Component} from 'react';
import {Icon,DropDown,Grid} from 'semantic-ui-react';
export default class MenuItem extends Component{

    render(){
        return (
            <Grid>
    <Grid.Column floated='left' width={2}>
      <Icon name="database"/>
    </Grid.Column>
    <Grid.Column floated='right' width={2}>
      Material
    </Grid.Column>
  </Grid>
        );
    }
}