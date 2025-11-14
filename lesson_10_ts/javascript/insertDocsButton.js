export default function insertTaskButton(taskSelector, docsPath) {
    const taskElement = document.querySelector(taskSelector);
    if (!taskElement) {
        return;
    }
    const buttonContainer = taskElement.querySelector(".code-tabs__buttons");
    if (!buttonContainer)
        return;
    const docsButton = document.createElement("button");
    docsButton.textContent = "Документація";
    docsButton.classList.add("code-tabs__button");
    docsButton.onclick = () => window.open(docsPath, "_blank");
    buttonContainer.append(docsButton);
}
