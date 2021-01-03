const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

const renderEmployee = (employE, file) => {
    let template = fs.readFileSync(path.resolve(templatesDir, file), "utf8");
    template = replacePlaceholders(template, "name", employE.getName());
    template = replacePlaceholders(template, "role", employE.getRole());
    template = replacePlaceholders(template, "email", employE.getEmail());
    template = replacePlaceholders(template, "id", employE.getId());
    if (file === "manager.html") {
      template = replacePlaceholders(template, "officeNumber", employE.getOfficeNumber());
    } else if (file === "engineer.html") {
      template = replacePlaceholders(template, "github", employE.getGithub());
    } else if (file === "intern.html") {
      template = replacePlaceholders(template, "school", employE.getSchool());
    }
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const render = employees => {
    const html = [];

    html.push(...employees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => renderEmployee(manager, "manager.html"))
    );
    html.push(...employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => renderEmployee(engineer, "engineer.html"))
    );
    html.push(...employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => renderEmployee(intern, "intern.html"))
    );

    return renderMain(html.join(""));
};

module.exports = render;