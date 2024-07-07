"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import MonetaryInputs from "@/components/MonetaryInputs";
import MonetaryOutputs from "@/components/MonetaryOutputs";
import MonetaryGoals from "@/components/MonetaryGoals";
import SaveProgress from "@/components/SaveProgress";
import NavigationBar from "@/components/NavigationBar";


export default function Dashboard() {
    const inputs = [
        { description: 'Salário', value: 3000 },
        { description: 'Freelance', value: 1500 },
    ];

    const outputs = [
        { description: 'Aluguel', value: 1200 },
        { description: 'Mercado', value: 800 },
    ];

    const goals = [
        { goal: 'Viagem', value: 5000 },
        { goal: 'Reserva de Emergência', value: 10000 },
    ];

    const totalGoal = 15000;
    const currentSavings = 6000;

    return (
        <main className={styles.main}>
            <NavigationBar />
            <div className={styles.grid_container}>
                <div className={styles.grid_1_1}>
                    <MonetaryInputs inputs={inputs} />
                </div>
                <div className={styles.grid_1_2}>
                    <MonetaryOutputs outputs={outputs} />
                </div>
                <div className={styles.grid_1_3}>
                    <MonetaryGoals goals={goals} />
                </div>
                <div className={styles.grid_2}>
                    <SaveProgress totalGoal={totalGoal} currentSavings={currentSavings} />
                </div>
            </div>
        </main>
    );
}
