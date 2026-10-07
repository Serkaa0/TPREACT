import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Compteur from './components/Compteur.jsx'
import Filtres from './components/Filtres.jsx'

const tachesInitiales = [
  { id: 1, texte: 'Réviser le chapitre 3', terminee: false },
  { id: 2, texte: 'Envoyer le rapport à M. Dubois', terminee: true },
  { id: 3, texte: 'Préparer la réunion de lundi', terminee: false },
]

function App() {
  const [taches, setTaches] = useState(tachesInitiales)
  const [filtre, setFiltre] = useState('toutes') // "toutes" | "en-cours" | "terminees"

  // Ajoute à la fin sans modifier le tableau existant (spread, pas push)
  function ajouterTache(texte) {
    // id unique : plus grand id existant + 1
    const nouvelId = taches.reduce((max, t) => Math.max(max, t.id), 0) + 1
    setTaches([...taches, { id: nouvelId, texte, terminee: false }])
  }

  // Inverse "terminee" pour une seule tâche, avec un nouvel objet (pas de mutation)
  function basculerTache(id) {
    setTaches(
      taches.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t)),
    )
  }

  function supprimerTache(id) {
    setTaches(taches.filter((t) => t.id !== id))
  }

  function supprimerTerminees() {
    setTaches(taches.filter((t) => !t.terminee))
  }

  function toutMarquerFait() {
    setTaches(taches.map((t) => ({ ...t, terminee: true })))
  }

  // Valeurs dérivées : calculées à chaque rendu à partir de `taches`, pas de state.
  // Q16 : un state séparé pour le nombre de tâches restantes serait une mauvaise
  // idée car ce serait une donnée dupliquée. À chaque ajout, suppression ou
  // changement de case, il faudrait penser à le mettre à jour en plus de `taches`.
  // Au moindre oubli, les deux se désynchronisent et le compteur affiche une
  // valeur fausse. En le calculant à partir de `taches`, il est toujours juste.
  const nbRestantes = taches.filter((t) => !t.terminee).length

  // Q19 : liste filtrée calculée, pas stockée dans un state (même raison :
  // un state dupliqué ne suivrait plus `taches`, notamment quand on coche
  // une tâche en mode "Terminées").
  const tachesFiltrees = taches.filter((t) => {
    if (filtre === 'en-cours') return !t.terminee
    if (filtre === 'terminees') return t.terminee
    return true
  })

  return (
    <div className="app">
      <h1>Mes tâches</h1>
      <TaskForm onAjout={ajouterTache} />
      <TaskList
        taches={tachesFiltrees}
        onToggle={basculerTache}
        onSupprimer={supprimerTache}
      />
      <div className="actions">
        <button onClick={supprimerTerminees}>Supprimer les terminées</button>
        <button onClick={toutMarquerFait}>Tout marquer comme fait</button>
      </div>
      <div className="pied">
        <Compteur restantes={nbRestantes} />
        <Filtres filtre={filtre} onChangerFiltre={setFiltre} />
      </div>
    </div>
  )
}

export default App
