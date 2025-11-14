export default function insertTaskButton(
  taskSelector: string,
  docsPath: string
): void {
  const taskElement = document.querySelector<HTMLLIElement>(taskSelector);

  if (!taskElement) {
    return;
  }

  const buttonContainer = taskElement.querySelector<HTMLDivElement>(
    ".code-tabs__buttons"
  );
  if (!buttonContainer) return;

  const docsButton: HTMLButtonElement = document.createElement("button");
  docsButton.textContent = "Документація";
  docsButton.classList.add("code-tabs__button");
  docsButton.onclick = () => window.open(docsPath, "_blank");

  buttonContainer.append(docsButton);
}
