import { upper } from "../util.js";

export default (componentName) => {
  const name = upper(componentName);

  return ({
    content: `// Generated with create-component/index.js
import React from "react";

import "./index.scss";

export interface ${name}Props {
}

const ${name}: React.FC<${name}Props> = ({ children }) => (
  <div data-testid="${componentName}" className="${componentName}">{children}</div>
);

export default ${name};

`,
    extension: `.tsx`
  })
};
