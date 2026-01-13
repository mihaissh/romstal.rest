# Calculator Rest (Change Calculator)

Un calculator modern și prietenos pentru calcularea restului în magazin. Această aplicație ajută la calcularea exactă a restului de returnat clienților și oferă o defalcare detaliată pe denominații (bancnote și monede).

## Caracteristici

- **Intrare Simplă**: Introduceți suma facturii și suma plătită
- **Calcul Instant**: Obțineți restul total imediat
- **Defalcare Detaliată**: Vedeți exact câte din fiecare denominație să returnați
- **Interfață Frumoasă**: Construită cu HeroUI pentru o interfață calmă și modernă
- **Teme Dark/Light**: Comutare între temă întunecată și deschisă
- **Imagini Bancnote**: Suport pentru imagini ale bancnotelor și monedelor românești
- **Design Responsive**: Funcționează pe desktop, tabletă și dispozitive mobile
- **Gestionare Erori**: Validează intrările și previne calcule invalide
- **Rotunjire Inteligentă**: Rotunjește restul (ex: 145.43 → 145, 145.67 → 146)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **HeroUI** - Component library (modern, beautiful, built on Tailwind CSS)
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript** - ES6+ features

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Utilizare

1. Introduceți **Suma factură** - suma totală pe care o datorează clientul
2. Introduceți **Suma plătită** - suma pe care v-a dat-o clientul
3. Faceți clic pe **Calculează Restul** pentru a vedea:
   - Suma totală a restului
   - Defalcarea pe denominații (bancnote: 500, 200, 100, 50, 20, 10, 5, 1 lei și monede: 50, 10, 5, 1 bani)
4. Faceți clic pe **Resetează** pentru a șterge toate câmpurile și a începe din nou

## Denominații Suportate

- **Bancnote**: 500 lei, 200 lei, 100 lei, 50 lei, 20 lei, 10 lei, 5 lei, 1 leu
- **Monede**: 50 bani, 10 bani, 5 bani, 1 ban

## Regula de Rotunjire

Calculatorul rotunjește restul după următoarea regulă:
- Dacă partea zecimală < 0.5: rotunjește în jos (ex: 145.43 → 145)
- Dacă partea zecimală ≥ 0.5: rotunjește în sus (ex: 145.67 → 146)

## Imagini Bancnote

Pentru a afișa imagini ale bancnotelor și monedelor, plasați imaginile în directorul `public/images/money/`:
- `500-lei.jpg`, `200-lei.jpg`, `100-lei.jpg`, etc.
- `50-bani.jpg`, `10-bani.jpg`, `5-bani.jpg`, `1-ban.jpg`

Dacă imaginile nu sunt disponibile, aplicația va afișa emoji-uri ca placeholder (💵 pentru bancnote, 🪙 pentru monede).

## Teme

Aplicația suportă teme dark și light. Comutarea se face prin butonul din colțul dreapta sus. Tema este salvată în localStorage și respectă preferința sistemului la prima utilizare.

## License

MIT
