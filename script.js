const relogioElement = document.getElementById('relogio');
const cidadeSelect = document.getElementById('cidade');

const updateRelogio = () => {
  const cidade = cidadeSelect.value;
  const agora = new Date().toLocaleTimeString('pt-BR', { timeZone: cidade });
  relogioElement.textContent = agora;
};

cidadeSelect.addEventListener('change', updateRelogio);

setInterval(updateRelogio, 1000);
updateRelogio(); // Inicializa o relógio imediatamente
