import React, { useState, useEffect } from 'react'
import PostUsers from '../services/PostUsers';
import getUsers from '../services/GetUsers'
import '../styles/FormRegistro.css'
import { useNavigate } from "react-router-dom";


function FormRegistro() {

  const [username, setUsername] = useState('');
  const [correo, setGmail] = useState('');
  const [pass, setPass] = useState('');
  const [saludo, setSaludo] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


   useEffect(() => {
    const fetchUsers = async () => {
    const data = await getUsers();
     
      
      setUsers(data);
 
    };
    fetchUsers();
  }, []);






  function cargaUsuario(event) {
    setUsername(event.target.value);
  }

  function cargaCorreo(event) {
    setGmail(event.target.value);
  }

  function cargaPass(event) {
    setPass(event.target.value)
  }

  const cargar = () => {

    if (username === " " || correo === " " || pass === " "){

      setSaludo ("Ingresar Datos")

    }
  
  console.log(users);
  

    const registrosExistentes = users.filter(users => users.correo === correo)

    console.log(registrosExistentes);
    
    if (registrosExistentes < 1) {

      PostUsers(username, correo, pass ) 
      navigate("/InicioSesion");
      
    }else{
      
      setSaludo("Cuenta ya registrada")
      
    }

  };

  
  return (
    <div>
        <div className='contenedor'>
            <h1>Registro</h1>

             <p>Ingrese Usuario</p>
             <input type="text"  value={username} onChange={cargaUsuario}/>

             <p>Ingrese Correo Electronico</p>
             <input type="text" value={correo} onChange={cargaCorreo} />

             <p>Ingrese Contraseña</p>
             <input type="text" value={pass} onChange={cargaPass} />

             <br />
             <br />

             <button onClick={cargar}>Registrar</button>
              <p>{saludo}</p>

        </div>
    </div>
  )
}

export default FormRegistro