import { useState } from "react";
import "./style.css";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <div className="tabs__questions">
                <button
                    className={`tab__button ${activeTab === 0 ? "button--active" : ""}`}
                    onClick={() => toggleTab(0)}
                >
                    HOW FAST IS DELIVERY?
                </button>
                <button
                    className={`tab__button ${activeTab === 1 ? "button--active" : ""}`}
                    onClick={() => toggleTab(1)}
                >
                    HOW MUCH DOES SHIPPING COST?
                </button>
                <button
                    className={`tab__button ${activeTab === 2 ? "button--active" : ""}`}
                    onClick={() => toggleTab(2)}
                >
                    HOW TO PAY FOR THE DELIVERY SERVICE?
                </button>
                <button
                    className={`tab__button ${activeTab === 3 ? "button--active" : ""}`}
                    onClick={() => toggleTab(3)}
                >
                    CAN I PAY BY CARD TO THE COURIER?
                </button>
            </div>
            <div className="tabs__answers">
                <div
                    className={`answer__content ${activeTab === 0 ? "answer--active" : ""}`}
                >
                    Elit exercitation laborum consectetur sit.
                </div>
                <div
                    className={`answer__content ${activeTab === 1 ? "answer--active" : ""}`}
                >
                    Elit exercitation laborum consectetur sit.
                </div>
                <div
                    className={`answer__content ${activeTab === 2 ? "answer--active" : ""}`}
                >
                    YOU CAN PAY FOR DELIVERY ONLINE, AS WELL AS BY CARD OR IN CASH TO THE COURIER
                </div>
                <div
                    className={`answer__content ${activeTab === 3 ? "answer--active" : ""}`}
                >
                    Elit exercitation laborum consectetur sit.
                </div>
            </div>
        </div>
    );
};

export default Tabs;