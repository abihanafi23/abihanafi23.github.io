<template>
  <div class="relative">
    <!-- Background Decorations -->
    <div class="myshapes myrect-lg rotate-75 absolute -top-40 -left-45"></div>
    <div class="myshapes mycircle-sm absolute -top-10 right-50"></div>
    <div class="myshapes mycircle-md absolute -top-5 left-150"></div>
    <div class="myshapes mycircle-sm absolute top-100 right-90"></div>
    <div class="myshapes myrect-lg rotate-40 absolute top-100 -right-20"></div>
    <div
      class="myshapes myrect-md rotate-45 absolute top-115 left-155 flex justify-center items-center"
      style="
        font-variation-settings:
          'FILL' 1,
          'wght' 400,
          'GRAD' 0,
          'opsz' 100;
      "
    >
      <span class="material-symbols-outlined -rotate-45 text-white text-5xl! animate-bounce">
        keyboard_double_arrow_down
      </span>
    </div>
    <img src="../assets/images/three-lines.svg" class="absolute top-100" alt="" />

    <div
      class="border-10 myborder-blue myrect-lg rotate-45 absolute top-175 left-75 myanimation-spin -z-1"
    ></div>
    <div class="myshapes mycircle-md absolute top-275 left-50 -z-1"></div>
    <div class="myshapes mycircle-sm absolute top-250 right-90 -z-1"></div>
    <!-- End Background Decoration -->

    <!-- Testing -->

    <nav
      :class="[
        'flex justify-between px-20 py-5 inset-x-0 top-0 fixed',
        isScrolled ? 'backdrop-blur-sm shadow-lg' : '',
      ]"
    >
      <h4 class="alex-brush-reguler text-4xl mytext-blue">Portofolio</h4>

      <el-dropdown>
        <button
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 outline-0! hover:bg-gray-50 cursor-pointer"
        >
          <span class="material-symbols-outlined"> menu_open </span>
        </button>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><a href="#about">About Me</a></el-dropdown-item>
            <el-dropdown-item><a href="#projects">Projects</a></el-dropdown-item>
            <el-dropdown-item><a href="#experiences">Work Experiences</a></el-dropdown-item>
            <el-dropdown-item><a href="#educations">Educations</a></el-dropdown-item>
            <el-dropdown-item><a href="#skills">Skills</a></el-dropdown-item>
            <el-dropdown-item><a href="#certificates">Certificates</a></el-dropdown-item>
            <el-dropdown-item><a href="#organizations">Organization</a></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </nav>

    <button
      id="fab"
      @click="scrollToTop"
      :class="[
        'text-center bottom-5 right-5 fixed px-4 py-3 bg-white border-1 border-stone-200 rounded-[100%] shadow-lg transition transform duration-300 ease-in-out hover:bg-stone-200 cursor-pointer',
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ]"
    >
      <span class="material-symbols-outlined text-center"> arrow_upward </span>
    </button>

    <section id="summary">
      <div class="flex justify-between items-center my-35 mx-20">
        <div class="me-20">
          <div>
            <div class="mb-2">
              <h1 class="text-4xl">Hi, I'm Abi Hanafi</h1>
              <h2 class="text-6xl mytext-blue font-bold">Flutter & Fullstack Developer</h2>
            </div>

            <p>
              I have a strong interest in application development, with expertise in building mobile
              applications using Flutter and web applications using Laravel. I was appointed as the
              developer of a Laboratory Reservation application at my university, interned as an IT
              professional for a year, and worked on freelance projects as a Mobile Developer for a
              year. I am very interested in working in a team and look forward to collaborating with
              you.
            </p>
          </div>

          <div class="flex gap-2 mt-10">
            <a
              href="mailto:hanafi.abi50@gmail.com"
              target="_blank"
              class="mybutton mybutton-primary flex gap-2"
            >
              <span class="material-symbols-outlined">mail</span>
              <span>Contact Me</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1dykCi2IG8vEpGQokqWQPA5IeoSRJLZq8/view?usp=sharing"
              target="_blank"
              class="mybutton mybutton-secondary flex gap-2"
            >
              <span class="material-symbols-outlined">draft</span>
              <span>Download Resume</span>
            </a>
          </div>

          <div class="flex gap-2 mt-2">
            <a
              href="https://wa.me/6281806580269"
              target="_blank"
              class="p-2 mybutton-secondary rounded-full cursor-pointer"
            >
              <img src="../assets/icons/whatsapp-white.png" width="20px" alt="" />
            </a>
            <a
              href="https://www.instagram.com/hanafi_abi23/"
              target="_blank"
              class="p-2 mybutton-secondary rounded-full cursor-pointer"
            >
              <img src="../assets/icons/instagram-white.png" width="20px" alt="" />
            </a>
          </div>
        </div>

        <img
          class="rounded-[20px]"
          src="../assets/images/profile.jpg"
          width="300px"
          alt=""
          srcset=""
        />
      </div>
    </section>

    <section id="about" class="mb-40">
      <div class="flex flex-col justify-center items-center mt-80 mb-20">
        <h2 class="text-center text-4xl">About Me</h2>
        <hr width="200px" />
      </div>

      <div class="mx-40">
        I really enjoy programming. Even though it's quite difficult, I still enjoy finding
        solutions to every problem that arises. My interest began in vocational school, with the
        first programming language I learned, C++.
        <br /><br />
        Since then, I've deepened my knowledge of web application development using HTML, CSS,
        JavaScript, PHP, and MySQL queries. To speed up development, I've learned frameworks like
        Laravel, CodeIgniter, Bootstrap, and Flutter. I had an interest in video game development,
        but I put it aside due to the limitations of my hardware.
        <br /><br />
        I believe that self-development requires collaboration. While in college, I joined the IT
        Cyber ​​Community and became an Informatics Engineering Laboratory Assistant at Pamulang
        University. There, I learned how to conduct effective discussions, identify problems and
        find the solutions.
        <br /><br />
        I have an ambition to participate in technological advancement in Indonesia. To achieve
        this, I'm starting with small steps by sharing knowledge within campuses and schools. I hope
        these efforts will be the beginning of bigger strides in the future.
      </div>
    </section>

    <section id="projects" class="mt-40">
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="text-center text-4xl">Projects</h2>
        <hr width="200px" />
      </div>

      <div class="bg-amber-100 py-20">
        <div class="flex items-center gap-20 mx-20">
          <div>
            <h4 class="text-4xl">RESLAB</h4>
            <h6>Pamulang University Laboratory Reservation</h6>
            <br /><br />
            <p>
              An application for managing computer lab usage. Appointed by the Informatics
              Engineering study program, along with two other students, to develop the application
              for 6 months, acting as Fullstack Developers.
            </p>
            <br /><br />
            Specification :
            <ul class="list-disc ms-5">
              <li>Agile Scrum Development Method</li>
              <li>Laravel Livewire</li>
            </ul>
            <br /><br />
            <div class="flex gap-2">
              <img src="../assets/icons/figma.png" width="50" alt="" />
              <img src="../assets/icons/laravel.png" width="50" alt="" />
              <img src="../assets/icons/bootstrap.png" width="50" alt="" />
            </div>
          </div>

          <img src="../assets/images/reslab.png" width="400" alt="" />
        </div>
      </div>

      <div class="bg-rose-400">
        <div class="flex items-center gap-20 mx-20">
          <div class="text-white">
            <h4 class="text-4xl">KASIHKU</h4>
            <h6>Monitoring the Growth of 6-Month-Old Children</h6>
            <br /><br />
            <p>
              An application to monitor children's health and development, and educate parents about
              child care. Become a member of a two-person team with a two-month project timeline.
            </p>
            <br /><br />
            Specification :
            <ul class="list-disc ms-5">
              <li>Bloc State Management</li>
              <li>Flutter Alarm</li>
              <li>Flutter Local Notification</li>
              <li>Firebase Auth, Firestore & Storage</li>
            </ul>
            <br /><br />
            <div class="flex gap-2">
              <img src="../assets/icons/dart.png" width="50" alt="" />
              <img src="../assets/icons/figma.png" width="50" alt="" />
              <img src="../assets/icons/flutter.png" width="50" alt="" />
              <img src="../assets/icons/firebase.png" width="50" alt="" />
            </div>
          </div>

          <img src="../assets/images/kasihku.png" width="300" alt="" />
        </div>
      </div>

      <div class="bg-sky-100">
        <div class="flex items-center gap-20 mx-20">
          <div>
            <h4 class="text-4xl">SERENITY</h4>
            <h6>IT Cyber ​​Community Members' Agenda and Cash Management</h6>
            <br /><br />
            <p>
              An IT Cyber ​​Community member management, cash management, and agenda application. I
              built it from scratch, from concept development to usability.
            </p>
            <br /><br />
            Specification :
            <ul class="list-disc ms-5">
              <li>GetX State Management</li>
              <li>Firebase Auth, Firestore, Storage & Cloud Messaging</li>
            </ul>
            <br /><br />
            <div class="flex gap-2">
              <img src="../assets/icons/dart.png" width="50" alt="" />
              <img src="../assets/icons/figma.png" width="50" alt="" />
              <img src="../assets/icons/flutter.png" width="50" alt="" />
              <img src="../assets/icons/firebase.png" width="50" alt="" />
            </div>
          </div>

          <img src="../assets/images/serenity.png" width="300" alt="" />
        </div>
      </div>
    </section>

    <section id="experiences" class="mt-40 mb-40">
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="text-center text-4xl">Work Experiences</h2>
        <hr width="300px" />
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">Teacher</p>
          <p class="font-semibold text-stone-400">Kalananti by Ruangguru</p>
          <p class="mytext-blue">July 2025 - Now</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>Become the first priority Teacher</li>
            <li>
              Delivering material interactively to increase student interest and learning
              effectiveness
            </li>
            <li>Teaching MIT App Inventor and Python (Google Colab)</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">Mentor</p>
          <p class="font-semibold text-stone-400">Devnest</p>
          <p class="mytext-blue">May 2025 - Now</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>Creating a learning timeline</li>
            <li>Provide project-based teaching to enhance student understanding</li>
            <li>
              Create a mobile application using the Flutter framework and API using the Laravel
              framework
            </li>
            <li>Teaching OOP and MVC principles in PHP Native</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">IT Support</p>
          <p class="font-semibold text-stone-400">PT. Dewa Agricoco Indonesia</p>
          <p class="mytext-blue">March 2024 - Now</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>
              Increase internet network stability by up to 50% by dividing the internet network into
              several points.
            </li>
            <li>
              Implementing Load Balancing to increase network bandwidth by 60% and network stability
              by 20%
            </li>
            <li>Repair and maintain IT infrastructure</li>
            <li>
              Creating a web-based Coconut Plantation Management System using CodeIgniter,
              Bootstrap, and MySQL
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">Informatics Engineering Laboratory Assistant</p>
          <p class="font-semibold text-stone-400">Universitas Pamulang</p>
          <p class="mytext-blue">February 2023 - July 2025</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>
              Entrusted with being on the committee for a seminar attended by over 1,000
              participants
            </li>
            <li>Performed maintenance on equipment in the computer laboratory</li>
            <li>Ensured the order and smooth running of practicals in the computer laboratory</li>
            <li>
              Assisted lecturers in the teaching and learning process in the computer laboratory
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">Admin Processing</p>
          <p class="font-semibold text-stone-400">PT. Global Jet Express</p>
          <p class="mytext-blue">November 2020 - June 2021</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>Sorting and bagging 7,000+ packages a day</li>
            <li>Loading goods for packages that have been processed</li>
            <li>Serving customers who send packages</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-3 p-4 mx-20 border-b-2">
        <div>
          <p class="font-bold">Admin</p>
          <p class="font-semibold text-stone-400">PT. Adira Dinamika Multi Finance</p>
          <p class="mytext-blue">September - November 2018</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc">
            <li>Sort documents by date</li>
            <li>Prepare the documents required by the customer</li>
            <li>Input customer data into the system</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="educations">
      <div class="flex justify-between items-center bg-amber-100">
        <div class="mx-20 my-20">
          <h2 class="text-4xl">Educations</h2>
          <hr width="180px" class="mb-20" />

          <div class="border-s-2 ps-5 mb-10">
            <p class="text-2xl font-semibold">Universitas Pamulang</p>
            <p>Bachelor's Degree in Informatics Engineering</p>
            <p>2021 - 2025</p>
            <p>GPA : 3.68 (Cumlaude)</p>
          </div>

          <div class="border-s-2 ps-5 mb-10">
            <p class="text-2xl font-semibold">SMKN 2 Kabupaten Tangerang</p>
            <p>Computer and Network Engineering</p>
            <p>2017 - 2020</p>
          </div>

          <div class="border-s-2 ps-5 mb-10">
            <p class="text-2xl font-semibold">SMPN 1 Rajeg</p>
            <p>2014 - 2017</p>
          </div>

          <div class="border-s-2 ps-5">
            <p class="text-2xl font-semibold">SDN Rajeg 5</p>
            <p>2008 - 2014</p>
          </div>
        </div>

        <img src="../assets/images/profile-2.png" width="600px" class="mt-1" alt="" />
      </div>
    </section>

    <section id="skills">
      <div class="flex flex-col items-center mt-40 mb-10">
        <h2 class="text-4xl">Skills</h2>
        <hr width="100px" class="mb-20" />
      </div>

      <div class="mx-20 mb-5">
        <h4 class="font-bold">Programming Languages</h4>
        <hr width="200px" class="text-blue-400 border-1" />
        <div class="flex gap-5 py-2">
          <div class="flex flex-col items-center">
            <img src="../assets/icons/dart.png" width="75px" alt="" />
            Dart
          </div>

          <div class="flex flex-col items-center">
            <img src="../assets/icons/html.png" width="75px" alt="" />
            HTML
          </div>

          <div class="flex flex-col items-center">
            <img src="../assets/icons/css.png" width="75px" alt="" />
            CSS
          </div>

          <div class="flex flex-col items-center">
            <img src="../assets/icons/php.png" width="75px" alt="" />
            PHP
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/javascript.png" width="75px" alt="" />
            Javascript
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/cpp.png" width="75px" alt="" />
            C++
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/java.png" width="75px" alt="" />
            Java
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/python.png" width="75px" alt="" />
            Python
          </div>
        </div>
      </div>

      <div class="flex justify-between mx-20 mb-5">
        <div>
          <h4 class="font-bold">Frameworks</h4>
          <hr width="100px" class="text-blue-400 border-1" />
          <div class="flex gap-5 py-2">
            <div class="flex flex-col items-center">
              <img src="../assets/icons/flutter.png" width="75px" alt="" />
              Flutter
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/laravel.png" width="75px" alt="" />
              Laravel
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/codeigniter.png" width="75px" alt="" />
              CodeIgniter
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/vue.png" width="75px" alt="" />
              Vue
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/bootstrap.png" width="75px" alt="" />
              Bootstrap
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/tailwind.png" width="75px" alt="" />
              Tailwind CSS
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-bold">Tools</h4>
          <hr width="50px" class="text-blue-400 border-1" />
          <div class="flex gap-5 py-2">
            <div class="flex flex-col items-center text-center">
              <img src="../assets/icons/github.png" width="75px" alt="" />
              Git <br />
              Version Control
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/firebase.png" width="75px" alt="" />
              Firebase
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/docker.png" width="75px" alt="" />
              Docker
            </div>

            <div class="flex flex-col items-center">
              <img src="../assets/icons/postman.png" width="75px" alt="" />
              Postman
            </div>
          </div>
        </div>
      </div>

      <div class="mx-20 mb-20">
        <h4 class="font-bold">Misc</h4>
        <hr width="100px" class="text-blue-400 border-1" />
        <div class="flex gap-5 py-2">
          <div class="flex flex-col items-center">
            <img src="../assets/icons/troubleshoot.png" width="75px" alt="" />
            Troubleshoot
          </div>

          <div class="flex flex-col items-center">
            <img src="../assets/icons/network.png" width="75px" alt="" />
            Networking
          </div>

          <div class="flex flex-col items-center">
            <img src="../assets/icons/mentor.png" width="75px" alt="" />
            Teacher
          </div>
        </div>
      </div>
    </section>

    <section id="certificates" class="p-20 bg-sky-500">
      <div class="flex flex-col items-center text-white mb-20">
        <h2 class="text-4xl">Certificates</h2>
        <hr width="200px" />
      </div>

      <div class="grid grid-cols-2 gap-5">
        <div class="flex gap-5 px-10 py-5 bg-white rounded-[10px]">
          <div>
            <img src="../assets/icons/badge.png" width="75px" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">TOEFL Prediction Test with a score of 493</h6>
            <p class="font-semibold text-stone-400">Lembaga Bahasa Universitas Pamulang</p>
            <p class="mytext-blue">2025</p>
          </div>
        </div>
        <div class="flex gap-5 px-10 py-5 bg-white rounded-[10px]">
          <div>
            <img src="../assets/icons/badge.png" width="75px" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Ios & Android Mobile Developer</h6>
            <p class="font-semibold text-stone-400">
              Independent Study at PT. Mojadi Aplikasi Indonesia
            </p>
            <p class="mytext-blue">2023</p>
          </div>
        </div>
        <div class="flex gap-5 px-10 py-5 bg-white rounded-[10px]">
          <div>
            <img src="../assets/icons/badge.png" width="75px" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Junior Network Administrator</h6>
            <p class="font-semibold text-stone-400">Badan Nasional Sertifikasi Profesi</p>
            <p class="mytext-blue">2022</p>
          </div>
        </div>
        <div class="flex gap-5 px-10 py-5 bg-white rounded-[10px]">
          <div>
            <img src="../assets/icons/badge.png" width="75px" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Junior Web Developer</h6>
            <p class="font-semibold text-stone-400">Badan Nasional Sertifikasi Profesi</p>
            <p class="mytext-blue">2021</p>
          </div>
        </div>
      </div>
    </section>

    <section id="organizations" class="m-20">
      <div class="flex flex-col items-center">
        <h2 class="text-4xl">Organization</h2>
        <hr width="200px" class="mb-10" />
      </div>

      <div class="grid grid-cols-2 p-4 mx-20">
        <div>
          <p class="font-bold">IT Cyber Community Unpam</p>
          <p class="font-semibold text-stone-400">Research and Development Division</p>
          <p class="mytext-blue">2023 - 2024</p>
        </div>

        <div>
          <ul class="list-disc">
            <li>Creating a work plan for the next 1.5 years</li>
            <li>Creating concepts and teaching other members</li>
            <li>Becoming the events division for the 12<sup>th</sup> anniversary agenda</li>
            <li>
              Becoming the consumption division for the 13<sup>th</sup> and 14<sup>th</sup>
              education agendas
            </li>
            <li>Creating an application design using Figma</li>
            <li>Creating an Android application using Flutter</li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="bg-stone-100 border-t-1 border-sky-400 text-sm">
      <div class="flex justify-between py-2 px-20">
        <div>
          <h6 class="font-bold">Built with :</h6>
          <ul>
            <li>Figma</li>
            <li>Vue</li>
            <li>Tailwind CSS</li>
            <li>Google Fonts</li>
            <li>Google Icons</li>
          </ul>
        </div>

        <div>
          <h6 class="font-bold">Special Thanks to :</h6>
          <ul>
            <li><a href="https://icons8.com/">Icons8</a></li>
          </ul>
        </div>

        <div>
          <h6 class="font-bold">Contact Me :</h6>
          <ul>
            <li>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined">mail</span> hanafi.abi50@gmail.com
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <img src="../assets/icons/whatsapp.png" width="24px" alt="" /> +62 81806580269
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <img src="../assets/icons/instagram.png" width="24px" alt="" /> hanafi_abi23
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <img src="../assets/icons/github.png" width="24px" alt="" /> abihanafi23
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t-2 border-stone-200 text-center font-semibold p-2">
        &copy; 2025. Dibuat Oleh Abi Hanafi
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({ top: 0 })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
