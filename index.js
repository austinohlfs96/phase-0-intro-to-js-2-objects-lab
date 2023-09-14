const employee = {
  name: "Sam",
  streetAdress: "11 Broadway",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {...employee, [key]: value };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const { [key]:
  deletedProp, ...updatedEmpoyee } =
  employee;
  return updatedEmpoyee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}