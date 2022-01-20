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
        className="w-full md:w-fit"
        onTyped={onSearchTyped}
        Icon={CgSearch}
      />
      <div className="filter-container flex ml-auto mt-4 md:mt-0">
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
          className="md:mr-6"
          onDropdownChanged={onFilterChanged}
        />
      </div>
      <Button
        title="Add New Medicine"
        backgroundColor="#34743A"
        onClicked={onAddMedicineClicked}
        shadow={true}
        className="mt-4 md:mt-0"
      />
    </div>
  );
};

export default TabActions;
