document.write('<hr>')

let query = prompt('tu prefere le foot les fraise ou le google');

switch (query) {
    case "foot":
        document.write('vous preferé le foot');
        break;

    case 'fraise':
        document.write('vous prefere vous lees fraise');
        break;
    
    case 'google':
        document.write('vous prefere google');
        break;
    
    default:
        document.write('reponse non reconue');
}