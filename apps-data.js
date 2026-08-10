/**
 * Base de Datos Completa de Aplicaciones Reales del Usuario
 * Información directa, técnica y al grano sin rodeos.
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
        fullDesc: "Entorno de conocimiento local basado en archivos Markdown de texto plano. Garantiza privacidad total y acceso ultrarrápido a notas enlazadas sin dependencia de la nube.",
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
        fullDesc: "Cambia instantáneamente entre distintas resoluciones de pantalla y tasas de refresco con atajos de teclado personalizados.",
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
        fullDesc: "Superpone una retícula personalizada y centrada en pantalla para juegos y aplicaciones que requieren alineación y precisión visual.",
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
        fullDesc: "Monitorea y corrige el estrangulamiento térmico del procesador (thermal throttling). Ajusta perfiles de voltaje, anula límites de energía no deseados y estabiliza frecuencias bajo carga.",
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
        fullDesc: "Superpone métricas de uso de CPU, GPU, temperaturas y tiempos de cuadro (frametime). Incluye limitador de FPS a nivel de driver para eliminar micro-stuttering.",
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
        fullDesc: "Gestiona y enruta las fuentes de audio del sistema (micrófonos, llamadas, música, aplicaciones) en canales virtuales independientes.",
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
        fullDesc: "Entorno de desarrollo para HTML, CSS, JavaScript y Python con ecosistema de extensiones, terminal integrada y control de versiones.",
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
        fullDesc: "Entorno de compilación avanzada, desarrollo de aplicaciones nativas de Windows, depuración profunda y análisis de rendimiento de código.",
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
        fullDesc: "Gestiona el historial de versiones de proyectos de software, trabajo con ramas de código y sincronización con repositorios remotos.",
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
        fullDesc: "Herramienta para capturar pantalla a alta tasa de cuadros, grabar tutoriales y transmitir contenido con fuentes de video y audio independientes.",
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
        icon: "lucide:clapperboard",
        iconColor: "#00F2FE",
        website: "https://www.capcut.com",
        shortDesc: "Editor de video ágil con herramientas avanzadas de cortes, efectos y subtítulos.",
        fullDesc: "Editor de video acelerado por hardware para cortes rápidos, generación de subtítulos automáticos y corrección de color.",
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
        fullDesc: "Plataforma de streaming de audio para reproducción de música en alta calidad y sincronización fluida entre dispositivos.",
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
        fullDesc: "Grabador de pantalla ligero para capturar fragmentos de escritorio, ventanas específicas o cámara web sin configuraciones complejas.",
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
        id: "navicat",
        name: "Navicat Premium",
        category: "Desarrollo",
        tag: "Administración DB",
        icon: "lucide:database",
        iconColor: "#00A88F",
        website: "https://www.navicat.com",
        shortDesc: "Cliente GUI avanzado para administración simultánea de bases de datos relacionales.",
        fullDesc: "Cliente gráfico para conectar y administrar múltiples motores de base de datos relacionales (MySQL, PostgreSQL, SQLite, MariaDB).",
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
        fullDesc: "Herramienta para mantenimiento técnico en dispositivos móviles, flasheo de firmware oficial de fábrica y diagnóstico de hardware.",
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
        fullDesc: "Software de conexión remota para soporte técnico, transferencia de archivos y solución de problemas a distancia.",
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
        fullDesc: "Plataforma para estructurar diseños de páginas web, definir paletas de colores, crear componentes reutilizables y prototipar interfaces.",
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
        fullDesc: "Herramienta gráfica para generar recursos visuales, miniaturas y presentaciones mediante plantillas y elementos vectoriales.",
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
        fullDesc: "Motor de búsqueda que indexa el almacenamiento del sistema para encontrar archivos, ejecutables y carpetas en milisegundos.",
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
        fullDesc: "Transfiere archivos, documentos y carpetas entre dispositivos conectados a la misma red local Wi-Fi sin subir datos a internet.",
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
        fullDesc: "Lenguaje de programación optimizado para automatizar tareas, desarrollar scripts de procesamiento de datos e integrar modelos de aprendizaje automático.",
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
        fullDesc: "Ejecuta distribuciones nativas de Linux (como Ubuntu) dentro de Windows sin la sobrecarga de una máquina virtual tradicional.",
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
        fullDesc: "Herramienta para estructurar cronogramas de desarrollo, definir hitos de proyectos y gestionar la asignación de recursos.",
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
        fullDesc: "Utilidad de mantenimiento para deshabilitar servicios innecesarios de Windows, eliminar archivos temporales y optimizar la respuesta del sistema.",
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
        fullDesc: "Administrador de tareas avanzado para inspeccionar el uso de memoria RAM y CPU por proceso, analizar conexiones de red y liberar recursos.",
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
        fullDesc: "Controla perfiles de ventilación de GPU, monitorea temperaturas de componentes y superpone métricas de rendimiento en pantalla.",
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
        fullDesc: "Monitorea temperaturas por núcleo individual, ajusta perfiles de energía de CPU y gestiona el estacionamiento de núcleos.",
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
        fullDesc: "Servidor web local integrado con módulos Apache, bases de datos MySQL/MariaDB y gestor phpMyAdmin.",
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
        fullDesc: "Entorno de ejecución para ejecutar JavaScript del lado del servidor, construir servicios HTTP y administrar paquetes vía NPM.",
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
        fullDesc: "Cliente P2P de código abierto para descarga de archivos y distribuciones de software con alto ancho de banda.",
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
        fullDesc: "Reproductor multimedia universal que soporta la mayoría de códecs y contenedores de video sin necesidad de paquetes adicionales.",
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
        icon: "lucide:file-archive",
        iconColor: "#60B7E6",
        website: "https://www.win-rar.com",
        shortDesc: "Gestor de compresión y descompresión de archivos RAR, ZIP y 7z.",
        fullDesc: "Gestor de compresión para empaquetar archivos, cifrar contenedores con contraseña y extraer datos comprimidos.",
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
        fullDesc: "Plataforma de virtualización para ejecutar sistemas operativos aislados (Linux, Windows) en entornos seguros.",
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
        fullDesc: "Cliente de mensajería instantánea con almacenamiento ilimitado en la nube, envío de archivos pesados y soporte para bots.",
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
        fullDesc: "Cliente optimizado de Discord con menor consumo de memoria RAM y CPU, y mejor rendimiento en transmisiones de pantalla.",
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
        fullDesc: "Herramienta de diagnóstico que lee atributos S.M.A.R.T., temperaturas en tiempo real y estado de salud de SSDs y HDDs.",
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
        icon: "lucide:film",
        iconColor: "#E11D48",
        website: "https://handbrake.fr",
        shortDesc: "Transcodificador de video de código abierto para convertir y comprimir formatos de video.",
        fullDesc: "Transcodificador de video de código abierto para convertir formatos y comprimir archivos sin pérdida de calidad visual.",
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
        fullDesc: "Espacio de trabajo modular para crear wikis, organizar listas de tareas y estructurar bases de datos relacionales.",
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
        website: "https://github.com/cjpais/handy",
        shortDesc: "Herramienta de transcripción y dictado de voz a texto local asistida por IA.",
        fullDesc: "Aplicación de dictado de voz a texto en tiempo real que ejecuta el modelo Whisper offline para transcripciones locales de alta precisión.",
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
        fullDesc: "Herramienta de diagnóstico profesional que proporciona monitoreo exhaustivo de sensores (temperaturas, voltajes, frecuencias, consumo).",
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
        icon: "lucide:wand-2",
        iconColor: "#F43F5E",
        website: "https://www.upscayl.org/",
        shortDesc: "Mejorador y escalador de imágenes por Inteligencia Artificial basado en modelos locales Real-ESRGAN.",
        fullDesc: "Escalador de imágenes de código abierto que utiliza modelos de aprendizaje profundo para aumentar la resolución y nitidez sin pérdida de detalle.",
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
        fullDesc: "Identifica procesos que bloquean archivos o carpetas en Windows y permite liberarlos o eliminarlos de forma segura.",
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
