export const Modal = ({ Children, setClicked }: any) => {
  return (
    <div
      onClick={() => setClicked(false)}
      className="absolute bg-white bg-opacity-20 w-screen h-screen flex justify-center items-center"
    >
      {Children}
    </div>
  );
};

export default Modal;
