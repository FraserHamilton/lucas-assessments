import React, { Component } from "react";

import HamburgerIcon from "./icons/Hamburger";
import Link from "next/link";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import styles from "./Header.module.css";
import { withRouter } from "next/router";

class Header extends Component {
  state = { showNav: false };

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string,
      }),
      events: PropTypes.any,
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.shape({
          current: PropTypes.string,
        }).isRequired,
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
      logo: PropTypes.string,
    }),
  };

  componentDidMount() {
    const { router } = this.props;
    router.events.on("routeChangeComplete", this.hideMenu);
  }

  componentWillUnmount() {
    const { router } = this.props;
    router.events.off("routeChangeComplete", this.hideMenu);
  }

  hideMenu = () => {
    this.setState({ showNav: false });
  };

  handleMenuToggle = () => {
    const { showNav } = this.state;
    this.setState({
      showNav: !showNav,
    });
  };

  renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null;
    }

    if (logo.asset.extension === "svg") {
      return <SVG src={logo.asset.url} className={styles.logo} />;
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />;
  };

  render() {
    const { title = "Missing title", navItems, router, logo } = this.props;
    const { showNav } = this.state;

    const splitTitle = title.split("c");

    return (
      <div className={styles.root} data-show-nav={showNav}>
        <div className={styles.brandingContainer}>
          <Link
            href={{
              pathname: "/Home",
              query: {
                slug: "/",
              },
            }}
            as="/"
            prefetch
          >
            <h1 className={styles.branding}>
              {splitTitle[0] + "c"}
              <span className={styles.accentText}>{splitTitle[1]}</span>
            </h1>
          </Link>
        </div>
        {/* <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map((item) => {
                const { slug, title, _id } = item;
                const isActive = router.pathname === "/Home" && router.query.slug === slug.current;
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link
                      href={{
                        pathname: "/Home",
                        query: { slug: slug.current },
                      }}
                      as={slug.current === "/" ? "/" : `/${slug.current}`}
                      prefetch
                    >
                      <a data-is-active={isActive ? "true" : "false"}>{title}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <button className={styles.showNavButton} onClick={this.handleMenuToggle}>
            <HamburgerIcon className={styles.hamburgerIcon} />
          </button>
        </nav> */}
      </div>
    );
  }
}

export default withRouter(Header);
