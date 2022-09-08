
const Puestos = ({cliente,marcarSalida}) =>{  
    
    const {nombre,identidad,placa,horaEntrada,fecha,id} = cliente;
    return (
        <div className='puestos'>
            <p>Nombre: <span>{nombre}</span></p>
            <p>Identificacion: <span>{identidad}</span></p>
            <p>Placa: <span>{placa}</span></p>
            <p>Hora de entrada: <span>{horaEntrada}</span></p>
            <p>Fecha: <span>{fecha}</span></p>       
            <p>id</p>
            <button className="button eliminar u-full-width" onClick={() => marcarSalida(id)}>Marcar Salida</button>
        </div>
    )
}


export default Puestos;