import './Utilisateur.scss';
import { Avatar, Button } from '@material-ui/core';
/* Ex3 - Point C */
import { deconnexion } from '../services/crud-utilisateurs';

export default function Utilisateur({utilisateur}) {
  return (
    <div className="Utilisateur">
      {/* Ex3 - Point D)iii) */}
      <span className="nom">{utilisateur.displayName}</span>
      <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} />
      {/* Ex3 - Point C */}
      <Button 
        variant="outlined"
        size="small"
        className="btnDeconnexion"
        onClick={() => deconnexion()}
      >
        Déconnexion
      </Button>
    </div>
  );
}