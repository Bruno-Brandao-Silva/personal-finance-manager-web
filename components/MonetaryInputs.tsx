import React from 'react';
import styles from './MonetaryInputs.module.css';

interface MonetaryInputsProps {
    inputs: { description: string; value: number }[];
}

const MonetaryInputs: React.FC<MonetaryInputsProps> = ({ inputs }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {inputs.map((input, index) => (
                    <tr key={index}>
                        <td>{input.description}</td>
                        <td>R$ {input.value.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MonetaryInputs;