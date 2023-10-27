<template>
    <h1>Programas Academicos</h1>
    <div class="container">
        <div class="card">
            <img src="vacia.webp" alt="kinder" class="card__image">
            <div class="card__info">
                <h2 class="card__info-title">Kinder</h2>
                <p class="card__info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum ratione doloribus nam id fugit rem, laudantium, eos omnis odit harum voluptas, magnam asperiores nisi quasi perferendis vero. Officiis, ipsam.</p>
            </div>
        </div>
        <div class="card">
            <div class="card__info">
                <h2 class="card__info-title">Primaria</h2>
                <p class="card__info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum ratione doloribus nam id fugit rem, laudantium, eos omnis odit harum voluptas, magnam asperiores nisi quasi perferendis vero. Officiis, ipsam.</p>
            </div>
            <img src="vacia.webp" alt="Primaria" class="card__image">
        </div>
        <div class="card">
            <img src="vacia.webp" alt="Ingles" class="card__image">
            <div class="card__info">
                <h2 class="card__info-title">Inglés</h2>
                <p class="card__info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum ratione doloribus nam id fugit rem, laudantium, eos omnis odit harum voluptas, magnam asperiores nisi quasi perferendis vero. Officiis, ipsam.</p>
            </div>
        </div>
        <div class="card">
            <div class="card__info">
                <h2 class="card__info-title">Deportes</h2>
                <p class="card__info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod rerum ratione doloribus nam id fugit rem, laudantium, eos omnis odit harum voluptas, magnam asperiores nisi quasi perferendis vero. Officiis, ipsam.</p>
            </div>
            <img src="vacia.webp" alt="Deportes" class="card__image">
        </div>
    </div>

    <footer class="footer">
      <img class="footer-logo" src="logo.png" alt="Logo de la empresa"> Colegio Tlamachtiani
      <div class="footer-links">
        <a href="#">Aviso legal</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos y condiciones</a>
      </div>
    </footer>

</template>

<style scoped>
h1{
    margin-top: 2.5rem;
    text-align: center;
    font-size: 4rem;
}
.container{
    margin: 1rem auto;
    width: 90%;
    padding: 1.5rem 2rem;
}
.container .card{
    margin-top: 1.8rem;
    padding: 1rem 2rem;
    background-color: rgb(190, 190, 190);
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(36, 36, 36);
}
.container .card .card__image{
    width: 30%;
}
.card__info{
    width: 50%;
}
.card__info-title{
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 1rem;
}
.card__info-text{
    text-align: left;
    line-height: 25px;
}

.footer {
        background-color: #000000;
        padding: 20px;
        text-align: center;
        color: #fff;
      }
      .footer-logo {
        width: 10px;
      }
    
      .footer-links a {
        color: #f3efef;
        text-decoration: none;
        margin: 0 10px;
      }

</style>