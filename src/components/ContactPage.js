import PropTypes from "prop-types";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { sendContact } from "../actions/contactActions";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Ref,
  Transition,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };

  
  class DesktopContainer extends Component {
    constructor(props){
        super(props);
     this.state = {
        activeItem:'',
        calculations: {
          direction: 'none',
          topPassed: false,
          bottomPassed: false,
          pixelsPassed: 0,
          percentagePassed: 0,
          topVisible: false,
          bottomVisible: false,
          fits: false,
          passing: false,
          onScreen: false,
          offScreen: false   },
        }
      }
    contextRef = createRef();
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
    handleUpdate = (e, { calculations }) => {
      this.setState({ calculations });
    };

    dosometin(){
        this.props.sendContact(this.state)  
  }
   
    render() {

    
      const { children } = this.props;
      const { fixed } = this.state;
      const { calculations } = this.state;

      return (
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            offset={[10, 10]}
            onUpdate={this.handleUpdate}
            updateOn="repaint"
          >
              <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: "0.5em 0em" }}
              vertical
            >
               <Icon onClick={()=>this.dosometin()} size='large' inverted name='bars' />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      );
    }
  }

class MobileContainer extends Component {  state = {};

handleSidebarHide = () => this.setState({ sidebarOpened: false });

handleToggle = () => this.setState({ sidebarOpened: true });

render() {
  const { children } = this.props;
  const { sidebarOpened } = this.state;

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
         <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            offset={[10, 10]}
            onUpdate={this.handleUpdate}
            updateOn="repaint"
          >

          </Visibility>
      
    </Responsive>
  );
}
}

MobileContainer.propTypes = {
children: PropTypes.node
};
const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  );
  
  class ContactLayout extends Component {
  state = {
    calculations: {
      direction: "none",
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }
  };

  contextRef = createRef();
  handleUpdate = (e, { calculations }) => {
    this.setState({ calculations });
  };

  dosometin(){
    this.props.sendContact(this.state)  
}

  render() {
    const { calculations } = this.state;

    return (
      <ResponsiveContainer>
        <Visibility onUpdate={this.handleUpdate} updateOn="repaint">
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Transition
                    visible={calculations.onScreen}
                    animation="fade up"
                    duration={1000}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Help Companies and Companions
                    </Header>
                  </Transition>
                  <Transition
                    visible={calculations.onScreen}
                    animation="fade up"
                    duration={1200}
                  >
                    <p style={{ fontSize: "1.33em" }}>
                      We can give your company superpowers to do things that
                      they never thought possible. Let us delight your customers
                      and empower your needs... through pure data analytics.
                    </p>
                  </Transition>


         
                  <Transition
                    visible={calculations.onScreen}
                    animation="fade up"
                    duration={1400}
                  >
                    <div>
                      <Header as="h3" style={{ fontSize: "2em" }}>
                        We Make Bananas That Can Dance
                      </Header>
                      <p style={{ fontSize: "1.33em" }}>
                        Yes that's right, you thought it was the stuff of
                        dreams, but even bananas can be bioengineered.
                      </p>
                    </div>
                  </Transition>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src="/images/wireframe/white-image.png"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Transition
                    visible={calculations.onScreen}
                    animation="fade up"
                    duration={1400}
                  >
                    <center>
                      <Button size="huge">Check Them Out</Button>
                    </center>
                  </Transition>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Services" />
                    <List link inverted>
                      <List.Item as="a">Banana Pre-Order</List.Item>
                      <List.Item as="a">DNA FAQ</List.Item>
                      <List.Item as="a">How To Access</List.Item>
                      <List.Item as="a">Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that
                      could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Visibility>
      </ResponsiveContainer>
    );
  }
}
  
  const mapStateProps = state => {
    return {
      //   authError: state.auth.authError,
      auth: state.firebase.auth,
      contact: state.contact
    };
  };

  const mapDispatchToProps = dispatch => {

    return {
        sendContact: contact => dispatch(sendContact(contact)),
        dispatch
      }
    }
    export default connect(mapStateProps, mapDispatchToProps)(DesktopContainer);
  