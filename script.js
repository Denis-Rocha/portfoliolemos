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
            title: 'E-COMMERCE DE FUTEBOL',
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
            demo: 'https://drive.google.com/file/d/12qkF92Yo2YkS6DwYHHG8FFGOv0Xy0rel/view?usp=sharing'
        },
        {
            id: 'projeto3',
            title: 'Site sobre o jogo The last of Us',
            description: 'Site para divulgação de informações e curiosidades sobre o jogo The Last of Us Part 1',
            image: 'images/sitetlou.png',
            repo: 'https://github.com/Denis-Rocha/Site-TLOU',
            demo: 'https://denis-rocha.github.io/Site-TLOU/'
        },
        {
            id: 'projeto4',
            title: 'Site sobre a empresa Sketch Land',
            description: 'Site para informações, contato e divulgações de projetos da empresa desenvolvedora de games, Sketch land',
            image: 'images/sketch.jpg',
            repo: 'https://github.com/Denis-Rocha/chasefugitive',
            demo: 'URL_DEMO_PROJETO_4'
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