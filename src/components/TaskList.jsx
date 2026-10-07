import TaskItem from './TaskItem.jsx'

function TaskList({ taches, onToggle, onSupprimer }) {
  if (taches.length === 0) {
    return <p className="vide">Aucune tâche</p>
  }

  return (
    <ul className="liste">
      {taches.map((tache) => (
        // Q3 : key = tache.id (identifiant stable et unique). Avec l'index, la
        // clé est liée à la position : après une suppression, les éléments
        // se décalent, React réassocie mal le state des composants (les cases
        // cochées se décalent) et re-rend inutilement.
        <TaskItem
          key={tache.id}
          tache={tache}
          onToggle={onToggle}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  )
}

export default TaskList
