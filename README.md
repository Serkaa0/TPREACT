# Gestionnaire de tâches (TP ReactJS)

**Noms :** Serkan, (ajouter le/les autres noms ici)

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

```
src/
  App.jsx                  # state (taches, filtre) + toutes les fonctions qui le modifient
  App.css
  main.jsx
  components/
    TaskForm.jsx           # formulaire contrôlé (onAjout)
    TaskList.jsx           # map() + key={tache.id}
    TaskItem.jsx           # case, texte, bouton ✕ (onToggle, onSupprimer)
    Compteur.jsx           # "1 tâche restante" / "N tâches restantes" / "Tout est fait"
    Filtres.jsx            # Toutes / En cours / Terminées (classe actif)
```

## Fonctionnalités

- Ajouter une tâche (refus des tâches vides ou d'espaces, champ vidé après ajout)
- Cocher / décocher, supprimer
- Supprimer les terminées, tout marquer comme fait
- Compteur accordé, calculé à chaque rendu (pas de state)
- Filtres, liste filtrée calculée (pas de state)
- "Aucune tâche" quand le filtre ne renvoie rien

Aucune bibliothèque supplémentaire (React + Vite uniquement).
