export const dictionaries = {
  "pt-BR": {
    title: "Principais Conquistas como Desenvolvedor",
    errorImage: "Erro ao carregar imagem",
    data: [
      {
        id: 1,
        title:
          "Arquitetura de Microsserviços para Processamento Massivo de Dados",
        company: "Politec-MT",
        category: "architecture",
        challenge:
          "O sistema monolítico existente enfrentava lentidão e instabilidade ao processar grandes volumes de dados, impactando a geração de relatórios críticos.",
        solution: [
          "Projetei e implementei sozinho uma arquitetura híbrida de microsserviços, integrando-o ao monolito sem interromper operações existentes.",
          "Desenvolvi um serviço especializado em geração de relatórios dinâmicos, consultando múltiplas bases de dados (SQL Server, PostgreSQL) em tempo real.",
        ],
        results: [
          "Redução de 80% no tempo de processamento de relatórios complexos.",
          "Melhoria na escalabilidade, permitindo que o sistema suportasse picos de demanda sem falhas.",
        ],
      },
      {
        id: 2,
        title: "Reestruturação da Fábrica de Software & DevOps",
        company: "Politec-MT",
        category: "devops",
        challenge:
          "Processos manuais de deploy e falta de versionamento causavam inconsistências e atrasos.",
        solution: [
          "Migrei projetos para o Microsoft Azure, modernizando a infraestrutura.",
          "Implementei Git para versionamento e Azure DevOps para CI/CD, criando pipelines automatizadas de Build e Deploy.",
          "Introduzi práticas de integração contínua, reduzindo erros em produção em 40%.",
        ],
        results: [
          "Ganho de eficiência no desenvolvimento e maior rastreabilidade de mudanças.",
        ],
      },
      {
        id: 3,
        title: "Liderança em Aplicações Inovadoras",
        company: "Politec-MT",
        category: "leadership",
        challenge:
          "Necessidade de sistemas modernos para recadastramento e previdência.",
        solution: [
          "Recad Online & Censo: Liderança técnica no desenvolvimento de soluções para recadastramento de segurados e gerenciamento de arquivos.",
          "Implementação de fluxos automatizados, reduzindo o tempo de processamento de dias para horas.",
          "Melhoria de satisfação do usuário com interfaces intuitivas (Vue.js) e APIs eficientes (NestJS).",
          "Sisprev+ (Sistema de Previdência): Participação ativa no levantamento de requisitos e definição da arquitetura.",
          "Liderança técnica do back-end, integrando microsserviços com sistemas legados.",
        ],
        results: [
          "Sistemas mais eficientes e melhoria na experiência do usuário.",
        ],
      },
      {
        id: 4,
        title: "Microsserviços Escaláveis & Alta Performance",
        company: "Politec-MT",
        category: "microservices",
        challenge: "Necessidade de sistemas escaláveis e de alta performance.",
        solution: [
          "Projeto de microsserviços modulares para facilitar manutenção e escalabilidade.",
          "Otimização de consultas e uso de cache distribuído, aumentando a capacidade de usuários simultâneos em 60%.",
          "Integração com sistemas legados via APIs RESTful e mensageria (RabbitMQ).",
        ],
        results: [
          "Maior capacidade de processamento e melhor experiência do usuário.",
        ],
        technologies:
          "Vue.js, NestJS, TypeORM, Prisma, MongoDB, SQL Server, PostgreSQL",
      },
      {
        id: 5,
        title: "Agenda Acessória",
        company: "Politec-MT",
        category: "other",
        challenge: "Necessidade de gestão eficiente de agendas e tarefas.",
        solution: [
          "Desenvolvimento de uma solução auxiliar para gestão de agendas e tarefas, integrada ao ecossistema principal.",
          "Automação de notificações e relatórios.",
        ],
        results: ["Economia de 20 horas/mês em processos manuais."],
      },
    ],
    impact: {
      title: "Impacto Geral",
      description: "Minhas contribuições resultaram em:",
      items: [
        "<strong>Redução de custos</strong> com infraestrutura e processos manuais.",
        "<strong>Aumento de produtividade</strong> em equipes e usuários finais.",
        "<strong>Sistemas preparados para escala</strong>, com adoção de cloud e DevOps.",
      ],
    },
  },
  "en-US": {
    title: "Key Achievements as a Developer",
    errorImage: "Error loading image",
    data: [
      {
        id: 1,
        title: "Microservices Architecture for Massive Data Processing",
        company: "Politec-MT",
        category: "architecture",
        challenge:
          "The existing monolithic system faced slowness and instability when processing large data volumes, impacting critical report generation.",
        solution: [
          "Designed and implemented a hybrid microservices architecture single-handedly, integrating it with the monolith without disrupting existing operations.",
          "Developed a specialized service for dynamic report generation, querying multiple databases (SQL Server, PostgreSQL) in real-time.",
        ],
        results: [
          "80% reduction in processing time for complex reports.",
          "Improved scalability, allowing the system to handle demand spikes without failures.",
        ],
      },
      {
        id: 2,
        title: "Software Factory & DevOps Restructuring",
        company: "Politec-MT",
        category: "devops",
        challenge:
          "Manual deployment processes and lack of version control caused inconsistencies and delays.",
        solution: [
          "Migrated projects to Microsoft Azure, modernizing infrastructure.",
          "Implemented Git for version control and Azure DevOps for CI/CD, creating automated Build and Deploy pipelines.",
          "Introduced continuous integration practices, reducing production errors by 40%.",
        ],
        results: [
          "Gained development efficiency and better change traceability.",
        ],
      },
      {
        id: 3,
        title: "Leadership in Innovative Applications",
        company: "Politec-MT",
        category: "leadership",
        challenge:
          "Need for modern systems for recertification and pension management.",
        solution: [
          "Recad Online & Census: Technical leadership in developing solutions for policyholder recertification and file management.",
          "Implemented automated workflows, reducing processing time from days to hours.",
          "Improved user satisfaction with intuitive interfaces (Vue.js) and efficient APIs (NestJS).",
          "Sisprev+ (Pension System): Active participation in requirements gathering and architecture definition.",
          "Back-end technical leadership, integrating microservices with legacy systems.",
        ],
        results: ["More efficient systems and improved user experience."],
      },
      {
        id: 4,
        title: "Scalable Microservices & High Performance",
        company: "Politec-MT",
        category: "microservices",
        challenge: "Need for scalable, high-performance systems.",
        solution: [
          "Designed modular microservices for easier maintenance and scalability.",
          "Optimized queries and implemented distributed caching, increasing concurrent user capacity by 60%.",
          "Integrated with legacy systems via RESTful APIs and messaging (RabbitMQ).",
        ],
        results: ["Greater processing capacity and improved user experience."],
        technologies:
          "Vue.js, NestJS, TypeORM, Prisma, MongoDB, SQL Server, PostgreSQL",
      },
      {
        id: 5,
        title: "Support Agenda System",
        company: "Politec-MT",
        category: "other",
        challenge: "Need for efficient schedule and task management.",
        solution: [
          "Developed a support solution for schedule and task management, integrated with the main ecosystem.",
          "Automated notifications and reports.",
        ],
        results: ["Saved 20 hours/month in manual processes."],
      },
    ],
    impact: {
      title: "Overall Impact",
      description: "My contributions resulted in:",
      items: [
        "<strong>Cost reduction</strong> in infrastructure and manual processes.",
        "<strong>Productivity increase</strong> for teams and end-users.",
        "<strong>Systems prepared for scale</strong>, with cloud and DevOps adoption.",
      ],
    },
  },
  "es-ES": {
    title: "Logros Clave como Desarrollador",
    errorImage: "Error al cargar la imagen",
    data: [
      {
        id: 1,
        title:
          "Arquitectura de Microservicios para Procesamiento Masivo de Datos",
        company: "Politec-MT",
        category: "arquitectura",
        challenge:
          "El sistema monolítico existente enfrentaba lentitud e inestabilidad al procesar grandes volúmenes de datos, afectando la generación de informes críticos.",
        solution: [
          "Diseñé e implementé en solitario una arquitectura híbrida de microservicios, integrándola con el monolito sin interrumpir operaciones existentes.",
          "Desarrollé un servicio especializado en generación de informes dinámicos, consultando múltiples bases de datos (SQL Server, PostgreSQL) en tiempo real.",
        ],
        results: [
          "Reducción del 80% en el tiempo de procesamiento de informes complejos.",
          "Mejor escalabilidad, permitiendo al sistema manejar picos de demanda sin fallos.",
        ],
      },
      {
        id: 2,
        title: "Reestructuración de la Fábrica de Software & DevOps",
        company: "Politec-MT",
        category: "devops",
        challenge:
          "Los procesos manuales de despliegue y falta de control de versiones causaban inconsistencias y retrasos.",
        solution: [
          "Migré proyectos a Microsoft Azure, modernizando la infraestructura.",
          "Implementé Git para control de versiones y Azure DevOps para CI/CD, creando pipelines automatizados de Build y Deploy.",
          "Introduje prácticas de integración continua, reduciendo errores en producción en un 40%.",
        ],
        results: [
          "Mayor eficiencia en desarrollo y mejor trazabilidad de cambios.",
        ],
      },
      {
        id: 3,
        title: "Liderazgo en Aplicaciones Innovadoras",
        company: "Politec-MT",
        category: "liderazgo",
        challenge:
          "Necesidad de sistemas modernos para recertificación y gestión de pensiones.",
        solution: [
          "Recad Online & Censo: Liderazgo técnico en desarrollo de soluciones para recertificación de asegurados y gestión de archivos.",
          "Implementé flujos automatizados, reduciendo tiempo de procesamiento de días a horas.",
          "Mejoré satisfacción del usuario con interfaces intuitivas (Vue.js) y APIs eficientes (NestJS).",
          "Sisprev+ (Sistema de Pensiones): Participación activa en recolección de requisitos y definición de arquitectura.",
          "Liderazgo técnico del back-end, integrando microservicios con sistemas legados.",
        ],
        results: ["Sistemas más eficientes y mejor experiencia de usuario."],
      },
      {
        id: 4,
        title: "Microservicios Escalables & Alto Rendimiento",
        company: "Politec-MT",
        category: "microservicios",
        challenge: "Necesidad de sistemas escalables y de alto rendimiento.",
        solution: [
          "Diseñé microservicios modulares para facilitar mantenimiento y escalabilidad.",
          "Optimicé consultas e implementé caché distribuido, aumentando capacidad de usuarios concurrentes en un 60%.",
          "Integración con sistemas legados mediante APIs RESTful y mensajería (RabbitMQ).",
        ],
        results: [
          "Mayor capacidad de procesamiento y mejor experiencia de usuario.",
        ],
        technologies:
          "Vue.js, NestJS, TypeORM, Prisma, MongoDB, SQL Server, PostgreSQL",
      },
      {
        id: 5,
        title: "Sistema de Agenda de Soporte",
        company: "Politec-MT",
        category: "otros",
        challenge: "Necesidad de gestión eficiente de agendas y tareas.",
        solution: [
          "Desarrollé una solución auxiliar para gestión de agendas y tareas, integrada al ecosistema principal.",
          "Automaticé notificaciones e informes.",
        ],
        results: ["Ahorro de 20 horas/mes en procesos manuales."],
      },
    ],
    impact: {
      title: "Impacto General",
      description: "Mis contribuciones resultaron en:",
      items: [
        "<strong>Reducción de costes</strong> en infraestructura y procesos manuales.",
        "<strong>Aumento de productividad</strong> en equipos y usuarios finales.",
        "<strong>Sistemas preparados para escalar</strong>, con adopción de cloud y DevOps.",
      ],
    },
  },
};
