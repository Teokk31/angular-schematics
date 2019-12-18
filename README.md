# How to Create Custom Schematics
This is the code demo on how to create angular custom schematics.

# Requirements
* [git](https://git-scm.com/downloads/ "git's Download page")
* [Angular CLI](https://cli.angular.io "Angular CLI's Homepage")
* [Schematics CLI](https://www.npmjs.com/package/@angular-devkit/schematics-cli "Schematics CLI's npm page")

# Setup
* `npm install -g @angular/cli`
* `npm install -g @angular-devkit/schematics-cli`
1. git clone https://github.com/Teokk31/angular-schematics.git
2. cd angular-schematics/schematics-working-app
3. `npm install`
4. cd angular-schematics/meetup-schematics
5. `npm install`

# Custom Schematic Project Structure
* It's basically a typescript project as you can see there is `tsconfig.json`.
* `schematics` property in `package.json` is actually pointing to the `collection.json`.
* The `collection.json` is where it lists down all the available schematics in the schematics project.
* In `src` directory is where all the schematics are implemented.


# Create Custom Schematic
1. In `meetup-schematics` project root directory, open up the terminal and type `schematics blank your-schematic-name` to generate blank schematic.
2. Or type `schematics schematic your-schematic-name` to have sample schematic code.

# Each Custom Schematic Directory Structure
* Navigate to `/meetup-schematics/src/meetup-schematics`.
* `index.ts` contains all the logic of the particular custom schematic.
* `schema.ts` is where to define the interface of schema options.
* `schema.json` is where to define all the schema options properties like `type`, `description` and more. Please refer to `/meetup-schematics/node_modules/@schematics/angular` for more inspiration and learning.
* `files` directory is where all the template files located.

# Build Schematics Project
In `meetup-schematics` project root directory, open up the terminal and type `npm run build-watch` to build the project.

# Test Custom Schematic
* In `meetup-schematics` project root directory, open up the terminal and type `schematics .:your-schematic-name --debug=false` to test custom schematic.
* `.` here means in the current schematic project.
* The `--debug=false` flag is to disable the development mode.

# Use Custom Schematic in Angular Project
In `schematics-working-app` project root directory, open up the terminal and type `ng generate ../meetup-schematics/src/collection.json:your-schematic-name` to use custom schematic.