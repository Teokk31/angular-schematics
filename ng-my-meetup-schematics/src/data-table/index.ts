import { Rule, SchematicContext, Tree, url, apply, template, mergeWith, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { strings } from '@angular-devkit/core';
import { getWorkspace } from '@schematics/angular/utility/config';
import { getProject, buildDefaultPath } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';

export function dataTable(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const projectName = _options.project || Object.keys(workspace.projects)[0];
    const project = getProject(workspace, projectName);
    const path = _options.path || buildDefaultPath(project as any);
    const parsedPath = parseName(path, _options.name);

    _options.name = parsedPath.name;
    _options.path = parsedPath.path;

    const sourceTemplate = url('./files');
    const sourceParameterizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      }),
      move(parsedPath.path)
    ]);

    tree = mergeWith(sourceParameterizeTemplate)(tree, _context) as Tree;

    return tree;
  };

}
