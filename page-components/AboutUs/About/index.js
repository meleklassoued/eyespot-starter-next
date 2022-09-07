/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// UI lib comoponents


// Local UI components
// @TODO: Import other locally-made dependencies here

// Redux actions and selectors
// @TODO: If using Redux, import actions and selectors

// Helpers & utils
// @TODO: Import any helper or service here

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function About() {
  /* ******************************** CONSTANTS ******************************* */



  /* ************************ ESSENTIAL LOCAL VARIABLES *********************** */


  /* ********************************** HOOKS ********************************* */

  // State

  // Other hooks like reux or localization ...

  /* ***************************** LOCAL VARIABLES **************************** */

  
  /* ******************************** CALLBACKS ******************************* */
  /**
   * Computes the perimeter
   */

  /* ***************************** RENDER HELPERS ***************************** */

  /**
   * Renders the footer
   * @returns {React.Element} The rendered footer
   */

  /* ******************************** RENDERING ******************************* */

  return (
    <h2>page-component</h2>
  );
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  radius: PropTypes.number,
};

About.defaultProps = {
  radius: 0,
};

export default About;
