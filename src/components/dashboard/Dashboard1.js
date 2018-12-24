import React, { Component } from 'react';
import { Transition, Image, Menu, Sidebar, Segment, Dropdown, Icon, Popup, Breadcrumb, Accordion, Grid } from 'semantic-ui-react'
import logo from './anmol.png'
const trigger = (userName) => (
    <span>
        <Icon name='user' /> Hello, {userName}
    </span>
)
export default class Dashboard1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.activeIndex = -1;
        this.state.visible = false;
        this.state.toggleState = false;
    }

    handleItemClick = name => this.setState({ activeItem: name })

    onDropdownClick = () => {
        this.setState({ visible: !this.state.visible })
    }

    toggle = () => {
        console.log(this.state.toggleState);
        this.setState({ toggleState: !this.state.toggleState })
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {

        const { activeItem } = this.state || {}
        const { activeIndex } = this.state || -1
        const { visible } = this.state || false;
        return (

            <Grid columns={this.state.toggleState ? 1 : 2} style={{ marginTop: '0px', height: '100%' }}>
                {!this.state.toggleState ?
                    <Grid.Column width={3} style={{ padding: '0px' }}>
                        <Menu fluid vertical style={{ height: '100%', overflow: 'scroll' }}>

                            <Menu.Item >
                                <Grid columns={2}>
                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        <Image src={logo} size='small' />
                                    </Grid.Column>

                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        {!this.state.toggleState ?
                                            <Icon name="sidebar" style={{ marginTop: '10px', cursor: 'pointer' }} onClick={this.toggle} />
                                            : null}
                                    </Grid.Column>
                                </Grid>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>Administrator</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item
                                        name='Customer Management'
                                        active={activeItem === 'customer-mgmt'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name='User Management'
                                        active={activeItem === 'user-mgmt'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>CMS Solutions</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        name='rails'
                                        active={activeItem === 'rails'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name='python'
                                        active={activeItem === 'python'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>Administration</Menu.Header>

                                <Menu.Menu>
                                    <Menu.Item
                                        name='shared'
                                        active={activeItem === 'shared'}
                                        onClick={this.handleItemClick}
                                        content={
                                            <div className="accordion-menu" name="Customer Management">
                                                <Icon name="caret right" onClick={this.onDropdownClick} />Customer Management
                                        <div >
                                                    <Transition visible={visible}>
                                                        <div>
                                                            <div className="accordion-menu-item"> Create Customer </div>
                                                            <div className="accordion-menu-item"> Delete Customer </div>
                                                        </div>
                                                    </Transition>
                                                </div>
                                            </div>
                                        }
                                    />


                                    <Menu.Item
                                        name='dedicated'
                                        active={activeItem === 'dedicated'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu.Menu>
                            </Menu.Item>

                            <Menu.Item>
                                <Menu.Header>Support</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                                        E-mail Support
                                    </Menu.Item>
                                    <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                                        FAQs
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>

                        </Menu>
                    </Grid.Column> : null}

                <Grid.Column width={this.state.toggleState ? 16 : 13} style={{ padding: '0px' }}>
                    <Menu size="large" icon borderless style={{ borderLeft: '0px' }} >
                        {this.state.toggleState ? <Menu.Item  >
                            <Icon name="sidebar" style={{ cursor: 'pointer' }} onClick={this.toggle} />
                        </Menu.Item> : null}


                        <Menu.Item header >
                            <Breadcrumb.Section>Home</Breadcrumb.Section>
                        </Menu.Item>

                         <Menu.Item >
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
                    </Menu></Grid.Column>
            </Grid>
        );
    }
}