---
to: styles/page-styles/<%= h.inflection.dasherize(name) %>.module.scss
---
<% const pageNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../shared/styles/variables';

.<%= pageNameSelector %> {

}


