import React from "react";
import "./DataBot.scss";
import { AiIcon } from "../../../assets/ExportSvg/ExportSvgs";
const DataBot = () => {

    const renderNode = (text) => (
<div className="summary-component">
      <div className="text">
       {text}
      </div>
      <button className="icon-button" aria-label="Open">
        ↗
      </button>
    </div>
    )


  return (
    <div className="container">
      <div className="header">
        <h1>Databot <span><AiIcon /></span></h1>
        <div>
          <p>
          Connected Data : Clothing Sales
          </p>
        </div>
      </div>


      <div className="intro">
        <h3><span>
        AI Conversational
            </span> Data Analyst</h3>

            <p>
            Your personal AI data assistant. Seamlessly integrate your database for rapid, informed decision-making. Get instant analysis and answers, optimizing growth metrics daily. Ask anything, get analyst-grade responses.
            </p>

      </div>
    <div className="summary_point">
    {renderNode("Give me the summary of the data Source.")}
    {renderNode("User duration engagement change vs last week?")}
    {renderNode("Provide an overview of this week's IAP Revenue performance .")}
    {renderNode("What are the factors of drop in our Sales Revenue this week?")}

    </div>


    <div className="supplier-references">
      <h2>Summary</h2>
      <p>Supplier references refer to information provided by a supplier that can be used to verify their capabilities and experience. This information is typically used during the procurement process to evaluate potential vendors.</p>

      <h3>Basic Reference:</h3>
      <ul>
        <li>Supplier Name: Acme Corporation</li>
        <li>Contact Name: John Smith, Sales Manager</li>
        <li>Phone Number: (555) 555-5555</li>
        <li>Email Address: [email address removed]</li>
        <li>Relationship: Supplied office furniture for our headquarters in 2023.</li>
      </ul>

      <h3>Detailed Reference:</h3>
      <ul>
        <li>Supplier Name: Global Tech Solutions</li>
        <li>Contact Name: Jane Doe, Account Manager</li>
        <li>Phone Number: (555) 555-1234</li>
        <li>Email Address: [email address removed]</li>
      </ul>
    </div>


    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Ask your AI for data summary......"
        className="search-input"
      />
      <button className="search-button">
        <span className="sparkle">✨</span> Search
      </button>
    </div>

    </div>
  );
};

export default DataBot;

