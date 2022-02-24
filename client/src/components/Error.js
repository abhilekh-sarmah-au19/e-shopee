import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong><i class="fas fa-exclamation-triangle"></i></strong> &nbsp;
        {error}
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
