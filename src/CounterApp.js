import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ titulo, value }) => {

    const [ counter, setCounter ] = useState( value ); ///retorna []  
         
    //handleAdd
    const handleAdd = () => {
        //setCounter(counter + 1);
        setCounter((c) => c + 1);

    }

    const handleReset = () => {
        setCounter( value );         
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return ( 
        <>
            <h1> { titulo } </h1>
            <h2> { counter } </h2>
            
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button onClick = { handleSubstract }> -1 </button>
                
        </>

  );

}

CounterApp.propTypes = {
   value: PropTypes.number
}

CounterApp.defaultProps = {
    titulo: 'CounterApp'
}

export default CounterApp;
