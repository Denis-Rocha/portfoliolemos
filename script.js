// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    const showSection = (targetPage) => {
        navLinks.forEach(link => link.classList.remove('active'));
        
        const clickedLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
        if (clickedLink) {
            clickedLink.classList.add('active');
        }

        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetPage);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            showSection(targetPage);
        });
    });

    // --- Dados dos Projetos para o Modal ---
    const projects = [
        {
            id: 'projeto1',
            title: 'ECOMMERCE DE FUTEBOL',
            description: 'Site moderno e responsivo para vendas de camisetas de futebol. Desenvolvido com HTML, CSS e JavaScript.',
            image: 'images/ecommercefut.png',
            repo: 'https://github.com/Denis-Rocha/ecommercefut',
            demo: 'https://denis-rocha.github.io/ecommercefut/'
        },
        {
            id: 'projeto2',
            title: 'Trabalho de Conclusao de Curso',
            description: 'Trabalho de Conclusão de Curso do ensino medio em programação de jogo digitais',
            image: 'images/TCC.jpg',
            repo: 'https://github.com/Denis-Rocha/CHASE-FUGITIVE',
            demo: 'URL_DEMO_PROJETO_2'
        },
        {
            id: 'projeto3',
            title: 'E-commerce Simples',
            description: 'Uma loja virtual básica com carrinho de compras, lista de produtos e filtros. Criado para demonstrar habilidades em manipulação de DOM.',
            image: 'images/foto-projeto-3.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_3',
            demo: 'URL_DEMO_PROJETO_3'
        },
        {
            id: 'projeto4',
            title: 'Quiz de Conhecimento Geral',
            description: 'Jogo de perguntas e respostas com sistema de pontuação e feedback instantâneo. Um projeto de lógica e interação com o usuário.',
            image: 'images/foto-projeto-4.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_4',
            demo: 'URL_DEMO_PROJETO_4'
        },
        {
            id: 'projeto5',
            title: 'Clone de Website',
            description: 'Recriação de uma página web popular para praticar técnicas de layout, design responsivo e acessibilidade.',
            image: 'images/foto-projeto-5.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_5',
            demo: 'URL_DEMO_PROJETO_5'
        },
        {
            id: 'projeto6',
            title: 'Galeria de Fotos Dinâmica',
            description: 'Uma galeria de imagens interativa que permite aos usuários filtrar e visualizar fotos de diferentes categorias com efeitos de transição suaves.',
            image: 'images/foto-projeto-6.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_6',
            demo: 'URL_DEMO_PROJETO_6'
        },
        {
            id: 'projeto7',
            title: 'Aplicação de Tempo',
            description: 'Uma aplicação web que busca e exibe dados de tempo de uma API externa. Demonstra o uso de requisições assíncronas (Fetch API).',
            image: 'images/foto-projeto-7.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_7',
            demo: 'URL_DEMO_PROJETO_7'
        },
        {
            id: 'projeto8',
            title: 'Gerador de Senhas',
            description: 'Uma ferramenta simples e segura para gerar senhas aleatórias. Permite ao usuário escolher o comprimento e os tipos de caracteres.',
            image: 'images/foto-projeto-8.jpg',
            repo: 'URL_REPOSITORIO_PROJETO_8',
            demo: 'URL_DEMO_PROJETO_8'
        },
    ];

    // --- Lógica do Modal ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDescription = document.getElementById('modal-project-description');
    const modalImage = document.getElementById('modal-project-image');
    const modalRepo = document.getElementById('modal-project-repo');
    const modalDemo = document.getElementById('modal-project-demo');
    const closeBtn = document.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Função para abrir o modal com os dados do projeto
    const openModal = (projectId) => {
        const project = projects.find(p => p.id === projectId);

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalImage.src = project.image;
            modalRepo.href = project.repo;
            modalDemo.href = project.demo;
            modal.classList.add('show');
        }
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('show');
    };

    // Event listener para cada item da galeria
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-id');
            openModal(projectId);
        });
    });

    // Event listener para o botão de fechar
    closeBtn.addEventListener('click', closeModal);

    // Event listener para fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});