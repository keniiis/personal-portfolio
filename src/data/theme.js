// Función para cambiar el tema
function changeTheme() {
    // Recoger el estado actual del tema
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Basado en el tema actual, cambiar a claro u oscuro
    const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Establecer el nuevo tema actual
    document.documentElement.setAttribute('data-theme', switchToTheme);
    // Almacenar el nuevo tema en el localStorage
    localStorage.setItem('theme', switchToTheme);
  }
  
  // Cuando se carga la página, inicializar el tema al estado guardado en el localStorage
  window.onload = () => {
    // Recuperar el tema del localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Establecer el tema guardado
    document.documentElement.setAttribute('data-theme', savedTheme);
  };
  
  // Añadir un oyente al botón de cambio de tema para cambiar el tema cuando se haga clic en él
  document.getElementById('theme-toggler').addEventListener('click', changeTheme);
  