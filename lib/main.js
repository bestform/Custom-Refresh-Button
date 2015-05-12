var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "refresh-page",
    label: "Refresh page",
    icon: "./reload-icon.png",
    onClick: handleClick
});

function handleClick(state) {
    tabs.activeTab.reload();
}

