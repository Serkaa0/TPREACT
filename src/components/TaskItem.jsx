function TaskItem({ tache, onToggle, onSupprimer }) {
  return (
    <li className="item">
      <label className={tache.terminee ? 'terminee' : ''}>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => onToggle(tache.id)}
        />
        <span>{tache.texte}</span>
      </label>
      <button
        className="suppr"
        aria-label={`Supprimer la tâche ${tache.texte}`}
        onClick={() => onSupprimer(tache.id)}
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
