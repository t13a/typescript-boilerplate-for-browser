const message = "Hi Folks! 👋";

export const greeting = (element: HTMLElement) => {
  const div = document.createElement("div");
  div.classList.add("greeting");
  div.textContent = message;
  element.appendChild(div);
};
