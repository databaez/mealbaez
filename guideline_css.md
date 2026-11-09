GUIDELINE CSS — SITE WEB / MEAL PLANNER

1. OBJECTIF ET PRINCIPES GÉNÉRAUX


- Reproduire l’identité visuelle: site clair, naturel, épuré, orienté nutrition et bien-être.
- Garder les mêmes couleurs, typographies, espacements, boutons, cartes, header et footer sur les quatre pages.
- Privilégier des composants réutilisables plutôt que de recréer le même style dans chaque fichier.
- Le rendu doit être fidèle aux maquettes sur ordinateur et rester lisible sur tablette et téléphone.
- Cohérence générale entre les pages.


2. PALETTE DE COULEURS

COULEURS PRINCIPALES
- Couleur primaire (fond bouton / cartes secondaires) : `--color-primary` `#CBEA7B`
- Couleur secondaire (variante claire) : `--color-primary-dark` `#DCF1A7`
- Couleur d’accent (vert moyen) : `--color-accent-green` `#2C5446`
- Couleur d’accent sombre (header/footer, titres foncés) : `--color-accent-dark` `#1A3129`

FONDS
- Fond général de la page : `--color-bg-main` `#FAFDF2`
- Fond des cartes : `--color-bg-card` `#F6FBE9`
- Fond alternatif cartes/boutons : `--color-bg-card-alt` `#E5F5BD`
- Blanc pur : `--color-white` `#FFFFFF`

TEXTES
- Texte principal / titres : `--color-text-main` `#262626`
- Texte courant / neutre : `--color-text-muted` `#333333`
- Texte secondaire / descriptions : `--color-text-subtle` `#4C4C4D`
- Texte sur fond foncé : `--color-white` `#FFFFFF` / `rgba(255, 255, 255, 0.7)`
- Texte des boutons : `--color-accent-dark` `#1A3129` ou `--color-text-main` `#262626`

BORDURES ET ÉTATS
- Bordure standard des cartes : `--color-border` `#EEF8D3`
- Bordure sombre / accent : `--color-border-dark` `#2C5446`


3. TYPOGRAPHIE

- Police principale : `--font-family` 'Urbanist', sans-serif
- Police secondaire (Titres) : `--font-family-title` 'Parkinsans', sans-serif
- Taille du texte courant desktop : 16px / 18px (`--font-size-sm` / `--font-size-md`)
- Taille du texte courant mobile : 14px (`--font-size-xs`)
- Graisse des titres : 600 / 700 (Semi-Bold / Bold)
- Graisse du texte courant : 400 / 500 (Regular / Medium)

ÉCHELLE TYPOGRAPHIQUE
- Hero Title : 58px desktop (`--font-size-desktop-hero`) / 28px mobile (`--font-size-2xl`)
- H1 (Titres principaux) : 50px desktop (`--font-size-desktop-h1`) / 40px mobile (`--font-size-4xl`)
- H2 (Titres de section) : 48px desktop (`--font-size-desktop-h2`) / 28px mobile (`--font-size-2xl`)
- H3 / Subtitles : 20px - 22px (`--font-size-lg` / `--font-size-xl`)
- Texte courant : 16px (`--font-size-sm`) / 18px (`--font-size-md`)
- Petit texte / légende : 14px (`--font-size-xs`) / 12px (infos secondaires)
- Hauteur de ligne (line-height) : 1.5 par défaut (1.2 à 1.3 sur les titres)


4. LARGEURS, ESPACEMENTS ET STRUCTURE

- Largeur maximale du contenu : 1920px
- Largeur maximale du texte d'intro / hero : 600px à 1200px (selon la section)
- Padding conteneur mobile : 16px (`--container-padding`)
- Padding conteneur desktop : 162px (`--container-padding-desktop`)
- Espacement vertical inter-sections mobile : 50px (`--section-gap`)
- Espacement vertical inter-sections desktop : 120px (`--section-gap-desktop`)

VARIABLES DE RAYONS (BORDER-RADIUS)
- `--radius-sm` : 8px (Boutons, petites images)
- `--radius-md` : 12px (Cartes standards, sélecteurs)
- `--radius-lg` : 16px (Grands conteneurs, Hero cards)
- `--radius-full` : 9999px (Avatars, pills)

Règles :
- Utiliser `.main-content` pour aligner les sections au centre.
- Utiliser `width: 100%`, `max-width`, Flexbox et CSS Grid pour assurer le responsive.
- Interdiction d'utiliser des marges négatives pour rattraper le positionnement.


5. HEADER ET NAVIGATION

- Fond du header : `--color-bg-main` (`#FAFDF2`)
- Padding du header : 16px mobile / 24px 162px desktop
- Hauteur du logo (`.nav-logo`) : 32px
- Espacement entre les liens : 16px
- Taille des liens : 14px (`--font-size-xs`), font-weight: 500
- Couleur normale des liens : `--color-text-main` (`#262626`)
- Couleur au survol / lien actif (`.nav-link.active`) : `--color-accent-green` (`#2C5446`), font-weight: 600
- Bouton de contact (`.nav-btn`) : fond `--color-primary`, texte `--color-accent-dark`, radius `--radius-sm` (8px), padding 10px 20px.

Règles :
- Header identique sur les 4 pages (`index.html`, `process.html`, `pricing.html`, `team.html`).
- Passage d'une disposition verticale (flex column) sur mobile à une disposition horizontale (flex row) dès 768px.


6. FOOTER

- Couleur de fond : `--color-accent-dark` (`#1A3129`)
- Couleur des textes : `--color-white` (`#FFFFFF`) / `rgba(255, 255, 255, 0.7)` pour le sous-footer
- Padding du footer : 32px 16px mobile / 40px 162px desktop
- Séparateur contact / copyright : bordure haute `1px solid rgba(255, 255, 255, 0.1)`
- Organisation mobile : empilé verticalement avec `gap: 24px`.
- Organisation desktop (>= 768px) : flex row avec `justify-content: space-between`.


7. BOUTONS ET LIENS

Variantes :
1. Bouton Principal (`.btn-primary`, `.plan-btn`) :
   - Fond : `--color-primary` (`#CBEA7B`)
   - Texte : `--color-accent-dark` (`#1A3129`)
   - Padding : 12px 24px (18px 24px pour CTA)
   - Border-radius : `--radius-sm` (8px)
2. Bouton Secondaire (`.btn-secondary`) :
   - Fond : `transparent`
   - Bordure : `1px solid --color-accent-green` (`#2C5446`)
   - Texte : `--color-accent-green` (`#2C5446`)
   - Border-radius : `--radius-sm` (8px)

États :
- Transition globale : `all 0.2s ease-in-out` sur tous les boutons.
- Hover / Focus : changement de couleur de fond et opacité ajustée.


8. CARTES ET BLOCS DE CONTENU

- Fond des cartes : `--color-bg-card` (`#F6FBE9`)
- Rayon des coins : `--radius-md` (12px) ou `--radius-lg` (16px)
- Bordure standard : `1px solid --color-border` (`#EEF8D3`)
- Padding d'une carte : 16px à 24px
- Hauteur d'image d'exemple : 180px (`object-fit: cover`)
- Hauteur d'image membre équipe : 280px (`object-fit: cover`)

Composants définis :
- Carte de fonctionnalité / bénéfice (`.benefits-block`)
- Carte d’étape / processus (`.process-container` + `.process-number`)
- Carte d’exemple / article (`.examples-container`)
- Carte de témoignage (`.testimony-container`)
- Carte de prix (`.pricing-plan`)
- Carte d’équipe (`.member-card`)
- Section CTA (`.cta-section`)


9. RESPONSIVE DESIGN & BREAKPOINTS

Breakpoints retenus :
- Mobile : `< 768px` (affichage sur 1 colonne, éléments empilés)
- Tablette : `>= 768px` (grille 2 colonnes pour bénéfices, pricing, team, process)
- Desktop Intermédiaire : `>= 1024px` (grille 3 colonnes pour tarifs/témoignages)
- Grand Desktop : `>= 1440px` (grille 4 colonnes pour exemples/membres d'équipe, padding d'écran étendu à 162px)


10. ORGANISATION DES FICHIERS (ARCHITECTURE 3 NIVEAUX)

Fichiers CSS :
1. `css/base.css` : Reset CSS, variables `:root`, typographie globale, conteneur principal `.main-content` et boutons de base.
2. `css/layout.css` : En-tête (`.header`), navigation (`.nav-*`), bannière Hero (`.main-header`) et pied de page (`.footer`).
3. `css/components.css` : Blocs applicatifs et de contenu (`.benefits`, `.process`, `.examples`, `.testimony`, `.pricing`, `.team-hero`, `.cta-section`).

Ordre d'importation HTML :
```html
<link rel="stylesheet" href="./css/base.css">
<link rel="stylesheet" href="./css/layout.css">
<link rel="stylesheet" href="./css/components.css">
```