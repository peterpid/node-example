function printMenu() {
    var clear = require('clear-console');
    clear();
    process.stdout.write('NODE JS EXAMPLE\n');
    process.stdout.write('Type a command:\n');
    process.stdout.write('\t/ver - display node version\n');
    process.stdout.write('\t/lang - display language\n');
    process.stdout.write('\t/exit - quit application\n');    
}

process.stdin.setEncoding('utf-8');
printMenu();

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    
    if (input !== null) {
    	var command = input.toString().trim();
    	switch (command) {
            case '/exit':
    		    process.stdout.write('Quitting application...\n');
    		    process.exit();
                break;
            case '/ver':
                printMenu();
                process.stdout.write('node version: ' + process.version + '\n');
                break;
            case '/lang':
                printMenu();
                process.stdout.write('LANG: ' + process.env.LANG + '\n');
                break;
    	    default:
		    	printMenu();
                process.stderr.write('Invalid command: ' + command + '\n');
        }
    }
});
