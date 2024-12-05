# Change Log
All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased: 3.0.0]
### Changed
 - Official Release

## 3.0.0-rc.41
### Changed
 - FIO-9239:  Added missing sketchpad icons mapping

## 3.0.0-rc.40
### Changed
 - FIO-9226 Fixed tooltips when fontawesome fallback is used
 - FIO-9227 Fixed fontawesome fallback for help link

## 3.0.0-rc.39
### Changed
 - FIO-9169 Changed fontawesome name of move icon
 - FIO-8808: Bootstrap 5 class scan

## 3.0.0-rc.38
### Changed
 - FIO-8234/FIO-7195: Fixes an issue where value properties are shown instead of labels for Select component with Resource/URL data sources in DataTable
 - FIO-9169 Fixed missing icon in formbuilder

## 3.0.0-rc.37
### Changed
 - FIO-8752: fix tabindex for keyboard actions

## 3.0.0-rc.36

## 3.0.0-rc.26
### Fixed
 - FIO-5748: changed templates to support collapsible preview in component settings
 - FIO-7224: Changed alignment for PDF condensed mode
 - FIO-7209: Radio works without ValueProperty set
 - FIO-7197: Increased builder dropzone in DataGrid
 - FIO-7429: Fix columns component settings (pull, offset, push)
 - FIO-7365: fixed an issue with Textarea component expanding inside of the DataGrid in Submission view
 - FIO-5288-fix-of-search-bar
 - FIO-3820: added file synchronization feature
 - FIO-7773: Add floating labels to Bootstrap 5 template
 - Bump es5-ext from 0.10.62 to 0.10.64
 - Bump @babel/traverse from 7.22.5 to 7.23.2
 - Bootstrap5: Missing icons for panel collapse/uncollapse
 - Bump get-func-name from 2.0.0 to 2.0.2
 - FIO-7933 added PDF Document Designer
 - FIO-8199: Fixes an issue where Checkbox does not have id and for attributes
 - #93 - untranslatable builder sidebar search field
 - FIO-7507 & FIO-7848: publish-dev-tag-to-npm
 - FIO-8303: fixed data grid templates
 - FIO-8426: added eSignature icon classes
 - Adding the Grid templates to keep the build size low on the grid library
 - Fixes for 5.x renderer

### Changed
 - added support for file synchronization feature

## 3.0.0-rc.4
### Fixed
 - Fixed mjs and cjs template definitions.

## 3.0.0-rc.2
### Changed
 - Added Bootstrap 5 templates

## 3.0.0-rc.1
### Changed
 - Added Bootstrap 4 templates.

## 2.13.0-rc.1
### Changed
 - Increment minor version.

### Fixed
 - FIO-4343: Fixes datagrid remove row column using much space

## 2.12.2
### Changed
 - Official Release

## 2.12.2-rc.1
### Fixed
 - FIO-3924: Fixes an issue where the DataGrid has an additional column wwhen "Equal columns width" is checked

## 2.12.1
### Changed
 - Official Release

## 2.12.1-rc.1
### Fixed
 - FIO-4567: Update Signature component template to match bootstrap templates

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
