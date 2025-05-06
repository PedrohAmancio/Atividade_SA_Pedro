import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfir] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };
    const Logar =()=>{
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const usuarioExistente = users.find((user) => user.email === email);

    if (senha === "" || confirmarSenha === "" || email === "" || nome === ""){
        alert ("Os campos não podem ser vazios")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;
    if(senha.length < 8){
        alert ("A senha deve ter no mínimo 8 caracteres")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;
    if (senha != confirmarSenha){
        alert ("As senhas não são iguais")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;

    if (usuarioExistente) {
        alert("Este email já está cadastrado!");
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    };

    if(!validarEmail(email)) {
        alert("Formato de email inválido!");
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    };

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha,
    };

    users.push(novoUsuario);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");

    setConfir("");
    setEmail("");
    setNome("");
    setSenha("");

};
    return (
      <Form>
  
   <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Digite o email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value) }/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Senha"  
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="confirmarSenha">
        <Form.Label>Confirmar Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfir(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleCadastro}>
        Cadastrar
      </Button>
    </Form>
    );
}



export default Login;