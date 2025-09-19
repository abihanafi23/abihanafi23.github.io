<template>
  <div class="relative">
    <!-- Background Decorations -->
    <div class="myshapes myrect-lg rotate-75 absolute -top-40 -left-45"></div>
    <div class="myshapes mycircle-sm absolute -top-10 right-50 -z-1 lg:z-1"></div>
    <div class="myshapes mycircle-md absolute -top-5 left-150 -z-1 lg:z-1"></div>
    <div class="myshapes mycircle-sm absolute top-100 right-90 -z-1 lg:z-1"></div>
    <div
      class="myshapes myrect-lg rotate-40 absolute top-100 -right-20 hidden lg:block lg:z-1"
    ></div>
    <div class="hidden lg:block">
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
    </div>
    <img
      src="../assets/images/three-lines.svg"
      class="absolute top-100 hidden lg:block lg:z-1"
      alt=""
    />

    <div
      class="border-10 myborder-blue myrect-lg rotate-45 absolute top-175 left-75 myanimation-spin -z-1"
    ></div>
    <div class="myshapes mycircle-md absolute top-275 left-50 -z-1"></div>
    <div class="myshapes mycircle-sm absolute top-250 right-90 -z-1"></div>
    <!-- End Background Decoration -->

    <nav
      ref="dropdownRef"
      :class="[
        'flex justify-between px-5 sm:px-20 py-5 inset-x-0 top-0 fixed z-50',
        isScrolled ? 'backdrop-blur-sm shadow-lg' : '',
      ]"
    >
      <h4 class="alex-brush-reguler text-4xl mytext-blue">Portofolio</h4>

      <div class="flex gap-4 items-center">
        <button
          @click="toggleDarkMode"
          class="relative w-14 h-8 rounded-full transition-colors duration-500"
          :class="isDarkMode ? 'bg-black' : 'bg-stone-100'"
        >
          <span
            :class="[
              'absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-500',
              isDarkMode ? 'translate-x-6 mymoon' : 'bg-linear-to-tr from-stone-100 to-sky-500',
            ]"
          ></span>
        </button>

        <button
          @click="toggleDropdown"
          :class="[
            'inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 outline-0! cursor-pointer',
            isDarkMode ? 'bg-black hover:bg-stone-800' : 'bg-white hover:bg-gray-50',
          ]"
        >
          <span class="material-symbols-outlined">{{ isMenuOpen ? 'close' : 'menu_open' }} </span>
        </button>
      </div>

      <!-- Dropdown Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-75 opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="max-h-75 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="isMenuOpen"
          :class="[
            'w-48 fixed top-17 right-5 sm:right-20 shadow-2xl border-1 rounded-lg',
            isDarkMode ? 'bg-black border-stone-800' : 'bg-white border-stone-100',
          ]"
        >
          <a href="#about"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500 rounded-t-lg">
              About Me
            </div></a
          >
          <a href="#projects"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500">Projects</div></a
          >
          <a href="#experiences"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500">Work Experiences</div></a
          >
          <a href="#educations"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500">Educations</div></a
          >
          <a href="#skills"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500">Skills</div></a
          >
          <a href="#certificates"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500">Certificates</div></a
          >
          <a href="#organizations"
            ><div class="px-4 py-2 hover:bg-sky-100 hover:text-sky-500 rounded-b-lg">
              Organization
            </div></a
          >
        </div>
      </transition>
    </nav>

    <button
      id="fab"
      @click="scrollToTop"
      :class="[
        'text-center bottom-5 right-5 fixed px-4 py-3 border-1 rounded-[100%] shadow-lg transition transform duration-300 ease-in-out cursor-pointer',
        isScrolled ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-10',
        isDarkMode
          ? 'bg-black border-stone-800 hover:bg-stone-600'
          : 'bg-white border-stone-200 hover:bg-stone-200',
      ]"
    >
      <span class="material-symbols-outlined text-center"> arrow_upward </span>
    </button>

    <section id="summary" class="mx-20 my-35">
      <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-20">
        <div>
          <div>
            <div class="mb-2">
              <h1 class="text-4xl">Hi, I'm Abi Hanafi</h1>
              <h2 class="text-6xl mytext-blue font-bold">Fullstack & Flutter Developer</h2>
            </div>

            <p class="text-xl">
              I am a Fullstack and Mobile Developer with experience in Flutter and Laravel, proven
              through university projects, IT work, and freelance projects, and I thrive in
              collaborative team environments.
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/hanafi_abi23/"
              target="_blank"
              class="p-2 mybutton-secondary rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path
                      d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"
                    ></path>
                  </g>
                </g>
              </svg>
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

    <section
      id="about"
      class="mx-5 sm:mx-20 mt-80 mb-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="text-center text-4xl">About Me</h2>
        <hr width="200px" />
      </div>

      <div class="text-lg">
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
        Cyber ​​Community and became an Informatics Engineering Laboratory Assistant at Universitas
        Pamulang. There, I learned how to conduct effective discussions, identify problems and find
        the solutions.
        <br /><br />
        I have an ambition to participate in technological advancement in Indonesia. To achieve
        this, I'm starting with small steps by sharing knowledge within campuses and schools. I hope
        these efforts will be the beginning of bigger strides in the future.
      </div>
    </section>

    <section id="projects" class="my-40">
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="text-center text-4xl">Projects</h2>
        <hr width="200px" />
      </div>

      <div :class="isDarkMode ? 'mybg-brown' : 'bg-amber-100'">
        <div
          class="flex flex-col-reverse lg:flex-row items-center justify-around mx-5 sm:mx-20"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div class="flex flex-col justify-end">
            <h4 class="text-6xl">RESLAB</h4>
            <h6 class="text-2xl italic">Universitas Pamulang Laboratory Reservation</h6>
            <br /><br />
            <div class="flex items-center gap-2 justify-center lg:justify-start mb-15">
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/figma.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/laravel.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/bootstrap.png"
                width="50"
                alt=""
              />
              <a
                href="https://reslab.unpam.ac.id/"
                target="_blank"
                class="opacity-50 hover:opacity-100"
                ><div
                  class="flex items-center gap-2 rounded-lg px-5 py-2 bg-black text-white ms-10"
                >
                  <span>Visit Website</span>
                  <span class="material-symbols-outlined"> open_in_new </span>
                </div></a
              >
            </div>
          </div>

          <img
            class="hover:scale-[1.1] duration-300 ease-out"
            src="../assets/images/reslab.png"
            width="400"
            alt=""
          />
        </div>
      </div>

      <div :class="['py-20', isDarkMode ? 'bg-rose-900' : 'bg-rose-400']">
        <div
          class="flex flex-col lg:flex-row items-center justify-around mx-5 sm:mx-20 gap-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="../assets/images/kasihku.png"
            class="w-48 hover:scale-[1.1] duration-300 ease-out"
            alt=""
          />

          <div class="text-white">
            <h4 class="text-6xl">KASIHKU</h4>
            <h6 class="text-2xl italic">Monitoring the Growth of 6-Month-Old Children</h6>

            <br /><br />
            <div class="flex justify-center lg:justify-start gap-2">
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/dart.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/figma.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/flutter.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/firebase.png"
                width="50"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div :class="['py-20', isDarkMode ? 'bg-sky-900' : 'bg-sky-100']">
        <div
          class="flex flex-col-reverse lg:flex-row items-center justify-around mx-5 sm:mx-20 gap-10 lg:gap-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <h4 class="text-6xl">SERENITY</h4>
            <h6 class="text-2xl italic">
              IT Cyber ​​Community Members' Agenda and Cash Management
            </h6>

            <br /><br />
            <div class="flex justify-center lg:justify-start gap-2">
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/dart.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/figma.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/flutter.png"
                width="50"
                alt=""
              />
              <img
                class="opacity-50 hover:opacity-100"
                src="../assets/icons/firebase.png"
                width="50"
                alt=""
              />
            </div>
          </div>

          <img
            src="../assets/images/serenity.png"
            class="w-48 hover:scale-[1.1] duration-300 ease-out"
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="experiences" class="mx-5 sm:mx-20 my-40">
      <div class="flex flex-col justify-center items-center mb-20">
        <h2 class="text-center text-4xl">Work Experiences</h2>
        <hr width="300px" />
      </div>

      <div
        class="flex lg:grid flex-col lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">Teacher</p>
          <p class="font-semibold text-stone-400">Kalananti by Ruangguru</p>
          <p class="mytext-blue">July 2025 - Now</p>
        </div>

        <div class="lg:col-span-2">
          <ul class="list-disc ps-5">
            <li>Become the first priority Teacher</li>
            <li>
              Delivering material interactively to increase student interest and learning
              effectiveness
            </li>
            <li>Teaching MIT App Inventor and Python (Google Colab)</li>
          </ul>
        </div>
      </div>

      <div
        class="flex lg:grid flex-col lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">Mentor</p>
          <p class="font-semibold text-stone-400">Devnest</p>
          <p class="mytext-blue">May 2025 - Now</p>
        </div>

        <div class="lg:col-span-2">
          <ul class="list-disc ps-5">
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

      <div
        class="flex flex-col lg:grid lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">IT Support</p>
          <p class="font-semibold text-stone-400">PT. Dewa Agricoco Indonesia</p>
          <p class="mytext-blue">March 2024 - Now</p>
        </div>

        <div class="col-span-2">
          <ul class="list-disc ps-5">
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

      <div
        class="flex lg:grid flex-col lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">Informatics Engineering Laboratory Assistant</p>
          <p class="font-semibold text-stone-400">Universitas Pamulang</p>
          <p class="mytext-blue">February 2023 - July 2025</p>
        </div>

        <div class="lg:col-span-2">
          <ul class="list-disc ps-5">
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

      <div
        class="flex lg:grid flex-col lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">Admin Processing</p>
          <p class="font-semibold text-stone-400">PT. Global Jet Express</p>
          <p class="mytext-blue">November 2020 - June 2021</p>
        </div>

        <div class="lg:col-span-2">
          <ul class="list-disc ps-5">
            <li>Sorting and bagging 7,000+ packages a day</li>
            <li>Loading goods for packages that have been processed</li>
            <li>Serving customers who send packages</li>
          </ul>
        </div>
      </div>

      <div
        class="flex lg:grid flex-col lg:grid-cols-3 p-4 border-b-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <p class="font-bold">Admin</p>
          <p class="font-semibold text-stone-400">PT. Adira Dinamika Multi Finance</p>
          <p class="mytext-blue">September - November 2018</p>
        </div>

        <div class="lg:col-span-2">
          <ul class="list-disc ps-5">
            <li>Sort documents by date</li>
            <li>Prepare the documents required by the customer</li>
            <li>Input customer data into the system</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="educations">
      <div
        :class="['flex justify-between items-center', isDarkMode ? 'mybg-brown' : 'bg-amber-100']"
      >
        <div class="mx-20 my-20">
          <h2 class="text-4xl">Educations</h2>
          <hr width="180px" class="mb-20" />

          <div class="border-s-2 ps-5 mb-10" data-aos="fade-right" data-aos-duration="1000">
            <p class="text-2xl font-semibold">Universitas Pamulang</p>
            <p>Bachelor's Degree in Informatics Engineering</p>
            <p>2021 - 2025</p>
            <p>GPA : 3.68 (Cumlaude)</p>
          </div>

          <div class="border-s-2 ps-5 mb-10" data-aos="fade-right" data-aos-duration="1000">
            <p class="text-2xl font-semibold">SMKN 2 Kabupaten Tangerang</p>
            <p>Computer and Network Engineering</p>
            <p>2017 - 2020</p>
          </div>

          <div class="border-s-2 ps-5 mb-10" data-aos="fade-right" data-aos-duration="1000">
            <p class="text-2xl font-semibold">SMPN 1 Rajeg</p>
            <p>2014 - 2017</p>
          </div>

          <div class="border-s-2 ps-5" data-aos="fade-right" data-aos-duration="1000">
            <p class="text-2xl font-semibold">SDN Rajeg 5</p>
            <p>2008 - 2014</p>
          </div>
        </div>

        <img
          src="../assets/images/profile-2.png"
          width="600px"
          class="mt-1 hidden lg:block"
          alt=""
        />
      </div>
    </section>

    <section id="skills" class="my-40">
      <div class="flex flex-col items-center">
        <h2 class="text-4xl">Skills</h2>
        <hr width="100px" class="mb-20" />
      </div>

      <div class="mx-5 sm:mx-20 mb-5">
        <h4 class="font-bold">Programming Languages</h4>
        <hr width="200px" class="text-blue-400 border-1" />
        <div class="flex flex-col lg:flex-row gap-5 py-2 font-semibold">
          <GradientCard
            :colors="['#00a8e8', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src="../assets/icons/dart.png" width="50px" alt="" />
            Dart</GradientCard
          >

          <GradientCard
            :colors="['#f97316', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img src="../assets/icons/html.png" width="50px" alt="" />
            HTML
          </GradientCard>

          <GradientCard
            :colors="['#00a8e8', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1400"
          >
            <img src="../assets/icons/css.png" width="50px" alt="" />
            CSS
          </GradientCard>

          <GradientCard
            :colors="['#6366f1', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1600"
          >
            <img src="../assets/icons/php.png" width="50px" alt="" />
            PHP
          </GradientCard>

          <GradientCard
            :colors="['#eab308', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1800"
          >
            <img src="../assets/icons/javascript.png" width="50px" alt="" />
            Javascript
          </GradientCard>

          <GradientCard
            :colors="['#00a8e8', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src="../assets/icons/cpp.png" width="50px" alt="" />
            C++
          </GradientCard>

          <GradientCard
            :colors="['#f97316', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2200"
          >
            <img src="../assets/icons/java.png" width="50px" alt="" />
            Java
          </GradientCard>

          <GradientCard
            :colors="['#eab308', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2400"
          >
            <img src="../assets/icons/python.png" width="50px" alt="" />
            Python
          </GradientCard>
        </div>
      </div>

      <div class="mx-5 sm:mx-20 mb-5">
        <h4 class="font-bold">Frameworks</h4>
        <hr width="100px" class="text-blue-400 border-1" />
        <div class="flex flex-col lg:flex-row gap-5 py-2">
          <GradientCard
            :colors="['#00a8e8', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src="../assets/icons/flutter.png" width="50px" alt="" />
            Flutter
          </GradientCard>

          <GradientCard
            :colors="['#ef4444', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1400"
          >
            <img src="../assets/icons/laravel.png" width="50px" alt="" />
            Laravel
          </GradientCard>

          <GradientCard
            :colors="['#f97316', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1800"
          >
            <img src="../assets/icons/codeigniter.png" width="50px" alt="" />
            CodeIgniter
          </GradientCard>

          <GradientCard
            :colors="['#22c55e', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2200"
          >
            <img src="../assets/icons/vue.png" width="50px" alt="" />
            Vue
          </GradientCard>

          <GradientCard
            :colors="['#6366f1', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2600"
          >
            <img src="../assets/icons/bootstrap.png" width="50px" alt="" />
            Bootstrap
          </GradientCard>

          <GradientCard
            :colors="['#3b82f6', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img src="../assets/icons/tailwind.png" width="50px" alt="" />
            Tailwind CSS
          </GradientCard>
        </div>
      </div>

      <div class="mx-5 sm:mx-20 mb-5">
        <h4 class="font-bold">Tools</h4>
        <hr width="50px" class="text-blue-400 border-1" />
        <div class="flex flex-col lg:flex-row gap-5 py-2">
          <GradientCard
            :colors="[isDarkMode ? '#ffffff' : '#000000', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
              :class="isDarkMode ? 'text-white' : 'text-black'"
              fill="currentColor"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
            Git Version Control
          </GradientCard>

          <GradientCard
            :colors="['#eab308', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1600"
          >
            <img src="../assets/icons/firebase.png" width="50px" alt="" />
            Firebase
          </GradientCard>

          <GradientCard
            :colors="['#3b82f6', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2200"
          >
            <img src="../assets/icons/docker.png" width="50px" alt="" />
            Docker
          </GradientCard>

          <GradientCard
            :colors="['#f97316', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2800"
          >
            <img src="../assets/icons/postman.png" width="50px" alt="" />
            Postman
          </GradientCard>
        </div>
      </div>

      <div class="mx-5 sm:mx-20">
        <h4 class="font-bold">Misc</h4>
        <hr width="100px" class="text-blue-400 border-1" />
        <div class="flex flex-col lg:flex-row gap-5 py-2">
          <GradientCard
            :colors="[isDarkMode ? '#ffffff' : '#000000', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="../assets/icons/troubleshoot.png"
              width="50px"
              :class="isDarkMode ? 'invert' : ''"
              alt=""
            />
            Troubleshoot
          </GradientCard>

          <GradientCard
            :colors="[isDarkMode ? '#ffffff' : '#000000', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="../assets/icons/network.png"
              width="50px"
              :class="isDarkMode ? 'invert' : ''"
              alt=""
            />
            Networking
          </GradientCard>

          <GradientCard
            :colors="[isDarkMode ? '#ffffff' : '#000000', 'transparent']"
            :class="[
              'flex items-center gap-2 px-5 py-2 rounded-lg',
              isDarkMode ? 'bg-black' : 'bg-stone-100',
            ]"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              src="../assets/icons/mentor.png"
              width="50px"
              :class="isDarkMode ? 'invert' : ''"
              alt=""
            />
            Teacher
          </GradientCard>
        </div>
      </div>
    </section>

    <section id="certificates" :class="['p-20', isDarkMode ? 'bg-sky-900' : 'bg-sky-500']">
      <div class="flex flex-col items-center text-white mb-20">
        <h2 class="text-4xl">Certificates</h2>
        <hr width="200px" />
      </div>

      <div class="grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-5">
        <div
          :class="['flex gap-5 px-10 py-5 rounded-[10px]', isDarkMode ? 'bg-black' : 'bg-white']"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <img src="../assets/icons/badge.png" width="75px" class="hidden md:block" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">TOEFL Prediction Test with a score of 493</h6>
            <p class="font-semibold text-stone-400">Lembaga Bahasa Universitas Pamulang</p>
            <p class="mytext-blue">2025</p>
          </div>
        </div>
        <div
          :class="['flex gap-5 px-10 py-5 rounded-[10px]', isDarkMode ? 'bg-black' : 'bg-white']"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div>
            <img src="../assets/icons/badge.png" width="75px" class="hidden md:block" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Ios & Android Mobile Developer</h6>
            <p class="font-semibold text-stone-400">
              Independent Study at PT. Mojadi Aplikasi Indonesia
            </p>
            <p class="mytext-blue">2023</p>
          </div>
        </div>
        <div
          :class="['flex gap-5 px-10 py-5 rounded-[10px]', isDarkMode ? 'bg-black' : 'bg-white']"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <img src="../assets/icons/badge.png" width="75px" class="hidden md:block" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Junior Network Administrator</h6>
            <p class="font-semibold text-stone-400">Badan Nasional Sertifikasi Profesi</p>
            <p class="mytext-blue">2022</p>
          </div>
        </div>
        <div
          :class="['flex gap-5 px-10 py-5 rounded-[10px]', isDarkMode ? 'bg-black' : 'bg-white']"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div>
            <img src="../assets/icons/badge.png" width="75px" class="hidden md:block" alt="" />
          </div>
          <div>
            <h6 class="font-bold text-xl">Junior Web Developer</h6>
            <p class="font-semibold text-stone-400">Badan Nasional Sertifikasi Profesi</p>
            <p class="mytext-blue">2021</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="organizations"
      class="mx-5 sm:mx-20 my-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="flex flex-col items-center">
        <h2 class="text-4xl">Organization</h2>
        <hr width="200px" class="mb-10" />
      </div>

      <div class="flex lg:grid flex-col lg:grid-cols-2 p-4">
        <div>
          <p class="font-bold">IT Cyber Community Unpam</p>
          <p class="font-semibold text-stone-400">Research and Development Division</p>
          <p class="mytext-blue">2023 - 2024</p>
        </div>

        <div>
          <ul class="list-disc ps-5">
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

    <footer
      :class="[
        'border-t-1 text-sm',
        isDarkMode ? 'bg-stone-700 border-sky-900' : 'bg-stone-100 border-sky-400',
      ]"
    >
      <div class="flex flex-col md:flex-row justify-between gap-5 py-2 px-20">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  :class="isDarkMode ? 'text-white' : 'text-black'"
                  fill="currentColor"
                >
                  <path
                    d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                  ></path>
                </svg>
                +62 818-0658-0269
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  :class="isDarkMode ? 'text-white' : 'text-black'"
                  fill="currentColor"
                >
                  <path
                    d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                  ></path>
                </svg>
                hanafi_abi23
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  :class="isDarkMode ? 'text-white' : 'text-black'"
                  fill="currentColor"
                >
                  <path
                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                  ></path>
                </svg>
                abihanafi23
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t-2 border-stone-200 text-center font-semibold p-2">
        &copy; 2025. Made by Abi Hanafi
      </div>
    </footer>
  </div>
</template>

<script setup>
import GradientCard from '@/components/GradientCard.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const dropdownRef = ref(null)
const isScrolled = ref(false)
const isDarkMode = ref(false)

const toggleDropdown = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({ top: 0 })
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value == true) {
    document.documentElement.classList.add('bg-stone-800', 'text-white')
  } else {
    document.documentElement.classList.remove('bg-stone-800', 'text-white')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>
