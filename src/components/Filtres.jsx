const OPTIONS = [
  { valeur: 'toutes', label: 'Toutes' },
  { valeur: 'en-cours', label: 'En cours' },
  { valeur: 'terminees', label: 'Terminées' },
]

function Filtres({ filtre, onChangerFiltre }) {
  return (
    <div className="filtres">
      {OPTIONS.map((o) => (
        <button
          key={o.valeur}
          className={filtre === o.valeur ? 'actif' : ''}
          onClick={() => onChangerFiltre(o.valeur)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default Filtres
