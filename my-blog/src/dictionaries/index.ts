import 'server-only'

const dictionaries = {
    'pt-BR': () => import('./pt-BR').then((module) => module.default),
    'en-US': () => import('./en-US.json').then((module) => module.default),
    'es': () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    return dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries['pt-BR']()
}