import './Tache.scss';
/* Ex3 - Point F)ii) */
import formaterDateEtHeure from '../services/utilitaires';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) */}
      <IconButton className="icone">
        <CheckIcon />
      </IconButton>
      {/* Ex3 - Point F)i) */}
      <span className="texte">{texte}</span>
      {/* Ex3 - Point F)ii) */}
      <span className="date">{formaterDateEtHeure(date)}</span>
      {/* Ex3 - Point F)iii) */}
      <IconButton className="icone">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}