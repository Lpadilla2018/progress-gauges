import '../GuageComponent/Guage.css';

export const Gauges = (props) => {
  return (
    <div
      className={'guage'}
      style={{
        color: '#0B6E4F',
        background: `conic-gradient(#0B6E4F 0% ${props.guageValue}%, #303238 ${props.guageValue}% 100%)`,
      }}
    >
      <div className={'guage-inner'}>{props.guageValue}</div>
    </div>
  );
};
