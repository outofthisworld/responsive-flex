import React, { Component } from "react";
import * as globalStyles from "./global-css.js";
import styled from "styled-components";
import { Envelope } from "styled-icons/fa-regular/Envelope";
import { Blogger } from "styled-icons/fa-brands/Blogger";
import { ReactLogo } from "styled-icons/fa-brands/ReactLogo";
import { NodeJs } from "styled-icons/fa-brands/NodeJs";
import { Js } from "styled-icons/fa-brands/Js";
import { Css3 } from "styled-icons/fa-brands/Css3";
import { DownloadCloud } from "styled-icons/feather/DownloadCloud";
import { Search as SearchIcon } from "styled-icons/feather/Search";
import { Map } from "styled-icons/feather/Map";
import { Grid } from "styled-icons/feather/Grid";
import { Heart } from "styled-icons/fa-regular/Heart";
import { Discord } from "styled-icons/fa-brands/Discord";
import { DigitalOcean } from "styled-icons/fa-brands/DigitalOcean";
import { Docker } from "styled-icons/fa-brands/Docker";
import { Dropbox } from "styled-icons/fa-brands/Dropbox";
import { Drupal } from "styled-icons/fa-brands/Drupal";
import { Java } from "styled-icons/fa-brands/Java";
import { Jenkins } from "styled-icons/fa-brands/Jenkins";
import { Menu as Hamburger } from "styled-icons/feather/Menu";
import {Spring,config} from 'react-spring';

const Flex = styled.div`
  box-sizing:border-box;
  display:${props => props.display || "flex"};
  border:${props => props.border || "0px"};
  ${props => (props.border ? `border:${props.border};` : null)}
  ${props => (props.outline ? `outline:${props.outlne};` : null)}
  ${props => (props.position ? `position:${props.position};` : null)}
  background:${props => props.background || "transparent"};
  color:${props => props.color || "inherit"};
  padding:${props => props.padding || "0px"};
  margin:${props => props.margin || "0px"};
  flex-direction:${props => props.direction || "row"};
  height:${props => props.height || "auto"};
  ${props => (props.width ? `width:${props.width};` : null)}
  ${props => (props.height ? `height:${props.height};` : null)}
  ${props => (props.minHeight ? `min-height:${props.minHeight};` : null)}
  ${props => (props.minWidth ? `min-width:${props.minWidth};` : null)}
  ${props => (props.maxHeight ? `max-height:${props.maxHeight};` : null)}
  ${props => (props.maxWidth ? `max-width:${props.maxWidth};` : null)}
  justify-content:${props => props.justify || "center"};
  align-items:${props => props.align || "center"};
  <!--only when flex-wrap:wrap-->
  align-content:${props =>
    props.alignContent || props.wrapspacing || "stretch"};
  flex-wrap:${props => props.wrap || "initial"};
  flex-grow:${props => props.grow || "1"};
  flex-shrink:${props => props.shrink || "1"};
  ${props => (props.basis ? `flex-basis:${props.basis}` : null)}
  ${props => {
    if (!props.gap) {
      return;
    }
    let css = "";
    /*Check props.extend to make sure they haven't defined their own css */
    if (props.direction === "column" || props.wrap === "wrap") {
      css += `margin-top:${props.gap};`;
    } else if (props.direction !== "column" && props.wrap !== "wrap") {
      css += `margin-left:${props.gap};`;
    }
    const styles = `
        & > ${props.childSelector || "*"}:not(:first-child){
            ${css};
        }
      `;
    return styles;
  }}
  ${props => {
    if (!props.childCss && !props.childExtend) {
      return null;
    }
    let css = ``;

    css += props.childExtend || "";
    css +=
      (props.childCss &&
        Object.keys(props.childCss).reduce((accum, next) => {
          return accum + next + ":" + props.childCss[next] + ";";
        }, "")) ||
      "";

    let selector = `& > ${props.childSelector || "*"} {
          ${css}
      }`;
    return selector;
  }}

  ${props => {
    if (!props.media) return null;

    const media = props.media;

    const lessThan = media["<="];
    const greaterThan = media[">="];
    const between = media["><"];

    function mediaQuery(type) {
      return function(obj) {
        const size = obj.size;
        const inner = obj.then;
        let query = null;

        switch (type) {
          case ">=":
            query = `@media only screen and (min-width: ${size}) { ${inner} }`;
            break;
          case "<=":
            query = `@media only screen and (max-width: ${size}) { ${inner} }`;
            break;
          case "><":
            const [min, max] = size;
            console.log("in here");
            query = `@media only screen and (min-width: ${min}) and (max-width: ${max}) { ${inner} }`;
            break;
          default:
            throw new Error("Invalid type");
        }

        return query;
      };
    }

    let css = `
        ${greaterThan ? greaterThan.map(mediaQuery(">=")).join("\n") : ""}
        ${lessThan ? lessThan.map(mediaQuery("<=")).join("\n") : ""}
        ${between ? between.map(mediaQuery("><")).join("\n") : ""}
    `;
    console.log(css);
    return css;
  }}
  
  ${props => props.extend || null}
`;

const Container = styled.div`
  box-sizing:border-box;
  width: ${props => props.width || "100%"};
  margin: ${props => props.margin || "0 auto"};
  max-width: ${props => props.max || "auto"};
  position:relative;
  height:100%;
  top:${props => props.top || "0px"}
  left:${props => props.left || "0px"}
  right:${props => props.right || "0px"}
  bottom:${props => props.bottom || "0px"}
`;

const Section = styled.section`
  position:relative;
    top:${props => props.top || "0px"}
  left:${props => props.left || "0px"}
  right:${props => props.right || "0px"}
  bottom:${props => props.bottom || "0px"}
  text-align:center;
  height:${props => props.height || "auto"}
  min-height:${props => props.minHeight || props.height || "auto"}
  width:${props => props.width || "100%"}
  background:${props => props.background || "initial"}
  ${props =>
    props.backgroundSize ? `background-size:${props.backgroundSize}` : null};
`;

const Menu = styled.ul`
  list-style-type: none;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  color: #726e75;
  text-transform: uppercase;
  & > li {
    font-weight: bold;
    transition: all 1s linear;
    width: calc(100% / 7);
    padding: 0.5rem;
    margin-top: 1rem;
    background: transparent;
    margin-left: 0.4rem;
    display: inline-block;
  }

  & > li:hover {
    color: white;
    background: #91818a;
  }
`;

const Logo = styled.span`font-size: 2.5em;`;

const Search = styled.input`
  background: transparent;
  border: 0px;
  border-bottom: 1px solid white;
  display: block;
  font-size: 1rem;
  text-indent: 1rem;
  outline: none;
  transition: all 1s linear;
  flex-basis: 70%;

  &::placeholder {
    color: white;
  }
  &:focus {
    width: 110%;
  }
`;

const SideBarNav = styled.ul`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  display: block;
  list-style-type: none;
  font-size: 1rem;
  text-align: center;
  & > li {
    text-transform: uppercase;
    color: #000;
    padding: 20px 0px;
    margin-top: 0.5rem;
    width: 100%;
    background: #ebdccb;
  }
`;

const MobileMenu = styled(Hamburger)`
  color: black;
  background: white;
  border: 1px solid white;
  border-radius: 25px;
  padding: 0.3rem;
`;

const SLi = styled.li`
  & > ${SideBarNav}{
    margin-left:${props=>props.left || '0rem'};
  }
`

class InnerLi extends React.Component {
  state = { show: false };

  render() {
    const render = null;
    console.log(this.state)
    return (
      <SLi left={'2rem'} onClick={(e) => {
        e.stopPropagation();
        console.log('click')
        const show = this.state.show;
        this.setState({show:!show})
      }}>
        {this.state.show ? this.props.children : this.props.children[0]}
      </SLi>
    );
  }
}

class App extends Component {
  state = { showMenu: false };
  render() {
    return (
      <React.Fragment>
        <Flex
          position="fixed"
          background={"#B6A39E"}
          width={"100%"}
          extend={"z-index:999;"}
        >
          <Container style={{ padding: "0rem 0rem" }}>
            <Flex height={"60px"} align={"center"}>
              <Flex
                display="none"
                gap={"1rem"}
                media={{
                  ">=": [
                    {
                      size: "800px",
                      then: "display:flex;"
                    }
                  ]
                }}
              >
                <Blogger height={"40px"} />
                <Logo>React blog</Logo>
              </Flex>
              <Flex
                display={"none"}
                media={{
                  "<=": [
                    {
                      size: "799px",
                      then: "display:flex;"
                    }
                  ]
                }}
              >
                <MobileMenu
                  onClick={() => {
                    console.log("click");
                    this.setState(prevState => ({
                      showMenu: !this.state.showMenu
                    }));
                  }}
                  height={"40px"}
                />
              </Flex>
              <Flex
                display="none"
                media={{
                  ">=": [
                    {
                      size: "900px",
                      then: `display:flex`
                    }
                  ]
                }}
                childCss={{
                  "list-style-type": "none",
                  "padding-left": "2rem",
                  "font-size": "1rem"
                }}
              >
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
              </Flex>
              <Flex>
                {" "}
                <Search placeholder="Search.." />
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Section top={"60px"} background={"#726e75"}>
          <Container>
            <Flex minHeight={'100vh'} align={"stretch"} justify={"center"}>
              <Flex
                direction={"column"}
                justify={"flex-start"}
                align={"stretch"}
                shrink={"0"}
                basis={this.state.showMenu ? "50%" : "20%"}
                background={"#948B89"}
                display={this.state.showMenu ? "flex" : "none"}
                media={{
                  ">=": [
                    {
                      size: "900px",
                      then: `display:flex`
                    }
                  ]
                }}
                extend={`
                  border-right:2px solid #948B89;
                `}
              >
                <Container style={{ textAlign: "left" }}>
                <Spring delay={250} config={{tension:150,friction:40}} from={{ transform:'translate(-100px,0px) scale(1,1)'}} to={{ transform:'translate(0px,0px) scale(0.9,0.9)'}}>
                   {styles =>  <SideBarNav style={styles}>
                    <InnerLi>
                        Something
                        <SideBarNav>
                        <InnerLi>
                          One
                          <SideBarNav>
                            <li>One</li>
                        <li>One</li>
                        <li>One</li>
                          </SideBarNav>
                        </InnerLi>
                        <li>One</li>
                        <li>One</li>
                        <li>One</li>
                      </SideBarNav>
                    </InnerLi>
                    <InnerLi>
                      Something else
                      <SideBarNav>
                        <li>One</li>
                        <li>One</li>
                        <li>One</li>
                        <li>One</li>
                      </SideBarNav>
                    </InnerLi>
                    <InnerLi>
                      Something else
                      <SideBarNav />
                    </InnerLi>
                    <InnerLi>
                      Something else
                      <SideBarNav />
                    </InnerLi>
                    <InnerLi>
                      Something else
                      <SideBarNav />
                    </InnerLi>
                  </SideBarNav>}
                  </Spring>
                </Container>
              </Flex>
              <Flex background={"#726E75"}>
                <Container
                  style={
                    this.state.showMenu ? (
                      {
                        padding: "1rem",
                        textAlign: "justify",
                        scroll: "no-scroll"
                      }
                    ) : (
                      { padding: "6rem", textAlign: "justify" }
                    )
                  }
                >
                  {this.state.showMenu && (
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "darkgrey",
                        top: 0,
                        left: 0,
                        filter: "blur(2px)"
                      }}
                    />
                  )}
                  <h2
                    style={{
                      textAlign: "left",
                      color: "white",
                      textTransform: "uppercase"
                    }}
                  >
                    The new blog post
                  </h2>
                  <hr />
                  <p>
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed<br />
                    <br />
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    1914 translation by H. Rackham "But I must explain to you
                    how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth, the master-builder of human
                    happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not
                    know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there
                    anyone who loves or pursues or desires to obtain pain of
                    itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example, which of us
                    ever undertakes laborious physical exercise, except to
                    obtain some advantage from it? But who has any right to find
                    fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that
                    produces no resultant pleasure?"
                  </p>
                  <p>
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    1914 translation by H. Rackham "But I must explain to you
                    how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth, the master-builder of human
                    happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not
                    know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there
                    anyone who loves or pursues or desires to obtain pain of
                    itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him
                    some great pleasure. To take a trivial example, which of us
                    ever undertakes laborious physical exercise, except to
                    obtain some advantage from it? But who has any right to find
                    fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that
                    produces no resultant pleasure?"
                  </p>
                </Container>
              </Flex>
            </Flex>
          </Container>
        </Section>
      </React.Fragment>
    );
  }
}

export default App;
