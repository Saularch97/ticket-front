"use server"

import { LoginFormData } from "@/schema";

export async function signin(params: LoginFormData) {
    try {
        const response = await fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
            credentials: 'include', // Permite que cookies sejam enviados e recebidos
        });

        if (!response.ok) {
            throw new Error(`Erro ao autenticar: ${response.statusText}`);
        }

        console.log('Autenticação bem-sucedida.');
        // Como o JWT é retornado via cookie, ele será automaticamente persistido no navegador
    } catch (error) {
        console.error('Erro:', error);
    }
}