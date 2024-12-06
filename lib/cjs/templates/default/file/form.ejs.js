Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.options.vpat) { ;
__p += '\n  <span tabindex="-1" class="visually-hidden" id="invisible-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\n';
 } ;
__p += '\n';
 if (!ctx.self.imageUpload) { ;
__p += '\n  ';
 if (ctx.options.vpat) { ;
__p += '\n    <div>' +
((__t = ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? 'Any file types are allowed' : ctx.t('Allowed file types: ') + ctx.component.filePattern)) == null ? '' : __t) +
'</div>\n  ';
 } ;
__p += '\n  <ul class="list-group list-group-striped">\n    <li class="list-group-item list-group-header hidden-xs hidden-sm">\n      <div class="row">\n        <div class="col-md-' +
((__t = (ctx.columns.name)) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</strong></div>\n        <div class="col-md-' +
((__t = (ctx.columns.size)) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</strong></div>\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\n          <div class="col-md-' +
((__t = (ctx.columns.type)) == null ? '' : __t) +
'"><strong>' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</strong></div>\n        ';
 } ;
__p += '\n        <div class="col-md-' +
((__t = (ctx.columns.actions)) == null ? '' : __t) +
' justify-center">\n          ';
 if (ctx.showSyncButton) { ;
__p += '\n            <button\n              class="btn btn-primary btn-sm"\n              ref="syncNow"\n              ';
 if (ctx.disabled || ctx.isSyncing) { ;
__p += 'disabled=true';
 } ;
__p += '\n            >' +
((__t = (ctx.isSyncing ? ctx.t('Syncing...') : ctx.t('Sync Now'))) == null ? '' : __t) +
'</button>\n          ';
 } ;
__p += '\n        </div>\n      </div>\n    </li>\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <li class="list-group-item">\n        <div class="row">\n          <div class="col-md-' +
((__t = (ctx.columns.name)) == null ? '' : __t) +
'">\n            ';
 if (ctx.component.uploadOnly) { ;
__p += '\n              ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n              <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink">\n                <span class="visually-hidden">' +
((__t = (ctx.t('Press to open '))) == null ? '' : __t) +
'</span>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n              </a>\n            ';
 } ;
__p += '\n          </div>\n          <div class="col-md-' +
((__t = (ctx.columns.size)) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.type)) == null ? '' : __t) +
'">\n              <select class="file-type" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (ctx.self.hasTypes && ctx.disabled) { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.type)) == null ? '' : __t) +
'">' +
((__t = (file.fileType)) == null ? '' : __t) +
'</div>\n          ';
 } ;
__p += '\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.actions)) == null ? '' : __t) +
' justify-center"><i tabindex="0" class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n    ';
 ctx.filesToDelete.forEach(function(file) { ;
__p += '\n      <li class="list-group-item">\n        <div class="row align-center">\n          <div class="col-md-' +
((__t = (ctx.columns.name)) == null ? '' : __t) +
'">\n            <div>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</div>\n              <div class="status text-' +
((__t = (file.status === 'error' ? 'danger': file.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(file.message))) == null ? '' : __t) +
'</div>\n          </div>\n          <div class="col-md-' +
((__t = (ctx.columns.size)) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes) { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.type)) == null ? '' : __t) +
'">\n              <select class="file-type" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (!ctx.isSyncing && file.status !== 'success') { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.actions)) == null ? '' : __t) +
' justify-center"><i tabindex="0" class="' +
((__t = (ctx.iconClass('arrow-counterclockwise'))) == null ? '' : __t) +
'" ref="restoreFile"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n    ';
 ctx.filesToUpload.forEach(function(file) { ;
__p += '\n      <li class="list-group-item">\n        <div class="row align-center">\n          <div class="col-md-' +
((__t = (ctx.columns.name)) == null ? '' : __t) +
'">\n            <div>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</div>\n            ';
 if (file.status === 'progress') { ;
__p += '\n              <div class="status progress">\n                <div id="' +
((__t = (file.id)) == null ? '' : __t) +
'" class="progress-bar" role="progressbar" aria-valuenow="' +
((__t = (file.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (file.progress)) == null ? '' : __t) +
'%" ref="progress">\n                  <span class="visually-hidden">' +
((__t = (file.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</span>\n                </div>\n              </div>\n            ';
 } else { ;
__p += '\n              <div class="status text-' +
((__t = (file.status === 'error' ? 'danger': file.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(file.message))) == null ? '' : __t) +
'</div>\n            ';
 } ;
__p += '\n          </div>\n          <div class="col-md-' +
((__t = (ctx.columns.size)) == null ? '' : __t) +
'">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes) { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.type)) == null ? '' : __t) +
'">\n              <select class="file-type" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (file.status === 'progress') { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.actions)) == null ? '' : __t) +
' justify-center"><i id="abort-' +
((__t = (file.id)) == null ? '' : __t) +
'" tabindex="0" class="' +
((__t = (ctx.iconClass('ban'))) == null ? '' : __t) +
'"></i></div>\n          ';
 } else if (!ctx.isSyncing && file.status !== 'success') { ;
__p += '\n            <div class="col-md-' +
((__t = (ctx.columns.actions)) == null ? '' : __t) +
' justify-center"><i tabindex="0" class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="fileToSyncRemove"></i></div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n  </ul>\n';
 } else { ;
__p += '\n  <div>\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <div>\n        <span>\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <i tabindex="0" class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i>\n          ';
 } ;
__p += '\n        </span>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\n  ';
 if (ctx.self.useWebViewCamera) { ;
__p += '\n    <div class="fileSelector">\n      <button class="btn btn-primary" ref="galleryButton"><i class="' +
((__t = (ctx.iconClass('book'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-primary" ref="cameraButton"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } else if (!ctx.self.cameraMode) { ;
__p += '\n    <div class="fileSelector" ref="fileDrop" ' +
((__t = (ctx.fileDropHidden ?'hidden' : '')) == null ? '' : __t) +
'>\n      ';
 if (!ctx.self.isMobile.any) { ;
__p += '\n        <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      ';
 if (ctx.self.imageUpload && ctx.component.webcam) { ;
__p += '\n        <a href="#" ref="toggleCameraMode"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Use Camera'))) == null ? '' : __t) +
'</a>\n        ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n      <a href="#" ref="fileBrowse" class="browse">\n        ';
 if (ctx.self.isMobile.any && ctx.component.capture) { ;
__p += '\n          ';
 if (ctx.component.filePattern && ctx.component.filePattern.includes("video")) { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('video'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Capture Video'))) == null ? '' : __t) +
'\n          ';
 } else if (ctx.component.filePattern && ctx.component.filePattern.includes("audio")) { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('microphone'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Capture Audio'))) == null ? '' : __t) +
'\n          ';
 } else { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Capture Image'))) == null ? '' : __t) +
'\n          ';
 } ;
__p += '\n        ';
 } else { ;
__p += '\n          <i class="' +
((__t = (ctx.iconClass('folder-open'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Browse Files'))) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n        <span class="visually-hidden">\n          ' +
((__t = (ctx.t('Browse to attach file for ' + ctx.component.label + '. ' +
          (ctx.component.description ? ctx.component.description + '. ' : '') +
          ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? 'Any file types are allowed' : ctx.t('Allowed file types: ') + ctx.component.filePattern)))) == null ? '' : __t) +
'\n        </span>\n      </a>\n      <div ref="fileProcessingLoader" class="loader-wrapper">\n        <div class="loader text-center"></div>\n      </div>\n    </div>\n  ';
 } else { ;
__p += '\n    <div class="video-container">\n      <video class="video" autoplay="true" ref="videoPlayer" tabindex="-1"></video>\n    </div>\n    <button class="btn btn-primary" ref="takePictureButton"><i class="' +
((__t = (ctx.iconClass('camera'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\n    <button class="btn btn-primary" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\n  <div class="alert alert-warning">\n    ';
 if (!ctx.component.storage) { ;
__p += '\n      <p>' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.filereader) { ;
__p += '\n      <p>' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.formdata) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.progress) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
return __p
}