import React from "react";

type ConfirmationModalProps = {
  isOpen: boolean; message: string; onConfirm: () => void; onCancel: () => void;
};

const ConfirmacionModal: React.FC<ConfirmationModalProps> = ({
                                                               isOpen, message, onConfirm, onCancel,
                                                             }) => {
  return (isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="mb-4">{ message }</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={ onConfirm }
          >
            Confirmar
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={ onCancel }
          >
            Cancelar
          </button>
        </div>
      </div>));
};

export default ConfirmacionModal;
