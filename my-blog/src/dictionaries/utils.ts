import { merge } from "lodash";

async function loadDictionaries(files: string[]) {
    const modules = await Promise.all(
        files.map(async (file) => {
            const module = await import(`@/dictionaries/pt-br/${file}`);
            return module.default;
        })
    );

    return merge({}, ...modules);
}

export async function getDictionaries(files: string[]) {
    const dictionaries = await loadDictionaries(files);
    return dictionaries;
}
