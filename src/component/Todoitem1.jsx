function Todoitem1() {
  let Taskname = "Collect Money From Ambani";
  let Taskdate = "02/11/2024";
  return (
    <div class="container ">
      <div class="row universal-row">
        <div class="col-6 bold-item">{Taskname}</div>
        <div class="col-4 bold-item">{Taskdate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger universal-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
