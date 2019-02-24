import React, { Component } from 'react';
import MenuItem from './components/dashboard/MenuItem';
import Dashboard from './components/dashboard/Dashboard';
import Dashboard1 from './components/dashboard/Dashboard1';
import { Menu, Grid, Button, List, Segment, Search,Label,Checkbox } from 'semantic-ui-react';
import Card from './components/Card';
import './App.css'
class App extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
         <Segment  basic  style={{ height: '100%' }}>
           <Menu pointing secondary>
        <Menu.Item name='PLANT -1' active onClick={this.handleItemClick} />
        <Menu.Item name='PLANT -2'  onClick={this.handleItemClick} />
        <Menu.Item name='PLANT -3 '  onClick={this.handleItemClick} />
       
      </Menu>
      
       
          <Grid columns={3}>
            <Grid.Column width={7} style={{ paddingRight: '0' }}>
              <Segment attached="top">
                 <Menu tabular>
        <Menu.Item name='BISC' active onClick={this.handleItemClick} />
        <Menu.Item name='COOKI'  onClick={this.handleItemClick} />
        <Menu.Item name='CAKE'  onClick={this.handleItemClick} />
        <Menu.Menu position="right">
          <Search/>
          </Menu.Menu>
      </Menu>
                </Segment>
              <Segment attached style={{ height: '600px', overflow: 'scroll' }}>
                 <Grid columns={3}>
                  
                  <Grid.Column>
                <List divided selection verticalAlign='middle'>
               
                  <List.Item>
                    <List.Content>
                      <Label>E.Time -100gx40Pkt <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Golmol -120gx30Pkt <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Butter Bake -50gx100Pkt <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label><Checkbox style={{verticalAlign:'middle',marginRight:'5px',marginBottom:'5px'}} name='close' />2 In1 -50gx100Pkt  </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label><Checkbox style={{verticalAlign:'middle',paddingRight:'5px'}} name='close' />Yummy Elaichi Sandwich - 100g x 84 Pkts  </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                   <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                 
                </List>
                </Grid.Column>
       
                  <Grid.Column>
                <List divided selection verticalAlign='middle'>
               
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                   <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                       <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                 
                </List>
                </Grid.Column>
       
                  <Grid.Column>
                     <List divided selection verticalAlign='middle'>
               
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                     <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                   <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                  <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                   <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <Label>Helen afd sfg sfg <Checkbox style={{verticalAlign:'middle',paddingLeft:'3px'}} name='close' /> </Label>
                    </List.Content>
                  </List.Item>
                 
                </List>
                    </Grid.Column>
                    </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={2} textAlign="center" style={{ padding: '0' }} >
              <Segment basic >
                <div>
                <Button primary style={{width:'100px',margin:'5px',fontSize:'1.2em'}}>>></Button>
                </div>
                <div>
                <Button primary style={{width:'100px',margin:'5px',fontSize:'1.2em'}}>&lt;&lt;</Button>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={7} style={{ paddingLeft: '0' }}>
               <Segment attached="top">
                 <Menu tabular>
        <Menu.Item name='BISC' active onClick={this.handleItemClick} />
        <Menu.Item name='COOKI'  onClick={this.handleItemClick} />
        <Menu.Item name='CAKE'  onClick={this.handleItemClick} />
        <Menu.Menu position="right">
          <Search/>
          </Menu.Menu>
      </Menu>
                </Segment>
              <Segment attached style={{ height: '600px', overflow: 'scroll' }}>
                <Grid columns={2}>
                  
                  <Grid.Column>
                     <List divided selection verticalAlign='middle'>
                    
                  <List.Item>

                    <List.Content>
                      <List.Header>Helen</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>

                    <List.Content>
                      <List.Header>Christian</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>

                    <List.Content>
                      <List.Header>Daniel</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                    </Grid.Column>

                    <Grid.Column>
                       <List divided selection verticalAlign='middle'>
                   
                  <List.Item>

                    <List.Content>
                      <List.Header>Helen</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>

                    <List.Content>
                      <List.Header>Christian</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>

                    <List.Content>
                      <List.Header>Daniel</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                      </Grid.Column>
                  </Grid>
               
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>

      </div>

    );
  }
}

export default App;
