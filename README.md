# Cadastro de Alunos

Este projeto é um sistema simples de cadastro de alunos, feito em TypeScript para a atividade da trilha JovemTech.

O programa usa uma interface e uma classe para organizar o nome, o curso e as notas de cada estudante. As notas ficam encapsuladas, a média é calculada e o programa informa se o aluno foi aprovado ou reprovado.

## Como executar

É preciso ter o Node.js instalado. Depois, no terminal, entre na pasta do projeto e rode:

```
npm install
npx tsc
node dist/cadastroAlunos.js
```

## Saída

```
Cadastro de alunos
------------------
Aluno: Ana Souza
Curso: Desenvolvimento Web
Notas: 8.5 e 7
Média: 7.8
Situação: Aprovado

Aluno: Bruno Oliveira
Curso: Banco de Dados
Notas: 5 e 6.5
Média: 5.8
Situação: Reprovado

Aluno: Carla Mendes
Curso: Programação Orientada a Objetos
Notas: 9 e 8.5
Média: 8.8
Situação: Aprovado

Não foi possível alterar as notas, pois 11 é uma nota inválida.
Notas da aluna Ana Souza depois da tentativa: 8.5 e 7
```
