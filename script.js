// Attend que le DOM soit complètement chargé avant d'exécuter la logique
document.addEventListener("DOMContentLoaded", () => {
  // index.html

  // Déclare le tableau listant l'ensemble des classes de cartes cliquables
  const selecteursCartes = [
    // Carte Adulte Safe
    ".ma-forme-marron-safe",
    // Carte Adulte Hard
    ".ma-forme-marron-hard",
    // Carte Amour Safe
    ".ma-forme-rouge-safe",
    // Carte Amour Hard
    ".ma-forme-rouge-hard",
    // Carte Amis Safe
    ".ma-forme-jaune-safe",
    // Carte Amis Hard
    ".ma-forme-jaune-hard",
    // Carte Soirée Safe
    ".ma-forme-violet-safe",
    // Carte Soirée Hard
    ".ma-forme-violet-hard",
  ];

  // Sélectionne toutes les cartes présentes sur la page
  const cartes = document.querySelectorAll(selecteursCartes.join(", "));

  // Vérifie si on est sur index.html en testant la présence des cartes
  if (cartes.length > 0) {
    // Parcourt chaque carte trouvée pour lui attacher son comportement
    cartes.forEach((carte) => {
      // Modifie le curseur au survol pour indiquer que l'élément est cliquable
      carte.style.cursor = "pointer";

      // Écoute le clic utilisateur sur la carte
      carte.addEventListener("click", () => {
        // Récupère l'ensemble des classes CSS sous la forme d'un texte
        const listeClasses = carte.className;

        // Définit une valeur par défaut de sécurité pour le thème
        let themeChoisi = "default";
        // Teste si la classe contient le mot 'marron'
        if (listeClasses.includes("marron")) {
          // Attribue le thème adulte
          themeChoisi = "adulte";
          // Teste si la classe contient le mot 'rouge'
        } else if (listeClasses.includes("rouge")) {
          // Attribue le thème amour
          themeChoisi = "amour";
          // Teste si la classe contient le mot 'jaune'
        } else if (listeClasses.includes("jaune")) {
          // Attribue le thème amis
          themeChoisi = "amis";
          // Teste si la classe contient le mot 'violet'
        } else if (listeClasses.includes("violet")) {
          // Attribue le thème soirée
          themeChoisi = "soiree";
        }

        // Définit la difficulté initiale par défaut sur safe
        let modeChoisi = "safe";
        // Teste si la classe contient le mot 'hard'
        if (listeClasses.includes("hard")) {
          // Attribue la difficulté hard
          modeChoisi = "hard";
        }

        // Sauvegarde l'identifiant du thème choisi dans le localStorage
        localStorage.setItem("themeSelectionne", themeChoisi);
        // Sauvegarde la difficulté choisie dans le localStorage
        localStorage.setItem("modeSelectionne", modeChoisi);

        // Redirige l'utilisateur vers la page intermédiaire de confirmation
        window.location.href = "choixThèmeEtMode.html";
      });
    });
  }

  // choixThemeEtMode.html

  // Cible le bouton ou le conteneur de confirmation présent sur cette vue
  const boutonConfirmer = document.getElementById("btn-confirmer-choix");

  // Vérifie si le bouton de confirmation existe sur la page courante
  if (boutonConfirmer) {
    // Écoute le clic sur le bouton de confirmation
    boutonConfirmer.addEventListener("click", () => {
      // Redirige vers la page de saisie des prénoms
      window.location.href = "demandePrenom.html";
    });
  }

  // demandePrenom.html

  // Cible le formulaire par son identifiant unique
  const formPrenom = document.getElementById("form-prenom");

  // Vérifie si le formulaire existe sur la page actuelle
  if (formPrenom) {
    // Récupère le thème sauvegardé dans le navigateur
    const themeEnregistre = localStorage.getItem("themeSelectionne");

    // Vérifie si une valeur a bien été stockée
    if (themeEnregistre) {
      // Injecte le nom du thème dans l'attribut data-theme du formulaire
      formPrenom.dataset.theme = themeEnregistre;
      // Cas de secours si la page est ouverte sans sélection préalable
    } else {
      // Applique le thème neutre par défaut
      formPrenom.dataset.theme = "default";
    }
  }
});
