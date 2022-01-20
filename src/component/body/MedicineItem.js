import Button from "../global/Button";
import { MdEdit, MdDelete } from "react-icons/md";

const MedicineItem = ({ medicine, onEditClicked, onDeleteClicked }) => {
  return (
    <div className="bg-[#3E4D80] rounded-lg text-white text-left p-4 shadow flex flex-col">
      <h6
        className={`font-bold border-l-[4px] pl-4 mb-2 ${
          medicine.status ? "border-[#42934A]" : "border-[#E10009]"
        }`}
      >
        {medicine.name}
      </h6>
      <p className="text-sm text-justify text-slate-300 break-all">
        {medicine.description}
      </p>

      <div className="divider mt-auto pt-3 mb-3"></div>

      <div className="action flex">
        <Button
          title="Delete"
          Icon={MdDelete}
          className="flex-1"
          onClicked={onDeleteClicked}
        />
        <Button
          title="Edit"
          Icon={MdEdit}
          className="flex-1"
          onClicked={onEditClicked}
        />
      </div>
    </div>
  );
};

export default MedicineItem;
