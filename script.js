// Tooltip functionality for links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = 'Click to visit ' + this.innerText; // Customize tooltip text
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + window.scrollX + 'px';
        tooltip.style.top = rect.bottom + window.scrollY + 'px';
    });

    link.addEventListener('mouseleave', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});


    // Modal functionality
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when a game or mod is clicked
    document.querySelectorAll('a[data-modal]').forEach(function(element) {
        element.onclick = function() {
            modal.style.display = "block";
            document.querySelector('.modal-content h2').innerText = this.getAttribute('data-title');
            document.querySelector('.modal-content p').innerText = this.getAttribute('data-description');
        };
    });

    // Close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
