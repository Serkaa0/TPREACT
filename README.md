# Gestionnaire de tâches (TP ReactJS)

**Noms :** Serkan, Arthur

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

## Fonctionnalites

- Ajouter une tache
- Cocher, décocher, supprimer
- Supprimer les terminées, tout marquer comme fait
- Filtres, liste filtrée et calculée
- "Aucune tâche" quand le filtre ne renvoie rien
