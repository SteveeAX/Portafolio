export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallback?: string;
  display?: 'standard' | 'wide' | 'phone';
}

export const imageAssets = {
  profile: {
    card: {
      src: '/images/profile/profile-card.webp',
      fallback: '/Profile.png',
      alt: 'Foto de perfil de Steveen Quiroz',
      width: 725,
      height: 900,
    },
    openGraph: {
      src: '/images/profile/profile-og.jpg',
      fallback: '/Profile.png',
      alt: 'Foto de perfil de Steveen Quiroz, Ingeniero en Telemática',
      width: 1200,
      height: 1200,
    },
    icons: {
      appleTouch: '/images/profile/icon-180.png',
      small: '/images/profile/icon-32.png',
      medium: '/images/profile/icon-192.png',
      large: '/images/profile/icon-512.png',
    },
  },
  projects: {
    virtualAssistant: {
      device: {
        src: '/images/projects/virtual-assistant-device.webp',
        fallback: '/Disposiitvo.png',
        alt: 'Dispositivo Asistente Virtual para Adultos Mayores',
        width: 1280,
        height: 886,
      },
      architecture: {
        src: '/images/projects/virtual-assistant-architecture.webp',
        fallback: '/General_arch.png',
        alt: 'Arquitectura general del asistente virtual',
        width: 1280,
        height: 761,
      },
      aiFlow: {
        src: '/images/projects/virtual-assistant-ai-flow.webp',
        fallback: '/IA_Arq.png',
        alt: 'Flujo de interacción de inteligencia artificial del asistente virtual',
        width: 1280,
        height: 804,
      },
      iotFlow: {
        src: '/images/projects/virtual-assistant-iot-flow.webp',
        fallback: '/iot_arq.png',
        alt: 'Flujo de interacción IoT del asistente virtual',
        width: 1280,
        height: 583,
      },
    },
    photovoltaicSystem: {
      system: {
        src: '/images/projects/photovoltaic-system.webp',
        fallback: '/SistemaFV.png',
        alt: 'Sistema Fotovoltaico',
        width: 1280,
        height: 640,
      },
    },
    residentialElectricalMonitoring: {
      electricalDiagram: {
        src: '/images/projects/residential-electrical-diagram.webp',
        fallback: '/images/projects/Diagrama electrico.png',
        alt: 'Diagrama eléctrico del sistema de monitoreo energético residencial',
        width: 1600,
        height: 928,
      },
      deployment: {
        src: '/images/projects/residential-deployment.webp',
        fallback: '/images/projects/despliegue.png',
        alt: 'Despliegue físico del sistema de monitoreo eléctrico residencial',
        width: 1280,
        height: 798,
      },
      appDashboard: {
        src: '/images/projects/residential-app-dashboard.webp',
        fallback: '/images/projects/aplicacion1.png',
        alt: 'Pantalla de la aplicación móvil con variables eléctricas del sistema',
        width: 698,
        height: 730,
        display: 'phone',
      },
      appControl: {
        src: '/images/projects/residential-app-control.webp',
        fallback: '/images/projects/aplicacion2.drawio.png',
        alt: 'Pantalla de la aplicación móvil para control de cargas domésticas',
        width: 1280,
        height: 645,
        display: 'wide',
      },
    },
    eegPreictalClassifier: {
      originalSignal: {
        src: '/images/projects/eeg-original-signal.webp',
        fallback: '/images/projects/señal original.png',
        alt: 'Señal EEG original con segmentos interictal, preictal e ictal',
        width: 1600,
        height: 434,
        display: 'wide',
      },
      filterComparison: {
        src: '/images/projects/eeg-filter-comparison.webp',
        fallback: '/images/projects/comparacion_filtros.png',
        alt: 'Comparación de filtros digitales aplicados a la señal EEG',
        width: 1280,
        height: 724,
      },
    },
  },
} as const;
