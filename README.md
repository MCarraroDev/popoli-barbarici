# Popoli Barbarici nell'Impero Romano

Una web app interattiva che mostra le principali popolazioni barbariche che si sono insediate nell'Impero Romano, con informazioni dettagliate e una mappa interattiva delle loro posizioni.

## Tecnologie Utilizzate

- **React** - Framework JavaScript per la creazione dell'interfaccia utente
- **TypeScript** - Superset tipizzato di JavaScript
- **Material-UI** - Libreria di componenti React per un design moderno
- **React Router** - Gestione del routing nell'applicazione
- **Leaflet** - Libreria per la visualizzazione di mappe interattive
- **React Leaflet** - Wrapper React per Leaflet

## Caratteristiche

- Visualizzazione delle popolazioni barbariche in card informative
- Mappa interattiva con i luoghi di insediamento
- Design moderno con palette di colori personalizzata
- Layout completamente responsive

## Installazione

```bash
# Clona il repository
git clone [url-del-repository]

# Installa le dipendenze
cd popoli-barbarici
npm install

# Avvia l'applicazione in modalità sviluppo
npm start
```

L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Struttura del Progetto

```
src/
├── components/     # Componenti React riutilizzabili
├── pages/         # Pagine dell'applicazione
├── types/         # Definizioni TypeScript
└── App.tsx        # Componente principale
```

## Deployment

Per creare una build di produzione:

```bash
npm run build
```

Questo creerà una cartella `build` con i file ottimizzati per la produzione.

## Licenza

Questo progetto è distribuito con licenza MIT.
