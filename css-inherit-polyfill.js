/*

if the official syntax was this, it would be easy and suitable for a polyfill that
doesn't need js hooks watching anything beyond style sheet insertion/removal/changing:

@inherit .sel {
  --var: calc(inherit(--var, 0) + 1);
}

fow now, the official inherit/parent idea does not require a common selector to facilitate inheritance
so we'd have to observe all dom and resize changes for a polyfill like css-var-listener attempts

*/
