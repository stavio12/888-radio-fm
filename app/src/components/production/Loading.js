import React, { useEffect } from "react";

function Loading() {
  return (
    <>

      <div className="spinner-grow text-warning offset-5 mt-5" role="status">
        <span className="sr-only ">Loading...</span>
      </div>
    </>
  );
}

export default Loading;
