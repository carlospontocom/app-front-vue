
export interface dadosInterface{
    id:string,
    titulo:string,
    desc:string
}

export const dados : dadosInterface[]=[
    {
        id:"card01",
        titulo:"Tecnologia",
        desc:"É a utilização dos recursos para gestão de tarefas do cotidiano"
    },
    {
        id: "card02",
        titulo: "Backend",
        desc: "A estrutura lógica que processa regras de negócio e integra a interface com o servidor."
    },
    {
        id: "card03",
        titulo: "Banco de Dados",
        desc: "Sistemas escaláveis para armazenamento seguro e recuperação de dados críticos da operação."
    }
      
]