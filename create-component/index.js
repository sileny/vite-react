import fs from "fs";

import component from "./templates/component.js";
import componentStories from "./templates/component.stories.ts.js";
import componentStyles from "./templates/component.scss.js";

const templates = [
  component,
  componentStories,
  componentStyles,
];

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/index${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);
