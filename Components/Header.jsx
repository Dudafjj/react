import PropTypes from 'prop-types'
import Button from './Button';


function Header ({title}){
    function onClick(){
        alert('Consultada Marcada 🤗');
    }
    return( 
      <header className="header">
          <h1> Agenda de tarefas  {title} </h1>
        <Button bgColor='green' text='Add' onClick={onClick} />
        
      </header>

    )
}
export default Header;

