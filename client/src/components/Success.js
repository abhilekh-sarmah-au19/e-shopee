import React from "react";

export default function Success({ success }) {
  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong><i className="fas fa-check-circle"></i></strong>&nbsp; {success}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
