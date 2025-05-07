// importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

import { useState,useEffect } from 'react';    

export function useVerificalogin(){
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
       
        async function fetchData() {
            try {
                const req = await fetch(`${url}/usuarios`);
                const users = await req.json()
                setUsuarios(users);
            } catch (error) {
                console.error('Esse é o erro:', error);
            }
        }
        fetchData();
        
    }, [])

    const verificarLogin = (data) => {
        const userToFind = usuarios.find((user) => {user.email === data.email});

        if(userToFind != undefined && userToFind.senha === data.senha){
            console.log('Login realizado com sucesso!')
            return "Login efecutado com sucesso";
        } else{
            return "Email ou senha incorretos!";
        }
    }
    return {verificarLogin}
}