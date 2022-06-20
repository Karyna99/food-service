import { useState } from "react";
import "./style.css";
import { data } from "./data.js";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <div className="tabs__questions">
                {data.map(question => (
                    <button
                        className={`tab__button ${activeTab === question.id ? "button--active" : ""}`}
                        onClick={() => toggleTab(question.id)}
                    >{question.question}</button>
                ))}
            </div>
            <div className="tabs__answers">
                {data.map(question => (
                    <p
                    className={`answer__content ${activeTab === question.id ? "answer--active" : ""}`}
                >
                    {question.answer}
                </p>
                ))}
            </div>
        </div>
    );
};

export default Tabs;