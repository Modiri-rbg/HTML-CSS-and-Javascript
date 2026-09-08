document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.module');
    const completedModulesList = document.getElementById('completedModules');
    const printButton = document.getElementById('printButton');

    
    function updateCompletedModules() {
        completedModulesList.innerHTML = ''; 
        const completedModules = document.querySelectorAll('.module.completed');
        completedModules.forEach(module => {
            const li = document.createElement('li');
            li.textContent = module.textContent;
            completedModulesList.appendChild(li);
        });
    }

    modules.forEach(module => {
        module.addEventListener('click', () => {
            module.classList.toggle('completed');
            updateCompletedModules();
        });
    });

    
    printButton.addEventListener('click', () => {
        window.print();
    });
});

