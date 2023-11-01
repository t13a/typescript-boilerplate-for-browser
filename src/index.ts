import assert from "assert";
import { greeting } from "./hello";

const element = document.querySelector("#hello");
assert(element instanceof HTMLElement);

greeting(element);
