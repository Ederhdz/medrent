export const SITE = {
  name: 'Med Rent',
  legalName: 'Medrent®',
  slogan: 'Distribuimos las mejores marcas de equipo médico',
};

export const BRANDS = [
  { name: "Ambu", logo: "Ambu.png" },
  { name: "Astar", logo: "Astar.png" },
  { name: "Cadwell", logo: "Cadwell.png" },
  { name: "Deymed", logo: "Deymed.png" },
  { name: "Electrocap", logo: "Electrocap.png" },
  { name: "Esaote", logo: "Esaote.png" },
  { name: "Luciole medical", logo: "Luciole medical.png" },
  { name: "Hasomed", logo: "Hasomed - Logotipo.png" },
  { name: "NE Neuroelectrics", logo: "NE.png" },
  { name: "Physiomed", logo: "Physiomed.png" },
  { name: "Rimed", logo: "Rimed.png" },
  { name: "Hasomed Rehacom", logo: "Rehacom.png" },
  { name: "Samsung Medison", logo: "Samsung Medison.png" },
  { name: "Spes medica", logo: "spes.png" },
  { name: "Spine Guard", logo: "Spine Guard - logotipo.png" },
  { name: "Syneika", logo: "Syneika - Logotipo.png" },
  { name: "tVNS", logo: "tVNS Health - Logotipo.png" },
  { name: "Weaver", logo: "Weaver.png" }, 
];

export const METRICS = [
  { value: '+8000', label: 'CLIENTES AL 2026' },
  { value: '+200', label: 'FINANCIAMIENTOS OTORGADOS' },
  { value: '15', label: 'MARCAS' },
  { value: '+50', label: 'AÑOS DE EXPERIENCIA' },
  { value: '+45', label: 'ÁREAS DE ESPECIALIDAD' },
]

export const ESPECIALTIES = [
  { Nombre:"Neurofisiología", 
    id: 1, 
    Id: 1, 
    Path:"neurofisiologia", 
    Descripcion:"Tecnologías para el diagnóstico funcional del sistema nervioso, que integran EEG, EMG, estudios de conducción nerviosa, polisomnografía, poligrafía y ultrasonido neuromuscular, con soluciones orientadas a la práctica clínica especializada y al análisis neurofisiológico avanzado.", Slug:"neurofisiologia", ImageHero:"hero.png",
    Image:"Neurofisiologia.jpg",
    CatalogoAplicaciones: [
      { AplicacionClinica: "Electroencefalografía (EEG)", Slug: "eeg", id: 1, Equipos:"", image: "eeg.png", Descripcion:"Registro de la actividad eléctrica cerebral para la evaluación de epilepsia, trastornos neurológicos, alteraciones del sueño y estudios funcionales del sistema nervioso central, con soluciones diseñadas para entornos clínicos y hospitalarios."},
      { AplicacionClinica: "Electromiografía (EMG)", Slug: "emg", id: 2, Equipos:"", image: "emg.png", Descripcion: "Evaluación de la actividad eléctrica muscular para el diagnóstico de enfermedades neuromusculares, lesiones del nervio periférico y trastornos del movimiento, como parte integral del estudio neuromuscular."},
      { AplicacionClinica: "Estudios de conducción nerviosa (NCS)", Slug: "ncs", id: 3, Equipos:"", image: "ncs.png", Descripcion: "Medición de la velocidad, latencia y amplitud de conducción de los nervios periféricos para la detección de neuropatías, atrapamientos nerviosos y alteraciones sensitivo-motoras."},
      { AplicacionClinica: "Potenciales evocados (EP)", Slug: "ep", id: 4, Equipos:"", image: "ep.png", Descripcion: "Evaluación de la respuesta del sistema nervioso ante estímulos visuales, auditivos y somatosensoriales, utilizada para el diagnóstico de alteraciones neurológicas centrales y el apoyo en estudios funcionales avanzados."},
      { AplicacionClinica: "Ultrasonido neuromuscular (NMUS)", Slug: "ultrasonido-neuromuscular", id: 5, Equipos:"", image: "NMUS.png", Descripcion: "Evaluación estructural y funcional del sistema neuromuscular mediante imágenes en tiempo real, utilizada para el análisis de músculos, nervios periféricos y como complemento diagnóstico en estudios neuromusculares."},
      { AplicacionClinica: "Monitoreo neurofisiológico intraoperatorio (IONM)", Slug: "ionm", id: 6, Equipos:"", image: "IONM.png", Descripcion: "Supervisión continua de la integridad funcional del sistema nervioso durante procedimientos quirúrgicos, con el objetivo de reducir riesgos neurológicos y apoyar la toma de decisiones intraoperatorias en cirugías de alta complejidad."},
      { AplicacionClinica: "Polisomnografía (PSG)", Slug: "polisomnografia", id: 7, Equipos:"", image: "PSG.png", Descripcion: "Registro y análisis de variables fisiológicas durante el sueño para la evaluación de trastornos respiratorios del sueño, alteraciones del ritmo sueño-vigilia y estudios del descanso, tanto en laboratorio como en modalidades ambulatorias."},
      { AplicacionClinica: "Polígrafo", Slug: "poligrafo", id: 8, Equipos:"", image: "Poligrafo.png", Descripcion: "Evaluación simplificada del sueño enfocada en el diagnóstico de trastornos respiratorios, como apnea del sueño, mediante el registro de variables respiratorias clave."},
      { AplicacionClinica: "Consumibles EEG / EMG / EP / NCS", Slug: "consumibles-eeg-emg-ep-ncs", id: 9, Equipos:"consumibles-eeg-emg-ep-ncs.png", image: "consumibles-eeg-emg-ep-ncs", Descripcion: "Consumibles especializados para estudios de EEG, EMG, NCS, EP, PSG e IONM, que incluyen electrodos, agujas, pastas conductivas y accesorios clínicos, diseñados para garantizar registros confiables, seguros y reproducibles en entornos médicos."},
    ]
  },
  { Nombre:"Neurocirugía", id: 2, Id: 2, Path:"neurocirugia", Descripcion:"Soluciones tecnológicas para procedimientos neuroquirúrgicos que incluyen visualización avanzada, neuronavegación, instrumental especializado y tecnologías de apoyo quirúrgico, diseñadas para mejorar la precisión, seguridad y toma de decisiones en entornos de alta complejidad.", Slug:"neurocirugia", Image:"Neurocirugia.jpg", ImageHero:"hero.png",
    CatalogoAplicaciones: [
      { AplicacionClinica: "Microscopio / Exoscopio", Slug: "microscopio-exoscopio", id: 1, Equipos:"", image: "microscopio-exoscopio.png", Descripcion: "Sistemas de visualización quirúrgica avanzada que permiten una visión ampliada y detallada del campo operatorio, mejorando la precisión, la ergonomía del cirujano y el control durante procedimientos neuroquirúrgicos complejos."},
      { AplicacionClinica: "Neuronavegación", Slug: "neuronavegacion", id: 2, image: "neuronavegacion.png", Descripcion: "Sistemas de neuronavegación diseñados para asistir al cirujano mediante la integración de imágenes médicas y referencias anatómicas en tiempo real, facilitando una localización precisa y segura durante procedimientos neuroquirúrgicos."},
      { AplicacionClinica: "Guía dinámica de cirugía", Slug: "guia-dinamica-cirugia", id: 3, image: "guia-dinamica-cirugia.png", Descripcion: "Tecnología de guiado dinámico que proporciona retroalimentación en tiempo real durante procedimientos quirúrgicos, ayudando a mejorar la precisión del abordaje y a reducir el riesgo de desviaciones intraoperatorias."},
      { AplicacionClinica: "Consumibles IONM", Slug: "consumibles", id: 4, image: "consumibles.png", Descripcion: "Consumibles especializados utilizados en procedimientos de monitoreo neurofisiológico intraoperatorio (IONM), esenciales para la evaluación y preservación de la función neurológica durante cirugías de alta complejidad."},
    ]
  },
  { Nombre:"Neuromodulación", id: 3, Id: 3, Path:"neuromodulacion", Descripcion:"Tecnologías terapéuticas no invasivas y de estimulación neurológica que abarcan TMS, tDCS/TES, VNS transcutáneo y terapias cognitivas, enfocadas en el tratamiento de trastornos neurológicos, cognitivos y funcionales con respaldo clínico.", Slug:"neuromodulacion", Image:"Neuromodulacion.jpg",ImageHero:"hero.png",
    CatalogoAplicaciones: [
      { AplicacionClinica: "Terapia cognitiva", Slug: "terapia-cognitiva", id: 4, Equipos:"", image: "terapia-cognitiva.png", Descripcion: "Tecnologías de rehabilitación cognitiva asistida por computadora, diseñadas para apoyar la evaluación y el entrenamiento de funciones cognitivas como memoria, atención y funciones ejecutivas en pacientes con trastornos neurológicos."},
      { AplicacionClinica: "Estimulación transcraneal por corriente directa (tDCS)", Slug: "tdcs", id: 1, Equipos:"", image: "tdcs.png", Descripcion: "Tecnología de neuromodulación no invasiva basada en la aplicación de corriente eléctrica de baja intensidad para modular la excitabilidad cortical, utilizada en protocolos terapéuticos y de investigación clínica." },
      { AplicacionClinica: "Estimulación magnética transcraneal (TMS)", Slug: "tms", id: 2, Equipos:"", image: "tms.png", Descripcion: "Sistema de neuromodulación no invasiva que emplea campos magnéticos para inducir actividad neuronal focalizada, utilizado en el tratamiento de diversos trastornos neurológicos y psiquiátricos bajo protocolos clínicos establecidos."},
      { AplicacionClinica: "Estimulación del nervio vago transcutánea (VNS)", Slug: "vns", id: 3, Equipos:"", image: "vns.png", Descripcion: "Tecnología de neuromodulación no invasiva orientada a la estimulación del nervio vago mediante dispositivos externos, utilizada como apoyo terapéutico en distintos trastornos neurológicos y funcionales" },
      { AplicacionClinica: "Consumibles para neuromodulación", Slug: "consumibles-neuromodulacion", id: 3, Equipos:"", image: "consumibles-neuromodulacion.png", Descripcion: "Consumibles especializados utilizados en terapias de neuromodulación, indispensables para la correcta aplicación de los protocolos de estimulación y el contacto seguro con el paciente." },
    ]
  },
  { Nombre:"Neurovascular", id: 5, Id: 5, Path:"neurovascular", Descripcion:"Equipos para la evaluación hemodinámica cerebral y el diagnóstico vascular, que integran Doppler transcraneal (TCD) y soluciones de monitoreo cerebral, apoyando la detección y seguimiento de patologías neurovasculares.", Slug:"neurovascular", Image:"Neurovascular.jpg", ImageHero:"hero.png",
    CatalogoAplicaciones: [
      { AplicacionClinica: "Doppler transcraneal (TCD)", Slug: "tdc", id: 1, Equipos:"", image: "tdc.png", Descripcion: "Tecnología de ultrasonido no invasiva utilizada para la evaluación del flujo sanguíneo en las principales arterias cerebrales. El Doppler transcraneal permite el análisis hemodinámico cerebral en tiempo real y es una herramienta fundamental en el diagnóstico, monitoreo y seguimiento de patologías neurovasculares." },
      { AplicacionClinica: "Monitoreo cerebral", Slug: "monitoreo-cerebral", id: 2, Equipos:"", image: "monitoreo-cerebral.png", Descripcion: "Plataformas tecnológicas diseñadas para el monitoreo continuo de parámetros cerebrales y fisiológicos, orientadas al seguimiento clínico en entornos hospitalarios y de cuidados críticos. Estas soluciones permiten la evaluación prolongada del estado cerebral como apoyo en la toma de decisiones clínicas y el manejo del paciente neurológico." },
    ]
  },
  { Nombre:"Rehabilitación", id: 4, Id: 4, Path:"rehabilitacion", Descripcion:"Herramientas y equipos para rehabilitación física y neurológica, que incluyen isocinesia, electroterapia, ondas de choque, oscilación profunda, radiofrecuencia, terapias combinadas y ultrasonido diagnóstico, orientados a optimizar procesos terapéuticos y resultados clínicos.", Slug:"rehabilitacion", Image:"Rehabilitacion.jpg", ImageHero:"hero.png",
    CatalogoAplicaciones: [
      { AplicacionClinica: "Electroterapia", Slug: "electroterapia", id: 2, Equipos:"", image: "electroterapia.png", Descripcion: "Tecnologías de estimulación eléctrica utilizadas en procesos de rehabilitación para el alivio del dolor, la activación neuromuscular y la recuperación funcional. La electroterapia es una herramienta fundamental en programas de fisioterapia y rehabilitación física." },
      { AplicacionClinica: "Isocinesia", Slug: "isocinesia", id: 2, Equipos:"", image: "isocinesia.png", Descripcion: "Sistemas de evaluación y rehabilitación isocinética diseñados para medir y entrenar la fuerza muscular de forma controlada, precisa y reproducible. La isocinesia es ampliamente utilizada en rehabilitación deportiva, ortopédica y neurológica." },
      { AplicacionClinica: "Láser de alta potencia", Slug: "laser-alta-potencia", id: 3, Equipos:"", image: "laser-alta-potencia.png", Descripcion: "Tecnología terapéutica basada en la aplicación de láser de alta potencia para el tratamiento del dolor, la inflamación y la regeneración tisular, utilizada como apoyo en protocolos de rehabilitación física." },
      { AplicacionClinica: "Ondas de choque", Slug: "ondas-de-choque", id: 4, Equipos:"", image: "ondas-de-choque.png", Descripcion: "Sistemas de ondas de choque utilizados en rehabilitación para el tratamiento de patologías musculoesqueléticas, favoreciendo la regeneración tisular y la reducción del dolor en lesiones crónicas y agudas." },
      { AplicacionClinica: "Oscilación profunda", Slug: "oscilacion-profunda", id: 5, Equipos:"", image: "oscilacion-profunda.png", Descripcion: "Tecnología terapéutica basada en campos electrostáticos que generan oscilación profunda en los tejidos, utilizada para el manejo del dolor, el edema y la recuperación postoperatoria y postraumática." },
      { AplicacionClinica: "Radiofrecuencia", Slug: "radiofrecuencia", id: 6, Equipos:"", image: "radiofrecuencia.png", Descripcion: "Tecnología de radiofrecuencia aplicada en rehabilitación para el tratamiento del dolor y la estimulación profunda de tejidos, utilizada como apoyo en procesos de recuperación funcional." },
      { AplicacionClinica: "Terapia combinada", Slug: "terapia-combinada", id: 7, Equipos:"", image: "terapia-combinada.png", Descripcion: "Plataformas terapéuticas que integran múltiples modalidades de tratamiento en un solo sistema, permitiendo la aplicación combinada de distintas técnicas de rehabilitación para optimizar los resultados terapéuticos." },
      { AplicacionClinica: "Ultrasonido terapéutico", Slug: "ultrasonido-terapeutico", id: 8, Equipos:"", image: "ultrasonido-terapeutico.png", Descripcion: "Tecnología de ultrasonido utilizada en rehabilitación para el tratamiento de tejidos blandos, favoreciendo la recuperación muscular, la reducción del dolor y la mejora de la movilidad funcional." },
    ]
  }
];

export const APLICATIONS = [
  {
    nombre: "Cardiología",
    descripcion: "Soluciones para diagnóstico y monitoreo cardíaco.",
    icono: "/icons/cardiologia.svg",
    url: "/aplicaciones/cardiologia"
  },
  {
    nombre: "Neurofisiología",
    descripcion: "Equipos para estudios neurofisiológicos.",
    icono: "/icons/neurofisiologia.svg",
    url: "/aplicaciones/neurofisiologia"
  },
  {
    nombre: "Ultrasonido",
    descripcion: "Tecnología avanzada en ultrasonido médico.",
    icono: "/icons/ultrasonido.svg",
    url: "/aplicaciones/ultrasonido"
  },
];