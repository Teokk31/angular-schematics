import { Rule, SchematicContext, Tree, url, apply, template, mergeWith, move } from '@angular-devkit/schematics';
import { SchemaOptions } from './schema';
import { strings } from '@angular-devkit/core';
import { getWorkspace } from '@schematics/angular/utility/config';
import { getProject, buildDefaultPath } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';

export function meetupSchematics(_options: SchemaOptions): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const projectName = workspace.defaultProject;
    const project = getProject(workspace, projectName as string);
    const path = buildDefaultPath(project);
    const parsedPath = parseName(path, _options.name);

    _options.name = parsedPath.name;
    _options.path = parsedPath.path;

    const templateFiles = url('./files');
    const parameterisedTemplateFiles = apply(templateFiles, [
      template({
        ..._options,
        ...strings
      }),
      move(parsedPath.path)
    ]);

    return mergeWith(parameterisedTemplateFiles)(tree, _context);
  };

}
