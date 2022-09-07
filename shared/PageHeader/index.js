/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

// UI lib components
import { Container, useScreenClass } from 'react-grid-system';

// UI local components

// Style
import './index.scss';

// Assets
import LOGO from '../../images/Header/logo.svg';
import LOGO_DARK from '../../images/Header/logo.png';
import MENULIST from '../../images/Header/iconmonstr-menu-lined.svg';
import MENULISTWHITE from '../../images/Header/iconmonstr-menu-lined-white.svg';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader() {
  /* ********************************** HOOKS ********************************* */
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const screenClass = useScreenClass();
  const IS_MOBILE = ['xs', 'sm'].includes(screenClass);

  // disable/enable body scroll based on device
  if (typeof window !== 'undefined') {
    if (IS_MOBILE) {
      if (show) {
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
      } else if (!show) {
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
      }
    } else {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }
  }

  // Localization
  const { t } = useTranslation();
  const { headLinks } = t('header', { returnObjects: true });
  /* ******************************** RENDER HELPERS ******************************* */

  const linksHeader = headLinks?.map(({ id, LinkName, LinkNavigation }) => (
    <Link
      to={LinkNavigation}
      key={id}
      className={`${
        !show && (pathname === '/' || pathname === '/en/')
          ? 'nav-link'
          : 'nav-link-black'
      }`}
      activeClassName="active-link"
      onClick={() => setShow(false)}
    >
      {LinkName}
    </Link>
  ));

  /* ******************************** RENDERING ******************************* */

  return (
    <header className={`navbar ${show ? 'bg-white' : ''}`}>
      <Container>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img
                src={
                  !show && (pathname === '/' || pathname === '/en/')
                    ? LOGO
                    : LOGO_DARK
                }
                alt="logo-atelier"
              />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={() => setShow(!show)}
            >
              <img
                src={
                  !show && (pathname === '/' || pathname === '/en/')
                    ? MENULISTWHITE
                    : MENULIST
                }
                style={{ height: '2rem' }}
                alt="menu_list_hamburger"
              />
            </button>
          </div>
          <div className={show ? 'nav-menu-links show-links' : 'nav-links'}>
            {linksHeader}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default PageHeader;
