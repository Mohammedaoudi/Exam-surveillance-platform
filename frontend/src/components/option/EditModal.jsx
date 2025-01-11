
// EditModal.jsx
export default function EditModal({ editOption1, setEditOption1, onClose, onEdit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Modifier une Option</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          onEdit();
        }}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nom Option</label>
            <input
              type="text"
              value={editOption1.nomOption}
              onChange={(e) => setEditOption1({ ...editOption1, nomOption: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Niveau d'année</label>
            <select
              value={editOption1.niveauAnnee}
              onChange={(e) => setEditOption1({ ...editOption1, niveauAnnee: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="1ère année">1ère année</option>
              <option value="2ème année">2ème année</option>
              <option value="3ème année">3ème année</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nombre d'étudiants</label>
            <input
              type="number"
              value={editOption1.nombreEtudiant}
              onChange={(e) => setEditOption1({ 
                ...editOption1, 
                nombreEtudiant: parseInt(e.target.value) || 0 
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              min="0"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}