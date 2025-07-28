"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (iconset, name, spinning) => {
    let biName = name;
    switch (name) {
        case 'cog':
            biName = 'gear';
            break;
        case 'copy':
            biName = 'back';
            break;
        case 'bars':
            biName = 'list';
            break;
        case 'remove':
            biName = 'trash';
            break;
        case 'font':
            biName = 'type';
            break;
        case 'hashtag':
            biName = 'hash';
            break;
        case 'th-list':
            biName = 'menu-button-wide';
            break;
        case 'dot-circle-o':
            biName = 'ui-radios';
            break;
        case 'plus-square-o':
            biName = 'plus-square';
            break;
        case 'minus-square-o':
            biName = 'dash-square';
            break;
        case 'plus-square':
            biName = 'ui-checks';
            break;
        case 'phone-square':
            biName = 'phone';
            break;
        case 'home':
            biName = 'house';
            break;
        case 'clock-o':
            biName = 'clock';
            break;
        case 'usd':
            biName = 'currency-dollar';
            break;
        case 'html5':
            biName = 'file-richtext';
            break;
        case 'pencil-square-o':
            biName = 'pencil-square';
            break;
        case 'columns':
            biName = 'layout-three-columns';
            break;
        case 'list-alt':
            biName = 'window';
            break;
        case 'th-large':
            biName = 'grid-fill';
            break;
        case 'folder-o':
            biName = 'folder';
            break;
        case 'square-o':
            biName = 'square';
            break;
        case 'user-secret':
            biName = 'person-fill-slash';
            break;
        case 'folder-open':
            biName = 'folder2-open';
            break;
        case 'th':
            biName = 'grid-3x3-gap-fill';
            break;
        case 'tasks':
            biName = 'view-stacked';
            break;
        case 'indent':
            biName = 'text-indent-left';
            break;
        case 'refresh':
            biName = 'arrow-repeat';
            break;
        case 'files-o':
            biName = 'files';
            break;
        case 'wpforms':
            biName = 'window-stack';
            break;
        case 'cube':
            biName = 'box';
            break;
        case 'cubes':
            biName = 'boxes';
            break;
        case 'check-square-o':
            biName = 'check-square';
            break;
        case 'plus':
            biName = 'plus-lg';
            break;
        case 'question-sign':
            name = 'question-circle';
            biName = 'question-circle';
            break;
        case 'remove-circle':
            name = 'circle-xmark';
            biName = 'x-circle';
            break;
        case 'new-window':
            name = 'window-restore';
            biName = 'window-plus';
            break;
        case 'move':
            name = 'arrows';
            biName = 'arrows-move';
            break;
        case 'edit':
            biName = 'pencil';
            break;
        case 'time':
            biName = 'clock';
            break;
        case 'video':
            biName = 'camera-video';
            break;
        case 'microphone':
            biName = 'mic';
            break;
        case 'folder-open':
            biName = 'folder2-open';
            break;
        case 'check-circle':
            biName = 'check-circle-fill';
            break;
        case 'times-circle':
            biName = 'x-circle-fill';
            break;
        case 'pencil':
            biName = 'pencil-fill';
            break;
        case 'minus':
            biName = 'dash';
            break;
        case 'circle':
            biName = 'circle-fill';
            break;
        case 'search-plus':
            biName = 'zoom-in';
            break;
        case 'search-minus':
            biName = 'zoom-out';
            break;
        case 'hand-paper-o':
            biName = 'hand-index';
            break;
        case 'undo':
            biName = 'arrow-counterclockwise';
            break;
        case 'repeat':
            biName = 'arrow-clockwise';
            break;
    }
    function generateIconClass() {
        if (spinning) {
            return 'spinner-border spinner-border-sm';
        }
        const iconName = iconset === 'bi' ? biName : name;
        // Handles legacy icons names. For example, fa-remove-circle was changed to fa-circle-xmark in a major version
        // update of font-awesome. To handle cases where customers are still on a very old version of font-awesome add
        // a fallback if statement to handle such cases
        function handleLegacyIconNames() {
            if (iconset === 'fa' && name === 'circle-xmark') {
                return `${iconset}-${name} ${iconset}-remove-circle`;
            }
            return `${iconset}-${iconName}`;
        }
        return `${iconset} ${handleLegacyIconNames()}`;
    }
    return generateIconClass();
};
