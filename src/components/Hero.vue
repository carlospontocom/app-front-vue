<script setup>

</script>



<template>
    <section class="bg-gray-100">

        <div class="grid">
        <div class="texts">
            <span class="bg-green-300 text-green-700 rounded-full">Serviços completos para você</span>
            <h2 class="font-bold text-[40px]">Sobre a Coopersystem</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus possimus at ipsa. Et alias fugit
                magnam ducimus. Mollitia dolor asperiores pariatur doloremque id sapiente quos ea ex possimus ullam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora unde soluta? Laboriosam,
                maxime officia.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem dolorem modi veniam magnam,
                quisquam placeat sequi earum ratione laborum deleniti quos atque rem dignissimos hic sed magni minus
                voluptate maiores aliquam est. Asperiores vitae dolorum quibusdam delectus animi aperiam!
            </p>

            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur ocke</li>
                <li>Lorem ipsum dolor sit.</li>
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

.texts{
    width: 100%;
}

ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:18px;
    padding: 1rem 0;
}

li{
    font-weight: bold;
    padding: 6px 0;
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
</style>