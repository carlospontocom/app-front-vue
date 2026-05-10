
export interface dadosInterface {
    id: string,
    icone: string,
    titulo: string,
    desc: string
}

export const cards: dadosInterface[] = [
    {
        id: "c0101",
        icone: "fas fa-code",
        titulo: "Tecnologia digital",
        desc: "Criamos projetos frontend para sua empresa com foco na experiência do cliente e funcionamento para gestão de atividades e lucro"
    },
    {
        id: "c0102",
        icone: "fab fa-node-js",
        titulo: "Tecnologia digital",
        desc: "Projetamos o que o seu sistema deve fazer para gerenciar suas atividades, clientes e relatórios"
    },
    {
        id: "c0103",
        icone: "fas fa-database",
        titulo: "Banco de dados",
        desc: "Armazemos com segurança das suas informações de forma a garantiar a guarda e busca de dados para tomada de decisão de forma mais assertiva"
    }
] 