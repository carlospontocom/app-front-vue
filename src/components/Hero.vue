<script setup>

</script>



<template>
    <section class="bg-gray-100">

        <div class="grid">
        <div class="texts">
            <span class="tag">Serviços completos para você</span>
            <h2 class="font-bold text-[40px]">Sobre a Coopersystem</h2>
            <p>
                Somos uma cooperativa que desde 1998 presta serviços especializados nas mais diversas áreas da Tecnologia da Informação, sempre com o objetivo de levar tecnologia com qualidade e usabilidade para as empresas e seus clientes. Acreditamos no poder do trabalho coletivo e na gestão participativa. Sob esses princípios, cultivamos em nossas equipes a responsabilidade compartilhada, a ajuda mútua e a valorização do capital humano, aspectos fundamentais para o desenvolvimento de projetos de excelência.
            </p>
            <p>
                Contamos com uma equipe técnica altamente capacitada e experiente nas diversas áreas da TI, composta de profissionais que estão em constante atualização e pesquisa para construir os melhores softwares e metodologias para aplicação comercial no mercado. Conheça alguns dos nossos princípios:
            </p>

            <ul>
                    <li>
                        <i class="fas fa-rocket"></i>
                        <span>Mais de 20 anos de experiência com sistemas bancários</span>
                    </li>

                    <li>
                        <i class="fas fa-trophy"></i> 
                        <span>Diversas premiações em categorias de qualidade</span>
                    </li>

                    <li>
                        <i class="fas fa-chalkboard-user"></i>  
                        <span>Atualização frequente dos profissionais</span>
                    </li>

                    <li>
                        <i class="fas fa-handshake"></i>  
                        <span>Gestão participativa</span>
                    </li>

                    <li>
                        <i class="fas fa-lightbulb"></i> 
                        <span>Pesquisa constante de inovações</span>
                    </li>

                    <li>
                        <i class="fas fa-layer-group"></i>  
                        <span>Serviços em áreas diversas</span>
                    </li>
                </ul>
        </div>

        <figure>
            <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagem aleatória de tecnologia">
        </figure>

    </div>
    </section>
</template>

<style scoped>
.grid{
    display: flex;
    align-items: center;
    gap: 100px;
    padding: 2rem 4rem;
    max-width: 1200px;

    @media(max-width:768px){
        display:flex;
        flex-direction: column;
        gap: 20px;
    }
}

.tag{
    background-color: greenyellow;
    border-radius: 20px;
    font-size: 14px;
    padding: 4px 1rem;
}

.texts{
    width: 100%;
}

h2{
    line-height: 36px;
    margin: 1rem 0;
}

p{
    margin: .5rem 0;
}

ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:18px;
    padding: 1rem 0;
    @media(max-width:568px){
        display: flex;
        flex-direction: column;
    }
}

li{
    display:flex;
    align-items:center;
    gap:5px;
    font-weight: bold;
    font-size: .9rem;
    padding: 6px 0;
}

li i{
    color:green;
    font-size: 1.9rem;
}

figure{
    width: 50%;
    height: 500px;
    border:6px solid  green;
    position: relative;
    @media(max-width:768px){
        width: 100%;
    }
}

figure img{
    width:100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 1rem;
    right:1rem;
}




    
@media(max-width:768px){
    .grid{
        padding: 3rem 1rem;
        gap:1rem;
    }
}
</style>