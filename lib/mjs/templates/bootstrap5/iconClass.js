export default (iconset, name, spinning) => {
    let iconName = name;
    if (iconset === 'bi') {
        switch (name) {
            case 'cog':
                iconName = 'gear';
                break;
            case 'copy':
                iconName = 'back';
                break;
            case 'bars':
                iconName = 'list';
                break;
            case 'remove':
                iconName = 'trash';
                break;
            case 'font':
                iconName = 'type';
                break;
            case 'hashtag':
                iconName = 'hash';
                break;
            case 'th-list':
                iconName = 'menu-button-wide';
                break;
            case 'dot-circle-o':
                iconName = 'ui-radios';
                break;
            case 'plus-square-o':
                iconName = 'plus-square';
                break;
            case 'minus-square-o':
                iconName = 'dash-square';
                break;
            case 'plus-square':
                iconName = 'ui-checks';
                break;
            case 'phone-square':
                iconName = 'phone';
                break;
            case 'home':
                iconName = 'house';
                break;
            case 'clock-o':
                iconName = 'clock';
                break;
            case 'usd':
                iconName = 'currency-dollar';
                break;
            case 'html5':
                iconName = 'file-richtext';
                break;
            case 'pencil-square-o':
                iconName = 'pencil-square';
                break;
            case 'columns':
                iconName = 'layout-three-columns';
                break;
            case 'list-alt':
                iconName = 'window';
                break;
            case 'th-large':
                iconName = 'grid-fill';
                break;
            case 'folder-o':
                iconName = 'folder';
                break;
            case 'square-o':
                iconName = 'square';
                break;
            case 'user-secret':
                iconName = 'person-fill-slash';
                break;
            case 'folder-open':
                iconName = 'folder2-open';
                break;
            case 'th':
                iconName = 'grid-3x3-gap-fill';
                break;
            case 'tasks':
                iconName = 'view-stacked';
                break;
            case 'indent':
                iconName = 'text-indent-left';
                break;
            case 'refresh':
                iconName = 'arrow-repeat';
                break;
            case 'files-o':
                iconName = 'files';
                break;
            case 'wpforms':
                iconName = 'window-stack';
                break;
            case 'cube':
                iconName = 'box';
                break;
            case 'cubes':
                iconName = 'boxes';
                break;
            case 'check-square-o':
                iconName = 'check-square';
                break;
            case 'plus':
                iconName = 'plus-lg';
                break;
            case 'question-sign':
                name = 'question-circle';
                iconName = 'question-circle';
                break;
            case 'remove-circle':
            case 'circle-xmark':
                iconName = 'x-circle';
                break;
            case 'new-window':
                name = 'window-restore';
                iconName = 'window-plus';
                break;
            case 'move':
                name = 'arrows';
                iconName = 'arrows-move';
                break;
            case 'edit':
                iconName = 'pencil';
                break;
            case 'time':
                iconName = 'clock';
                break;
            case 'video':
                iconName = 'camera-video';
                break;
            case 'microphone':
                iconName = 'mic';
                break;
            case 'folder-open':
                iconName = 'folder2-open';
                break;
            case 'check-circle':
                iconName = 'check-circle-fill';
                break;
            case 'times-circle':
                iconName = 'x-circle-fill';
                break;
            case 'pencil':
                iconName = 'pencil-fill';
                break;
            case 'minus':
                iconName = 'dash';
                break;
            case 'circle':
                iconName = 'circle-fill';
                break;
            case 'search-plus':
                iconName = 'zoom-in';
                break;
            case 'search-minus':
                iconName = 'zoom-out';
                break;
            case 'hand-paper-o':
                iconName = 'hand-index';
                break;
            case 'undo':
                iconName = 'arrow-counterclockwise';
                break;
            case 'repeat':
                iconName = 'arrow-clockwise';
                break;
        }
    }
    function generateIconClass() {
        if (spinning) {
            return 'spinner-border spinner-border-sm';
        }
        // Handles legacy icons names. For example, fa-remove-circle was changed to fa-circle-xmark in a major version
        // update of font-awesome. To handle cases where customers are still on a very old version of font-awesome add
        // a fallback if statement to handle such cases
        function handleLegacyIconNames() {
            if (iconName === 'circle-xmark') {
                return `${iconset}-${iconName} ${iconset}-remove-circle`;
            }
            return `${iconset}-${iconName}`;
        }
        return `${iconset} ${handleLegacyIconNames()}`;
    }
    return generateIconClass();
};
