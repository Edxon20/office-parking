import React,{Fragment, useState} from 'react';

const Formulario = ({guardarClientes}) =>{

    const [cliente,actualizarCliente] = useState([
        {
          nombre:'',
          identidad:'',
          placa:'',
          horaEntrada:'',
          fecha:''
        }
      ]);

    const {nombre,identidad,placa,horaEntrada,fecha} = cliente;

    const setNewClient = (e) =>{
        e.preventDefault();     
        
        if(nombre === ''){
            alert('El nombre se encuentra vacio');
        }      

    }

    const actualizarState = (e) =>{
        actualizarCliente({
            ...cliente, 
            [e.target.name] : e.target.value
       });
    }


    return(        

        <Fragment>
            <form
            onSubmit={setNewClient}
            >
                <label>Cliente</label>
                <input 
                type="text" 
                placeholder='Nombre cliente'
                value ={nombre}
                name = 'nombre'
                onChange={actualizarState}
                >         
                </input>

                <label>Identidad</label>
                <input 
                type='number' 
                placeholder='Identidad cliente'
                value={identidad}
                name = 'identidad'
                >
                </input>

                <label>Placa vehiculo</label>
                <input 
                type='text' 
                placeholder='Identidad cliente'
                value={placa}
                name= 'placa'
                >
                </input>

                <label>Hora de entrada</label>
                <input
                 type='time' 
                 placeholder='Identidad cliente'
                 value={horaEntrada}
                 name = 'horaEntrada'
                 >
                 </input>

                <label>Fecha</label>
                <input type='date' 
                placeholder='Identidad cliente'
                value = {fecha}
                name = 'fecha'
                >

                </input>       

                <button type='submit' className='u-full-width button-primary'>Registrar</button>
            </form>
        </Fragment>
    )
}

export default Formulario; 