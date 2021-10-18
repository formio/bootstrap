# Change Log
All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.12.0
### Changed
 - Official Release

## 2.12.0-rc.7
### Fixed
 - FIO-3966 Fixed an issue where default value of textarea component is not empty upon creation
 - FIO-3758: Duplication of radio ids inside nested forms

## 2.12.0-rc.6
### Fixed
 - FIO-3758: Duplication of radio ids inside nested forms

## 2.12.0-rc.5
### Fixed
 - FIO-3909 & FIO-3910: Fix FormBuilder polyfill import

## 2.12.0-rc.4
### Fixed
 - FIO-3519 Added ref to wizard header for 'scroll to top' feature

### Changed
 - Upgraded dependencies.

## 2.12.0-rc.2
### Fixed
 - FIO-3323: Fixing the datagrid spacing.

## 2.12.0-rc.1
### Changed
 - FIO-1239: Implement wizard header type selection
 - FIO-290 | FJS-1367: Feat: add an ability to specify Survey questions' and values' tooltips
 - FIO-1112: Add vertical layout classes for tabs component
 - FIO-175: Adds ability to use different masks for Value and for View

## 2.11.2
### Fixed
 - FIO-3323: Removing the "col" classes from tables since they are causing issues.

## 2.11.1
### Fixed
 - FIO-3323: Fixing the datagrid spacing.

## 2.11.0
### Fixed
 - FIO-1383: Fixes an error occurring in IE11 when switch Wizard page in Form Builder
 - FIO-2565: Fixes an issue where tooltip for the first Wizard page is not shown on initial load

## 2.10.0
### Fixed
 - FIO-2463: fixed an issue where dataGrid renders incorrectly when reorder is enabled

## 2.9.0
### Fixed
 - FIO-1336: File component not showing Take picture or Switch to file upload buttons
 - Fixed tooltips from not appearing in certain places.
 - FIO-1125: Any value used in Translate list is returning contains an invalid selection
 - FJS-1328: Fixes an issue where it is impossible to reorder rows of a child DataGrid

## 2.8.0
?????

## 2.7.0
### Fixed
 - UIP-251: Update file template with file drop area hide option

### Added
 - FMG-99: Add col-md classes to table and dataGrid templates
 - FJS-1342: added templates for form errors list and alerts
 - FJS-1419: added tooltip for wizard pages

### Changed
 - Upgrade @types/chai@4.2.14, @types/ejs@3.0.5, @types/sinon@9.0.10, sinon@9.2.3, @types/mocha@8.2.0, @types/node@14.14.20, mocha@8.2.1, ts-node@9.1.1, typescript@4.1.3, webpack@5.12.0, webpack-cli@4.3.1

## 2.6.8
### Fixed
 - builderSidebar (template): fix panels not collapsed when switching between groups

## 2.6.5
### Changed
 - Upgrade dependencies.

## 2.6.4
### Changed
 - FJS-1050: added hide label option for panel
 - Changed prefix and suffix references.

## 2.6.3
### Fixed
 - Adding for attributes for labels.

## 2.6.1
### Fixed
 - FJS-939: adopt input template to latest changes in bootstrap template

## 2.6.0
### Fixed
 - Add ref to tabs to fix flattened view.

## 2.5.0
### ???

## 2.4.0
### Fixed
 - The percentage on the file uploads.

### Added
 - Column size configurations.

## 2.1.0
### Changed
 - Add label alignment support for pdf renderer

## 2.0.0
### Breaking Change
 - Removed usage of `render` template function. Please ensure you are using at least formio.js@4.8.0.

### Changed
 - Upgrade typescript@3.7.5, webpack@4.41.5, ts-node@8.6.2, @types/node@13.1.8, mocha@7.0.0, nyc@15.0.0, sinon@8.1.1, tslint@6.0.0
