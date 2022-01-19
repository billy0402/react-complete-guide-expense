import { DataPoint } from '@models/dataPoint';

type ChartBarProps = DataPoint & {
  max: number;
};

const ChartBar = ({ label, value, max }: ChartBarProps) => {
  let barFillHeight = '0%';
  if (max > 0) {
    const percentage = Math.round((value / max) * 100);
    barFillHeight = `${percentage}%`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
