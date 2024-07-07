import React from 'react';
import styles from './MonetaryGoals.module.css';

interface MonetaryGoalsProps {
    goals: { goal: string; value: number }[];
}

const MonetaryGoals: React.FC<MonetaryGoalsProps> = ({ goals }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Meta</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {goals.map((goal, index) => (
                    <tr key={index}>
                        <td>{goal.goal}</td>
                        <td>R$ {goal.value.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MonetaryGoals;