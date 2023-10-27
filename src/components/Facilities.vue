<template>
<!DOCTYPE html>
<html>
<head>
	<title>
		Instalaciones
	</title>
</head>

<body>

    <div class="galeria">
        <h1>Conoce nuestras instalaciones</h1>
        <h3>Buscamos que la estancia de nuestros alumnos, tengan los servicios necesarios durante el tiempo que permanecen en nuestro colegio.</h3>
        
        <div class="linea"></div>
        <div class="contenedor-imagenes">
            <div class="imagen">
                <img src="insta1.jpeg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta2.jpeg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta7.jpg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta4.avif" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta5.jpg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta3.jpeg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta6.jpg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta8.jpg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
            <div class="imagen">
                <img src="insta9.jpg" alt="">
                <div class="overlay">
                    <h2>Instalaciones</h2>
                </div>
            </div>
        </div>
    </div>

    <br><br>
    <footer class="footer">
      <img class="footer-logo" src="logo.png" alt="Logo de la empresa"> Colegio Tlamachtiani
      <div class="footer-links">
        <a href="#">Aviso legal</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos y condiciones</a>
      </div>
    </footer>
   
</body>
</html>
</template>



<style>


*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

.galeria{
    font-family: 'open sans';
}

.galeria h1 {
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 800;
}

.galeria h3{
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 90;
}

.linea{
    border-top: 5px solid #3a92eb;
    margin-bottom: 40px;
}

.contenedor-imagenes{
    display:flex;
    width: 85%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius:3px;
}

.contenedor-imagenes .imagen{
    width: 32%;
    position: relative;
    height:250px;
    margin-bottom:5px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75)
}
.imagen img{
    width: 100%;
    height:100%;
    object-fit: cover;
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(0, 118, 192, 0.781) ;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: .5s ease;
}

.overlay h2{
    color: #fff;
    font-weight: 300;
    font-size:30px;
    position: absolute;
    top: 50%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}

.imagen:hover .overlay{
    height:100%;
    cursor: pointer;
}

@media screen and (max-width:1000px){
    .contenedor-imagenes{
        width: 95%;
    }
}

@media screen and (max-width:700px){
    .contenedor-imagenes{
        width: 90%;
    }
    .contenedor-imagenes .imagen{
        width: 48%;
    }
}

@media screen and (max-width:450px){
    h1{
        font-size:22px;
    }
    .contenedor-imagenes{
        width: 98%;
    }
    .contenedor-imagenes .imagen{
        width: 80%;
    }
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




