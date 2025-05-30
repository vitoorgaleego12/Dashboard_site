function mostrar(id) {
  const sections = document.querySelectorAll('.dashboard');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selecionado = document.getElementById(id);
  if (selecionado) {
    selecionado.style.display = 'flex';
  }
}