<template>
  <div class="home">

    <!-- HEADER -->
    <header>
        <div class="title-text" data-aos="fade">
            <p >UX/UI Web Design</p>
            <h1 class="title">NATALIO <br> GUARDEÑO</h1>
            <h2>I design and create web sites <br> and illustrations</h2>
        </div>
        <img src="@/assets/images/header-circles.svg" alt="" class="circles" style="margin-left: 100px;" data-aos="fade">
        <img src="@/assets/images/svg-header.svg" alt="decodradohome" class="header-img">
         
        <div class="responsive-menu">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
        </div>
    </header>

    <!-- ABOUT -->
    <!--ABOUT-->
    <section id="about" data-aos="fade">

        <img src="@/assets/images/doslineas.svg" alt="" class="about-lines">

        <div class="about-section">
            <div class="about-text">
                <h2 class="section-title">ABOUT ME</h2>
                <p>Hi I am Natalio, I´m a front-end developer and a designer that creates and develop web sites.</p> 
                    <br>
                <p> I also create illustrations and designs for social media.</p><br>
                <p>As personal interests I like to spend time close to nature , read, make music and draw.</p>
            </div>
            <div class="about-photo">
                <img src="@/assets/images/foto-about.png" alt="me">
            </div>
        </div>
        <div class="skills-section">
            <div class="skills">
                <h4>Design</h4>
                <ul>
                    <li>Adobe Xd</li>
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                </ul>
            </div>
            <div class="skills">
                <h4>Development</h4>
                <ul>
                    <li>HTML & CSS</li>
                    <li>Javascript</li>
                    <li>React & Vue </li>
                    <li>Python & Django </li>
                    <li>Bootstrap</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            <img src="@/assets/images/doslineas.svg" alt="" class="about-lines2">
        </div>
    </section>
  </div> 


<!-- WORK -->
    <section id="work" class="work-container">
        <h2 class="section-title">MY WORKS</h2>
        <!-- ina -->
       <div class="project-container" data-aos="fade-left">
            <img src="@/assets/images/home-ina.png" alt="photo-ina">        
            <div class="project-text">
               <p>In this project I had the goal to improve the UX/UI of a web site. The client gave me the photos and the new text that I have to use, also explained me the kind of colors and look he wanted. The web site was created with WordPress so I created a design that can be developed with this CMS.
               </p>
               
               <div class="btn-container-responsive">
                 <a href="/project-one" target="_blank"><button>read more</button></a>
                 <a href="https://inakihurtado.com" target="_blank"><button>see live</button></a>    
               </div>      
            </div>            
       </div>

        <!--fabri  -->

       <div class="project-container" data-aos="fade-right">
            <div class="project-text">
                <p>This is a re-design of a website, I had to change the looks of the main page with the intention of improve the user experience.
                </p>
                <div class="btn-container-responsive" >
                    <a href="/project-two" target="_blank"> <button>read more</button> </a>
                    <a href="https://kfdrehabilitacion.com" target="_blank"><button>see live</button></a>
                </div>
            </div>
            <img src="@/assets/images/home-fabri.png" alt="photo-fabri"> 
       </div>

    <!-- pablo -->

    <div class="project-container" data-aos="fade-left">
        <img src="@/assets/images/home-pablo.png" alt="photo-pablo"> 
        <div class="project-text">
            <p>This is a project I design for an artist that wanted a website to show the paintnings he sells. The client had to be able to edit the photo gallery to add or delete paintings.
            </p>

            <div class="btn-container-responsive" >
                <a href="/project-three" target="_blank"><button>read more</button></a>
                <a href="https://phmsarte.000webhostapp.com/" target="_blank"><button>see live</button> </a>   
              </div>
        </div>     
    </div>

    <!-- developer -->

    <div class="project-container" data-aos="fade">

        <div class="project-text">
            <div class="project-border">
                <h4>Developer Projects</h4>
                <p>
                    I create some projects to put in practice what I´m learning. In this projects I have used technologies as Javascript, React, Vue and Django.
                </p>

                <a href="/Developer"><button>see more</button></a>
            </div>  
        </div>

        <div class="project-text">
            <div class="project-border">
                <h4>Illustrations</h4>
                <p>
                    I make vectorial designs for web sites or apps, and I also create illustrations with photoshop.
                </p>

               <a href="/Illustrations"><button>see more</button></a>
            </div>
        </div>

          
        
        
        </div> 
        <img src="@/assets/images/trazado14.svg" alt="lineacurva" class="linea-curva">
    </section>

<!-- CONTACT -->
    <section id="contact" data-aos="fade">

        <div class="contact-elements">
            <img src="@/assets/images/circulos.svg" alt="circles" class="contact-circles">

            <div class="links">
                <ul class="lista">
                <li> <a href="https://github.com/natalio540"><img src="@/assets/images/github.svg" alt="github" width="40px"></a> </li>
                <li> <a href="https://dribbble.com/natogua91"><img src="@/assets/images/dribbble.svg" alt="linkedin" width="40px"></a> </li>
                <li> <a href="https://www.linkedin.com/in/natalio-guarde%C3%B1o/"><img src="@/assets/images/linkedin.svg" alt="dribbble" width="40px"></a></li>
                </ul>
                <div class="line"></div>
                <ul class="lista">
                    <li>natalio.guardeno@gmail.com</li>  
                </ul>
            </div>
             
            <img src="@/assets/images/ratoncito.png" alt="ratoncito" class="img-contact">
        </div>
    </section>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
}
</script>
