import React, { Component } from 'react';
import { Menu, Sidebar, Segment, Dropdown, Icon, Popup, Breadcrumb, Accordion } from 'semantic-ui-react'

const trigger = (userName) => (
    <span>
        <Icon name='user' /> Hello, {userName}
    </span>
)
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            icon: false,
            activeIndex: -1
        }
    }

menuAction = () => {
    console.log("Item clicked")
}
    handleButtonClick = () => this.setState((prevState, props) => {
        return { visible: !this.state.visible, icon: true }
    });

    handleSidebarHide = () => this.setState({ visible: false })
    
    expand = () => {
        this.setState((prevState, props) => { return { icon: !prevState.icon } })
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { visible, icon } = this.state
        const collapseIconName = icon ? 'arrow alternate circle right outline' : 'arrow alternate circle left outline'
        const { activeIndex } = this.state
        return (


            <div style={{ height: '100%' }}>
              
                    <Menu size="large" icon fixed="top"  style={{ height: '30px' }}   >
                        <Menu.Item icon onClick={this.handleButtonClick} style={{ width: '60px' }}>
                            <Icon name="sidebar" style={{ margin: 'auto' }} />
                        </Menu.Item>
                        <Menu.Item header >
                            <Breadcrumb.Section>Home</Breadcrumb.Section>
                        </Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Dropdown trigger={trigger(this.props.username)} options={
                                    [
                                        {
                                            key: 'user',
                                            text: (
                                                <span>
                                                    Signed in as <strong>{this.props.username}</strong>
                                                </span>
                                            ),
                                            disabled: true,
                                        },
                                        { key: 'profile', text: 'Your Profile' },
                                        (<Dropdown.Item key='sign-out' onClick={this.signOut}>Sign Out</Dropdown.Item>),
                                    ]
                                } />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
       

                <Sidebar.Pushable attached="bottom" basic as={Segment} >
                    <Sidebar
                        style={{ height: '100%', paddingTop: '40px' }}
                        as={Menu}
                        animation='push'
                        icon={icon}
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width={icon ? 'very thin' : null}>
                        <Menu.Item as='a'>
                            {icon ? <Popup position="right center"
                                trigger={<Icon style={icon ? null : { float: 'left', marginTop: '-1px', marginRight: '5px' }} name='database' />}
                                content='Material Management'
                                size='mini'
                            /> : <Accordion  >
                                    <Menu.Item style={{ paddingBottom: '0px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <Icon style={icon ? null : { float: 'left', marginRight: '5px' }} name='database' />
                                        <Accordion.Title
                                            active={activeIndex === 0}
                                            content='Material Management'
                                            index={0}
                                            style={{ paddingTop: '0px', paddingBottom: '0px' }}
                                            onClick={this.handleClick}
                                        />
                                        <Accordion.Content style={{paddingBottom:'3px'}} active={activeIndex === 0} content="Create Material" onClick={this.menuAction} />
                                        <Accordion.Content style={{paddingBottom:'3px'}} active={activeIndex === 0} content="Modify Material" />
                                        <Accordion.Content style={{paddingBottom:'3px'}} active={activeIndex === 0} content="Delete Material" />
                                    </Menu.Item>


                                </Accordion>}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Popup position="right center"
                                trigger={<Icon style={icon ? null : { float: 'left', marginTop: '-1px', marginRight: '5px' }} name='user' />}
                                content='User Management'
                                size='mini'
                            />
                            {icon ? null : 'User Management'}
                        </Menu.Item>
                        <div style={{ position: 'fixed', bottom: '10px', width: '100%' }}>
                            <Menu.Item as='a' onClick={this.expand}>
                                <Popup position="right center"
                                    trigger={<Icon style={icon ? null : { float: 'left', marginTop: '-1px', marginRight: '5px' }} name={collapseIconName} />}
                                    content={icon ? 'Expand' : 'Collapse'}
                                    size='mini'
                                />
                                {icon ? null : 'Collapse'}
                            </Menu.Item>
                            <Menu.Item as='a' onClick={this.signOut}>
                                <Popup position="right center"
                                    trigger={<Icon style={icon ? null : { float: 'left', marginTop: '-1px', marginRight: '5px' }} name='log out' />}
                                    content='Log Out'
                                    size='mini'
                                />
                                {icon ? null : 'Log Out'}
                            </Menu.Item>
                        </div>
                    </Sidebar>

                    <Sidebar.Pusher style={{ height: '100%' }}>

                        <Segment padded style={{ height: '100%', paddingTop: '50px', overflow: 'scroll' }} attached="bottom" >
                            <div>Content</div>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div >

        );
    }
}