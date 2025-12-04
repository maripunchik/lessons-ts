
export default function renderQuote(container:HTMLDivElement,quote:string) {
	  container.innerHTML = `
      <div class="card">
        <h1>Дякую, Андрію Юрійовичу!</h1>
        <p>"${quote}"</p>
      </div>
    `;
}