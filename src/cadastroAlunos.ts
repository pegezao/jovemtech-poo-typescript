// Contrato com os dados necessários de um aluno
interface IAluno {
  nome: string;
  curso: string;
}

// Classe do aluno, com as notas encapsuladas
class Aluno implements IAluno {
  nome: string;
  curso: string;
  private notas: number[];

  // Inicializa os atributos e registra as notas
  constructor(nome: string, curso: string, notas: number[]) {
    this.nome = nome;
    this.curso = curso;
    this.notas = [];
    this.definirNotas(notas);
  }

  // Verifica se a nota é um número válido entre 0 e 10
  private notaValida(nota: number): boolean {
    if (typeof nota !== "number" || isNaN(nota)) {
      return false;
    }

    if (nota < 0 || nota > 10) {
      return false;
    }

    return true;
  }

  // Só permite gravar as notas se todas forem válidas
  definirNotas(notas: number[]): void {
    for (let i = 0; i < notas.length; i++) {
      if (!this.notaValida(notas[i])) {
        console.log("Não foi possível alterar as notas, pois " + notas[i] + " é uma nota inválida.");
        return;
      }
    }

    this.notas = notas.slice();
  }

  // Devolve uma cópia das notas para não alterar o valor interno
  getNotas(): number[] {
    return this.notas.slice();
  }

  // Calcula a média das notas
  calcularMedia(): number {
    if (this.notas.length === 0) {
      return 0;
    }

    let soma = 0;

    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i];
    }

    return soma / this.notas.length;
  }

  // Informa se o aluno foi aprovado ou reprovado
  verificarSituacao(): string {
    const media = this.calcularMedia();

    if (media >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

const alunos: Aluno[] = [
  new Aluno("Ana Souza", "Desenvolvimento Web", [8.5, 7.0]),
  new Aluno("Bruno Oliveira", "Banco de Dados", [5.0, 6.5]),
  new Aluno("Carla Mendes", "Programação Orientada a Objetos", [9.0, 8.5])
];

console.log("Cadastro de alunos");
console.log("------------------");

// Percorre cada aluno e mostra o resultado da avaliação
alunos.forEach(function (aluno) {
  const notas = aluno.getNotas();
  const media = aluno.calcularMedia();
  const situacao = aluno.verificarSituacao();

  console.log("Aluno: " + aluno.nome);
  console.log("Curso: " + aluno.curso);
  console.log("Notas: " + notas.join(" e "));
  console.log("Média: " + media.toFixed(1));
  console.log("Situação: " + situacao);
  console.log("");
});

// Tenta alterar as notas com um valor inválido para testar o encapsulamento
alunos[0].definirNotas([11, 8.0]);
console.log("Notas da aluna " + alunos[0].nome + " depois da tentativa: " + alunos[0].getNotas().join(" e "));
