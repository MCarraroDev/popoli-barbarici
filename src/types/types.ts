export interface Popolazione {
    nome: string;
    provenienza: string;
    zonaInsediamento: string;
    anniBattaglie: string;
    rapportiImpero: string;
    coordinate: [number, number];
}

export const popolazioni: Popolazione[] = [
    {
        nome: "Visigoti",
        provenienza: "Europa orientale (attuale Romania/Bulgaria)",
        zonaInsediamento: "Spagna meridionale e Gallia sud-occidentale",
        anniBattaglie: "Battaglia di Adrianopoli (378), sacco di Roma (410), insediamento (418)",
        rapportiImpero: "Foederati",
        coordinate: [43.0, -3.0]
    },
    {
        nome: "Ostrogoti",
        provenienza: "Europa orientale (attuale Ucraina)",
        zonaInsediamento: "Italia (Regno ostrogoto)",
        anniBattaglie: "Conquista d'Italia (488-493), regno fino al 553",
        rapportiImpero: "Regno indipendente, poi ostili",
        coordinate: [42.0, 12.0]
    },
    {
        nome: "Vandali",
        provenienza: "Europa centrale (attuale Germania)",
        zonaInsediamento: "Nord Africa (Regno vandalico)",
        anniBattaglie: "Attraversamento del Reno (406), conquista Africa (429-439), caduta (534)",
        rapportiImpero: "Nemici, poi brevi tentativi di foederati",
        coordinate: [36.0, 10.0]
    },
    {
        nome: "Franchi",
        provenienza: "Europa nord-occidentale (attuale Belgio/Francia)",
        zonaInsediamento: "Gallia settentrionale",
        anniBattaglie: "Insediamenti nel IV-V secolo, Battaglia di Soissons (486)",
        rapportiImpero: "Foederati e poi popolo alleato",
        coordinate: [48.0, 2.0]
    },
    {
        nome: "Burgundi",
        provenienza: "Europa centrale (attuale Svizzera/Francia orientale)",
        zonaInsediamento: "Sabaudia (Gallia orientale)",
        anniBattaglie: "Insediamento (443), regno fino al 532",
        rapportiImpero: "Foederati",
        coordinate: [46.0, 6.0]
    },
    {
        nome: "Alamanni",
        provenienza: "Europa centrale (attuale Germania sud-occidentale)",
        zonaInsediamento: "Renania e Alsazia",
        anniBattaglie: "Incursioni IV-V secolo, battaglia di Argentorato (357)",
        rapportiImpero: "Nemici, poi tratti come foederati intermittenti",
        coordinate: [48.0, 7.5]
    },
    {
        nome: "Goti Settentrionali (Gepidi)",
        provenienza: "Europa orientale (attuale Romania)",
        zonaInsediamento: "Pannonia",
        anniBattaglie: "Insediamento (567), regno fino al 567",
        rapportiImpero: "Alleati occasionali, poi sottomessi",
        coordinate: [47.0, 19.0]
    },
    {
        nome: "Lombardi",
        provenienza: "Europa settentrionale (attuale Scandinavia)",
        zonaInsediamento: "Italia settentrionale",
        anniBattaglie: "Invasione (568), regno fino al 774",
        rapportiImpero: "Nemici e poi accordi locali",
        coordinate: [45.0, 9.0]
    },
    {
        nome: "Unni (Attila)",
        provenienza: "Steppe eurasiatiche (attuale Mongolia)",
        zonaInsediamento: "Balcani e Gallia settentrionale (invasioni)",
        anniBattaglie: "Invasioni (440-453), Battaglia dei Campi Catalaunici (451)",
        rapportiImpero: "Nemici",
        coordinate: [47.0, 21.0]
    },
    {
        nome: "Sassoni",
        provenienza: "Europa settentrionale (attuale Germania settentrionale)",
        zonaInsediamento: "Britannia (in parte)",
        anniBattaglie: "Invasioni (450-550)",
        rapportiImpero: "Inizialmente nemici, poi regni alleati",
        coordinate: [52.0, -1.0]
    }
];
