function setupCodeFolders(containerSelector = ".list__item") {
  const tasks = document.querySelectorAll(containerSelector);

  tasks.forEach((task) => {
    const taskName = task.dataset.task || ".";
    const buttons = task.querySelectorAll(".code-tabs__buttons button");
    const preBlock = task.querySelector("pre");

    if (!taskName || !preBlock) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const fileName = btn.dataset.file;
        if (!fileName) return;

        const isActive = btn.classList.contains("active");

        buttons.forEach((b) => b.classList.remove("active"));
        preBlock.classList.remove("visible");

		   if (isActive) {
				setTimeout(() => {
				preBlock.innerHTML = "";
				preBlock.style.display="none"
				}, 600);
				return;
			}

        preBlock.innerHTML = "";
        btn.classList.add("active");

        try {
          const response = await fetch(`src/${taskName}/${fileName}`);
          const code = await response.text();

          const codeElement = document.createElement("code");
          codeElement.className = "language-typescript code-tabs__block";

          codeElement.textContent = code;

          preBlock.append(codeElement);
          preBlock.style.display = "block";
          hljs.highlightElement(codeElement);

          preBlock.classList.add("visible");
        } catch (error) {
          console.error(
            `Не вдалося завантажити src/${taskName}/${fileName} `,
            error
          );
        }
      });
    });
  });
}
//--

setupCodeFolders()