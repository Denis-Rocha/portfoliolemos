// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    // Função para mostrar a seção correta e atualizar o link ativo na navbar
    const showSection = (targetPage) => {
        // Remove a classe 'active' de todos os links da navbar
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Adiciona a classe 'active' ao link clicado
        const clickedLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
        if (clickedLink) {
            clickedLink.classList.add('active');
        }

        // Esconde todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostra a seção desejada
        const targetSection = document.getElementById(targetPage);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    };

    // Adiciona event listener para os cliques na barra de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            showSection(targetPage);
        });
    });

    // Seção inicial: Mostra a primeira seção ao carregar a página
    // (A classe 'active' já está no HTML para o "hero" por padrão)
    // Para que isso funcione, é vital que o seu HTML comece com <section id="hero" class="page-section active">
});