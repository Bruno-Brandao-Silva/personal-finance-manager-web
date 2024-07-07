import React from 'react';
import styles from './SaveProgress.module.css';

interface SaveProgressProps {
    totalGoal: number;
    currentSavings: number;
}

const SaveProgress: React.FC<SaveProgressProps> = ({ totalGoal, currentSavings }) => {
    const progressPercentage = (currentSavings / totalGoal) * 100;

    return (
        <div className={styles.progressContainer}>
            <label>Progresso de Economia:</label>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${progressPercentage}%` }}
                >
                    {progressPercentage.toFixed(2)}%
                </div>
            </div>
        </div>
    );
};

export default SaveProgress;
