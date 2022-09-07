---
to: "<%= `page-components/${h.changeCase.pascal(page)}/${h.changeCase.pascal(name)}/index.js`%>"
---
<% const componentName = h.changeCase.pascal(name) -%>
<% const componentPath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const componentTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
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


/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= componentName  %>() {
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

<%= componentName  %>.propTypes = {
  name: PropTypes.string.isRequired,
  radius: PropTypes.number,
};

<%= componentName  %>.defaultProps = {
  radius: 0,
};

export default <%= componentName  %>;
