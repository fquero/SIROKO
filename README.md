<h1>Prueba Técnica Front Siroko</h1>
<h2>Fran Quero</h2>
<h3>SOLID</h3>
<p>Tras analizar los requisitos de la práctica y las indicaciones en el diseño Figma, he diseñado una estructura de interfaces y clases para desarrollar la práctiva bajo los principios SOLID.</p>
<p>Siguiendo el patrón de diseño Strategy he definido las interfaces necesarias para abstraer la gestión de cupones y permitir la extensión en el futuro permitiendo añadir nuevos tipos de cupones sin afectar al diseño original. He desarrollado el CuponRadio y podrían añadirse más tipos implementando la interfaz ICupon.</p>
<p>También he planteado diferentes formas de gestionar los datos de los cupones. En la práctica he usado LocalStorage, pero implementando la interfaz <em>IRespuestasManager</em> se podrán añadir persistencia en BD, API o cualquier otro medio.</p>
<p>A este planteamiento sería posible aplicar el patrón Factory definiendo los diferentes tipos de cupón o de gestión de datos cuando se añadan nuevos tipos.</p>
<p><img src="https://drive.google.com/uc?id=1LwygHHexXyAEoXTi5AGwQcVbZeQjCV8I" alt="UML práctica front Siroko"/></p>
