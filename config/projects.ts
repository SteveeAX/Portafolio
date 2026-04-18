export const projects = [
  {
    title: 'Asistente Virtual para Adultos Mayores',
    titleEn: 'Virtual Assistant for Elderly People',
    description: 'Asistente por voz sobre Raspberry Pi usando Google Cloud IA.',
    descriptionEn: 'Voice assistant on Raspberry Pi using Google Cloud AI.',
    tags: ['Python', 'Raspberry Pi', 'Google Cloud'],
    link: null,
    detail: {
      photo: '/Disposiitvo.png',
      photoAlt: 'Dispositivo Asistente Virtual para Adultos Mayores',
      introduction: 'Asistente virtual basado en inteligencia artificial generativa e internet de las cosas, diseñado para proporcionar apoyo en el hogar. El sistema integra captura de voz, procesamiento de lenguaje natural en la nube, generación de respuestas mediante modelos de lenguaje y control de dispositivos domésticos inteligentes mediante una arquitectura por capas.',
      introductionEn: 'Virtual assistant based on generative artificial intelligence and the Internet of Things, designed to provide home support. The system integrates voice capture, cloud-based natural language processing, response generation through language models, and control of smart home devices through a layered architecture.',
      arch: {
        image: '/General_arch.png',
        caption: 'El sistema está organizado en cuatro capas principales: la capa de usuario contiene las interfaces (asistente de voz e interfaz web), la capa de servicio incluye el orquestador central y servicios modulares, la capa de servicios externos integra síntesis y transformación de texto a voz, base de datos en la nube, inteligencia artificial generativa y servicios IoT, y la capa de hardware agrupa los componentes físicos como pulsador, micrófono, dongle IoT, pantalla y parlante.',
        captionEn: 'The system is organized into four main layers: the user layer contains the interfaces (voice assistant and web interface), the service layer includes the central orchestrator and modular services, the external services layer integrates text-to-speech synthesis, cloud database, generative artificial intelligence, and IoT services, and the hardware layer groups physical components such as the button, microphone, IoT dongle, screen, and speaker.',
      },
      diagram1: {
        image: '/IA_Arq.png',
        caption: 'El flujo comienza con la captura de audio mediante el micrófono conectado a la Raspberry Pi. El audio se envía a Google Cloud Speech-to-Text para transcripción. El texto se procesa mediante un modelo de lenguaje generativo que genera una respuesta contextualizada. Finalmente, la respuesta se convierte a voz mediante síntesis de texto a voz y se reproduce en el parlante.',
        captionEn: 'The flow begins with audio capture through the microphone connected to the Raspberry Pi. Audio is sent to Google Cloud Speech-to-Text for transcription. The text is processed by a generative language model that generates a contextualized response. Finally, the response is converted to speech via text-to-speech synthesis and played through the speaker.',
      },
      diagram2: {
        image: '/iot_arq.png',
        caption: 'La Raspberry Pi actúa como núcleo central conectado al hogar mediante WiFi. Se comunica con Google Cloud Services para obtener datos externos (clima, noticias, información). El sistema también se integra con dispositivos inteligentes del hogar para control remoto mediante comandos de voz, permitiendo automación doméstica desde una interfaz conversacional única.',
        captionEn: 'The Raspberry Pi acts as the central hub connected to the home via WiFi. It communicates with Google Cloud Services to retrieve external data (weather, news, information). The system also integrates with smart home devices for remote control via voice commands, enabling home automation from a single conversational interface.',
      },
      github: 'https://github.com/SteveeAX/Asistente-virtual-',
    },
  },
  {
    title: 'Modelo Predictivo Fotovoltaico',
    titleEn: 'Photovoltaic Predictive Model',
    description: 'Estimación de salida energética en sistemas solares con Machine Learning.',
    descriptionEn: 'Energy output estimation for solar systems using Machine Learning.',
    tags: ['Python', 'Machine Learning'],
    link: null,
  },
  {
    title: 'Monitoreo Eléctrico Residencial',
    titleEn: 'Residential Electrical Monitoring',
    description: 'Sistema IoT con ESP32, AWS IoT Core (MQTT) y frontend Flutter.',
    descriptionEn: 'IoT system with ESP32, AWS IoT Core (MQTT) and Flutter frontend.',
    tags: ['ESP32', 'AWS IoT Core', 'Flutter', 'MQTT'],
    link: null,
  },
];
