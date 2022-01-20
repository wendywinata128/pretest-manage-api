import Button from "../global/Button";
import Filter from "../global/Filter";
import TextField from "../global/TextField";
import { CgSearch } from "react-icons/cg";
import { AiOutlineSortAscending } from "react-icons/ai";

const TabActions = ({
  className,
  onAddMedicineClicked,
  onSearchTyped,
  onFilterChanged,
  onSortClicked,
}) => {
  const filterOptions = [
    {
      title: "All Status",
      value: "",
    },
    {
      title: "Active",
      value: "true",
    },
    {
      title: "Inactive",
      value: "false",
    },
  ];

  return (
    <div className={`flex flex-col justify-between ${className} md:flex-row`}>
      <TextField
        placeholder="Search Medicine Name"
        borderColor="white"
        textColor="white"
        className="mb-4 md:mb-0"
        onTyped={onSearchTyped}
        Icon={CgSearch}
      />
      <div className="filter-container flex ml-auto">
        <Button
          title=""
          Icon={AiOutlineSortAscending}
          className="mr-6"
          backgroundColor="#4B1973"
          onClicked={onSortClicked}
          shadow={true}
        />
        <Filter
          options={filterOptions}
          className="mr-6"
          onDropdownChanged={onFilterChanged}
        />
        <Button
          title="Add New Medicine"
          backgroundColor="#34743A"
          onClicked={onAddMedicineClicked}
          shadow={true}
        />
      </div>
    </div>
  );
};

export default TabActions;
