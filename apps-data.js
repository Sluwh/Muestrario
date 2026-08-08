/**
 * Base de Datos Completa de Aplicaciones Reales del Usuario
 * Sin aplicaciones inventadas - Filtradas directamente desde el sistema
 * Todo en idioma Español
 */
const initialApps = [
    {
        id: "obsidian",
        name: "Obsidian",
        category: "Productividad",
        tag: "Base de Conocimiento",
        icon: "simple-icons:obsidian",
        iconColor: "#7C3AED",
        website: "https://obsidian.md",
        shortDesc: "Base de conocimiento local en Markdown con mapa visual de conexiones interconectadas.",
        fullDesc: "Obsidian es mi segundo cerebro. Almacena todas mis notas localmente en archivos Markdown de texto plano, garantizando privacidad total y acceso ultrarrápido sin depender de la nube.",
        features: [
            "Notas enlazadas bidireccionalmente ([[Nota]])",
            "Vista de grafo interactivo de conceptos e ideas",
            "Modo Canvas para esquemas visuales y planificación",
            "Almacenamiento 100% local y privado"
        ],
        command: "Ctrl + O",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "hrc",
        name: "HRC (HotKey Resolution Changer)",
        category: "Sistema",
        tag: "Utilidad de Pantalla",
        icon: "lucide:monitor-dot",
        iconColor: "#60A5FA",
        website: "https://funk.eu/hrc/",
        shortDesc: "Utilidad ligera para cambiar la resolución de pantalla al instante mediante atajos de teclado.",
        fullDesc: "HRC me permite cambiar entre distintas resoluciones de pantalla y tasas de refresco con un solo atajo de teclado, ideal para jugar juegos en resoluciones estiradas.",
        features: [
            "Cambio instantáneo de resolución con Hotkeys",
            "Soporte para perfiles de resolución personalizados",
            "Ejecución transparente en la barra de tareas",
            "Consumo nulo de recursos del sistema"
        ],
        command: "Ctrl + Alt + Shift + R",
        os: ["Windows"]
    },
    {
        id: "crosshairx",
        name: "Crosshair X",
        category: "Sistema",
        tag: "Overlay de Pantalla",
        icon: "lucide:crosshair",
        iconColor: "#F43F5E",
        website: "https://store.steampowered.com/app/1366800/Crosshair_X/",
        shortDesc: "Herramienta de overlay de retícula personalizada para mejorar la precisión visual en pantalla.",
        fullDesc: "Crosshair X me permite superponer una retícula personalizada y centrada en pantalla para juegos y aplicaciones que requieren precisión visual rápida y alineación de pantalla.",
        features: [
            "Personalización completa de retícula, opacidad y color",
            "Superposición acelerada por GPU sobre cualquier ventana",
            "Exportación e importación de perfiles de retícula",
            "Bajo impacto de memoria en segundo plano"
        ],
        command: "Shift + Alt + C",
        os: ["Windows"]
    },
    {
        id: "throttlestop",
        name: "ThrottleStop",
        category: "Sistema",
        tag: "Optimización CPU",
        icon: "lucide:zap",
        iconColor: "#F59E0B",
        website: "https://www.techpowerup.com/download/techpowerup-throttlestop/",
        shortDesc: "Herramienta avanzada de monitoreo y ajuste fino de voltaje, frecuencia y Thermal Throttling de CPU.",
        fullDesc: "ThrottleStop es una herramienta esencial para monitorear y corregir el estrangulamiento térmico del procesador (thermal throttling). Permite ajustar perfiles de voltaje, desactivar límites de energía no deseados y mantener frecuencias de reloj estables en cargas intensas.",
        features: [
            "Monitoreo de frecuencia, voltaje y temperatura en tiempo real",
            "Ajuste de perfiles de energía (Performance, Game, Battery)",
            "Prevención de restricciones de potencia del fabricante (BD PROCHOT)",
            "Control preciso de registros MSR y estado Turbo"
        ],
        command: "Ejecución Administrador",
        os: ["Windows"]
    },
    {
        id: "rtss",
        name: "RivaTuner Statistics Server (RTSS)",
        category: "Sistema",
        tag: "Overlay & Limitador FPS",
        icon: "lucide:activity",
        iconColor: "#10B981",
        website: "https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/",
        shortDesc: "Servidor de estadísticas de rendimiento en pantalla (OSD) y limitación precisa de cuadros (FPS).",
        fullDesc: "RTSS me permite superponer estadísticas de uso de CPU, GPU, temperaturas y tiempos de cuadro (frametime) directamente sobre mis aplicaciones. Además, su limitador de FPS es el más preciso del mercado para eliminar el micro-stuttering.",
        features: [
            "Overlay en pantalla (OSD) personalizable con MSI Afterburner",
            "Limitador de tasa de refresco/FPS ultrapreciso a nivel de driver",
            "Monitoreo de frametime y consistencia de tiempos de cuadro",
            "Compatibilidad universal con DirectX, Vulkan y OpenGL"
        ],
        command: "Inicio en Segundo Plano",
        os: ["Windows"]
    },
    {
        id: "voicemeeter",
        name: "VoiceMeeter Banana",
        category: "Multimedia",
        tag: "Mezclador de Audio",
        icon: "lucide:sliders",
        iconColor: "#FBBF24",
        website: "https://vb-audio.com/Voicemeeter/banana.htm",
        shortDesc: "Mezclador de audio virtual para enrutar micrófonos, juegos y aplicaciones por separado.",
        fullDesc: "VoiceMeeter es esencial para gestionar todo el audio de mi computadora. Permite separar las fuentes de sonido (micrófono, llamadas, música, juegos) en canales virtuales independientes para transmisiones o grabaciones impecables.",
        features: [
            "Enrutamiento de audio multicanal en tiempo real",
            "Ecualización paramétrica y supresión de ruido",
            "Dispositivos de audio virtuales (VAIO)",
            "Integración perfecta con OBS y Discord"
        ],
        command: "Panel de Audio Virtual",
        os: ["Windows"]
    },
    {
        id: "vscode",
        name: "Visual Studio Code",
        category: "Desarrollo",
        tag: "Editor de Código",
        icon: "simple-icons:visualstudiocode",
        iconColor: "#007ACC",
        website: "https://code.visualstudio.com",
        shortDesc: "Editor de código ligero, modular y optimizado para desarrollo web y scripts.",
        fullDesc: "Es mi entorno principal para escribir código HTML, CSS, JavaScript y Python. Su gran ecosistema de extensiones y terminal integrada aceleran mi flujo de trabajo diario.",
        features: [
            "Resaltado de sintaxis ultra-rápido",
            "Terminal integrada y control de versiones Git",
            "Soporte para extensiones e autocompletado",
            "Personalización de atajos y temas oscuros"
        ],
        command: "Ctrl + Shift + P",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "visualstudio",
        name: "Visual Studio 2026",
        category: "Desarrollo",
        tag: "IDE Completo",
        icon: "simple-icons:visualstudio",
        iconColor: "#C084FC",
        website: "https://visualstudio.microsoft.com",
        shortDesc: "Entorno de desarrollo integrado potente para proyectos nativos en C++, C# y .NET.",
        fullDesc: "Utilizado para compilación avanzada, desarrollo de aplicaciones nativas de Windows, herramientas de depuración profunda y análisis de rendimiento de código.",
        features: [
            "Depurador de código nativo de nivel profesional",
            "Diseñador visual y herramientas para .NET / C++",
            "Integración con repositorios de código",
            "Herramientas de profiling y diagnóstico de memoria"
        ],
        command: "F5 (Iniciar depuración)",
        os: ["Windows"]
    },
    {
        id: "git",
        name: "Git / Git Bash",
        category: "Desarrollo",
        tag: "Control de Versiones",
        icon: "simple-icons:git",
        iconColor: "#F05032",
        website: "https://git-scm.com",
        shortDesc: "Sistema de control de versiones distribuido para rastrear cambios en el código fuente.",
        fullDesc: "Git me permite gestionar el historial de versiones de todos mis proyectos de software, trabajar con ramas de código y sincronizar cambios con repositorios de manera eficiente.",
        features: [
            "Gestión de ramas y fusiones (branching & merging)",
            "Consola Git Bash integrada con utilidades Bash",
            "Historial completo de commits y diffs",
            "Sincronización con GitHub y servidores remotos"
        ],
        command: "git status / git commit",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "obs",
        name: "OBS Studio",
        category: "Multimedia",
        tag: "Grabación & Stream",
        icon: "simple-icons:obsstudio",
        iconColor: "#E2E8F0",
        website: "https://obsproject.com",
        shortDesc: "Software de código abierto para transmisión en vivo y grabación de pantalla a alta fidelidad.",
        fullDesc: "OBS Studio es mi herramienta principal para capturar pantalla a alta tasa de cuadros, grabar tutoriales y transmitir contenido con fuentes de video y audio independientes.",
        features: [
            "Captura de pantalla y aplicaciones acelerada por GPU",
            "Gestión de escenas y fuentes de video ilimitadas",
            "Integración con plugins VST y filtros de audio",
            "Soporte para codificadores NVENC / x264"
        ],
        command: "Atajo de Grabación",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "capcut",
        name: "CapCut",
        category: "Multimedia",
        tag: "Edición de Video",
        icon: "simple-icons:capcut",
        iconColor: "#FFFFFF",
        website: "https://www.capcut.com",
        shortDesc: "Editor de video ágil con herramientas avanzadas de cortes, efectos y subtítulos.",
        fullDesc: "CapCut me permite editar videos rápidamente con una interfaz intuitiva, generando subtítulos automáticos y aplicando transiciones y corrección de color en minutos.",
        features: [
            "Generación de subtítulos automáticos por IA",
            "Biblioteca de efectos, transiciones y filtros modernos",
            "Exportación acelerada por hardware en 4K",
            "Línea de tiempo intuitiva con múltiples capas"
        ],
        command: "Espacio (Play/Pausa)",
        os: ["Windows", "macOS", "iOS", "Android"]
    },
    {
        id: "spotify",
        name: "Spotify",
        category: "Multimedia",
        tag: "Audio & Música",
        icon: "simple-icons:spotify",
        iconColor: "#1DB954",
        website: "https://www.spotify.com",
        shortDesc: "Plataforma de streaming de música y podcasts para acompañar sesiones de trabajo.",
        fullDesc: "Spotify acompaña mis sesiones de programación y estudio con listas de reproducción enfocadas (Lo-Fi, Synthwave, bandas sonoras) para mantener la máxima concentración.",
        features: [
            "Reproducción de música en alta calidad",
            "Listas de reproducción personalizadas para enfoque",
            "Sincronización fluida entre dispositivos",
            "Atajos multimedia del teclado"
        ],
        command: "Teclas Multimedia",
        os: ["Windows", "macOS", "Linux", "Mobile"]
    },
    {
        id: "vokoscreen",
        name: "vokoscreenNG",
        category: "Multimedia",
        tag: "Grabación Ligera",
        icon: "lucide:video",
        iconColor: "#EC4899",
        website: "https://github.com/vkohaupt/vokoscreenNG",
        shortDesc: "Grabador de pantalla ligero y directo para capturas rápidas de escritorio.",
        fullDesc: "vokoscreenNG es una alternativa ligera para capturar fragmentos de pantalla o ventanas específicas de forma rápida y sin la complejidad de configurar múltiples fuentes.",
        features: [
            "Grabación rápida de pantalla completa o área seleccionada",
            "Soporte para grabación de cámara web integrada",
            "Captura de audio de micrófono y sistema simultánea",
            "Bajo consumo de recursos durante la grabación"
        ],
        command: "Ctrl + Shift + F10",
        os: ["Windows", "Linux"]
    },
    {
        id: "rave",
        name: "Rave App",
        category: "Multimedia",
        tag: "Streaming en Grupo",
        icon: "lucide:popcorn",
        iconColor: "#EF4444",
        website: "https://rave.io",
        shortDesc: "Aplicación para ver videos, películas y escuchar música sincronizada con amigos.",
        fullDesc: "Rave permite sincronizar la reproducción de contenido multimedia en tiempo real mientras conversas o chateas por voz con amigos en salas privadas.",
        features: [
            "Sincronización perfecta de reproducción de video en tiempo real",
            "Salas de chat de texto y voz integradas",
            "Compatibilidad con múltiples plataformas de video",
            "Interfaz móvil y de escritorio coordinada"
        ],
        command: "Inicio Directo",
        os: ["Windows", "macOS", "iOS", "Android"]
    },
    {
        id: "navicat",
        name: "Navicat Premium",
        category: "Desarrollo",
        tag: "Administración DB",
        icon: "simple-icons:navicat",
        iconColor: "#00A88F",
        website: "https://www.navicat.com",
        shortDesc: "Cliente GUI avanzado para administración simultánea de bases de datos relacionales.",
        fullDesc: "Navicat Premium me permite conectar y gestionar múltiples bases de datos (MySQL, PostgreSQL, SQLite, MariaDB) desde una única interfaz gráfica nativa con diseñador visual de esquemas.",
        features: [
            "Conexión simultánea a múltiples motores de base de datos",
            "Diseñador gráfico de modelos de datos y esquemas",
            "Construcción y optimización de consultas SQL",
            "Herramientas de migración y sincronización de datos"
        ],
        command: "Ctrl + N",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "samfw",
        name: "SamFw Tool",
        category: "Sistema",
        tag: "Utilidad Móvil",
        icon: "lucide:smartphone",
        iconColor: "#3B82F6",
        website: "https://samfw.com",
        shortDesc: "Herramienta especializada en diagnóstico, flasheo y mantenimiento de dispositivos móviles.",
        fullDesc: "Utilizada para tareas de mantenimiento técnico en dispositivos móviles, actualización de firmware de fábrica, cambio de CSC y diagnóstico avanzado del sistema operativo móvil.",
        features: [
            "Flasheo rápido de firmware oficial Samsung/Android",
            "Lectura de información y diagnóstico de hardware móvil",
            "Herramientas de cambio de CSC y desbloqueo técnico",
            "Ejecución directa sin instalación compleja"
        ],
        command: "Ejecución Administrador",
        os: ["Windows"]
    },
    {
        id: "ultraviewer",
        name: "UltraViewer",
        category: "Sistema",
        tag: "Soporte Remoto",
        icon: "lucide:monitor-smartphone",
        iconColor: "#F97316",
        website: "https://www.ultraviewer.net",
        shortDesc: "Software de control de escritorio remoto para soporte técnico y asistencia a distancia.",
        fullDesc: "UltraViewer me permite conectarme de manera rápida y segura al escritorio de otras computadoras para ofrecer soporte técnico remoto, transferir archivos y solucionar problemas a distancia.",
        features: [
            "Conexión remota rápida mediante ID y contraseña temporal",
            "Chat en vivo integrado durante la sesión remota",
            "Transferencia rápida de archivos entre equipos",
            "Conexión segura encriptada punto a punto"
        ],
        command: "Inicio Directo",
        os: ["Windows"]
    },
    {
        id: "figma",
        name: "Figma",
        category: "Diseño",
        tag: "UI/UX & Prototipado",
        icon: "simple-icons:figma",
        iconColor: "#F24E1E",
        website: "https://www.figma.com",
        shortDesc: "Plataforma de diseño de interfaces, maquetación UI/UX y prototipos interactivos.",
        fullDesc: "Utilizada para estructurar diseños de páginas web, definir paletas de colores, crear componentes reutilizables y prototipar la experiencia de usuario antes de escribir código.",
        features: [
            "Diseño vectorial adaptativo con Auto-Layout",
            "Prototipado interactivo de animaciones y flujos",
            "Gestión de sistemas de diseño y variables CSS",
            "Colaboración en tiempo real en la nube"
        ],
        command: "F",
        os: ["Web", "Windows", "macOS"]
    },
    {
        id: "canva",
        name: "Canva",
        category: "Diseño",
        tag: "Diseño Gráfico Rápido",
        icon: "simple-icons:canva",
        iconColor: "#00C4CC",
        website: "https://www.canva.com",
        shortDesc: "Herramienta ágil para creación de piezas gráficas, presentaciones y recursos visuales.",
        fullDesc: "Canva me ayuda a generar gráficos rápidos, portadas, miniaturas y presentaciones atractivas en cuestión de minutos usando su amplia biblioteca de plantillas y recursos.",
        features: [
            "Edición rápida por arrastrar y soltar (drag & drop)",
            "Plantillas profesionales para presentaciones y redes",
            "Exportación directa en PNG, PDF y video MP4",
            "Edición rápida de imágenes y eliminación de fondos"
        ],
        command: "Navegador / App",
        os: ["Web", "Windows", "macOS", "Mobile"]
    },
    {
        id: "everything",
        name: "Everything (Voidtools)",
        category: "Sistema",
        tag: "Búsqueda Instantánea",
        icon: "lucide:search",
        iconColor: "#38BDF8",
        website: "https://www.voidtools.com",
        shortDesc: "Motor de búsqueda ultra-rápido que indexa y encuentra cualquier archivo en milisegundos.",
        fullDesc: "Everything reemplaza la búsqueda lenta de Windows. Indexa millones de archivos de tu disco duro al instante y te permite encontrar cualquier ejecutable, código o archivo en milisegundos.",
        features: [
            "Búsqueda instantánea por nombre de archivo mientras escribes",
            "Uso mínimo de memoria y procesador",
            "Filtros avanzados por extensión y expresiones regulares",
            "Soporte para comandos por consola"
        ],
        command: "Alt + Espacio / Inicio Directo",
        os: ["Windows"]
    },
    {
        id: "localsend",
        name: "LocalSend",
        category: "Productividad",
        tag: "Compartir Archivos",
        icon: "simple-icons:localsend",
        iconColor: "#FF5722",
        website: "https://localsend.org",
        shortDesc: "Herramienta de código abierto para enviar archivos en red local sin conexión a internet.",
        fullDesc: "LocalSend es una alternativa libre y privada a AirDrop. Permite transferir fotos, videos y archivos pesados entre mi PC y teléfono a través del Wi-Fi local sin subir nada a la nube.",
        features: [
            "Transferencia ultrarrápida por red local (Wi-Fi)",
            "100% libre, de código abierto y sin anuncios",
            "Sin límites de tamaño de archivo ni compresión",
            "Compatibilidad multiplataforma instantánea"
        ],
        command: "Inicio Directo",
        os: ["Windows", "macOS", "Linux", "Android", "iOS"]
    },
    {
        id: "python",
        name: "Python 3.14 / IDLE",
        category: "Desarrollo",
        tag: "Lenguaje & Scripts",
        icon: "simple-icons:python",
        iconColor: "#3776AB",
        website: "https://www.python.org",
        shortDesc: "Lenguaje de programación versátil para desarrollo de scripts, automatización e IA.",
        fullDesc: "Python es mi lenguaje principal para automatizar tareas repetitivas, crear scripts de análisis de datos, interactuar con APIs y desarrollar modelos de aprendizaje automático.",
        features: [
            "Sintaxis limpia, legible y expresiva",
            "Entorno interactivo IDLE para pruebas de código rápidas",
            "Gran ecosistema de librerías mediante PIP",
            "Soporte nativo para proyectos de ciencia de datos y automatización"
        ],
        command: "python script.py",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "wsl",
        name: "WSL (Windows Subsystem for Linux)",
        category: "Desarrollo",
        tag: "Entorno Linux Nativo",
        icon: "simple-icons:linux",
        iconColor: "#FCC624",
        website: "https://learn.microsoft.com/windows/wsl",
        shortDesc: "Entorno nativo de Linux dentro de Windows para ejecutar comandos Bash y contenedores.",
        fullDesc: "WSL me permite correr una distribución completa de Linux (como Ubuntu) dentro de Windows sin la sobrecarga de una máquina virtual, pudiendo usar herramientas de consola nativas.",
        features: [
            "Integración perfecta entre el sistema de archivos Windows y Linux",
            "Ejecución nativa de binarios de Linux en consola Bash",
            "Compatibilidad total con Docker, Node.js y herramientas de servidor",
            "Bajo impacto de memoria en comparación con VMs tradicionales"
        ],
        command: "wsl / bash",
        os: ["Windows"]
    },
    {
        id: "ganttproject",
        name: "GanttProject",
        category: "Productividad",
        tag: "Gestión de Proyectos",
        icon: "lucide:gantt-chart",
        iconColor: "#A855F7",
        website: "https://www.ganttproject.biz",
        shortDesc: "Herramienta de código abierto para planificación de proyectos y diagramas de Gantt.",
        fullDesc: "Utilizado para planificar las fases de desarrollo de software, establecer cronogramas, definir hitos y gestionar la asignación de recursos en mis proyectos.",
        features: [
            "Creación fácil de diagramas de Gantt y listas de tareas",
            "Asignación de recursos y cálculo de ruta crítica",
            "Exportación en formatos PDF, PNG e MS Project",
            "Almacenamiento local en formato XML/GAN"
        ],
        command: "Inicio Directo",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "winhance",
        name: "Winhance Utility",
        category: "Sistema",
        tag: "Optimización Windows",
        icon: "lucide:sparkles",
        iconColor: "#EAB308",
        website: "https://github.com/Winhance",
        shortDesc: "Utilidad de optimización y ajuste fino para mejorar el rendimiento de Windows.",
        fullDesc: "Winhance es una herramienta de personalización que me ayuda a desactivar servicios innecesarios de Windows, limpiar archivos temporales y mantener el sistema ágil.",
        features: [
            "Limpieza de almacenamiento temporal del sistema",
            "Ajustes de privacidad y optimización de servicios",
            "Interfaz limpia para mantenimiento de Windows",
            "Mejora en los tiempos de respuesta del sistema"
        ],
        command: "Ejecución Administrador",
        os: ["Windows"]
    },
    {
        id: "systeminformer",
        name: "Process Hacker / System Informer",
        category: "Sistema",
        tag: "Monitoreo de Procesos",
        icon: "lucide:cpu",
        iconColor: "#22C55E",
        website: "https://systeminformer.sourceforge.io",
        shortDesc: "Administrador de tareas avanzado para inspección profunda de memoria, hilos y red.",
        fullDesc: "Reemplazo avanzado del administrador de tareas de Windows. Lo uso para monitorear el consumo exacto de RAM y CPU de cada proceso, detectar conexiones de red y liberar recursos.",
        features: [
            "Árbol detallado de procesos del sistema",
            "Inspección de archivos bloqueados y handles",
            "Gráficos de rendimiento de CPU, GPU y disco",
            "Control preciso de prioridades de procesos"
        ],
        command: "Ctrl + Shift + Esc",
        os: ["Windows"]
    },
    {
        id: "afterburner",
        name: "MSI Afterburner",
        category: "Sistema",
        tag: "Optimización GPU",
        icon: "lucide:gauge",
        iconColor: "#EF4444",
        website: "https://www.msi.com/Landing/afterburner",
        shortDesc: "Monitoreo de temperaturas, velocidades de reloj y rendimiento gráfico en tiempo real.",
        fullDesc: "Utilizado para controlar las curvas de ventilación de la tarjeta gráfica, monitorear temperaturas de componentes y superponer métricas de rendimiento en pantalla (OSD).",
        features: [
            "Overlays en pantalla de uso de GPU/CPU y FPS",
            "Control de perfiles de ventiladores y temperatura",
            "Herramientas de ajuste de voltaje y frecuencia",
            "Monitoreo preciso de memoria de video (VRAM)"
        ],
        command: "Ctrl + F",
        os: ["Windows"]
    },
    {
        id: "quickcpu",
        name: "Quick CPU",
        category: "Sistema",
        tag: "Rendimiento CPU",
        icon: "lucide:microchip",
        iconColor: "#06B6D4",
        website: "https://coderbag.com/product/quickcpu",
        shortDesc: "Ajuste y monitoreo fino de frecuencia, consumo y distribución de núcleos del procesador.",
        fullDesc: "Quick CPU me permite monitorear las temperaturas de los núcleos del procesador, ajustar los estados de energía y prevenir estrangulamiento térmico (thermal throttling).",
        features: [
            "Monitoreo de temperatura por núcleo individual",
            "Ajuste de estacionamiento de núcleos (Core Parking)",
            "Gestión de frecuencia Turbo Boost",
            "Gráficos detallados de uso de energía"
        ],
        command: "Ejecución al Inicio",
        os: ["Windows"]
    },
    {
        id: "xampp",
        name: "XAMPP Control Panel",
        category: "Desarrollo",
        tag: "Servidor Web Local",
        icon: "simple-icons:xampp",
        iconColor: "#FB7A24",
        website: "https://www.apachefriends.org",
        shortDesc: "Entorno de desarrollo local integrado con Apache, MySQL/MariaDB y PHP.",
        fullDesc: "XAMPP me proporciona un servidor web completo en mi máquina para probar bases de datos relacionales, scripts PHP y proyectos web sin necesidad de servidores externos.",
        features: [
            "Panel de control rápido para iniciar Apache y MySQL",
            "Gestor phpMyAdmin para administración de bases de datos",
            "Configuración rápida de puertos y módulos",
            "Ambiente 100% aislado para pruebas de desarrollo"
        ],
        command: "Panel XAMPP",
        os: ["Windows", "Linux", "macOS"]
    },
    {
        id: "nodejs",
        name: "Node.js",
        category: "Desarrollo",
        tag: "Entorno JavaScript",
        icon: "simple-icons:nodedotjs",
        iconColor: "#5FA04E",
        website: "https://nodejs.org",
        shortDesc: "Entorno de ejecución de JavaScript del lado del servidor para herramientas y frameworks.",
        fullDesc: "Node.js es fundamental para ejecutar scripts de automatización, construir APIs de servidor y gestionar paquetes de software a través de NPM.",
        features: [
            "Ejecución asíncrona de JavaScript de alto rendimiento",
            "Gestor de paquetes NPM para instalar librerías",
            "Soporte para servidores HTTP y WebSockets",
            "Amplio ecosistema de paquetes de código abierto"
        ],
        command: "node index.js",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "qbittorrent",
        name: "qBittorrent",
        category: "Productividad",
        tag: "Descargas P2P",
        icon: "simple-icons:qbittorrent",
        iconColor: "#2B61B6",
        website: "https://www.qbittorrent.org",
        shortDesc: "Cliente de descargas P2P ligero, libre de publicidad y de código abierto.",
        fullDesc: "Utilizado para descargar distribuciones de Linux, recursos de código abierto y archivos pesados con alto ancho de banda y bajo consumo de memoria.",
        features: [
            "Interfaz limpia sin anuncios ni spyware",
            "Motor de búsqueda de torrents integrado",
            "Control preciso de límites de velocidad de bajada/subida",
            "Creación y gestión avanzada de torrents"
        ],
        command: "Ctrl + U",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "vlc",
        name: "VLC Media Player",
        category: "Multimedia",
        tag: "Reproductor Multimedia",
        icon: "simple-icons:vlcmediaplayer",
        iconColor: "#FF8800",
        website: "https://www.videolan.org/vlc",
        shortDesc: "Reproductor multimedia universal compatible con cualquier formato de audio y video.",
        fullDesc: "Es mi reproductor de video de confianza. Abre cualquier formato sin necesidad de instalar códecs adicionales y cuenta con ajustes de sincronización de audio y subtítulos en tiempo real.",
        features: [
            "Soporte nativo para códecs H.264, HEVC, AV1, MP4, MKV",
            "Sincronización de audio y subtítulos sobre la marcha",
            "Reproducción de listas y archivos dañados o incompletos",
            "Sin anuncios ni compras dentro de la app"
        ],
        command: "Espacio / Doble Clic",
        os: ["Windows", "macOS", "Linux", "Android"]
    },
    {
        id: "winrar",
        name: "WinRAR",
        category: "Sistema",
        tag: "Compresión de Archivos",
        icon: "simple-icons:winrar",
        iconColor: "#60B7E6",
        website: "https://www.win-rar.com",
        shortDesc: "Gestor de compresión y descompresión de archivos RAR, ZIP y 7z.",
        fullDesc: "Imprescindible para empaquetar grandes carpetas de proyectos, comprimir archivos para envío y extraer rápidamente descargas comprimidas.",
        features: [
            "Soporte nativo para formatos RAR5 y ZIP",
            "Compresión multihilo acelerada",
            "Protección de archivos con contraseña e cifrado",
            "Verificación de integridad de archivos extraídos"
        ],
        command: "Clic Derecho",
        os: ["Windows"]
    },
    {
        id: "virtualbox",
        name: "Oracle VirtualBox",
        category: "Sistema",
        tag: "Virtualización",
        icon: "simple-icons:virtualbox",
        iconColor: "#183A61",
        website: "https://www.virtualbox.org",
        shortDesc: "Plataforma de virtualización para probar sistemas operativos aislados.",
        fullDesc: "Me permite probar distribuciones de Linux, entornos de desarrollo aislados y configuraciones de red de manera segura en máquinas virtuales sin alterar mi sistema principal.",
        features: [
            "Creación de máquinas virtuales aisladas (Linux/Windows)",
            "Captura de instantáneas (Snapshots) para restaurar estados",
            "Soporte para carpetas compartidas y portapapeles bidireccional",
            "Configuración de redes virtuales personalizadas"
        ],
        command: "Ctrl + S",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "telegram",
        name: "Telegram Desktop",
        category: "Productividad",
        tag: "Mensajería",
        icon: "simple-icons:telegram",
        iconColor: "#26A5E4",
        website: "https://desktop.telegram.org",
        shortDesc: "Cliente de mensajería rápido y encriptado para comunicación y transferencia de archivos.",
        fullDesc: "Telegram es mi principal vía de comunicación para compartir archivos pesados de forma instantánea entre dispositivos, unirme a comunidades de programación y recibir notificaciones.",
        features: [
            "Envío de archivos de hasta 2GB sin compresión",
            "Sincronización instantánea en la nube entre dispositivos",
            "Canales y grupos con bots de automatización",
            "Cliente nativo ultrarrápido y ligero"
        ],
        command: "Esc (Cerrar chat)",
        os: ["Windows", "macOS", "Linux", "Mobile"]
    },
    {
        id: "vesktop",
        name: "Vesktop (Discord Optimizado)",
        category: "Productividad",
        tag: "Comunidad & Voz",
        icon: "simple-icons:discord",
        iconColor: "#5865F2",
        website: "https://github.com/Vencord/Vesktop",
        shortDesc: "Cliente optimizado de Discord con menor consumo de memoria y transmisión fluida.",
        fullDesc: "Vesktop reemplaza al cliente oficial de Discord ofreciendo mejor rendimiento, fluidez en la compartición de pantalla y menor uso de CPU durante llamadas de voz y trabajo en equipo.",
        features: [
            "Menor consumo de recursos de CPU y RAM que Discord oficial",
            "Compartición de pantalla fluida a 60 FPS",
            "Personalización de interfaz con temas oscuros",
            "Salas de voz y servidores de desarrollo"
        ],
        command: "Ctrl + K",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "crystaldiskinfo",
        name: "CrystalDiskInfo",
        category: "Sistema",
        tag: "Salud de Discos",
        icon: "lucide:hard-drive",
        iconColor: "#64748B",
        website: "https://crystalmark.info/en/software/crystaldiskinfo/",
        shortDesc: "Herramienta de monitoreo de salud, temperatura y estado S.M.A.R.T. de discos SSD y HDD.",
        fullDesc: "CrystalDiskInfo me permite verificar rápidamente la salud de mis unidades de almacenamiento SSD y discos duros, leyendo los atributos S.M.A.R.T., horas de encendido y temperaturas en tiempo real.",
        features: [
            "Lectura del estado de salud (Bueno, Riesgo, Malo)",
            "Monitoreo de temperatura en tiempo real y alertas",
            "Inspección detallada de atributos S.M.A.R.T. y horas de uso",
            "Soporte para SSDs NVMe, SATA y discos duros externos"
        ],
        command: "Ejecución Directa",
        os: ["Windows"]
    },
    {
        id: "handbrake",
        name: "HandBrake",
        category: "Multimedia",
        tag: "Conversor de Video",
        icon: "simple-icons:handbrake",
        iconColor: "#B02B2C",
        website: "https://handbrake.fr",
        shortDesc: "Transcodificador de video de código abierto para convertir y comprimir formatos de video.",
        fullDesc: "HandBrake me permite convertir videos a formatos optimizados (MP4, MKV), reducir el peso de archivos sin perder calidad y ajustar códecs como H.264, HEVC o AV1.",
        features: [
            "Compresión eficiente manteniendo calidad visual",
            "Soporte para codificación AV1, H.265 (HEVC) y H.264",
            "Ajustes preestablecidos para múltiples dispositivos",
            "Procesamiento en lote de carpetas de video"
        ],
        command: "Ctrl + Add",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "notion",
        name: "Notion",
        category: "Productividad",
        tag: "Workspace & Notas",
        icon: "simple-icons:notion",
        iconColor: "#FFFFFF",
        website: "https://www.notion.so",
        shortDesc: "Espacio de trabajo todo en uno para notas, bases de datos, tareas y documentos.",
        fullDesc: "Notion es mi espacio para estructurar proyectos, crear wikis personales, organizar listas y mantener bases de datos vinculadas de forma flexible.",
        features: [
            "Bases de datos relacionales con vistas de tabla, Kanban y calendario",
            "Organización modular basada en bloques de texto y contenido",
            "Sincronización en tiempo real entre escritorio y móvil",
            "Plantillas personalizables para gestión de proyectos"
        ],
        command: "Ctrl + N",
        os: ["Windows", "macOS", "Web", "Mobile"]
    },
    {
        id: "handy",
        name: "Handy",
        category: "Productividad",
        tag: "Transcripción & Voz IA",
        icon: "lucide:mic",
        iconColor: "#8B5CF6",
        website: "https://github.com/carlrobertoh/handy",
        shortDesc: "Herramienta de transcripción y dictado de voz a texto local asistida por IA.",
        fullDesc: "Handy es una aplicación de escritorio ligera que te permite dictar texto en cualquier ventana mediante atajos globales de teclado utilizando modelos de lenguaje/reconocimiento local Whisper.",
        features: [
            "Dictado por voz instantáneo con Whisper offline",
            "Atajo global configurable para dictar en cualquier app",
            "Mapeo directo al portapapeles o inserción automática",
            "Privacidad total sin enviar audio a servidores externos"
        ],
        command: "Alt + Space",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "hwinfo",
        name: "HWiNFO64",
        category: "Sistema",
        tag: "Diagnóstico Hardware",
        icon: "lucide:binary",
        iconColor: "#3B82F6",
        website: "https://www.hwinfo.com/",
        shortDesc: "Herramienta profesional de diagnóstico e información detallada del hardware del sistema.",
        fullDesc: "HWiNFO64 proporciona monitoreo exhaustivo de sensores en tiempo real (temperaturas, voltajes, frecuencias, consumo térmico) y especificaciones detalladas de cada componente.",
        features: [
            "Monitoreo preciso de sensores de CPU, GPU, RAM y SSD",
            "Detección detallada de arquitectura e información de componentes",
            "Alertas personalizadas por sobrecalentamiento o voltajes",
            "Integración de lecturas con RTSS y MSI Afterburner"
        ],
        command: "Ejecutar Administrador",
        os: ["Windows"]
    },
    {
        id: "upscayl",
        name: "Upscayl",
        category: "Diseño",
        tag: "Escalado IA de Imágenes",
        icon: "simple-icons:upscayl",
        iconColor: "#F43F5E",
        website: "https://www.upscayl.org/",
        shortDesc: "Mejorador y escalador de imágenes por Inteligencia Artificial basado en modelos locales Real-ESRGAN.",
        fullDesc: "Upscayl es un escalador de imágenes de código abierto que utiliza modelos de aprendizaje profundo para aumentar la resolución y nitidez de imágenes sin perder calidad.",
        features: [
            "Escalado de resolución hasta 4x / 8x sin pérdida de detalle",
            "Procesamiento 100% local acelerado por GPU (Vulkan)",
            "Modelos IA especializados (Digital Art, Fast Real, Sharpen)",
            "Procesamiento por lotes de carpetas completas"
        ],
        command: "Ctrl + U",
        os: ["Windows", "macOS", "Linux"]
    },
    {
        id: "lockhunter",
        name: "LockHunter",
        category: "Utilidades",
        tag: "Desbloqueador de Archivos",
        icon: "lucide:lock-keyhole-open",
        iconColor: "#10B981",
        website: "https://lockhunter.com/",
        shortDesc: "Herramienta para identificar y liberar archivos o carpetas bloqueados por procesos en ejecución.",
        fullDesc: "LockHunter te muestra qué programa está impidiendo borrar, mover o renombrar un archivo y te permite finalizar el proceso o liberar el bloqueo de forma segura.",
        features: [
            "Visualización exacta del proceso que bloquea un archivo",
            "Opción para cerrar proceso, desbloquear o eliminar al reiniciar",
            "Integración directa en el menú contextual del Explorador",
            "Manejo seguro enviando archivos a la Papelera de reciclaje"
        ],
        command: "Menú Contextual",
        os: ["Windows"]
    }
];


