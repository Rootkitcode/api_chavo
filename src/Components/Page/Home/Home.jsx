import React from "react";
import { ContCard } from "../../Layout/ContCard/ContCard";
import { Header } from "../../UI/Card/Header/Header";
import './Home.css';

export const Home = () => {
    return (
        <div className="pageHome">
            <Header />
            <ContCard />
            

        </div>
    )
}
