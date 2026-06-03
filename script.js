document.addEventListener("DOMContentLoaded", function() {
    
    // --- Controle de Alto Contraste ---
    const btnContrast = document.getElementById('btn-contrast');
    
    btnContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        
        // Atualiza o estado para leitores de tela
        const isContrast = document.body.classList.contains('high-contrast');
        btnContrast.setAttribute('aria-pressed', isContrast);
    });

    // --- Controle de Tamanho de Fonte ---
    let currentFontSize = 100; // representado em porcentagem (%)
    const step = 10;
    const maxFontSize = 140;
    const minFontSize = 90;

    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');

    btnIncrease.addEventListener('click', function() {
        if (currentFontSize < maxFontSize) {
            currentFontSize += step;
            document.documentElement.style.fontSize = currentFontSize + '%';
        }
    });

    btnDecrease.addEventListener('click', function() {
        if (currentFontSize > minFontSize) {
            currentFontSize -= step;
            document.documentElement.style.fontSize = currentFontSize + '%';
        }
    });
});