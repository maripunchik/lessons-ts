import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const codeMap = import.meta.glob("./**/*.ts", {
  query: "?raw",
  import: "default",
});

async function showCode(filePath: string, pre: HTMLElement) {
  const loader = codeMap[filePath];
  if (!loader) {
    pre.textContent = "Файл не знайдено";
    return;
  }
  const code = (await loader()) as string;
  const codeElement = document.createElement("code");
  codeElement.className = "language-typescript";
  codeElement.textContent = code;

  pre.innerHTML = "";
  pre.append(codeElement);

  hljs.highlightElement(codeElement);
}

export default function setupCodeFolders(
  containerSelector: string = ".list__item"
): void {
  const tasks: NodeListOf<HTMLElement> =
    document.querySelectorAll(containerSelector);

  tasks.forEach((task: HTMLElement) => {
    const buttons: NodeListOf<HTMLButtonElement> = task.querySelectorAll(
      ".code-tabs__buttons button"
    );
    const preBlock: HTMLPreElement | null = task.querySelector("pre");

    if (!preBlock) return;

    buttons.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener("click", async () => {
        const fileName: string | undefined = btn.dataset.fileName;
        const taskName: string | undefined = task.dataset.task;

        if (!fileName) return;

        const isActive: boolean = btn.classList.contains("active");

        buttons.forEach((b: HTMLButtonElement) => b.classList.remove("active"));
        preBlock.classList.remove("visible");

        if (isActive) {
          setTimeout(() => {
            preBlock.innerHTML = "";
            preBlock.style.display = "none";
          }, 1000);
          return;
        }

        preBlock.innerHTML = "";
        btn.classList.add("active");

        let filePath: string;

        if (!taskName || taskName === ".") {
          filePath = `./${fileName}`;
        } else {
          filePath = `./ts/${taskName}/${fileName}`;
        }

        await showCode(filePath, preBlock);

        preBlock.style.display = "block";
        preBlock.classList.add("visible");
      });
    });
  });
}
