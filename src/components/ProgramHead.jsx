

const ProgramHead = ({icon,title,className}) => {
  return (
    <div className={`programs__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default ProgramHead;
