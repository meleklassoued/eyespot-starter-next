---
to: "<%= `styles/components-style/${h.changeCase.pascal(page)}/${h.changeCase.pascal(name)}/index.module.scss`%>"
---
<% const componentNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../shared/styles/variables';

.<%= componentNameSelector %> {

}

