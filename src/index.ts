import assert from "assert";
import papaparse from "papaparse";
import Split from "split-grid";

window.addEventListener("DOMContentLoaded", () => {
  const columnGutter1 = document.querySelector(".gutter-col-1");
  assert(columnGutter1 instanceof HTMLElement);

  Split({
    columnGutters: [
      {
        track: 1,
        element: columnGutter1,
      },
    ],
  });

  const csvTextArea = document.querySelector("#csv");
  assert(csvTextArea instanceof HTMLTextAreaElement);

  const csvToJsonButton = document.querySelector("#csv-to-json");
  assert(csvToJsonButton instanceof HTMLButtonElement);

  const jsonTextArea = document.querySelector("#json");
  assert(jsonTextArea instanceof HTMLTextAreaElement);

  const jsonToCsvButton = document.querySelector("#json-to-csv");
  assert(jsonToCsvButton instanceof HTMLButtonElement);

  csvToJsonButton.addEventListener("click", () => {
    try {
      const json = papaparse.parse(csvTextArea.value);
      if (json.errors.length > 0) {
        console.warn(json.errors);
        throw new Error("Failed to parse");
      }
      jsonTextArea.value = JSON.stringify(json.data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  });

  jsonToCsvButton.addEventListener("click", () => {
    try {
      const data = JSON.parse(jsonTextArea.value);
      csvTextArea.value = papaparse.unparse(data);
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error);
        alert(error.message);
      }
    }
  });
});
