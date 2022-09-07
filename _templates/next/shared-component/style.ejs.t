---
to: "<%= `styles/shared/UIKit/${h.changeCase.pascal(name)}/index.module.scss`  %>"
---
<% const componentNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../../styles/_variables.scss';
.<%= componentNameSelector %> {

}

