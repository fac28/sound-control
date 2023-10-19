const MusicControl = ({ clickHandler, children, setState }) => {
  return (
    <button
      className="button glow play"
      onClick={() => clickHandler(setState)}
    >
      {children}
    </button>
  );
};

export default MusicControl;
