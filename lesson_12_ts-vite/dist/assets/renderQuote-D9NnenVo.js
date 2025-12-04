const n=`\r
export default function renderQuote(container:HTMLDivElement,quote:string) {\r
	  container.innerHTML = \`\r
      <div class="card">\r
        <h1>Дякую, Андрію Юрійовичу!</h1>\r
        <p>"\${quote}"</p>\r
      </div>\r
    \`;\r
}`;export{n as default};
