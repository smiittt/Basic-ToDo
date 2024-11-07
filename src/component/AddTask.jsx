function AddTask() {
  return (
    <div class="container text-center">
      <div class="row universal-row">
        <div class="col-6">
          <input type="text" placeholder="Enter your task here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success universal-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTask;
