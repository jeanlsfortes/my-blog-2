import { getDictionaries } from "../utils";

const dictionaries = await getDictionaries([
    "pt-br/home.json",
    "pt-br/navbar.json",
    "pt-br/ui/navbar/nav.json"]);

export default dictionaries;
