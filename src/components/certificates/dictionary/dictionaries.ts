
export const dictionaries = {
    'pt-BR': {
        certificados: {
            title: "Certificados Acadêmicos e Profissionais",
            subtitle: "Documentação da minha trajetória de formação e especialização em tecnologia.",
            verCertificado: "Ver certificado completo",
            nenhumCertificado: "Nenhum certificado encontrado nesta categoria.",
            categorias: [
                { id: "todos", nome: "Todos" },
                { id: "graduacao", nome: "Graduação" },
                { id: "fullstack", nome: "Fullstack" },
                { id: "backend", nome: "Backend" },
                { id: "testes", nome: "Testes" },
                { id: "versionamento", nome: "Versionamento" },
                { id: "linguagens", nome: "Linguagens" }
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
            subtitle: "Documentation of my educational journey and technical specialization.",
            verCertificado: "View full certificate",
            nenhumCertificado: "No certificates found in this category.",
            categorias: [
                { id: "todos", nome: "All" },
                { id: "graduacao", nome: "Degree" },
                { id: "fullstack", nome: "Fullstack" },
                { id: "backend", nome: "Backend" },
                { id: "testes", nome: "Testing" },
                { id: "versionamento", nome: "Version Control" },
                { id: "linguagens", nome: "Languages" }
            ]
        },
        certificadosData: [
            {
                id: 1,
                nome: "Bachelor's Degree in Computer Science",
                instituicao: "UFMT",
                data: "December 2023",
                descricao: "Undergraduate degree with emphasis on software development and computational theory.",
                link: "https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf",
                categoria: "graduacao"
            },
            {
                id: 2,
                nome: "Fullstack Development with Next + Spring Boot",
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
                nome: "JAVA Santander Bootcamp",
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
        ],
        errorImage: 'https://www.contratasite.com.br/site-institucional/public/upload/img/imagem_principal_122.jpg?v=29012021083519',
    },
    'es-ES': {
        errorImage: 'https://www.contratasite.com.br/site-institucional/public/upload/img/imagem_principal_122.jpg?v=29012021083519',
        certificados: {
            title: "Certificados Académicos y Profesionales",
            subtitle: "Documentación de mi trayectoria formativa y especialización técnica.",
            verCertificado: "Ver certificado completo",
            nenhumCertificado: "No se encontraron certificados en esta categoría.",
            categorias: [
                { id: "todos", nome: "Todos" },
                { id: "graduacao", nome: "Titulación" },
                { id: "fullstack", nome: "Fullstack" },
                { id: "backend", nome: "Backend" },
                { id: "testes", nome: "Pruebas" },
                { id: "versionamento", nome: "Control de Versiones" },
                { id: "linguagens", nome: "Lenguajes" }
            ]
        },
        certificadosData: [
            {
                id: 1,
                nome: "Licenciatura en Ciencias de la Computación",
                instituicao: "UFMT",
                data: "Diciembre 2023",
                descricao: "Título universitario con énfasis en desarrollo de software y teoría computacional.",
                link: "https://academico-siga.ufmt.br/ufmt.portalacademico/Estudante/Documento/DownloadDiplomaPdf",
                categoria: "graduacao"
            },
            {
                id: 2,
                nome: "Desarrollo Fullstack con Next + Spring Boot",
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
                nome: "Bootcamp JAVA Santander",
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