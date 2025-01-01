import React from "react";
import "./DataVisual.scss";
import Icon from "../../../assets/images/Icon.png";
import verticleImag from "../../../assets/images/verticle_img.png";
import { CommonChart } from "../CommonChart";
import MyGauge from "../GaugeChart";
import ValdityBar from "../ValdityBar";

const DataVisual = () => {
  const renderSection = (img, text, val) => (
    <div className="section">
      <img src={img} alt="icon" />
      <div className="data-point">
        <div className="label">{text}</div>
        <div className="value">{val}</div>
      </div>
    </div>
  );

  const renderMetaDataItem = (label, text) => (
    <div className="metadata-item">
      <span className="metadata-key">{label}</span> {text}
    </div>
  );

  return (
    <div className="container">
      <div className="header">
        <h1>Data Visual</h1>
      </div>

      <div className="data-overview">
        <h5>Data Overview</h5>
        <div className="data-overview-container">
            <div className="section_outer">
            {renderSection(Icon, "Total Number of rows", "34.1M")}
            {renderSection(verticleImag, "Total No of Columns", "2")}
            </div>

          <div className="metadata-section">
            <div className="data-point">
              <div className="label">Metadata</div>
              <div className="metadata-details">
                {renderMetaDataItem("Name:", "Samples")}
                {renderMetaDataItem("Created at:", "20 Jul 2022")}
                {renderMetaDataItem("Relates to:", "dim_books")}
                {renderMetaDataItem("Connection:", "Postgresql")}
              </div>
            </div>
          </div>

          <div className="sla-section">
            <div className="data-point">
              <div className="label">SLA</div>
              <div className="sla-bars">
                <div className="sla-bar green" style={{ width: "100%" }}></div>
                <div className="sla-text">5/5</div>
              </div>
              <div className="sla-details">
                <div className="sla-item">
                  <span className="sla-key">Test report</span>{" "}
                  <span className="sla-value">See all</span>
                </div>
                <div className="sla-item">
                  <span className="sla-key">100% Score</span>{" "}
                  <span className="sla-value">5 Test</span>
                </div>
              </div>
              <div className="sla-bars">
                <div className="sla-bar green" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Quantity-conatiner">
        <h3>Data Quality</h3>
        <div className="inner_chart">
        <MyGauge score={6} className={"commonChartchart"}/>
        <ValdityBar value={6} className={"commonChartchart"}/>
        </div>
      </div>

     
        {" "}
        <div className="common-chart">

          <CommonChart
            label={"Table Health"}
            success={50}
            failed={20}
            skipped={38}
            total={88}
            className={"chart_style"}
          />

          <CommonChart
            label={"Test Results Breakdown"}
            success={50}
            failed={20}
            skipped={38}
            total={88}
            className={"chart_style"}

          />

          <CommonChart
            label={"Monitored Tables"}
            success={50}
            failed={20}
            skipped={38}
            total={88}
            className={"chart_style"}

          />
        </div>
      </div>
  );
};

export default DataVisual;
