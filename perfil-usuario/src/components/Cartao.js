import styles from './Cartao.module.css';

    
    function cartao(props) {
        return (
            <div>
                <img src={props.imagem} alt="Imagem do Usuário" />
                <p>Nome de Usuário: {props.nome}</p>
                <p>Profissão: {props.profissao}</p>
                <p>Descrição: {props.descricao}</p>
            </div>
        );
    }

export default cartao