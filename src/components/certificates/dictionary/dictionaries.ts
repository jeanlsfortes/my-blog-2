
export const dictionaries = {
    'pt-BR': {
        certificados: {
            title: "Certificados Acadêmicos e Profissionais",
            subtitle: "Documentação da minha trajetória de formação e especialização em tecnologia.",
            verCertificado: "Ver certificado completo",
            nenhumCertificado: "Nenhum certificado encontrado nesta categoria.",
            categorias: [
                {
                    "id": "todos",
                    "nome": "Todos",
                    "topicos": []
                },
                {
                    "id": "graduacao",
                    "nome": "Programação e Lógica",
                    "topicos": [
                        "Lógica de programação",
                        "Estruturas de condição, repetição e funções",
                    ]
                },
                {
                    "id": "fullstack",
                    "nome": "Desenvolvimento Fullstack",
                    "topicos": [
                        "JavaScript do básico ao avançado",
                        "Programar web com Node (Express/Sequelize/Handlebars/Body Parser)",
                        "Criar aplicações web completas",
                        "Criar componentes e páginas utilizando React",
                        "Bulma CSS e PrimeReact",
                        "Criar e desenvolver uma aplicação Next.js",
                        "Criar Página de Dashboard com Gráficos"
                    ]
                },
                {
                    "id": "backend",
                    "nome": "Backend e APIs Avançadas",
                    "topicos": [
                        "Desenvolver API Rest com Spring Boot",
                        "Modelar e Desenvolver API's RESTFul com Spring",
                        "Aplicar Segurança nas API's com Spring Security",
                        "Toda a base JPA (Spring Boot)",
                        "Framework Dapper (.NET)",
                        "Sequelize (Node.js)",
                        "Dominar OAuth2 (Spring Boot)",
                        "Spring Security",
                        "Documentação de API's com Swagger e Open API"
                    ]
                },
                {
                    "id": "testes",
                    "nome": "Testes de Software",
                    "topicos": [
                        "Testes unitários com xUnit (.NET)",
                        "Testes unitários com NUnit (.NET)",
                        "Testes integrados com NUnit",
                        "Framework Moq (.NET)",
                        "Framework Autofixture (.NET)",
                        "Criar Testes Unitários e de Integração (Spring Boot)",
                        "Testar API's com o POSTMAN"
                    ]
                },
                {
                    "id": "versionamento",
                    "nome": "Versionamento e DevOps",
                    "topicos": [
                        "Versionamento de projetos com Git",
                        "Comandos básicos e avançados do Git",
                        "Sistema de controle de versão distribuído (DVCS)",
                        "Deploy de aplicações Spring Boot na AWS",
                        "Dominar Docker (Imagens e Containers)",
                        "Fazer Build e Deploy na Nuvem (Next.js/React)",
                        "Subir bancos de dados na AWS com RDS"
                    ]
                },
                {
                    "id": "linguagens",
                    "nome": "Linguagens e Frameworks",
                    "topicos": [
                        ".NET Core",
                        "Delegates, expressões Lambda, Action, Func e Predicates (.NET)",
                        "Programação de eventos e DOM com JS",
                        "Autenticação com sites de terceiros (Github, Auth0)",
                        "Login Social (Google, Github, Auth0)",
                        "Criar Relatórios JasperReports"
                    ]
                }
            ]
        },
        errorImage: 'https://www.contratasite.com.br/site-institucional/public/upload/img/imagem_principal_122.jpg?v=29012021083519',
        certificadosData: [
            {
                id: 1,
                nome: "Bacharel em Ciência da Computação",
                instituicao: "UFMT",
                data: "Dezembro 2023",
                descricao: "Diploma de conclusão do curso superior com ênfase em desenvolvimento de software e teoria computacional.",
                imagem: "/images/diploma.jpg",
                link: "https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf",
                categoria: "graduacao",
            },
            {
                id: 2,
                nome: "Desenvolvimento Fullstack Next + Spring Boot",
                instituicao: "Udemy",
                data: "Fevereiro 2024",
                descricao: "Curso completo de desenvolvimento web moderno integrando frontend (Next.js) e backend (Spring Boot).",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797.jpg",
                link: "https://www.udemy.com/certificate/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797/",
                categoria: "fullstack"
            },
            {
                id: 3,
                nome: "Spring Boot Expert: JPA, RESTFul API, Security",
                instituicao: "Udemy",
                data: "Fevereiro 2024",
                descricao: "Domínio avançado do ecossistema Spring com implementação de APIs seguras e arquitetura robusta.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0.jpg",
                link: "https://www.udemy.com/certificate/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0/",
                categoria: "backend"
            },
            {
                id: 4,
                nome: "TDD em C# com xUnit, NUnit e Moq",
                instituicao: "Udemy",
                data: "Agosto 2024",
                descricao: "Implementação de Test-Driven Development no ecossistema .NET com frameworks especializados.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-8719ebf2-bb0b-41d4-addd-d597e7696127.jpg",
                link: "https://www.udemy.com/certificate/UC-8719ebf2-bb0b-41d4-addd-d597e7696127/",
                categoria: "testes"
            },
            {
                id: 5,
                nome: "Curso JAVA Santander Bootcamp",
                instituicao: "Ada Tech/Santander",
                data: "Setembro 2022",
                descricao: "Formação intensiva em Java com boas práticas de desenvolvimento e integração com bancos de dados.",
                link: "https://drive.google.com/drive/folders/1yFJZGj9fnJcuO0jHZQscMKbkXoc59Rrj",
                categoria: "linguagens"
            },
            {
                id: 6,
                nome: "Git - Básico ao Avançado",
                instituicao: "Udemy",
                data: "Fevereiro 2024",
                descricao: "Controle de versão profissional com Git, incluindo workflows avançados e resolução de conflitos.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-2a538755-b919-45a8-9375-96ac26442796.jpg",
                link: "https://www.udemy.com/certificate/UC-2a538755-b919-45a8-9375-96ac26442796/",
                categoria: "versionamento"
            },
            {
                id: 7,
                nome: "JavaScript do Básico ao Avançado",
                instituicao: "Udemy",
                data: "Abril 2024",
                descricao: "Domínio completo de JavaScript moderno incluindo ES6+, Node.js e projetos práticos.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b.jpg",
                link: "https://www.udemy.com/certificate/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b/",
                categoria: "linguagens"
            }
        ]
    },
    'en-US': {
        certificados: {
            title: "Academic and Professional Certificates",
            subtitle: "Documentation of my education and specialization journey in technology.",
            verCertificado: "View full certificate",
            nenhumCertificado: "No certificates found in this category.",
            categorias: [
                {
                    "id": "todos",
                    "nome": "All",
                    "topicos": []
                },
                {
                    "id": "graduacao",
                    "nome": "Programming and Logic",
                    "topicos": [
                        "Programming logic",
                        "Conditional structures, loops and functions",
                    ]
                },
                {
                    "id": "fullstack",
                    "nome": "Fullstack Development",
                    "topicos": [
                        "JavaScript from basic to advanced",
                        "Web programming with Node (Express/Sequelize/Handlebars/Body Parser)",
                        "Create complete web applications",
                        "Create components and pages using React",
                        "Bulma CSS and PrimeReact",
                        "Create and develop a Next.js application",
                        "Create Dashboard Page with Charts"
                    ]
                },
                {
                    "id": "backend",
                    "nome": "Backend and Advanced APIs",
                    "topicos": [
                        "Develop REST API with Spring Boot",
                        "Model and develop RESTful APIs with Spring",
                        "Apply Security to APIs with Spring Security",
                        "Complete JPA foundation (Spring Boot)",
                        "Dapper Framework (.NET)",
                        "Sequelize (Node.js)",
                        "Master OAuth2 (Spring Boot)",
                        "Spring Security",
                        "API Documentation with Swagger and Open API"
                    ]
                },
                {
                    "id": "testes",
                    "nome": "Software Testing",
                    "topicos": [
                        "Unit tests with xUnit (.NET)",
                        "Unit tests with NUnit (.NET)",
                        "Integration tests with NUnit",
                        "Moq Framework (.NET)",
                        "Autofixture Framework (.NET)",
                        "Create Unit and Integration Tests (Spring Boot)",
                        "Test APIs with POSTMAN"
                    ]
                },
                {
                    "id": "versionamento",
                    "nome": "Version Control and DevOps",
                    "topicos": [
                        "Project versioning with Git",
                        "Basic and advanced Git commands",
                        "Distributed version control system (DVCS)",
                        "Deploy Spring Boot applications to AWS",
                        "Master Docker (Images and Containers)",
                        "Build and Deploy to Cloud (Next.js/React)",
                        "Upload databases to AWS with RDS"
                    ]
                },
                {
                    "id": "linguagens",
                    "nome": "Languages and Frameworks",
                    "topicos": [
                        ".NET Core",
                        "Delegates, Lambda expressions, Action, Func and Predicates (.NET)",
                        "Event programming and DOM with JS",
                        "Authentication with third-party sites (Github, Auth0)",
                        "Social Login (Google, Github, Auth0)",
                        "Create JasperReports Reports"
                    ]
                }
            ]
        },
        errorImage: 'https://www.contratasite.com.br/site-institucional/public/upload/img/imagem_principal_122.jpg?v=29012021083519',
        certificadosData: [
            {
                id: 1,
                nome: "Bachelor in Computer Science",
                instituicao: "UFMT",
                data: "December 2023",
                descricao: "Degree completion with emphasis on software development and computational theory.",
                imagem: "/images/diploma.jpg",
                link: "https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf",
                categoria: "graduacao",
            },
            {
                id: 2,
                nome: "Fullstack Development Next + Spring Boot",
                instituicao: "Udemy",
                data: "February 2024",
                descricao: "Complete course on modern web development integrating frontend (Next.js) and backend (Spring Boot).",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797.jpg",
                link: "https://www.udemy.com/certificate/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797/",
                categoria: "fullstack"
            },
            {
                id: 3,
                nome: "Spring Boot Expert: JPA, RESTFul API, Security",
                instituicao: "Udemy",
                data: "February 2024",
                descricao: "Advanced mastery of Spring ecosystem with secure API implementation and robust architecture.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0.jpg",
                link: "https://www.udemy.com/certificate/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0/",
                categoria: "backend"
            },
            {
                id: 4,
                nome: "TDD in C# with xUnit, NUnit and Moq",
                instituicao: "Udemy",
                data: "August 2024",
                descricao: "Test-Driven Development implementation in .NET ecosystem with specialized frameworks.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-8719ebf2-bb0b-41d4-addd-d597e7696127.jpg",
                link: "https://www.udemy.com/certificate/UC-8719ebf2-bb0b-41d4-addd-d597e7696127/",
                categoria: "testes"
            },
            {
                id: 5,
                nome: "JAVA Santander Bootcamp Course",
                instituicao: "Ada Tech/Santander",
                data: "September 2022",
                descricao: "Intensive Java training with development best practices and database integration.",
                link: "https://drive.google.com/drive/folders/1yFJZGj9fnJcuO0jHZQscMKbkXoc59Rrj",
                categoria: "linguagens"
            },
            {
                id: 6,
                nome: "Git - Basic to Advanced",
                instituicao: "Udemy",
                data: "February 2024",
                descricao: "Professional version control with Git, including advanced workflows and conflict resolution.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-2a538755-b919-45a8-9375-96ac26442796.jpg",
                link: "https://www.udemy.com/certificate/UC-2a538755-b919-45a8-9375-96ac26442796/",
                categoria: "versionamento"
            },
            {
                id: 7,
                nome: "JavaScript from Basic to Advanced",
                instituicao: "Udemy",
                data: "April 2024",
                descricao: "Complete mastery of modern JavaScript including ES6+, Node.js and practical projects.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b.jpg",
                link: "https://www.udemy.com/certificate/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b/",
                categoria: "linguagens"
            }
        ]
    },
    'es-ES': {
        certificados: {
            title: "Certificados Académicos y Profesionales",
            subtitle: "Documentación de mi trayectoria de formación y especialización en tecnología.",
            verCertificado: "Ver certificado completo",
            nenhumCertificado: "No se encontraron certificados en esta categoría.",
            categorias: [
                {
                    "id": "todos",
                    "nome": "Todos",
                    "topicos": []
                },
                {
                    "id": "graduacao",
                    "nome": "Programación y Lógica",
                    "topicos": [
                        "Lógica de programación",
                        "Estructuras condicionales, bucles y funciones",
                    ]
                },
                {
                    "id": "fullstack",
                    "nome": "Desarrollo Fullstack",
                    "topicos": [
                        "JavaScript desde básico hasta avanzado",
                        "Programación web con Node (Express/Sequelize/Handlebars/Body Parser)",
                        "Crear aplicaciones web completas",
                        "Crear componentes y páginas con React",
                        "Bulma CSS y PrimeReact",
                        "Crear y desarrollar una aplicación Next.js",
                        "Crear Página de Dashboard con Gráficos"
                    ]
                },
                {
                    "id": "backend",
                    "nome": "Backend y APIs Avanzadas",
                    "topicos": [
                        "Desarrollar API Rest con Spring Boot",
                        "Modelar y Desarrollar APIs RESTful con Spring",
                        "Aplicar Seguridad en APIs con Spring Security",
                        "Toda la base JPA (Spring Boot)",
                        "Framework Dapper (.NET)",
                        "Sequelize (Node.js)",
                        "Dominar OAuth2 (Spring Boot)",
                        "Spring Security",
                        "Documentación de APIs con Swagger y Open API"
                    ]
                },
                {
                    "id": "testes",
                    "nome": "Pruebas de Software",
                    "topicos": [
                        "Pruebas unitarias con xUnit (.NET)",
                        "Pruebas unitarias con NUnit (.NET)",
                        "Pruebas integradas con NUnit",
                        "Framework Moq (.NET)",
                        "Framework Autofixture (.NET)",
                        "Crear Pruebas Unitarias y de Integración (Spring Boot)",
                        "Probar APIs con POSTMAN"
                    ]
                },
                {
                    "id": "versionamento",
                    "nome": "Control de Versiones y DevOps",
                    "topicos": [
                        "Control de versiones con Git",
                        "Comandos básicos y avanzados de Git",
                        "Sistema de control de versiones distribuido (DVCS)",
                        "Desplegar aplicaciones Spring Boot en AWS",
                        "Dominar Docker (Imágenes y Contenedores)",
                        "Compilar y Desplegar en la Nube (Next.js/React)",
                        "Subir bases de datos a AWS con RDS"
                    ]
                },
                {
                    "id": "linguagens",
                    "nome": "Lenguajes y Frameworks",
                    "topicos": [
                        ".NET Core",
                        "Delegados, expresiones Lambda, Action, Func y Predicates (.NET)",
                        "Programación de eventos y DOM con JS",
                        "Autenticación con sitios de terceros (Github, Auth0)",
                        "Login Social (Google, Github, Auth0)",
                        "Crear Informes JasperReports"
                    ]
                }
            ]
        },
        errorImage: 'https://www.contratasite.com.br/site-institucional/public/upload/img/imagem_principal_122.jpg?v=29012021083519',
        certificadosData: [
            {
                id: 1,
                nome: "Licenciado en Ciencias de la Computación",
                instituicao: "UFMT",
                data: "Diciembre 2023",
                descricao: "Título de conclusión con énfasis en desarrollo de software y teoría computacional.",
                imagem: "/images/diploma.jpg",
                link: "https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf",
                categoria: "graduacao",
            },
            {
                id: 2,
                nome: "Desarrollo Fullstack Next + Spring Boot",
                instituicao: "Udemy",
                data: "Febrero 2024",
                descricao: "Curso completo de desarrollo web moderno integrando frontend (Next.js) y backend (Spring Boot).",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797.jpg",
                link: "https://www.udemy.com/certificate/UC-884e0c93-2df9-4ff8-aed2-b489c63ff797/",
                categoria: "fullstack"
            },
            {
                id: 3,
                nome: "Experto en Spring Boot: JPA, API RESTFul, Seguridad",
                instituicao: "Udemy",
                data: "Febrero 2024",
                descricao: "Dominio avanzado del ecosistema Spring con implementación de APIs seguras y arquitectura robusta.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0.jpg",
                link: "https://www.udemy.com/certificate/UC-b2bcc851-7043-4b14-ae25-30e2ee0762a0/",
                categoria: "backend"
            },
            {
                id: 4,
                nome: "TDD en C# con xUnit, NUnit y Moq",
                instituicao: "Udemy",
                data: "Agosto 2024",
                descricao: "Implementación de Test-Driven Development en el ecosistema .NET con frameworks especializados.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-8719ebf2-bb0b-41d4-addd-d597e7696127.jpg",
                link: "https://www.udemy.com/certificate/UC-8719ebf2-bb0b-41d4-addd-d597e7696127/",
                categoria: "testes"
            },
            {
                id: 5,
                nome: "Curso JAVA Santander Bootcamp",
                instituicao: "Ada Tech/Santander",
                data: "Septiembre 2022",
                descricao: "Formación intensiva en Java con buenas prácticas de desarrollo e integración con bases de datos.",
                link: "https://drive.google.com/drive/folders/1yFJZGj9fnJcuO0jHZQscMKbkXoc59Rrj",
                categoria: "linguagens"
            },
            {
                id: 6,
                nome: "Git - Básico a Avanzado",
                instituicao: "Udemy",
                data: "Febrero 2024",
                descricao: "Control de versiones profesional con Git, incluyendo flujos avanzados y resolución de conflictos.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-2a538755-b919-45a8-9375-96ac26442796.jpg",
                link: "https://www.udemy.com/certificate/UC-2a538755-b919-45a8-9375-96ac26442796/",
                categoria: "versionamento"
            },
            {
                id: 7,
                nome: "JavaScript de Básico a Avanzado",
                instituicao: "Udemy",
                data: "Abril 2024",
                descricao: "Dominio completo de JavaScript moderno incluyendo ES6+, Node.js y proyectos prácticos.",
                imagem: "https://udemy-certificate.s3.amazonaws.com/image/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b.jpg",
                link: "https://www.udemy.com/certificate/UC-0b05e405-f2b0-4978-9963-4dd92306aa7b/",
                categoria: "linguagens"
            }
        ]
    }
};
