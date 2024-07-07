import React from 'react';
import styles from './MonetaryOutputs.module.css';

interface MonetaryOutputsProps {
    outputs: { description: string; value: number }[];
}

const MonetaryOutputs: React.FC<MonetaryOutputsProps> = ({ outputs }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {outputs.map((output, index) => (
                    <tr key={index}>
                        <td>{output.description}</td>
                        <td>R$ {output.value.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MonetaryOutputs;
