import { useState } from 'react'

function TaskForm({ onAjout }) {
  const [texte, setTexte] = useState('')

  function handleSubmit(e) {
    e.preventDefault() // évite le rechargement de la page
    if (texte.trim() === '') return // refuse vide / uniquement des espaces
    onAjout(texte.trim())
    setTexte('') // vide le champ
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche…"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit" className="primaire">
        Ajouter
      </button>
    </form>
  )
}

export default TaskForm
