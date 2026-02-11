import { f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead } from '../chunks/astro/server_C7LFaYYO.mjs';
import 'piccolore';
import { $ as $$Layout, S as SITE } from '../chunks/Layout_QnObkIlT.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_D01atMfl.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_D_tLf-Do.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const site = SITE;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Med Rent - Contacto" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10"> <!-- Columna 1: Encabezado --> <div class="p-4 md:p-6 lg:pt-20 lg:pr-[103px] lg:pb-6 lg:pl-[135px]"> <h3 class="text-[#00827F] font-700 text-[14px] md:text-[14px] uppercase font-kallisto">\nContacto\n</h3> <h2 class="font-normal md:text-[28px] text-[28px]">\nAgenda una DEMO con nuestro equipo t\xE9cnico y nuestros especialistas de producto.\n</h2> <p class="text-[#212121] md:text-[16px] text-[16px] text-[#5A4043] mt-2 text-pretty"> <span class="font-light">\nEn <b>Medrent</b> estamos listos para ayudarte con atenci\xF3n\n                    personalizada y soluciones m\xE9dicas a la medida de tu pr\xE1ctica.\n</span> </p> </div> <!-- Columna 2: Formulario --> <div class="p-4 md:p-6 lg:pt-20 lg:pr-[134px] lg:pb-6 lg:pl-[115px]"> <!-- Columna 2: Formulario --> <form id="contact-form" class="space-y-6 bg-white rounded "> <!-- Nombre --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Nombre completo*</label> <input name="name" type="text" placeholder="Ej: Dra. Carolina \xC1vila" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"> </div> <!-- Correo --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Correo electr\xF3nico*</label> <input name="email" type="email" placeholder="Ej: carolina.avila@neuro.mx" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"> </div> <!-- Tel\xE9fono --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Tel\xE9fono de contacto*</label> <input id="phone" name="phone" type="tel" placeholder="Ej: 55 1234 5678" required maxlength="16" class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded focus:border-2  placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Instituci\xF3n o cl\xEDnica --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Nombre de instituci\xF3n o cl\xEDnica*</label> <input name="lugar_de_trabajo" type="text" placeholder="Ej: Cl\xEDnica Neuro" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded focus:border-2  placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Especialidad --> <div class="relative"> <label for="specialty" class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">\nEspecialidad m\xE9dica*\n</label> <select name="specialty" required class="appearance-none w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded text-[#A0A0A0] focus:outline-none focus:ring-0 bg-white pr-10 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> <option value="">\xBFCu\xE1l es tu especialidad m\xE9dica?</option> <option value="Anestesiolog\xEDa">Anestesiolog\xEDa</option> <option value="Audiolog\xEDa">Audiolog\xEDa</option> <option value="Belleza y Salud">Belleza y Salud</option> <option value="Biom\xE9dico de Autismo">Biom\xE9dico de Autismo</option> <option value="Cardiolog\xEDa">Cardiolog\xEDa</option> <option value="Cardiopediatr\xEDa">Cardiopediatr\xEDa</option> <option value="Cl\xEDnica Especializada">Cl\xEDnica Especializada</option> <option value="Comercializadora">Comercializadora</option> <option value="Consulta Externa">Consulta Externa</option> <option value="Director">Director</option> <option value="Distribuidor">Distribuidor</option> <option value="Ecocardiografista">Ecocardiografista</option> <option value="Electrodiagn\xF3stico">Electrodiagn\xF3stico</option> <option value="Electroencefalografia Digital y Mapeo">Electroencefalografia Digital y Mapeo</option> <option value="Endocrin\xF3logo">Endocrin\xF3logo</option> <option value="Enfermer\xEDa">Enfermer\xEDa</option> <option value="Epileptolog\xEDa">Epileptolog\xEDa</option> <option value="Espera de Primer Contacto">Espera de Primer Contacto</option> <option value="Farmacolog\xEDa Cl\xEDnica">Farmacolog\xEDa Cl\xEDnica</option> <option value="Fisioterapia y Rehabilitaci\xF3n">Fisioterapia y Rehabilitaci\xF3n</option> <option value="Gastroenter\xF3logo">Gastroenter\xF3logo</option> <option value="Gerente Comercial">Gerente Comercial</option> <option value="Gerente General">Gerente General</option> <option value="Geriatra">Geriatra</option> <option value="Ginecolog\xEDa y Obstetricia">Ginecolog\xEDa y Obstetricia</option> <option value="Imagenolog\xEDa">Imagenolog\xEDa</option> <option value="Inhaloterapia">Inhaloterapia</option> <option value="Kinesiolog\xEDa">Kinesiolog\xEDa</option> <option value="Laboratorio Cl\xEDnico">Laboratorio Cl\xEDnico</option> <option value="Masoterapeuta">Masoterapeuta</option> <option value="Medicina Cr\xEDtica">Medicina Cr\xEDtica</option> <option value="Medicina del deporte">Medicina del deporte</option> <option value="Medicina del Sue\xF1o">Medicina del Sue\xF1o</option> <option value="Medicina Est\xE9tica">Medicina Est\xE9tica</option> <option value="Medicina F\xEDsica y Rehabilitaci\xF3n">Medicina F\xEDsica y Rehabilitaci\xF3n</option> <option value="Medicina Integrativa">Medicina Integrativa</option> <option value="Medicina Interna">Medicina Interna</option> <option value="Medicina Regenerativa">Medicina Regenerativa</option> <option value="Medico Cirujano">Medico Cirujano</option> <option value="M\xE9dico de Urgencias">M\xE9dico de Urgencias</option> <option value="M\xE9dico General">M\xE9dico General</option> <option value="Nefr\xF3logo">Nefr\xF3logo</option> <option value="Neonatolog\xEDa">Neonatolog\xEDa</option> <option value="Neum\xF3logo">Neum\xF3logo</option> <option value="Neurociencias">Neurociencias</option> <option value="Neurocirug\xEDa">Neurocirug\xEDa</option> <option value="Neurodesarrollo">Neurodesarrollo</option> <option value="Neurofisiatra">Neurofisiatra</option> <option value="Neurofisiolog\xEDa">Neurofisiolog\xEDa</option> <option value="Neurolog\xEDa">Neurolog\xEDa</option> <option value="Neuronutrici\xF3n">Neuronutrici\xF3n</option> <option value="Neuropediatr\xEDa">Neuropediatr\xEDa</option> <option value="Neuropsicolog\xEDa">Neuropsicolog\xEDa</option> <option value="Neurorehabilitaci\xF3n">Neurorehabilitaci\xF3n</option> <option value="Neuroterapeuta">Neuroterapeuta</option> <option value="Nutrici\xF3n">Nutrici\xF3n</option> <option value="Onc\xF3logo">Onc\xF3logo</option> <option value="Ortodoncista">Ortodoncista</option> <option value="Ortopedia">Ortopedia</option> <option value="Otorrinolaringolog\xEDa">Otorrinolaringolog\xEDa</option> <option value="Paciente">Paciente</option> <option value="Pediatr\xEDa">Pediatr\xEDa</option> <option value="Psicolog\xEDa Cl\xEDnica">Psicolog\xEDa Cl\xEDnica</option> <option value="Psicoterapeuta">Psicoterapeuta</option> <option value="Psiquiatr\xEDa">Psiquiatr\xEDa</option> <option value="Quimico Farmaceutico Biologico">Quimico Farmaceutico Biologico</option> <option value="Quiropr\xE1ctico">Quiropr\xE1ctico</option> <option value="Radiolog\xEDa">Radiolog\xEDa</option> <option value="Rehabilitaci\xF3n cognitiva">Rehabilitaci\xF3n cognitiva</option> <option value="Rehabilitador Neurofisiol\xF3gico">Rehabilitador Neurofisiol\xF3gico</option> <option value="Representante Compras">Representante Compras</option> <option value="Representante Ventas">Representante Ventas</option> <option value="Residente">Residente</option> <option value="Reumat\xF3logo">Reumat\xF3logo</option> <option value="Sociolog\xEDa">Sociolog\xEDa</option> <option value="Somnologia">Somnologia</option> <option value="Sonografista">Sonografista</option> <option value="Telem\xE1tica">Telem\xE1tica</option> <option value="Terapeuta">Terapeuta</option> <option value="Terapeuta Cl\xEDnico">Terapeuta Cl\xEDnico</option> <option value="Terapeuta de Lenguaje">Terapeuta de Lenguaje</option> <option value="Terapeuta en Rehabilitaci\xF3n">Terapeuta en Rehabilitaci\xF3n</option> <option value="Terapeuta Hol\xEDstico">Terapeuta Hol\xEDstico</option> <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option> <option value="Trastorno del Sue\xF1o">Trastorno del Sue\xF1o</option> <option value="Traumat\xF3logo">Traumat\xF3logo</option> <option value="Ultrasonograf\xEDa">Ultrasonograf\xEDa</option> <option value="Ur\xF3logo">Ur\xF3logo</option> <option value="Intensivista">Intensivista</option> <option value="Fisiatra">Fisiatra</option> <option value="T\xE9cnico">T\xE9cnico</option> <option value="Paidopsiquiatr\xEDa">Paidopsiquiatr\xEDa</option> <option value="Neuromodulaci\xF3n">Neuromodulaci\xF3n</option> <option value="Rehabilitaci\xF3n">Rehabilitaci\xF3n</option> <option value="Neurovascular">Neurovascular</option> <option value="Otra">Otra</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- Estado de la Rep\xFAblica --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Estado de la rep\xFAblica*</label> <select name="estado_mx" required class="appearance-none w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded text-[#A0A0A0] focus:outline-none focus:ring-0 bg-white pr-10 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> <option value="">Selecciona tu estado</option> <option>Aguascalientes</option> <option>Baja California</option> <option>Baja California Sur</option> <option>Campeche</option> <option>Chiapas</option> <option>Chihuahua</option> <option>Ciudad de M\xE9xico</option> <option>Coahuila</option> <option>Colima</option> <option>Durango</option> <option>Estado de M\xE9xico</option> <option>Guanajuato</option> <option>Guerrero</option> <option>Hidalgo</option> <option>Jalisco</option> <option>Michoac\xE1n</option> <option>Morelos</option> <option>Nayarit</option> <option>Nuevo Le\xF3n</option> <option>Oaxaca</option> <option>Puebla</option> <option>Quer\xE9taro</option> <option>Quintana Roo</option> <option>San Luis Potos\xED</option> <option>Sinaloa</option> <option>Sonora</option> <option>Tabasco</option> <option>Tamaulipas</option> <option>Tlaxcala</option> <option>Veracruz</option> <option>Yucat\xE1n</option> <option>Zacatecas</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- \xBFC\xF3mo nos conociste? --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">\xBFPor qu\xE9 medio nos conociste?*</label> <input name="por_qu_medio_nos_conociste" type="text" placeholder="Ej: Congreso, recomendaci\xF3n, redes..." required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Selector Equipos --> <!--<SelectorEquipos />--> <!-- Mensaje --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Mensaje</label> <textarea name="message" rows="4" placeholder="Cu\xE9ntanos tus dudas o necesidades..." class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"></textarea> </div> <!-- Inputs ocultos --> <input type="hidden" name="unidades_de_negocios" value="LATTITUDE"> <input type="hidden" name="hs_all_assigned_business_unit_ids" value="2380506"> <input type="hidden" name="utm_term"> <input type="hidden" name="utm_medium"> <input type="hidden" name="utm_source"> <input type="hidden" name="utm_content"> <input type="hidden" name="utm_campaign"> <input type="hidden" name="definicion_de_necesidad" value="Compra Equipo M\xE9dico"> <!-- Checkbox --> <div class="flex items-start gap-2"> <input type="checkbox" id="aviso" required class="mt-1 border-[var(--color-green-dark)]  text-[#5A3A36] focus:ring-[#5A3A36]"> <label for="aviso" class="text-sm text-[#212121]">\nHe le\xEDdo y acepto el\n<a href="/aviso-de-privacidad" target="_blank" class="text-[#006764] underline">\nAviso de Privacidad\n</a> </label> </div> <!-- Bot\xF3n --> <button type="submit" class="bg-[#006764] text-white px-6 py-3 rounded w-full font-700 font-lato" style="cursor: pointer;" aria-label="Recibir asesor\xEDa personalizada">\nRecibir asesor\xEDa personalizada\n</button> <div id="status" class="text-center mt-2 text-sm"></div> </form> </div> </section>  <section class="w-full  "> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start rounded-t-[32px] p-8" style="background: linear-gradient(rgba(105,216,211,0.08), rgba(105,216,211,0.08)), #0F1414"> <!-- INFORMACI\xD3N --> <div class="space-y-6"> <h3 class="uppercase text-[#87F4EF] font-Lato text-[28px] font-700 tracking-wide">Informaci\xF3n de contacto</h3> <div> <p class="font-semibold text-white">Tel\xE9fono</p> <a href="https://wa.me/{site.contact}" target="_blank" rel="noopener noreferrer" class="text-[#87F4EF] underline"> ', ' </a> </div> <div> <p class="font-semibold text-white">Correo</p> <a href="mailto:{site.email}" class="text-[#87F4EF]"> ', ` </a> </div> <div> <p class="font-semibold text-white">Horario de atenci\xF3n</p> <p class=" text-[#FFFF]">Lunes a Viernes, 9:00 a.m. \u2013 6:00 p.m. (Hora de M\xE9xico)</p> </div> <div> <p class="font-semibold text-white">Direcci\xF3n</p> <p class=" text-[#87F4EF]">Av. Insurgentes Sur 866, Del Valle, Benito Ju\xE1rez, 03100 Ciudad de M\xE9xico, CDMX.</p> </div> <a href="https://maps.google.com/?q=Insurgentes+Sur+866,+Del+Valle,+Benito+Ju\xE1rez,+03100+Ciudad+de+M\xE9xico,+CDMX" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-white text-white px-4 py-2 rounded bg-[#FFFF]"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 4.94606L9 2.94606L2 5.27906V21.3881L9 19.0541L15 21.0541L22 18.7211V2.61206L15 4.94606ZM10 5.38706L14 6.72006V18.6131L10 17.2801V5.38706ZM4 6.72106L8 5.38706V17.2791L4 18.6121V6.72106ZM20 17.2791L16 18.6131V6.72106L20 5.38806V17.2791Z" fill="#006764"></path> </svg> <span class="text-sm font-medium text-[#006764]">C\xF3mo llegar</span> </a> </div> <!-- MAPA --> <div class="overflow-hidden rounded-[32px]"> <iframe class="w-full h-96 rounded-[32px] border-0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.412706424679!2d-99.1653395!3d19.3964756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff647fe7e97d%3A0x323ec214d7a7cfb9!2sAv.%20Insurgentes%20Sur%20866%2C%20Del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1721324059029!5m2!1ses-419!2smx">
                </iframe> </div> </div> </section> <script type="module">
    // Validaci\xF3n de campos y habilitaci\xF3n de bot\xF3n
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        const workplaceInput = form.querySelector('input[name="lugar_de_trabajo"]');
        const specialtySelect = form.querySelector('select[name="specialty"]');
        const stateSelect = form.querySelector('select[name="estado_mx"]');
        const sourceInput = form.querySelector('input[name="por_qu_medio_nos_conociste"]');
        const termsInput = form.querySelector('input[type="checkbox"]#aviso');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Obtener colores desde variables CSS
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
        const greenDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-green-dark').trim();
        
        function validateField(input, minLength = 2) {
            const label = input.parentElement.querySelector('label');
            const isValid = input.type === 'email' 
                ? /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input.value.trim())
                : input.value.trim().length >= minLength;
                
            if (isValid) {
                input.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
                if (label) label.style.background = primaryColor;
                return true;
            } else {
                input.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
                if (label) label.style.background = greenDarkColor;
                return false;
            }
        }
        
        function validateSelect(select) {
            const label = select.parentElement.querySelector('label');
            const isValid = select.value && select.value !== '';
            
            if (isValid) {
                select.classList.remove('text-[#A0A0A0]');
                select.style.setProperty('border', \`3px solid \${primaryColor}\`, 'important');
                if (label) label.style.background = primaryColor;
                return true;
            } else {
                select.style.setProperty('border', \`2px solid \${greenDarkColor}\`, 'important');
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
        
        function checkAll() {
            const nameValid = validateField(nameInput, 3);
            const emailValid = validateField(emailInput);
            const phoneValid = validatePhone();
            const workplaceValid = validateField(workplaceInput, 2);
            const specialtyValid = validateSelect(specialtySelect);
            const stateValid = validateSelect(stateSelect);
            const sourceValid = validateField(sourceInput, 2);
            const termsValid = termsInput.checked;
            
            const allValid = nameValid && emailValid && phoneValid && workplaceValid && specialtyValid && stateValid && sourceValid && termsValid;
            
            if (allValid) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            } else {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.style.cursor = 'not-allowed';
            }
        }
        
        // Event listeners
        nameInput.addEventListener('input', checkAll);
        emailInput.addEventListener('input', checkAll);
        phoneInput.addEventListener('input', checkAll);
        workplaceInput.addEventListener('input', checkAll);
        specialtySelect.addEventListener('change', function() {
            this.classList.remove('text-[#A0A0A0]');
            checkAll();
        });
        stateSelect.addEventListener('change', function() {
            this.classList.remove('text-[#A0A0A0]');
            checkAll();
        });
        sourceInput.addEventListener('input', checkAll);
        termsInput.addEventListener('change', checkAll);
        
        // Inicializar estado
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
	const form = document.getElementById("contact-form");
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

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
				// sendFormEvent(); // Funci\xF3n no definida - comentada
				form.reset();
			} else {
				const json = await response.json();
				if (json.category === "CONFLICT") {
					status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
					// sendFormEvent(); // Funci\xF3n no definida - comentada
					form.reset();
				} else {
					status.textContent = "\u274C Hubo un problema al enviar tu solicitud. Intenta nuevamente m\xE1s tarde.";
					console.error("Error response:", json);
				}
			}
		} catch (error) {
			console.error("Network error:", error);
			status.textContent = "\u274C Error de red. Por favor, verifica tu conexi\xF3n e intenta nuevamente.";
		}
	});
<\/script> `], ["  ", " ", '<section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10"> <!-- Columna 1: Encabezado --> <div class="p-4 md:p-6 lg:pt-20 lg:pr-[103px] lg:pb-6 lg:pl-[135px]"> <h3 class="text-[#00827F] font-700 text-[14px] md:text-[14px] uppercase font-kallisto">\nContacto\n</h3> <h2 class="font-normal md:text-[28px] text-[28px]">\nAgenda una DEMO con nuestro equipo t\xE9cnico y nuestros especialistas de producto.\n</h2> <p class="text-[#212121] md:text-[16px] text-[16px] text-[#5A4043] mt-2 text-pretty"> <span class="font-light">\nEn <b>Medrent</b> estamos listos para ayudarte con atenci\xF3n\n                    personalizada y soluciones m\xE9dicas a la medida de tu pr\xE1ctica.\n</span> </p> </div> <!-- Columna 2: Formulario --> <div class="p-4 md:p-6 lg:pt-20 lg:pr-[134px] lg:pb-6 lg:pl-[115px]"> <!-- Columna 2: Formulario --> <form id="contact-form" class="space-y-6 bg-white rounded "> <!-- Nombre --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Nombre completo*</label> <input name="name" type="text" placeholder="Ej: Dra. Carolina \xC1vila" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"> </div> <!-- Correo --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Correo electr\xF3nico*</label> <input name="email" type="email" placeholder="Ej: carolina.avila@neuro.mx" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"> </div> <!-- Tel\xE9fono --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Tel\xE9fono de contacto*</label> <input id="phone" name="phone" type="tel" placeholder="Ej: 55 1234 5678" required maxlength="16" class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded focus:border-2  placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Instituci\xF3n o cl\xEDnica --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Nombre de instituci\xF3n o cl\xEDnica*</label> <input name="lugar_de_trabajo" type="text" placeholder="Ej: Cl\xEDnica Neuro" required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded focus:border-2  placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Especialidad --> <div class="relative"> <label for="specialty" class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">\nEspecialidad m\xE9dica*\n</label> <select name="specialty" required class="appearance-none w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded text-[#A0A0A0] focus:outline-none focus:ring-0 bg-white pr-10 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> <option value="">\xBFCu\xE1l es tu especialidad m\xE9dica?</option> <option value="Anestesiolog\xEDa">Anestesiolog\xEDa</option> <option value="Audiolog\xEDa">Audiolog\xEDa</option> <option value="Belleza y Salud">Belleza y Salud</option> <option value="Biom\xE9dico de Autismo">Biom\xE9dico de Autismo</option> <option value="Cardiolog\xEDa">Cardiolog\xEDa</option> <option value="Cardiopediatr\xEDa">Cardiopediatr\xEDa</option> <option value="Cl\xEDnica Especializada">Cl\xEDnica Especializada</option> <option value="Comercializadora">Comercializadora</option> <option value="Consulta Externa">Consulta Externa</option> <option value="Director">Director</option> <option value="Distribuidor">Distribuidor</option> <option value="Ecocardiografista">Ecocardiografista</option> <option value="Electrodiagn\xF3stico">Electrodiagn\xF3stico</option> <option value="Electroencefalografia Digital y Mapeo">Electroencefalografia Digital y Mapeo</option> <option value="Endocrin\xF3logo">Endocrin\xF3logo</option> <option value="Enfermer\xEDa">Enfermer\xEDa</option> <option value="Epileptolog\xEDa">Epileptolog\xEDa</option> <option value="Espera de Primer Contacto">Espera de Primer Contacto</option> <option value="Farmacolog\xEDa Cl\xEDnica">Farmacolog\xEDa Cl\xEDnica</option> <option value="Fisioterapia y Rehabilitaci\xF3n">Fisioterapia y Rehabilitaci\xF3n</option> <option value="Gastroenter\xF3logo">Gastroenter\xF3logo</option> <option value="Gerente Comercial">Gerente Comercial</option> <option value="Gerente General">Gerente General</option> <option value="Geriatra">Geriatra</option> <option value="Ginecolog\xEDa y Obstetricia">Ginecolog\xEDa y Obstetricia</option> <option value="Imagenolog\xEDa">Imagenolog\xEDa</option> <option value="Inhaloterapia">Inhaloterapia</option> <option value="Kinesiolog\xEDa">Kinesiolog\xEDa</option> <option value="Laboratorio Cl\xEDnico">Laboratorio Cl\xEDnico</option> <option value="Masoterapeuta">Masoterapeuta</option> <option value="Medicina Cr\xEDtica">Medicina Cr\xEDtica</option> <option value="Medicina del deporte">Medicina del deporte</option> <option value="Medicina del Sue\xF1o">Medicina del Sue\xF1o</option> <option value="Medicina Est\xE9tica">Medicina Est\xE9tica</option> <option value="Medicina F\xEDsica y Rehabilitaci\xF3n">Medicina F\xEDsica y Rehabilitaci\xF3n</option> <option value="Medicina Integrativa">Medicina Integrativa</option> <option value="Medicina Interna">Medicina Interna</option> <option value="Medicina Regenerativa">Medicina Regenerativa</option> <option value="Medico Cirujano">Medico Cirujano</option> <option value="M\xE9dico de Urgencias">M\xE9dico de Urgencias</option> <option value="M\xE9dico General">M\xE9dico General</option> <option value="Nefr\xF3logo">Nefr\xF3logo</option> <option value="Neonatolog\xEDa">Neonatolog\xEDa</option> <option value="Neum\xF3logo">Neum\xF3logo</option> <option value="Neurociencias">Neurociencias</option> <option value="Neurocirug\xEDa">Neurocirug\xEDa</option> <option value="Neurodesarrollo">Neurodesarrollo</option> <option value="Neurofisiatra">Neurofisiatra</option> <option value="Neurofisiolog\xEDa">Neurofisiolog\xEDa</option> <option value="Neurolog\xEDa">Neurolog\xEDa</option> <option value="Neuronutrici\xF3n">Neuronutrici\xF3n</option> <option value="Neuropediatr\xEDa">Neuropediatr\xEDa</option> <option value="Neuropsicolog\xEDa">Neuropsicolog\xEDa</option> <option value="Neurorehabilitaci\xF3n">Neurorehabilitaci\xF3n</option> <option value="Neuroterapeuta">Neuroterapeuta</option> <option value="Nutrici\xF3n">Nutrici\xF3n</option> <option value="Onc\xF3logo">Onc\xF3logo</option> <option value="Ortodoncista">Ortodoncista</option> <option value="Ortopedia">Ortopedia</option> <option value="Otorrinolaringolog\xEDa">Otorrinolaringolog\xEDa</option> <option value="Paciente">Paciente</option> <option value="Pediatr\xEDa">Pediatr\xEDa</option> <option value="Psicolog\xEDa Cl\xEDnica">Psicolog\xEDa Cl\xEDnica</option> <option value="Psicoterapeuta">Psicoterapeuta</option> <option value="Psiquiatr\xEDa">Psiquiatr\xEDa</option> <option value="Quimico Farmaceutico Biologico">Quimico Farmaceutico Biologico</option> <option value="Quiropr\xE1ctico">Quiropr\xE1ctico</option> <option value="Radiolog\xEDa">Radiolog\xEDa</option> <option value="Rehabilitaci\xF3n cognitiva">Rehabilitaci\xF3n cognitiva</option> <option value="Rehabilitador Neurofisiol\xF3gico">Rehabilitador Neurofisiol\xF3gico</option> <option value="Representante Compras">Representante Compras</option> <option value="Representante Ventas">Representante Ventas</option> <option value="Residente">Residente</option> <option value="Reumat\xF3logo">Reumat\xF3logo</option> <option value="Sociolog\xEDa">Sociolog\xEDa</option> <option value="Somnologia">Somnologia</option> <option value="Sonografista">Sonografista</option> <option value="Telem\xE1tica">Telem\xE1tica</option> <option value="Terapeuta">Terapeuta</option> <option value="Terapeuta Cl\xEDnico">Terapeuta Cl\xEDnico</option> <option value="Terapeuta de Lenguaje">Terapeuta de Lenguaje</option> <option value="Terapeuta en Rehabilitaci\xF3n">Terapeuta en Rehabilitaci\xF3n</option> <option value="Terapeuta Hol\xEDstico">Terapeuta Hol\xEDstico</option> <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option> <option value="Trastorno del Sue\xF1o">Trastorno del Sue\xF1o</option> <option value="Traumat\xF3logo">Traumat\xF3logo</option> <option value="Ultrasonograf\xEDa">Ultrasonograf\xEDa</option> <option value="Ur\xF3logo">Ur\xF3logo</option> <option value="Intensivista">Intensivista</option> <option value="Fisiatra">Fisiatra</option> <option value="T\xE9cnico">T\xE9cnico</option> <option value="Paidopsiquiatr\xEDa">Paidopsiquiatr\xEDa</option> <option value="Neuromodulaci\xF3n">Neuromodulaci\xF3n</option> <option value="Rehabilitaci\xF3n">Rehabilitaci\xF3n</option> <option value="Neurovascular">Neurovascular</option> <option value="Otra">Otra</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- Estado de la Rep\xFAblica --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Estado de la rep\xFAblica*</label> <select name="estado_mx" required class="appearance-none w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded text-[#A0A0A0] focus:outline-none focus:ring-0 bg-white pr-10 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> <option value="">Selecciona tu estado</option> <option>Aguascalientes</option> <option>Baja California</option> <option>Baja California Sur</option> <option>Campeche</option> <option>Chiapas</option> <option>Chihuahua</option> <option>Ciudad de M\xE9xico</option> <option>Coahuila</option> <option>Colima</option> <option>Durango</option> <option>Estado de M\xE9xico</option> <option>Guanajuato</option> <option>Guerrero</option> <option>Hidalgo</option> <option>Jalisco</option> <option>Michoac\xE1n</option> <option>Morelos</option> <option>Nayarit</option> <option>Nuevo Le\xF3n</option> <option>Oaxaca</option> <option>Puebla</option> <option>Quer\xE9taro</option> <option>Quintana Roo</option> <option>San Luis Potos\xED</option> <option>Sinaloa</option> <option>Sonora</option> <option>Tabasco</option> <option>Tamaulipas</option> <option>Tlaxcala</option> <option>Veracruz</option> <option>Yucat\xE1n</option> <option>Zacatecas</option> </select> <!-- Flechita SVG --> <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"> <svg class="w-4 h-4 text-[#5A3A36]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- \xBFC\xF3mo nos conociste? --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">\xBFPor qu\xE9 medio nos conociste?*</label> <input name="por_qu_medio_nos_conociste" type="text" placeholder="Ej: Congreso, recomendaci\xF3n, redes..." required class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0 hover:bg-[var(--color-secondary-light)] focus:bg-[var(--color-secondary-light)] transition-colors duration-300"> </div> <!-- Selector Equipos --> <!--<SelectorEquipos />--> <!-- Mensaje --> <div class="relative"> <label class="absolute -top-3 left-3  bg-[var(--color-green-dark)]  px-2 text-sm text-[#FFF] rounded-xs">Mensaje</label> <textarea name="message" rows="4" placeholder="Cu\xE9ntanos tus dudas o necesidades..." class="w-full border border-[var(--color-green-dark)]  px-4 py-3 rounded placeholder:text-[#A0A0A0] text-[#212121] focus:outline-none focus:ring-0"></textarea> </div> <!-- Inputs ocultos --> <input type="hidden" name="unidades_de_negocios" value="LATTITUDE"> <input type="hidden" name="hs_all_assigned_business_unit_ids" value="2380506"> <input type="hidden" name="utm_term"> <input type="hidden" name="utm_medium"> <input type="hidden" name="utm_source"> <input type="hidden" name="utm_content"> <input type="hidden" name="utm_campaign"> <input type="hidden" name="definicion_de_necesidad" value="Compra Equipo M\xE9dico"> <!-- Checkbox --> <div class="flex items-start gap-2"> <input type="checkbox" id="aviso" required class="mt-1 border-[var(--color-green-dark)]  text-[#5A3A36] focus:ring-[#5A3A36]"> <label for="aviso" class="text-sm text-[#212121]">\nHe le\xEDdo y acepto el\n<a href="/aviso-de-privacidad" target="_blank" class="text-[#006764] underline">\nAviso de Privacidad\n</a> </label> </div> <!-- Bot\xF3n --> <button type="submit" class="bg-[#006764] text-white px-6 py-3 rounded w-full font-700 font-lato" style="cursor: pointer;" aria-label="Recibir asesor\xEDa personalizada">\nRecibir asesor\xEDa personalizada\n</button> <div id="status" class="text-center mt-2 text-sm"></div> </form> </div> </section>  <section class="w-full  "> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start rounded-t-[32px] p-8" style="background: linear-gradient(rgba(105,216,211,0.08), rgba(105,216,211,0.08)), #0F1414"> <!-- INFORMACI\xD3N --> <div class="space-y-6"> <h3 class="uppercase text-[#87F4EF] font-Lato text-[28px] font-700 tracking-wide">Informaci\xF3n de contacto</h3> <div> <p class="font-semibold text-white">Tel\xE9fono</p> <a href="https://wa.me/{site.contact}" target="_blank" rel="noopener noreferrer" class="text-[#87F4EF] underline"> ', ' </a> </div> <div> <p class="font-semibold text-white">Correo</p> <a href="mailto:{site.email}" class="text-[#87F4EF]"> ', ` </a> </div> <div> <p class="font-semibold text-white">Horario de atenci\xF3n</p> <p class=" text-[#FFFF]">Lunes a Viernes, 9:00 a.m. \u2013 6:00 p.m. (Hora de M\xE9xico)</p> </div> <div> <p class="font-semibold text-white">Direcci\xF3n</p> <p class=" text-[#87F4EF]">Av. Insurgentes Sur 866, Del Valle, Benito Ju\xE1rez, 03100 Ciudad de M\xE9xico, CDMX.</p> </div> <a href="https://maps.google.com/?q=Insurgentes+Sur+866,+Del+Valle,+Benito+Ju\xE1rez,+03100+Ciudad+de+M\xE9xico,+CDMX" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border border-white text-white px-4 py-2 rounded bg-[#FFFF]"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 4.94606L9 2.94606L2 5.27906V21.3881L9 19.0541L15 21.0541L22 18.7211V2.61206L15 4.94606ZM10 5.38706L14 6.72006V18.6131L10 17.2801V5.38706ZM4 6.72106L8 5.38706V17.2791L4 18.6121V6.72106ZM20 17.2791L16 18.6131V6.72106L20 5.38806V17.2791Z" fill="#006764"></path> </svg> <span class="text-sm font-medium text-[#006764]">C\xF3mo llegar</span> </a> </div> <!-- MAPA --> <div class="overflow-hidden rounded-[32px]"> <iframe class="w-full h-96 rounded-[32px] border-0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.412706424679!2d-99.1653395!3d19.3964756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff647fe7e97d%3A0x323ec214d7a7cfb9!2sAv.%20Insurgentes%20Sur%20866%2C%20Del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1721324059029!5m2!1ses-419!2smx">
                </iframe> </div> </div> </section> <script type="module">
    // Validaci\xF3n de campos y habilitaci\xF3n de bot\xF3n
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        const workplaceInput = form.querySelector('input[name="lugar_de_trabajo"]');
        const specialtySelect = form.querySelector('select[name="specialty"]');
        const stateSelect = form.querySelector('select[name="estado_mx"]');
        const sourceInput = form.querySelector('input[name="por_qu_medio_nos_conociste"]');
        const termsInput = form.querySelector('input[type="checkbox"]#aviso');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Obtener colores desde variables CSS
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
        const greenDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--color-green-dark').trim();
        
        function validateField(input, minLength = 2) {
            const label = input.parentElement.querySelector('label');
            const isValid = input.type === 'email' 
                ? /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/.test(input.value.trim())
                : input.value.trim().length >= minLength;
                
            if (isValid) {
                input.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
                if (label) label.style.background = primaryColor;
                return true;
            } else {
                input.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
                if (label) label.style.background = greenDarkColor;
                return false;
            }
        }
        
        function validateSelect(select) {
            const label = select.parentElement.querySelector('label');
            const isValid = select.value && select.value !== '';
            
            if (isValid) {
                select.classList.remove('text-[#A0A0A0]');
                select.style.setProperty('border', \\\`3px solid \\\${primaryColor}\\\`, 'important');
                if (label) label.style.background = primaryColor;
                return true;
            } else {
                select.style.setProperty('border', \\\`2px solid \\\${greenDarkColor}\\\`, 'important');
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
        
        function checkAll() {
            const nameValid = validateField(nameInput, 3);
            const emailValid = validateField(emailInput);
            const phoneValid = validatePhone();
            const workplaceValid = validateField(workplaceInput, 2);
            const specialtyValid = validateSelect(specialtySelect);
            const stateValid = validateSelect(stateSelect);
            const sourceValid = validateField(sourceInput, 2);
            const termsValid = termsInput.checked;
            
            const allValid = nameValid && emailValid && phoneValid && workplaceValid && specialtyValid && stateValid && sourceValid && termsValid;
            
            if (allValid) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            } else {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.style.cursor = 'not-allowed';
            }
        }
        
        // Event listeners
        nameInput.addEventListener('input', checkAll);
        emailInput.addEventListener('input', checkAll);
        phoneInput.addEventListener('input', checkAll);
        workplaceInput.addEventListener('input', checkAll);
        specialtySelect.addEventListener('change', function() {
            this.classList.remove('text-[#A0A0A0]');
            checkAll();
        });
        stateSelect.addEventListener('change', function() {
            this.classList.remove('text-[#A0A0A0]');
            checkAll();
        });
        sourceInput.addEventListener('input', checkAll);
        termsInput.addEventListener('change', checkAll);
        
        // Inicializar estado
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
	const form = document.getElementById("contact-form");
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

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
				// sendFormEvent(); // Funci\xF3n no definida - comentada
				form.reset();
			} else {
				const json = await response.json();
				if (json.category === "CONFLICT") {
					status.textContent = "\u2705 Tu solicitud se envi\xF3 correctamente. Pronto nos pondremos en contacto.";
					// sendFormEvent(); // Funci\xF3n no definida - comentada
					form.reset();
				} else {
					status.textContent = "\u274C Hubo un problema al enviar tu solicitud. Intenta nuevamente m\xE1s tarde.";
					console.error("Error response:", json);
				}
			}
		} catch (error) {
			console.error("Network error:", error);
			status.textContent = "\u274C Error de red. Por favor, verifica tu conexi\xF3n e intenta nuevamente.";
		}
	});
<\/script> `])), renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "textColor": "text-black", "items": [
    { name: "INICIO", href: "/" },
    { name: "CONTACTO" }
  ] }), maybeRenderHead(), site.contactText, site.email), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Inicio", url: "https://www.medrent.mx" },
    { name: "Contacto", url: "https://www.medrent.mx/contacto" }
  ] })} ` })}` })}`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/contacto.astro", void 0);

const $$file = "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
