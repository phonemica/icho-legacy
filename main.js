const {
	app,
	BrowserWindow,
	Menu,
	remote
} = require('electron');

const appName = "ichō";

/* for debugging */
require('electron-context-menu')({
	prepend: params => [{
		label: 'Inspect'
	}]
});

let win;

function createWindow() {
	win = new BrowserWindow({
		//titleBarStyle: 'hidden',
		width: 1100,
		height: 550,
		frame: true,
		resizeable: false,
		minHeight: 380,
		minWidth: 800,
		title: appName,
		icon: 'file://' + __dirname + '/icon.png',
	});
	win.loadURL(`file://${__dirname}/window.htm`)
		//win.webContents.openDevTools();
	win.on('closed', () => {
		win = null
	});

	var template = [{
		label: appName,
		submenu: [{
			label: "About",
			selector: "orderFrontStandardAboutPanel:"
		}, {
			type: "separator"
		}, {
			label: "Quit",
			accelerator: "Command+Q",
			click: function() {
				app.quit();
			}
		}]
	}, {
		label: "編輯",
		submenu: [{
			label: "Undo",
			accelerator: "CmdOrCtrl+Z",
			selector: "undo:"
		}, {
			label: "Redo",
			accelerator: "Shift+CmdOrCtrl+Z",
			selector: "redo:"
		}, {
			type: "separator"
		}, {
			label: "Cut",
			accelerator: "CmdOrCtrl+X",
			selector: "cut:"
		}, {
			label: "Copy",
			accelerator: "CmdOrCtrl+C",
			selector: "copy:"
		}, {
			label: "Paste",
			accelerator: "CmdOrCtrl+V",
			selector: "paste:"
		}, {
			label: "Select All",
			accelerator: "CmdOrCtrl+A",
			selector: "selectAll:"
		}]
	}, {
		label: "Inspect",
		submenu: [{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click: function() {
				win.reload();
			}
		}, {
			label: "Dev tools",
			accelerator: 'Alt+CmdOrCtrl+I',
			click: function() {
				win.toggleDevTools();
			}
		}]
	}];
	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	//if (process.platform !== 'darwin') {
	app.quit()
		//}
});

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
});
