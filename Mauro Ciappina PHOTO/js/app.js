/* Animación de titulo 1 */

const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');

titulo.animate([
  { opacity: 0, transform: 'translateY(-20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 1000,
  easing: 'ease-out'
});

subtitulo.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 1000,
  easing: 'ease-out',
  delay: 500
});
