---
to: pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.js
---
<% const pageName = h.changeCase.pascal(name) -%>
<% const pagePath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const pageTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
// Lib UI components

// Local UI components
import PageLayout from '../shared/PageLayout';

// Style
import '../style/page-styles/<%= pageName %>.module.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function <%= pageName %>() {
  /* ********************************** HOOKS ********************************* */



  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
     <h1> hello world </h1>
    </PageLayout>
  );
}


export default <%= pageName %>;
