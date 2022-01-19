import ChartBar from '@components/chart/ChartBar';
import { DataPoint } from '@models/dataPoint';

type ChartProps = {
  dataPoints: DataPoint[];
};

const Chart = ({ dataPoints }: ChartProps) => {
  const pointMaximum = dataPoints.reduce(
    (max, dataPoint) => (dataPoint.value > max ? dataPoint.value : max),
    0,
  );

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} {...dataPoint} max={pointMaximum} />
      ))}
    </div>
  );
};

export default Chart;
