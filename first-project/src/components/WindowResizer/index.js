import useWinSize from "../../hooks/winSizeHook";

const WindowVP = () => {
  const sizes = useWinSize();

  return (
    <div>
      <p>Width:{sizes.width}</p>
      <p>Height:{sizes.height}</p>
    </div>
  );
};

export default WindowVP;
