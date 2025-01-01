import GaugeChart from 'react-gauge-chart';

const MyGauge = ({ score, className }) => {
  return (
    <div className={className}>
    <label>Data Quality Score</label>

    <GaugeChart
      id="gauge-chart3"
      nrOfLevels={3}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#FB7857', '#DDDF0D', '#55BF3B']}
      percent={score / 100} // Convert score to percentage
      arcPadding={0.02}
      textColor="grey"
      needleColor="grey"
      formatTextValue={value => value + '%'}
      needleBaseColor="grey"
      />
      </div>
  );
};

export default MyGauge;