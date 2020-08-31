const argv = require('./config/yards').argv;
const porHacer = require('./logica/logica');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Elemento creado');
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============ Tareas ============'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado.yellow);
            console.log('================================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
}