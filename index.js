let usuarios = [
    { nome: 'João', email: 'joao@Gmail.com', idade: 30 },
    { nome: 'Maria', email: 'maria@Gmail.com', idade: 25 },
    { nome: 'Pedro', email: 'pedro@Gmail.com', idade: 35 }
];

function buscarUsuarioPorEmail(email) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            return usuarios[i];
        }
    }
    return null;
}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite o email do usuário: ', (email) => {
        if (!email) {
            console.log('Email não fornecido.');
            readline.close();
            return;
        }

        let usuarioEncontrado = buscarUsuarioPorEmail(email);

        if (usuarioEncontrado !== null) {
            console.log('Usuário encontrado:');
            console.log('Nome:', usuarioEncontrado.nome);
            console.log('Email:', usuarioEncontrado.email);
            console.log('Idade:', usuarioEncontrado.idade);
        } else {
            console.log(`Usuário não encontrado para o email: ${email}`);
        }

        readline.close();
    });
}

main();