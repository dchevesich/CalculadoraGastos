// Calculadora de Gastos - JavaScript Simplificado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Calculadora de Gastos iniciada');
    
    // Confirmación para botones de eliminar
    const deleteButtons = document.querySelectorAll('.btn-eliminar');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (confirm('¿Estás seguro de que quieres eliminar este gasto?')) {
                window.location.href = href;
            }
        });
    });

    // Auto-submit para filtros
    const filterForm = document.querySelector('.filtro-gastos-container form');
    if (filterForm) {
        const selects = filterForm.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('change', function() {
                setTimeout(() => {
                    filterForm.submit();
                }, 300);
            });
        });
    }

    // Validación básica de formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const numberInputs = form.querySelectorAll('input[type="number"]');
            let hasErrors = false;

            numberInputs.forEach(input => {
                const value = parseFloat(input.value);
                if (isNaN(value) || value <= 0) {
                    alert('Por favor, ingresa un monto válido mayor a 0');
                    input.focus();
                    hasErrors = true;
                }
            });

            if (hasErrors) {
                e.preventDefault();
            }
        });
    });

    // Efectos hover mejorados para botones de categoría
    const categoryButtons = document.querySelectorAll('.boton-categoria');
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
