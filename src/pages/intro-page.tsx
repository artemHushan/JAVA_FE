import { FC } from "react";

const TicketIcon = () => (
    <img src="../assets/train-ticket.png"  alt="" />
);

export const IntroPage: FC = () => {
    const handleStart = () => {
        console.log('Starting simulator...');
        // Add your simulation logic here
    };

    return (
        <div className="simulator-container">
            <div className="background-pattern">
                <div className="background-text">TOKYO-KYIV BEIJING-SHANGHAI</div>
                <div className="background-text">PARIS-BERLIN KYIV-LVIV</div>
                <div className="background-text">TOKYO-KYIV BEIJING-SHANGHAI</div>
                <div className="background-text">PARIS-BERLIN KYIV-LVIV</div>
                <div className="background-text">TOKYO-KYIV BEIJING-SHANGHAI</div>
                <div className="background-text">PARIS-BERLIN KYIV-LVIV</div>
                <div className="background-text">TOKYO-KYIV BEIJING-SHANGHAI</div>
                <div className="background-text">PARIS-BERLIN KYIV-LVIV</div>
            </div>

            <div className="content">
                <h1 className="title">Tickets Simulator</h1>
                <div className="icon-container">
                    <TicketIcon />
                </div>
                <button className="start-button" onClick={handleStart}>
                    START
                </button>
            </div>
        </div>
    )
}