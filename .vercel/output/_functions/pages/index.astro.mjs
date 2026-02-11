import { f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, k as renderComponent, l as Fragment } from '../chunks/astro/server_C7LFaYYO.mjs';
import 'piccolore';
import { B as BRANDS, $ as $$Layout } from '../chunks/Layout_QnObkIlT.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$BrandSlider = createComponent(($$result, $$props, $$slots) => {
  const brands = BRANDS;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section class="max-w-7xl mx-auto  py-16"> <div class="text-center p-6"> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase text-center ">NUESTRAS MARCAS</h3> <h2 class=" text-[24px] font-bold font-bold text-[var(--color-text-default)] tracking-tight">\n\xA1Representamos marcas l\xEDderes a nivel mundial\xA1\n</h2> <p class="text-[var(--color-green-dark)] text-base tracking-[0.5px] ">Trabajamos directamente con las mejores marcas para ofrecer equipos confiables, duraderos y cl\xEDnicamente validados</p> </div> <div class="relative w-full overflow-hidden"> <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"></div> <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div> <div class="glide" id="BrandSlider"> <div class="glide__track" data-glide-el="track"> <ul class="glide__slides"> ', ` </ul> </div> <!-- <div data-glide-el="controls">
          <button data-glide-dir="<" aria-label="Anterior" class="group flex items-center justify-center w-[56px] h-[32px] rounded-full bg-white border border-black cursor-pointer transition hover:bg-black lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" class="fill-current text-black transition group-hover:text-white">
              <path d="M17 11H9.41l3.3-3.29a1 1 0 10-1.42-1.42L6.29 11.29a1 1 0 000 1.42l5 5a1 1 0 001.42-1.42L9.41 13H17a1 1 0 000-2z" fill="currentColor"/>
            </svg>
          </button>
          <button data-glide-dir=">" aria-label="Siguiente" class="group flex items-center justify-center w-[56px] h-[32px] rounded-full bg-white border border-black cursor-pointer transition hover:bg-black lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" class="fill-current text-black transition group-hover:text-white">
              <path d="M7 11h7.59l-3.3-3.29a1 1 0 111.42-1.42l5 5a1 1 0 010 1.42l-5 5a1 1 0 11-1.42-1.42L14.59 13H7a1 1 0 010-2z" fill="currentColor"/>
            </svg>
          </button>
        </div> --> </div> </div> </section> <script type="module">
  const slider = document.querySelector('#BrandSlider');

  if (slider) {
    new Glide(slider, {
      type: 'carousel',
      perView: 8,
      gap: 0,
      autoplay: 2000,
      hoverpause: true,
      rewind: false,
      breakpoints: {
        1024: { perView: 4 },
        640: { perView: 2 }
      }
    }).mount();
  }
<\/script>`])), maybeRenderHead(), brands.map((brand) => renderTemplate`<li class="glide__slide flex justify-center items-center p-6" style="width: 158px;"> <a href="nuestras-marcas/" class="hover-scale-img block"> <img${addAttribute(brand ? `/temp/marcas/${brand.logo}` : "/temp/categorias/default-logo.png", "src")}${addAttribute(brand.name, "alt")} class="h-[40px] w-auto object-contain" loading="lazy" decoding="async"> </a> </li>`));
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/components/sections/BrandSlider.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$PromotionSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Secci\xF3n slider de promociones -->", `<section class="py-6 px-8 max-w-7xl mx-auto flex flex-col gap-6"> <div class="text-center "> <h2 class="text-[24px] font-bold text-[var(--color-text-default)] tracking-tight text-left">
Nuestras promociones
</h2> </div> <div class="glide" id="PromotionSlider"> <div class="glide__track" data-glide-el="track"> <ul class="glide__slides"> <li class="glide__slide flex flex-col items-center justify-center  bg-white rounded shadow "> <img src="/temp/promociones/image 1.png" alt="Promoci\xF3n 1" class="h-full w-auto object-contain"> </li> </ul> </div> </div> </section> <script type="module">
  const slider = document.querySelector('#PromotionSlider');

  if (slider) {
    new Glide(slider, {
    type: 'slider',
    perView: 1,
    gap: 0,
    hoverpause: true,
    breakpoints: {
      1024: {
        perView: 1
      },
      640: {
        perView: 1
      }
    }
    }).mount();
  }
<\/script>`])), maybeRenderHead());
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/components/sections/PromotionSlider.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const dataHome = {};
  const marcas = [
    {
      name: "Neurofisiolog\xEDa",
      slug: "neurofisiologia",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad.png"
    },
    {
      name: "Neurocirug\xEDa",
      slug: "neurocirugia",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad-1.png"
    },
    {
      name: "Neuromodulaci\xF3n",
      slug: "neuromodulacion",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad-2.png"
    },
    {
      name: "Rehabilitaci\xF3n",
      slug: "rehabilitacion",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad-3.png"
    },
    {
      name: "Neurovascular",
      slug: "neurovascular",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad-4.png"
    },
    {
      name: "Consumibles",
      slug: "consumibles",
      isActive: true,
      iconImage: "/temp/categorias/img - especialidad-5.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Med Rent - Distribuimos las mejores marcas de equipo m\xE9dico", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 rounded-a-[24px] pt-6 pr-4 pb-0 pl-4 md:py-6 md:px-6 lg:px-[135px] lg:py-6" data-astro-cid-j7pv25f6> <!-- Columna 1: Encabezado --> <div class="space-y-2 p-0 md:pt-16 md:pb-16 md:px-0 lg:pt-[100px] lg:pb-6 lg:px-6 xl:px-6 2xl:px-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase " data-astro-cid-j7pv25f6> SOMOS MEDRENT</h3> <h1 class="font-normal md:text-[28px] text-[28px]  mb-6" data-astro-cid-j7pv25f6> ', ' </h1> <p class="text-[#212121] md:text-[16px] text-[16px] text-[var(--color-green-dark)] mt-2 text-pretty" data-astro-cid-j7pv25f6> ', ` </p> </div> <!-- Columna 2: Formulario --> <form id="home-form" class="space-y-6 p-0 pt-8 pb-8 md:pt-16 md:pb-16 md:px-0 lg:pt-[100px] lg:pb-6 lg:px-6 xl:px-6 2xl:px-6 rounded" data-astro-cid-j7pv25f6> <!-- Inputs visibles con label flotante --> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" style="background: #3D4948!important;" data-astro-cid-j7pv25f6>Nombre completo*</label> <input name="name" type="text" placeholder="Ej: Dra. Carolina \xC1vila" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>Correo electr\xF3nico*</label> <input name="email" type="email" placeholder="Ej: carolina.avila@hospitalcardio.mx" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>Tel\xE9fono de contacto*</label> <input id="phone" name="phone" type="tel" placeholder="Ej: 55 1234 5678" required maxlength="16" class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label for="specialty" class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>
Especialidad m\xE9dica*
</label> <select name="specialty" id="specialty" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 appearance-none rounded-[4px] px-4 py-3 text-[#A0A0A0] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)]  transition-colors duration-300 pr-10 cursor-pointer" onchange="this.classList.remove('text-[#A0A0A0]')" data-astro-cid-j7pv25f6> <option value="" data-astro-cid-j7pv25f6>\xBFCu\xE1l es tu especialidad m\xE9dica?</option> <option value="Anestesiolog\xEDa" data-astro-cid-j7pv25f6>Anestesiolog\xEDa</option> <option value="Audiolog\xEDa" data-astro-cid-j7pv25f6>Audiolog\xEDa</option> <option value="Belleza y Salud" data-astro-cid-j7pv25f6>Belleza y Salud</option> <option value="Biom\xE9dico de Autismo" data-astro-cid-j7pv25f6>Biom\xE9dico de Autismo</option> <option value="Cardiolog\xEDa" data-astro-cid-j7pv25f6>Cardiolog\xEDa</option> <option value="Cardiopediatr\xEDa" data-astro-cid-j7pv25f6>Cardiopediatr\xEDa</option> <option value="Cl\xEDnica Especializada" data-astro-cid-j7pv25f6>Cl\xEDnica Especializada</option> <option value="Comercializadora" data-astro-cid-j7pv25f6>Comercializadora</option> <option value="Consulta Externa" data-astro-cid-j7pv25f6>Consulta Externa</option> <option value="Director" data-astro-cid-j7pv25f6>Director</option> <option value="Distribuidor" data-astro-cid-j7pv25f6>Distribuidor</option> <option value="Ecocardiografista" data-astro-cid-j7pv25f6>Ecocardiografista</option> <option value="Electrodiagn\xF3stico" data-astro-cid-j7pv25f6>Electrodiagn\xF3stico</option> <option value="Electroencefalografia Digital y Mapeo" data-astro-cid-j7pv25f6>Electroencefalografia Digital y Mapeo</option> <option value="Endocrin\xF3logo" data-astro-cid-j7pv25f6>Endocrin\xF3logo</option> <option value="Enfermer\xEDa" data-astro-cid-j7pv25f6>Enfermer\xEDa</option> <option value="Epileptolog\xEDa" data-astro-cid-j7pv25f6>Epileptolog\xEDa</option> <option value="Espera de Primer Contacto" data-astro-cid-j7pv25f6>Espera de Primer Contacto</option> <option value="Farmacolog\xEDa Cl\xEDnica" data-astro-cid-j7pv25f6>Farmacolog\xEDa Cl\xEDnica</option> <option value="Fisioterapia y Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Fisioterapia y Rehabilitaci\xF3n</option> <option value="Gastroenter\xF3logo" data-astro-cid-j7pv25f6>Gastroenter\xF3logo</option> <option value="Gerente Comercial" data-astro-cid-j7pv25f6>Gerente Comercial</option> <option value="Gerente General" data-astro-cid-j7pv25f6>Gerente General</option> <option value="Geriatra" data-astro-cid-j7pv25f6>Geriatra</option> <option value="Ginecolog\xEDa y Obstetricia" data-astro-cid-j7pv25f6>Ginecolog\xEDa y Obstetricia</option> <option value="Imagenolog\xEDa" data-astro-cid-j7pv25f6>Imagenolog\xEDa</option> <option value="Inhaloterapia" data-astro-cid-j7pv25f6>Inhaloterapia</option> <option value="Kinesiolog\xEDa" data-astro-cid-j7pv25f6>Kinesiolog\xEDa</option> <option value="Laboratorio Cl\xEDnico" data-astro-cid-j7pv25f6>Laboratorio Cl\xEDnico</option> <option value="Masoterapeuta" data-astro-cid-j7pv25f6>Masoterapeuta</option> <option value="Medicina Cr\xEDtica" data-astro-cid-j7pv25f6>Medicina Cr\xEDtica</option> <option value="Medicina del deporte" data-astro-cid-j7pv25f6>Medicina del deporte</option> <option value="Medicina del Sue\xF1o" data-astro-cid-j7pv25f6>Medicina del Sue\xF1o</option> <option value="Medicina Est\xE9tica" data-astro-cid-j7pv25f6>Medicina Est\xE9tica</option> <option value="Medicina F\xEDsica y Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Medicina F\xEDsica y Rehabilitaci\xF3n</option> <option value="Medicina Integrativa" data-astro-cid-j7pv25f6>Medicina Integrativa</option> <option value="Medicina Interna" data-astro-cid-j7pv25f6>Medicina Interna</option> <option value="Medicina Regenerativa" data-astro-cid-j7pv25f6>Medicina Regenerativa</option> <option value="Medico Cirujano" data-astro-cid-j7pv25f6>Medico Cirujano</option> <option value="M\xE9dico de Urgencias" data-astro-cid-j7pv25f6>M\xE9dico de Urgencias</option> <option value="M\xE9dico General" data-astro-cid-j7pv25f6>M\xE9dico General</option> <option value="Nefr\xF3logo" data-astro-cid-j7pv25f6>Nefr\xF3logo</option> <option value="Neonatolog\xEDa" data-astro-cid-j7pv25f6>Neonatolog\xEDa</option> <option value="Neum\xF3logo" data-astro-cid-j7pv25f6>Neum\xF3logo</option> <option value="Neurociencias" data-astro-cid-j7pv25f6>Neurociencias</option> <option value="Neurocirug\xEDa" data-astro-cid-j7pv25f6>Neurocirug\xEDa</option> <option value="Neurodesarrollo" data-astro-cid-j7pv25f6>Neurodesarrollo</option> <option value="Neurofisiatra" data-astro-cid-j7pv25f6>Neurofisiatra</option> <option value="Neurofisiolog\xEDa" data-astro-cid-j7pv25f6>Neurofisiolog\xEDa</option> <option value="Neurolog\xEDa" data-astro-cid-j7pv25f6>Neurolog\xEDa</option> <option value="Neuronutrici\xF3n" data-astro-cid-j7pv25f6>Neuronutrici\xF3n</option> <option value="Neuropediatr\xEDa" data-astro-cid-j7pv25f6>Neuropediatr\xEDa</option> <option value="Neuropsicolog\xEDa" data-astro-cid-j7pv25f6>Neuropsicolog\xEDa</option> <option value="Neurorehabilitaci\xF3n" data-astro-cid-j7pv25f6>Neurorehabilitaci\xF3n</option> <option value="Neuroterapeuta" data-astro-cid-j7pv25f6>Neuroterapeuta</option> <option value="Nutrici\xF3n" data-astro-cid-j7pv25f6>Nutrici\xF3n</option> <option value="Onc\xF3logo" data-astro-cid-j7pv25f6>Onc\xF3logo</option> <option value="Ortodoncista" data-astro-cid-j7pv25f6>Ortodoncista</option> <option value="Ortopedia" data-astro-cid-j7pv25f6>Ortopedia</option> <option value="Otorrinolaringolog\xEDa" data-astro-cid-j7pv25f6>Otorrinolaringolog\xEDa</option> <option value="Paciente" data-astro-cid-j7pv25f6>Paciente</option> <option value="Pediatr\xEDa" data-astro-cid-j7pv25f6>Pediatr\xEDa</option> <option value="Psicolog\xEDa Cl\xEDnica" data-astro-cid-j7pv25f6>Psicolog\xEDa Cl\xEDnica</option> <option value="Psicoterapeuta" data-astro-cid-j7pv25f6>Psicoterapeuta</option> <option value="Psiquiatr\xEDa" data-astro-cid-j7pv25f6>Psiquiatr\xEDa</option> <option value="Quimico Farmaceutico Biologico" data-astro-cid-j7pv25f6>Quimico Farmaceutico Biologico</option> <option value="Quiropr\xE1ctico" data-astro-cid-j7pv25f6>Quiropr\xE1ctico</option> <option value="Radiolog\xEDa" data-astro-cid-j7pv25f6>Radiolog\xEDa</option> <option value="Rehabilitaci\xF3n cognitiva" data-astro-cid-j7pv25f6>Rehabilitaci\xF3n cognitiva</option> <option value="Rehabilitador Neurofisiol\xF3gico" data-astro-cid-j7pv25f6>Rehabilitador Neurofisiol\xF3gico</option> <option value="Representante Compras" data-astro-cid-j7pv25f6>Representante Compras</option> <option value="Representante Ventas" data-astro-cid-j7pv25f6>Representante Ventas</option> <option value="Residente" data-astro-cid-j7pv25f6>Residente</option> <option value="Reumat\xF3logo" data-astro-cid-j7pv25f6>Reumat\xF3logo</option> <option value="Sociolog\xEDa" data-astro-cid-j7pv25f6>Sociolog\xEDa</option> <option value="Somnologia" data-astro-cid-j7pv25f6>Somnologia</option> <option value="Sonografista" data-astro-cid-j7pv25f6>Sonografista</option> <option value="Telem\xE1tica" data-astro-cid-j7pv25f6>Telem\xE1tica</option> <option value="Terapeuta" data-astro-cid-j7pv25f6>Terapeuta</option> <option value="Terapeuta Cl\xEDnico" data-astro-cid-j7pv25f6>Terapeuta Cl\xEDnico</option> <option value="Terapeuta de Lenguaje" data-astro-cid-j7pv25f6>Terapeuta de Lenguaje</option> <option value="Terapeuta en Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Terapeuta en Rehabilitaci\xF3n</option> <option value="Terapeuta Hol\xEDstico" data-astro-cid-j7pv25f6>Terapeuta Hol\xEDstico</option> <option value="Terapeuta Ocupacional" data-astro-cid-j7pv25f6>Terapeuta Ocupacional</option> <option value="Trastorno del Sue\xF1o" data-astro-cid-j7pv25f6>Trastorno del Sue\xF1o</option> <option value="Traumat\xF3logo" data-astro-cid-j7pv25f6>Traumat\xF3logo</option> <option value="Ultrasonograf\xEDa" data-astro-cid-j7pv25f6>Ultrasonograf\xEDa</option> <option value="Ur\xF3logo" data-astro-cid-j7pv25f6>Ur\xF3logo</option> <option value="Intensivista" data-astro-cid-j7pv25f6>Intensivista</option> <option value="Fisiatra" data-astro-cid-j7pv25f6>Fisiatra</option> <option value="T\xE9cnico" data-astro-cid-j7pv25f6>T\xE9cnico</option> <option value="Paidopsiquiatr\xEDa" data-astro-cid-j7pv25f6>Paidopsiquiatr\xEDa</option> <option value="Neuromodulaci\xF3n" data-astro-cid-j7pv25f6>Neuromodulaci\xF3n</option> <option value="Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Rehabilitaci\xF3n</option> <option value="Neurovascular" data-astro-cid-j7pv25f6>Neurovascular</option> <option value="Otra" data-astro-cid-j7pv25f6>Otra</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> </div>  <!-- Inputs ocultos --> <input type="hidden" name="unidades_de_negocios" value="MEDRENT" data-astro-cid-j7pv25f6> <input type="hidden" name="hs_all_assigned_business_unit_ids" value="2380506" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_term" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_medium" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_source" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_content" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_campaign" data-astro-cid-j7pv25f6> <input type="hidden" name="definicion_de_necesidad" value="Compra Equipo M\xE9dico" data-astro-cid-j7pv25f6> <!-- Checkbox --> <div class="flex items-start gap-2" data-astro-cid-j7pv25f6> <input type="checkbox" id="aviso" required class="mt-1 border-[#5A3A36] text-[#5A3A36] focus:ring-[#5A3A36]" data-astro-cid-j7pv25f6> <label for="aviso" class="text-sm text-[#212121] cursor-pointer" data-astro-cid-j7pv25f6>
He le\xEDdo y acepto el
<a href="/aviso-de-privacidad" target="_blank" class="text-[var(--color-accent)] underline" data-astro-cid-j7pv25f6>
Aviso de Privacidad
</a> </label> </div> <!-- Bot\xF3n --> <button id="submit-btn" type="submit" class="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white m-0 rounded w-full font-bold transition  cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed py-3 px-4 " aria-label="Recibir asesor\xEDa personalizada" disabled data-astro-cid-j7pv25f6>
Agenda una DEMO
</button> <div id="status" class="text-center mt-2 text-sm" data-astro-cid-j7pv25f6></div> </form> </section>  <section class="py-6 px-8 max-w-7xl mx-auto flex flex-col gap-6" data-astro-cid-j7pv25f6> <div class="text-center p-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase text-center " data-astro-cid-j7pv25f6> Especialistas en tecnolog\xEDa</h3> <h2 class=" text-[24px] font-bold font-bold text-[var(--color-text-default)] tracking-tight" data-astro-cid-j7pv25f6>
Acercamos tecnolog\xEDa que fortalece los est\xE1ndares en salud.
</h2> </div> <div class=" grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> `, " </div> </section>  ", "  ", `  <section class="py-6 px-8 max-w-7xl mx-auto flex flex-col gap-6" data-astro-cid-j7pv25f6> <div class="hero-slider relative w-full h-full" data-astro-cid-j7pv25f6> <div id="slides-hero" class="relative w-full h-full" data-astro-cid-j7pv25f6> <div class="fade-slide-hero w-full h-full active-slide-hero" data-astro-cid-j7pv25f6> <!-- Layout responsive: mobile = imagen full width arriba, texto abajo --> <!-- En mobile/tablet: Imagen full width primero (arriba) --> <div class="w-full block lg:hidden" data-astro-cid-j7pv25f6> <img src="/temp/FinanciamientoMobile.png" alt="SOMOS MED RENT" class="w-full h-[50vh] object-cover" loading="lazy" decoding="async" data-astro-cid-j7pv25f6> </div> <!-- Layout para desktop y contenido --> <div class="flex flex-col w-full h-auto lg:flex-row lg:h-[524px] relative" data-astro-cid-j7pv25f6> <!-- En mobile/tablet: Texto segundo (abajo) / En desktop: Texto izquierda --> <div class="w-full flex flex-col items-center justify-center space-y-6 z-10 bg-aqua px-4 py-4 md:px-8 md:py-6 lg:max-w-xl lg:px-[135px] lg:py-8 order-1 relative" data-astro-cid-j7pv25f6> <div class="w-full space-y-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase text-left m-0" data-astro-cid-j7pv25f6>FINANCIAMIENTO</h3> <div class="text-[16px] md:text-[16px] text-left m-0" data-astro-cid-j7pv25f6> <p class="text-[28px] md:text-[24px] text-left" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Korum Capital: Tecnolog\xEDa m\xE9dica al alcance de tu pr\xE1ctica&nbsp;</strong> </p> <br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Korum Capital nace como una soluci\xF3n integral para m\xE9dicos, hospitales y empresas del sector salud que buscan adquirir tecnolog\xEDa m\xE9dica de \xFAltima generaci\xF3n con planes de financiamiento flexibles y accesibles.</p> </div> <a href="/contacto" class="bg-[var(--color-primary)] text-white py-3 px-4 m-0 mt-6 rounded w-full font-bold transition cursor-pointer flex justify-center gap-2" aria-label="Recibir asesor\xEDa personalizada" data-astro-cid-j7pv25f6>
Recibir asesor\xEDa personalizada
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-astro-cid-j7pv25f6> <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="white" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> <!-- En desktop: Imagen derecha (oculta en mobile) --> <div class="hidden lg:flex flex-1 items-center justify-center relative w-full h-full order-2" data-astro-cid-j7pv25f6> <img src="/temp/Financiamiento.png" alt="SOMOS MED RENT" class="w-full h-auto lg:h-[524px] object-cover z-10" loading="lazy" decoding="async" data-astro-cid-j7pv25f6> </div> </div> </div> </div> </div> </section> <script type="module">
		// Validaci\xF3n de campos y habilitaci\xF3n de bot\xF3n
		document.addEventListener('DOMContentLoaded', function() {
			const form = document.getElementById('home-form');
			const nameInput = form.querySelector('input[name="name"]');
			const emailInput = form.querySelector('input[name="email"]');
			const phoneInput = form.querySelector('input[name="phone"]');
			const selectInput = form.querySelector('select[name="specialty"]');
			const termsInput = form.querySelector('input[type="checkbox"]#aviso');
			const submitBtn = document.getElementById('submit-btn');

			// Obtener color primario desde variables CSS
			const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
			const greenDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-green-dark').trim();

			function validateName() {
				const label = nameInput.parentElement.querySelector('label');
				if (nameInput.value.trim().length >= 3) {
					nameInput.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					nameInput.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validateEmail() {
				const label = emailInput.parentElement.querySelector('label');
				const value = emailInput.value.trim();
				const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
				if (emailRegex.test(value)) {
					emailInput.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					emailInput.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validatePhone() {
				const label = phoneInput.parentElement.querySelector('label');
				const digits = phoneInput.value.replace(/\\D/g, '');
				if (digits.length >= 10) {
					phoneInput.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					phoneInput.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validateSelect() {
				const label = selectInput.parentElement.querySelector('label');
				if (selectInput.value && selectInput.value !== '') {
					selectInput.classList.remove('text-[#A0A0A0]');
					selectInput.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					selectInput.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}
            // Elimina el fondo azul de autocomplete para todos los inputs
            const style = document.createElement('style');
            style.innerHTML = \`
                input:-webkit-autofill,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
                    box-shadow: 0 0 0 1000px #fff inset !important;
                    background-color: #fff !important;
                    color: #261819 !important;
                    transition: background-color 5000s ease-in-out 0s;
                    outline: none !important;
                }
            \`;
            document.head.appendChild(style);

			function validateTerms() {
				return termsInput.checked;
			}

			function checkAll() {
				const allValid = validateName() && validateEmail() && validatePhone() && validateSelect() && validateTerms();
				if (allValid) {
					submitBtn.disabled = false;
					submitBtn.classList.add('hover:bg-[#6B0028]');
				} else {
					submitBtn.disabled = true;
					submitBtn.classList.remove('hover:bg-[#6B0028]');
				}
			}

			nameInput.addEventListener('input', checkAll);
			emailInput.addEventListener('input', checkAll);
			phoneInput.addEventListener('input', checkAll);
			selectInput.addEventListener('change', checkAll);
			termsInput.addEventListener('change', checkAll);

			// Inicializa el estado al cargar
			checkAll();
		});


        // Formato tel\xE9fono - Versi\xF3n simplificada
        const phoneInput = document.getElementById("phone");

        phoneInput.addEventListener("input", () => {
            // Obtener solo n\xFAmeros del input
            let numbers = phoneInput.value.replace(/\\D/g, "");
            
            // Limitar a m\xE1ximo 12 d\xEDgitos (52 + 10 d\xEDgitos del n\xFAmero mexicano)
            if (numbers.length > 12) {
                numbers = numbers.slice(0, 12);
            }
            
            // Si no empieza con 52 y tiene 10+ d\xEDgitos, agregar c\xF3digo de pa\xEDs
            if (!numbers.startsWith("52") && numbers.length >= 10) {
                numbers = "52" + numbers;
            }
            
            // Formatear con + al inicio
            phoneInput.value = numbers.length > 0 ? "+" + numbers : "";
        });

        // Procesar formulario
        const form = document.getElementById("home-form");
        const status = document.getElementById("status");

        // Capturar UTM de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmFields = [
            "utm_term",
            "utm_medium",
            "utm_source",
            "utm_content",
            "utm_campaign",
        ];

        utmFields.forEach((field) => {
            const value = urlParams.get(field) || "";
            const input = form.querySelector(\`input[name="\${field}"]\`);
            if (input) input.value = value;
        });

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // \u{1F447} Asegura que se actualice el campo oculto antes del env\xEDo
            if (typeof window.applyEquipos === "function") window.applyEquipos();

            const formData = new FormData(form);
            // const data = Object.fromEntries(formData.entries());
            
            // Construir el objeto manualmente para mayor control y evitar errores de JSON
            const data = {};
            formData.forEach((value, key) => {
                if (data.hasOwnProperty(key)) {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });


            try {
                const jsonBody = JSON.stringify(data);
                console.log("Objeto de datos a enviar:", data);
                console.log("JSON string enviado:", jsonBody);

                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: jsonBody,
                });

                if (response.ok) {
                    status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
                    // sendFormEvent();
                    form.reset();
                } else {

                    const resData = await response.json();
                    if (resData.category === 'CONFLICT') {
                        status.textContent = "\u2705 Tu solicitud ya est\xE1 en proceso. ";
                        form.reset();
                    } 

                    // status.textContent = "\u274C Hubo un problema al enviar tu solicitud. Intenta nuevamente m\xE1s tarde.";
                    // console.error("Error response:", await response.json());
                }

            } catch (error) {
                console.error("Network error:", error);
                status.textContent = "\u274C Error de red. Por favor, verifica tu conexi\xF3n e intenta nuevamente.";
            }
        });
    <\/script> `], ["  ", '<section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 rounded-a-[24px] pt-6 pr-4 pb-0 pl-4 md:py-6 md:px-6 lg:px-[135px] lg:py-6" data-astro-cid-j7pv25f6> <!-- Columna 1: Encabezado --> <div class="space-y-2 p-0 md:pt-16 md:pb-16 md:px-0 lg:pt-[100px] lg:pb-6 lg:px-6 xl:px-6 2xl:px-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase " data-astro-cid-j7pv25f6> SOMOS MEDRENT</h3> <h1 class="font-normal md:text-[28px] text-[28px]  mb-6" data-astro-cid-j7pv25f6> ', ' </h1> <p class="text-[#212121] md:text-[16px] text-[16px] text-[var(--color-green-dark)] mt-2 text-pretty" data-astro-cid-j7pv25f6> ', ` </p> </div> <!-- Columna 2: Formulario --> <form id="home-form" class="space-y-6 p-0 pt-8 pb-8 md:pt-16 md:pb-16 md:px-0 lg:pt-[100px] lg:pb-6 lg:px-6 xl:px-6 2xl:px-6 rounded" data-astro-cid-j7pv25f6> <!-- Inputs visibles con label flotante --> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" style="background: #3D4948!important;" data-astro-cid-j7pv25f6>Nombre completo*</label> <input name="name" type="text" placeholder="Ej: Dra. Carolina \xC1vila" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>Correo electr\xF3nico*</label> <input name="email" type="email" placeholder="Ej: carolina.avila@hospitalcardio.mx" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>Tel\xE9fono de contacto*</label> <input id="phone" name="phone" type="tel" placeholder="Ej: 55 1234 5678" required maxlength="16" class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 rounded-[4px] px-4 py-3 placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300" data-astro-cid-j7pv25f6> </div> <div class="relative" data-astro-cid-j7pv25f6> <label for="specialty" class="absolute -top-3 left-3 bg-[var(--color-green-dark)] px-2 text-sm text-[#FFF] rounded-xs" data-astro-cid-j7pv25f6>
Especialidad m\xE9dica*
</label> <select name="specialty" id="specialty" required class="w-full border border-[var(--color-green-dark)] border-2 focus:border-2 appearance-none rounded-[4px] px-4 py-3 text-[#A0A0A0] focus:outline-none outline-none focus:ring-0 bg-white hover:bg-[var(--color-secondary-light)]  transition-colors duration-300 pr-10 cursor-pointer" onchange="this.classList.remove('text-[#A0A0A0]')" data-astro-cid-j7pv25f6> <option value="" data-astro-cid-j7pv25f6>\xBFCu\xE1l es tu especialidad m\xE9dica?</option> <option value="Anestesiolog\xEDa" data-astro-cid-j7pv25f6>Anestesiolog\xEDa</option> <option value="Audiolog\xEDa" data-astro-cid-j7pv25f6>Audiolog\xEDa</option> <option value="Belleza y Salud" data-astro-cid-j7pv25f6>Belleza y Salud</option> <option value="Biom\xE9dico de Autismo" data-astro-cid-j7pv25f6>Biom\xE9dico de Autismo</option> <option value="Cardiolog\xEDa" data-astro-cid-j7pv25f6>Cardiolog\xEDa</option> <option value="Cardiopediatr\xEDa" data-astro-cid-j7pv25f6>Cardiopediatr\xEDa</option> <option value="Cl\xEDnica Especializada" data-astro-cid-j7pv25f6>Cl\xEDnica Especializada</option> <option value="Comercializadora" data-astro-cid-j7pv25f6>Comercializadora</option> <option value="Consulta Externa" data-astro-cid-j7pv25f6>Consulta Externa</option> <option value="Director" data-astro-cid-j7pv25f6>Director</option> <option value="Distribuidor" data-astro-cid-j7pv25f6>Distribuidor</option> <option value="Ecocardiografista" data-astro-cid-j7pv25f6>Ecocardiografista</option> <option value="Electrodiagn\xF3stico" data-astro-cid-j7pv25f6>Electrodiagn\xF3stico</option> <option value="Electroencefalografia Digital y Mapeo" data-astro-cid-j7pv25f6>Electroencefalografia Digital y Mapeo</option> <option value="Endocrin\xF3logo" data-astro-cid-j7pv25f6>Endocrin\xF3logo</option> <option value="Enfermer\xEDa" data-astro-cid-j7pv25f6>Enfermer\xEDa</option> <option value="Epileptolog\xEDa" data-astro-cid-j7pv25f6>Epileptolog\xEDa</option> <option value="Espera de Primer Contacto" data-astro-cid-j7pv25f6>Espera de Primer Contacto</option> <option value="Farmacolog\xEDa Cl\xEDnica" data-astro-cid-j7pv25f6>Farmacolog\xEDa Cl\xEDnica</option> <option value="Fisioterapia y Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Fisioterapia y Rehabilitaci\xF3n</option> <option value="Gastroenter\xF3logo" data-astro-cid-j7pv25f6>Gastroenter\xF3logo</option> <option value="Gerente Comercial" data-astro-cid-j7pv25f6>Gerente Comercial</option> <option value="Gerente General" data-astro-cid-j7pv25f6>Gerente General</option> <option value="Geriatra" data-astro-cid-j7pv25f6>Geriatra</option> <option value="Ginecolog\xEDa y Obstetricia" data-astro-cid-j7pv25f6>Ginecolog\xEDa y Obstetricia</option> <option value="Imagenolog\xEDa" data-astro-cid-j7pv25f6>Imagenolog\xEDa</option> <option value="Inhaloterapia" data-astro-cid-j7pv25f6>Inhaloterapia</option> <option value="Kinesiolog\xEDa" data-astro-cid-j7pv25f6>Kinesiolog\xEDa</option> <option value="Laboratorio Cl\xEDnico" data-astro-cid-j7pv25f6>Laboratorio Cl\xEDnico</option> <option value="Masoterapeuta" data-astro-cid-j7pv25f6>Masoterapeuta</option> <option value="Medicina Cr\xEDtica" data-astro-cid-j7pv25f6>Medicina Cr\xEDtica</option> <option value="Medicina del deporte" data-astro-cid-j7pv25f6>Medicina del deporte</option> <option value="Medicina del Sue\xF1o" data-astro-cid-j7pv25f6>Medicina del Sue\xF1o</option> <option value="Medicina Est\xE9tica" data-astro-cid-j7pv25f6>Medicina Est\xE9tica</option> <option value="Medicina F\xEDsica y Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Medicina F\xEDsica y Rehabilitaci\xF3n</option> <option value="Medicina Integrativa" data-astro-cid-j7pv25f6>Medicina Integrativa</option> <option value="Medicina Interna" data-astro-cid-j7pv25f6>Medicina Interna</option> <option value="Medicina Regenerativa" data-astro-cid-j7pv25f6>Medicina Regenerativa</option> <option value="Medico Cirujano" data-astro-cid-j7pv25f6>Medico Cirujano</option> <option value="M\xE9dico de Urgencias" data-astro-cid-j7pv25f6>M\xE9dico de Urgencias</option> <option value="M\xE9dico General" data-astro-cid-j7pv25f6>M\xE9dico General</option> <option value="Nefr\xF3logo" data-astro-cid-j7pv25f6>Nefr\xF3logo</option> <option value="Neonatolog\xEDa" data-astro-cid-j7pv25f6>Neonatolog\xEDa</option> <option value="Neum\xF3logo" data-astro-cid-j7pv25f6>Neum\xF3logo</option> <option value="Neurociencias" data-astro-cid-j7pv25f6>Neurociencias</option> <option value="Neurocirug\xEDa" data-astro-cid-j7pv25f6>Neurocirug\xEDa</option> <option value="Neurodesarrollo" data-astro-cid-j7pv25f6>Neurodesarrollo</option> <option value="Neurofisiatra" data-astro-cid-j7pv25f6>Neurofisiatra</option> <option value="Neurofisiolog\xEDa" data-astro-cid-j7pv25f6>Neurofisiolog\xEDa</option> <option value="Neurolog\xEDa" data-astro-cid-j7pv25f6>Neurolog\xEDa</option> <option value="Neuronutrici\xF3n" data-astro-cid-j7pv25f6>Neuronutrici\xF3n</option> <option value="Neuropediatr\xEDa" data-astro-cid-j7pv25f6>Neuropediatr\xEDa</option> <option value="Neuropsicolog\xEDa" data-astro-cid-j7pv25f6>Neuropsicolog\xEDa</option> <option value="Neurorehabilitaci\xF3n" data-astro-cid-j7pv25f6>Neurorehabilitaci\xF3n</option> <option value="Neuroterapeuta" data-astro-cid-j7pv25f6>Neuroterapeuta</option> <option value="Nutrici\xF3n" data-astro-cid-j7pv25f6>Nutrici\xF3n</option> <option value="Onc\xF3logo" data-astro-cid-j7pv25f6>Onc\xF3logo</option> <option value="Ortodoncista" data-astro-cid-j7pv25f6>Ortodoncista</option> <option value="Ortopedia" data-astro-cid-j7pv25f6>Ortopedia</option> <option value="Otorrinolaringolog\xEDa" data-astro-cid-j7pv25f6>Otorrinolaringolog\xEDa</option> <option value="Paciente" data-astro-cid-j7pv25f6>Paciente</option> <option value="Pediatr\xEDa" data-astro-cid-j7pv25f6>Pediatr\xEDa</option> <option value="Psicolog\xEDa Cl\xEDnica" data-astro-cid-j7pv25f6>Psicolog\xEDa Cl\xEDnica</option> <option value="Psicoterapeuta" data-astro-cid-j7pv25f6>Psicoterapeuta</option> <option value="Psiquiatr\xEDa" data-astro-cid-j7pv25f6>Psiquiatr\xEDa</option> <option value="Quimico Farmaceutico Biologico" data-astro-cid-j7pv25f6>Quimico Farmaceutico Biologico</option> <option value="Quiropr\xE1ctico" data-astro-cid-j7pv25f6>Quiropr\xE1ctico</option> <option value="Radiolog\xEDa" data-astro-cid-j7pv25f6>Radiolog\xEDa</option> <option value="Rehabilitaci\xF3n cognitiva" data-astro-cid-j7pv25f6>Rehabilitaci\xF3n cognitiva</option> <option value="Rehabilitador Neurofisiol\xF3gico" data-astro-cid-j7pv25f6>Rehabilitador Neurofisiol\xF3gico</option> <option value="Representante Compras" data-astro-cid-j7pv25f6>Representante Compras</option> <option value="Representante Ventas" data-astro-cid-j7pv25f6>Representante Ventas</option> <option value="Residente" data-astro-cid-j7pv25f6>Residente</option> <option value="Reumat\xF3logo" data-astro-cid-j7pv25f6>Reumat\xF3logo</option> <option value="Sociolog\xEDa" data-astro-cid-j7pv25f6>Sociolog\xEDa</option> <option value="Somnologia" data-astro-cid-j7pv25f6>Somnologia</option> <option value="Sonografista" data-astro-cid-j7pv25f6>Sonografista</option> <option value="Telem\xE1tica" data-astro-cid-j7pv25f6>Telem\xE1tica</option> <option value="Terapeuta" data-astro-cid-j7pv25f6>Terapeuta</option> <option value="Terapeuta Cl\xEDnico" data-astro-cid-j7pv25f6>Terapeuta Cl\xEDnico</option> <option value="Terapeuta de Lenguaje" data-astro-cid-j7pv25f6>Terapeuta de Lenguaje</option> <option value="Terapeuta en Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Terapeuta en Rehabilitaci\xF3n</option> <option value="Terapeuta Hol\xEDstico" data-astro-cid-j7pv25f6>Terapeuta Hol\xEDstico</option> <option value="Terapeuta Ocupacional" data-astro-cid-j7pv25f6>Terapeuta Ocupacional</option> <option value="Trastorno del Sue\xF1o" data-astro-cid-j7pv25f6>Trastorno del Sue\xF1o</option> <option value="Traumat\xF3logo" data-astro-cid-j7pv25f6>Traumat\xF3logo</option> <option value="Ultrasonograf\xEDa" data-astro-cid-j7pv25f6>Ultrasonograf\xEDa</option> <option value="Ur\xF3logo" data-astro-cid-j7pv25f6>Ur\xF3logo</option> <option value="Intensivista" data-astro-cid-j7pv25f6>Intensivista</option> <option value="Fisiatra" data-astro-cid-j7pv25f6>Fisiatra</option> <option value="T\xE9cnico" data-astro-cid-j7pv25f6>T\xE9cnico</option> <option value="Paidopsiquiatr\xEDa" data-astro-cid-j7pv25f6>Paidopsiquiatr\xEDa</option> <option value="Neuromodulaci\xF3n" data-astro-cid-j7pv25f6>Neuromodulaci\xF3n</option> <option value="Rehabilitaci\xF3n" data-astro-cid-j7pv25f6>Rehabilitaci\xF3n</option> <option value="Neurovascular" data-astro-cid-j7pv25f6>Neurovascular</option> <option value="Otra" data-astro-cid-j7pv25f6>Otra</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </div> </div>  <!-- Inputs ocultos --> <input type="hidden" name="unidades_de_negocios" value="MEDRENT" data-astro-cid-j7pv25f6> <input type="hidden" name="hs_all_assigned_business_unit_ids" value="2380506" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_term" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_medium" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_source" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_content" data-astro-cid-j7pv25f6> <input type="hidden" name="utm_campaign" data-astro-cid-j7pv25f6> <input type="hidden" name="definicion_de_necesidad" value="Compra Equipo M\xE9dico" data-astro-cid-j7pv25f6> <!-- Checkbox --> <div class="flex items-start gap-2" data-astro-cid-j7pv25f6> <input type="checkbox" id="aviso" required class="mt-1 border-[#5A3A36] text-[#5A3A36] focus:ring-[#5A3A36]" data-astro-cid-j7pv25f6> <label for="aviso" class="text-sm text-[#212121] cursor-pointer" data-astro-cid-j7pv25f6>
He le\xEDdo y acepto el
<a href="/aviso-de-privacidad" target="_blank" class="text-[var(--color-accent)] underline" data-astro-cid-j7pv25f6>
Aviso de Privacidad
</a> </label> </div> <!-- Bot\xF3n --> <button id="submit-btn" type="submit" class="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white m-0 rounded w-full font-bold transition  cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed py-3 px-4 " aria-label="Recibir asesor\xEDa personalizada" disabled data-astro-cid-j7pv25f6>
Agenda una DEMO
</button> <div id="status" class="text-center mt-2 text-sm" data-astro-cid-j7pv25f6></div> </form> </section>  <section class="py-6 px-8 max-w-7xl mx-auto flex flex-col gap-6" data-astro-cid-j7pv25f6> <div class="text-center p-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase text-center " data-astro-cid-j7pv25f6> Especialistas en tecnolog\xEDa</h3> <h2 class=" text-[24px] font-bold font-bold text-[var(--color-text-default)] tracking-tight" data-astro-cid-j7pv25f6>
Acercamos tecnolog\xEDa que fortalece los est\xE1ndares en salud.
</h2> </div> <div class=" grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> `, " </div> </section>  ", "  ", `  <section class="py-6 px-8 max-w-7xl mx-auto flex flex-col gap-6" data-astro-cid-j7pv25f6> <div class="hero-slider relative w-full h-full" data-astro-cid-j7pv25f6> <div id="slides-hero" class="relative w-full h-full" data-astro-cid-j7pv25f6> <div class="fade-slide-hero w-full h-full active-slide-hero" data-astro-cid-j7pv25f6> <!-- Layout responsive: mobile = imagen full width arriba, texto abajo --> <!-- En mobile/tablet: Imagen full width primero (arriba) --> <div class="w-full block lg:hidden" data-astro-cid-j7pv25f6> <img src="/temp/FinanciamientoMobile.png" alt="SOMOS MED RENT" class="w-full h-[50vh] object-cover" loading="lazy" decoding="async" data-astro-cid-j7pv25f6> </div> <!-- Layout para desktop y contenido --> <div class="flex flex-col w-full h-auto lg:flex-row lg:h-[524px] relative" data-astro-cid-j7pv25f6> <!-- En mobile/tablet: Texto segundo (abajo) / En desktop: Texto izquierda --> <div class="w-full flex flex-col items-center justify-center space-y-6 z-10 bg-aqua px-4 py-4 md:px-8 md:py-6 lg:max-w-xl lg:px-[135px] lg:py-8 order-1 relative" data-astro-cid-j7pv25f6> <div class="w-full space-y-6" data-astro-cid-j7pv25f6> <h3 class="text-[var(--color-accent)] font-bold text-[14px] md:text-[14px] uppercase text-left m-0" data-astro-cid-j7pv25f6>FINANCIAMIENTO</h3> <div class="text-[16px] md:text-[16px] text-left m-0" data-astro-cid-j7pv25f6> <p class="text-[28px] md:text-[24px] text-left" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Korum Capital: Tecnolog\xEDa m\xE9dica al alcance de tu pr\xE1ctica&nbsp;</strong> </p> <br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Korum Capital nace como una soluci\xF3n integral para m\xE9dicos, hospitales y empresas del sector salud que buscan adquirir tecnolog\xEDa m\xE9dica de \xFAltima generaci\xF3n con planes de financiamiento flexibles y accesibles.</p> </div> <a href="/contacto" class="bg-[var(--color-primary)] text-white py-3 px-4 m-0 mt-6 rounded w-full font-bold transition cursor-pointer flex justify-center gap-2" aria-label="Recibir asesor\xEDa personalizada" data-astro-cid-j7pv25f6>
Recibir asesor\xEDa personalizada
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-astro-cid-j7pv25f6> <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="white" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> <!-- En desktop: Imagen derecha (oculta en mobile) --> <div class="hidden lg:flex flex-1 items-center justify-center relative w-full h-full order-2" data-astro-cid-j7pv25f6> <img src="/temp/Financiamiento.png" alt="SOMOS MED RENT" class="w-full h-auto lg:h-[524px] object-cover z-10" loading="lazy" decoding="async" data-astro-cid-j7pv25f6> </div> </div> </div> </div> </div> </section> <script type="module">
		// Validaci\xF3n de campos y habilitaci\xF3n de bot\xF3n
		document.addEventListener('DOMContentLoaded', function() {
			const form = document.getElementById('home-form');
			const nameInput = form.querySelector('input[name="name"]');
			const emailInput = form.querySelector('input[name="email"]');
			const phoneInput = form.querySelector('input[name="phone"]');
			const selectInput = form.querySelector('select[name="specialty"]');
			const termsInput = form.querySelector('input[type="checkbox"]#aviso');
			const submitBtn = document.getElementById('submit-btn');

			// Obtener color primario desde variables CSS
			const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
			const greenDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-green-dark').trim();

			function validateName() {
				const label = nameInput.parentElement.querySelector('label');
				if (nameInput.value.trim().length >= 3) {
					nameInput.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					nameInput.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validateEmail() {
				const label = emailInput.parentElement.querySelector('label');
				const value = emailInput.value.trim();
				const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;
				if (emailRegex.test(value)) {
					emailInput.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					emailInput.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validatePhone() {
				const label = phoneInput.parentElement.querySelector('label');
				const digits = phoneInput.value.replace(/\\\\D/g, '');
				if (digits.length >= 10) {
					phoneInput.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					phoneInput.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}

			function validateSelect() {
				const label = selectInput.parentElement.querySelector('label');
				if (selectInput.value && selectInput.value !== '') {
					selectInput.classList.remove('text-[#A0A0A0]');
					selectInput.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
					if (label) label.style.background = primaryColor;
					return true;
				} else {
					selectInput.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
					if (label) label.style.background = greenDarkColor;
					return false;
				}
			}
            // Elimina el fondo azul de autocomplete para todos los inputs
            const style = document.createElement('style');
            style.innerHTML = \\\`
                input:-webkit-autofill,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
                    box-shadow: 0 0 0 1000px #fff inset !important;
                    background-color: #fff !important;
                    color: #261819 !important;
                    transition: background-color 5000s ease-in-out 0s;
                    outline: none !important;
                }
            \\\`;
            document.head.appendChild(style);

			function validateTerms() {
				return termsInput.checked;
			}

			function checkAll() {
				const allValid = validateName() && validateEmail() && validatePhone() && validateSelect() && validateTerms();
				if (allValid) {
					submitBtn.disabled = false;
					submitBtn.classList.add('hover:bg-[#6B0028]');
				} else {
					submitBtn.disabled = true;
					submitBtn.classList.remove('hover:bg-[#6B0028]');
				}
			}

			nameInput.addEventListener('input', checkAll);
			emailInput.addEventListener('input', checkAll);
			phoneInput.addEventListener('input', checkAll);
			selectInput.addEventListener('change', checkAll);
			termsInput.addEventListener('change', checkAll);

			// Inicializa el estado al cargar
			checkAll();
		});


        // Formato tel\xE9fono - Versi\xF3n simplificada
        const phoneInput = document.getElementById("phone");

        phoneInput.addEventListener("input", () => {
            // Obtener solo n\xFAmeros del input
            let numbers = phoneInput.value.replace(/\\\\D/g, "");
            
            // Limitar a m\xE1ximo 12 d\xEDgitos (52 + 10 d\xEDgitos del n\xFAmero mexicano)
            if (numbers.length > 12) {
                numbers = numbers.slice(0, 12);
            }
            
            // Si no empieza con 52 y tiene 10+ d\xEDgitos, agregar c\xF3digo de pa\xEDs
            if (!numbers.startsWith("52") && numbers.length >= 10) {
                numbers = "52" + numbers;
            }
            
            // Formatear con + al inicio
            phoneInput.value = numbers.length > 0 ? "+" + numbers : "";
        });

        // Procesar formulario
        const form = document.getElementById("home-form");
        const status = document.getElementById("status");

        // Capturar UTM de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmFields = [
            "utm_term",
            "utm_medium",
            "utm_source",
            "utm_content",
            "utm_campaign",
        ];

        utmFields.forEach((field) => {
            const value = urlParams.get(field) || "";
            const input = form.querySelector(\\\`input[name="\\\${field}"]\\\`);
            if (input) input.value = value;
        });

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // \u{1F447} Asegura que se actualice el campo oculto antes del env\xEDo
            if (typeof window.applyEquipos === "function") window.applyEquipos();

            const formData = new FormData(form);
            // const data = Object.fromEntries(formData.entries());
            
            // Construir el objeto manualmente para mayor control y evitar errores de JSON
            const data = {};
            formData.forEach((value, key) => {
                if (data.hasOwnProperty(key)) {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });


            try {
                const jsonBody = JSON.stringify(data);
                console.log("Objeto de datos a enviar:", data);
                console.log("JSON string enviado:", jsonBody);

                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: jsonBody,
                });

                if (response.ok) {
                    status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
                    // sendFormEvent();
                    form.reset();
                } else {

                    const resData = await response.json();
                    if (resData.category === 'CONFLICT') {
                        status.textContent = "\u2705 Tu solicitud ya est\xE1 en proceso. ";
                        form.reset();
                    } 

                    // status.textContent = "\u274C Hubo un problema al enviar tu solicitud. Intenta nuevamente m\xE1s tarde.";
                    // console.error("Error response:", await response.json());
                }

            } catch (error) {
                console.error("Network error:", error);
                status.textContent = "\u274C Error de red. Por favor, verifica tu conexi\xF3n e intenta nuevamente.";
            }
        });
    <\/script> `])), maybeRenderHead(), dataHome.TituloContacto || "La tecnolog\xEDa del futuro, hoy en tu consultorio gracias a\xA0MedRent. Financiamiento sin enganche.", dataHome.DescripcionContacto ? renderTemplate`${renderComponent($$result2, "BlocksRenderer", BlocksRenderer, { "content": dataHome.DescripcionContacto, "data-astro-cid-j7pv25f6": true })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <span class="font-light" data-astro-cid-j7pv25f6>En MedRent no solo distribuimos equipos, impulsamos tu crecimiento profesional. Déjanos asesorarte para encontrar la solución tecnológica perfecta para transformar la vida de tus pacientes.
</span>` })}`, marcas.map((marca) => renderTemplate`<div class="text-center p-6"${addAttribute(marca.slug, "key")} data-astro-cid-j7pv25f6> <div class="flex items-center justify-center p-4" data-astro-cid-j7pv25f6> <img${addAttribute(marca.iconImage, "src")}${addAttribute(marca.name, "alt")} class="w-[84px] h-[84px]" data-astro-cid-j7pv25f6> </div> <h3 class="my-2 text-[22px] font-bold text-[var(--color-primary)]" data-astro-cid-j7pv25f6>${marca.name}</h3> <a${addAttribute(marca.isActive ? `/categorias/${marca.slug}` : "#", "href")} class="mt-2 text-[16px] tracking-[0.15px] text-[var(--color-text-default)] hover:underline hover:text-[var(--color-primary)] flex justify-center gap-2" data-astro-cid-j7pv25f6>
Ver productos
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-astro-cid-j7pv25f6> <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="#171D1C" data-astro-cid-j7pv25f6></path> </svg> </a> </div>`), renderComponent($$result2, "BrandSlider", $$BrandSlider, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "PromotionSlider", $$PromotionSlider, { "data-astro-cid-j7pv25f6": true })) })}`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/index.astro", void 0);

const $$file = "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
