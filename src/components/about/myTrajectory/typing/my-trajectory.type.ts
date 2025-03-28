export interface Experience {
    periodo: string
    cargo: string
    empresa: string
    descricao: string
}

export function convertJsonToExperience(json: Experience[]): Experience[] {
    return json.map(item => ({
        periodo: item.periodo,
        cargo: item.cargo,
        empresa: item.empresa,
        descricao: item.descricao
    }));
}