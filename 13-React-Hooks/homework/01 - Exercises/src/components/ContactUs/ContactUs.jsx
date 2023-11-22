import React from "react";

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (event) => {

    const {name, value} = event.target;


    setForm({
      ...form,
      [name] : value
    })
  }


  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input  onChange ={handleInput} name="nombre" />
        <label htmlFor="email">Email: </label>
        <input onChange ={handleInput} name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange ={handleInput} name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange ={handleInput} name="mensaje" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
