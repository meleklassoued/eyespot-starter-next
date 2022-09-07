/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';

// UI lib components
import { Container, Row, Col } from 'react-grid-system';

// UI local components

// Style
import './index.scss';

// Assets
import FACEBOOK from '../../images/Footer/facebook-icon.svg';
import TWITTER from '../../images/Footer/twitter-icon.svg';
import LINKEDIN from '../../images/Footer/linkedin-icon.svg';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageFooter() {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();
  const { linksFooter } = t('footer', { returnObjects: true });
  /* ******************************** RENDER HELPERS ******************************* */

  const FootLinks = linksFooter?.map(({ id, LinkName, LinkNavigation }) => (
    <Link to={LinkNavigation} key={id} className="foot-link">
      {LinkName}
    </Link>
  ));

  /* ******************************** RENDERING ******************************* */

  return (
    <Container className="footer-layout" fluid>
      <Row
        align="center"
        style={{
          width: '100vw',
          maxWidth: '100%',
          paddingTop: '29px',
          background: 'none',
        }}
        debug
      >
        <Col xs={8} sm={8} md={8} className="foot-links fluid" debug>
          {FootLinks}
        </Col>
        <Col xs={4} sm={4} md={4} className="foot-icons" debug>
          <img src={FACEBOOK} alt="atelier-facebook" />
          <img src={TWITTER} alt="atelier-twitter" />
          <img src={LINKEDIN} alt="atelier-linkedin" />
        </Col>
      </Row>

      <Row
        justify="start"
        align="center"
        style={{ margin: '57px 0 56px 0', background: 'none' }}
        debug
      >
        <Col md={5} className="info" debug>
          {t('footer.adress')}
        </Col>
        <Col md={2} className="phone" debug>
          {t('footer.phone')}
        </Col>
        <Col md={2} className="info" debug>
          {t('footer.email')}
        </Col>
      </Row>
    </Container>
  );
}

export default PageFooter;
