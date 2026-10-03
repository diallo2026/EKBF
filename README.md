# Ets. KBF – Application de gestion de stock (PWA)

Application statique (HTML/JS, aucun serveur ni base à installer).
Contenu : `index.html` (application + 195 produits), `manifest.json`, `sw.js` (hors ligne), `icons/`, `firebase.json`, `_headers`, `.nojekyll`.

## 1. Déploiement (le site doit être en HTTPS)
Sans HTTPS, ni l'installation ni le mode hors ligne ne fonctionnent (sauf sur `localhost`).

**Netlify (le plus simple)** : netlify.com → *Add new site* → *Deploy manually* → glisser le dossier décompressé. Vous obtenez une adresse https.
**GitHub Pages** : créer un dépôt, y envoyer tous les fichiers, *Settings → Pages → Deploy from branch (main, /root)*.
**Firebase Hosting** : `npm i -g firebase-tools`, `firebase login`, `firebase init hosting` (dossier public : `.`, ne pas écraser index.html), puis `firebase deploy`.
**Serveur existant (cPanel, VPS…)** : copier tous les fichiers à la racine du site, avec HTTPS activé.
**Test local** : dans le dossier, `python3 -m http.server 8080` puis ouvrir http://localhost:8080

## 2. Premier lancement
1. Ouvrir l'adresse : l'écran « Créer le compte Fondateur » apparaît. Choisir identifiant et mot de passe.
2. Stocks → vérifier/ajouter les emplacements. Gestionnaires → créer les comptes, cocher stocks et tâches.
3. Stock initial → saisir les quantités du 03/10/2026 par stock (opération « INITIALISATION »).

## 3. Installation
**Android (Chrome)** : ouvrir l'adresse → bouton « Installer » de l'application, ou menu ⋮ → *Installer l'application* / *Ajouter à l'écran d'accueil*.
**Windows / macOS / Linux (Chrome, Edge)** : icône d'installation à droite de la barre d'adresse, ou bouton « Installer » de l'application.
**iPhone/iPad (Safari)** : Partager → *Sur l'écran d'accueil*.
Le navigateur demande toujours l'accord de l'utilisateur : aucune installation silencieuse n'est possible.

## 4. Mise à jour
Remplacer `index.html`, puis changer `VERSION` dans `sw.js` (ex. `kbf-v2`) pour que les appareils rechargent la nouvelle version.

Les gestionnaires utilisent l'écran « Opération rapide » : ils choisissent ENTRÉE ou SORTIE, le type est ensuite verrouillé pour l'opération.

## 5. Limites de cette version (à connaître)
- Les données sont enregistrées **dans le navigateur de chaque appareil** : pas de partage ni de synchronisation entre appareils. Utiliser un seul appareil de référence tant qu'un serveur n'est pas ajouté.
- Vider les données du navigateur efface la base : pas de fonction de sauvegarde/export intégrée.
- Les permissions sont contrôlées dans le code de l'application, pas par un serveur : elles protègent l'usage normal, pas contre un utilisateur technique.
- Étape suivante recommandée : Firebase Authentication + Firestore (règles de sécurité par stock) pour la synchronisation multi-appareils et la vraie sécurité.

## 6. Liste de contrôle
Créer 2 gestionnaires avec stocks différents · vérifier la séparation · entrée 100 / sortie 20 → 80 · état journalier du lendemain : stock initial 80 · couper Internet et recharger (l'app doit s'ouvrir) · imprimer l'état journalier · installer sur téléphone et ordinateur.
