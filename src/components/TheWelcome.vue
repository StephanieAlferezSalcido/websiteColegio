
<template>
  <div class="container">
    <div class="container__text">
      <h2>Quienes Somos?</h2>
      <img src="about.png" alt="">
    
      <p>En el Colegio Tlamachtiani, somos una comunidad educativa con una sólida tradición en la enseñanza de kinder y
        primaria, establecida en Guadalajara desde 1998. Nuestra historia es un testimonio de dedicación y compromiso en
        el campo de la educación, y hemos evolucionado para convertirnos en un faro de aprendizaje y desarrollo personal
        para los niños y niñas de nuestra comunidad.
        <br>
        Somos una escuela que trasciende lo meramente académico. En nuestro núcleo, creemos que la educación no solo debe
        nutrir las mentes de nuestros estudiantes, sino también sus corazones. Es por eso que estamos firmemente
        arraigados en la transmisión de valores fundamentales, como la empatía, la responsabilidad y la excelencia, que
        forman la base de todas nuestras interacciones y enseñanzas.
        <br>
        Nuestra institución se enorgullece de ser un lugar donde los padres y madres de familia confían plenamente en
        nosotros para guiar el crecimiento de sus hijos. Contamos con un equipo de educadores apasionados y comprometidos
        que se esfuerzan incansablemente por inspirar el amor por el aprendizaje y cultivar el potencial de
        cada estudiante.
      </p>
    </div>
    <div class="container__text">
      <h2>Misión</h2>
      <img src="mision.png" alt="">
      <p>
        Nuestra misión en el Colegio Tlamachtiani hoy es proporcionar una educación de alta calidad en un entorno seguro y enriquecedor para nuestros estudiantes de kínder y primaria. 
        <br>
        Nos comprometemos a fomentar su crecimiento académico, social y emocional al enseñar los fundamentos educativos tradicionales y al mismo tiempo, inculcar valores solidos  que promuevan la empatía, la responsabilidad y la excelencia.
      </p>
    </div>
    <div class="container__text">
      <h2>Vision</h2>
      <img src="vision.png" alt="">
      <p>En Colegio Tlamachtiani, Aspiramos a ser líderes en la formación integral de niños y niñas preparándolos para un futuro lleno de éxitos y contribuciones significativas a la sociedad. 
Nuestra visión es ser reconocidos como un referente en educación que nutre el intelecto y el carácter empoderando a nuestros estudiantes para que cumplan sus sueños y se conviertan en ciudadanos conscientes y éticos.
      </p>
    </div>
    <div class="container__text">
      <h2>Objetivo</h2>
      <img src="goal.png" alt="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque consectetur provident, quam reiciendis,
        earum deleniti est amet veniam praesentium dicta aliquid eaque fuga quas? Eos eius assumenda adipisci voluptate.
      </p>
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
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

.container__text {
  padding: 25px 40px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  width: 45%;
}

h2 {
  margin: 0;
  line-height: 1;
  font-size: 3.1em;
  letter-spacing: -1px;
  padding-top: 30vh;
}

img{
  width: 60%;
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
