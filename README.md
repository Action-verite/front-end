# 🎲 Action ou Vérité 

Une application web interactive et personnalisable du célèbre jeu **Action ou Vérité**, développée en **HTML5, CSS3 et JavaScript pur**.

Conçue sans aucun serveur ni base de données (100% client-side), l'application permet au **maître du jeu** de configurer l'ambiance exacte de la partie grâce à un système de filtres par thèmes et niveaux d'intensité.

---

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Modes de jeu & Thématiques](#-modes-de-jeu--thématiques)
- [Aperçu de la pile technique](#-pile-technique)
- [Structure du projet](#-structure-du-projet)
- [Démarrage rapide](#-démarrage-rapide)
- [Déploiement](#-déploiement)
- [Ajout de questions / défis](#-ajout-de-questions--défis)
- [Licence](#-licence)

---

## ✨ Fonctionnalités

- 🎛️ **Contrôle par le maître du jeu** : Configuration préalable de l'ambiance avant ou pendant la partie.
- 🎭 **4 Thèmes au choix** : Adaptez les questions selon votre groupe.
- 🌶️ **2 Niveaux d'intensité** : Basculez entre une ambiance détendue ou plus piquante.
- ⚡ **100% Front-End (Zéro dépendance)** : Aucun framework lourd, chargement instantané.
- 🔒 **Vie privée garantie** : Aucune donnée collectée, aucun stockage en base de données externe.
- 📱 **Responsive Design** : Utilisable sur smartphone, tablette ou grand écran lors de vos soirées.

---

## 🎮 Modes de jeu & Thématiques

Le maître de la partie configure deux filtres principaux pour cibler le contenu proposé aux joueurs :

### 1. Choix du Thème

- 👥 **Amis** : Anecdotes du quotidien, fous rires et défis légers.
- 🎉 **Soirée** : Gages festifs, défis d'ambiance et questions décalées.
- 💖 **Amour** : Confidences sentimentales, crushs et révélations romantiques.
- 🔥 **Adulte** : Sujets intimes, questions taboues et défis audacieux.

### 2. Choix de l'Intensité

- 🟢 **Mode Safe** : Sans prise de tête, bienveillant et grand public.
- 🔴 **Mode Hard** : Piquant, sans filtre et réservé aux joueurs audacieux.

Le joueur choisit ensuite simplement entre **Action** ou **Vérité** pour tirer une carte correspondant précisément aux critères définis.

---

## 🛠 Pile technique

- **HTML5** : Structure sémantique (sélection des filtres, affichage des cartes).
- **CSS3** : Design responsive (Flexbox/Grid), transitions dynamiques et thèmes visuels.
- **JavaScript (ES6+)** : Gestion de l'état de la partie (filtres actifs, tirage des cartes correspondantes dans le catalogue local).

---

## 📂 Structure du projet

```text
Projet action-vérité/
├── styles/
│   ├── fonts/                     # Polices d'écriture personnalisées
│   ├── reset.css                  # Réinitialisation des styles navigateurs
│   └── styles.css                 # Feuilles de styles principales & responsive
├── js/                            # Logique JavaScript (au même niveau que styles/)
│   ├── data.js                    # Banque de données des questions / défis
│   └── script.js                  # Logique du jeu et gestion du state
├── affichageActionVerite.html     # Affichage de la carte tirée
├── choixActionVerite.html         # Choix entre Action ou Vérité
├── choixThèmeEtMode.html          # Configuration (Thèmes: Amis/Soirée/Amour/Adulte, Modes: Safe/Hard)
├── demandePrenom.html             # Formulaire d'enregistrement des joueurs
├── index.html                     # Page d'accueil
├── laPatieSeLance.html            # Écran de transition / lancement du tour
├── logo.webp                      # Logo de l'application
└── README.md                      # Documentation du projet
```

---

## 🚀 Démarrage rapide

Comme le projet est purement statique, aucune installation via `npm` ou gestionnaire de paquets n'est nécessaire.

### 1. Cloner le projet

```bash
git clone https://github.com/Action-verite/front-end.git
cd action-ou-verite
```

### 2. Lancer l'application

- **Directement** : Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.
- **Avec VS Code** : Clic droit sur `index.html` > **"Open with Live Server"**.

---

## ⚙️ Ajout de questions / défis

Les questions et actions sont répertoriées dans le fichier `data.js`. Elles sont organisées sous forme d'objets structurés par **type** (`action`), **thème** (`amis`, `soiree`, `amour`, `adulte`) et **mode** (`safe` ou `hard`) :

```javascript
export const questions = [
  {
    type: "verite",
    theme: "amis",
    mode: "safe",
    text: "Quelle est la chose la plus ridicule que tu aies faite par amitié ?",
  },
  {
    type: "action",
    theme: "soiree",
    mode: "hard",
    text: "Laisse un autre joueur envoyer un emoji au hasard à ton dernier contact WhatsApp.",
  },
];
```

---

## 🌐 Déploiement

Le site peut être hébergé gratuitement en un clic :

- **GitHub Pages** (_Settings > Pages > Branch: main_)

---

## 📄 Licence

Projet sous licence **MIT**. Libre d'utilisation, de modification et de distribution.
