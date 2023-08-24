import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [voucherList, setVoucherList] = useState([]);

  return (
    <div>
      <div className="container">
        <div className="inner-smallspace">
          <div className="row">
            <div className="not-found-div text-center mt-4 mb-5">

              <svg width="171" height="128">
              <g fill="none" fill-rule="evenodd">
              <rect stroke="#CFD6DB" fill="#FFF" x="0.5" y="0.5" width="170" height="61" rx="4"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="40.5" width="49" height="5" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="50.5" width="24" height="3" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="149.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="131.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="113.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="8.5" width="49" height="5" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="18.5" width="24" height="3" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="149.5" y="8.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="131.5" y="8.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="113.5" y="8.5" width="13" height="13" rx="2"></rect><path fill="#D2D8DE" d="M20 31h143v1H20z"></path>
              <path d="M12.249 35.576c.937 0 1.576-.129 1.898-.281v-.756c-.416.182-1.007.293-1.886.293h-.053c-1.951 0-3.604-1.201-3.604-3.697v-.27c0-2.344 1.577-3.79 3.639-3.79h.047c2.209 0 3.451 1.523 3.451 3.228v.205c0 1.377-.521 1.998-1.096 1.998-.398 0-.709-.235-.709-.697v-2.866h-.85v.668h-.046c-.106-.334-.486-.75-1.16-.75-1.02 0-1.588.78-1.588 1.899v.539c0 1.142.557 1.922 1.535 1.922.691 0 1.19-.434 1.29-.815h.058c.082.393.521.815 1.353.815 1.172 0 2.028-1.037 2.028-2.649v-.299c0-2.033-1.5-3.943-4.266-3.943h-.047c-2.566 0-4.477 1.752-4.477 4.5v.34c0 2.935 1.987 4.406 4.43 4.406h.053zm-.129-3.123c-.55 0-.943-.363-.943-1.271v-.364c0-.85.41-1.242.931-1.242.533 0 .955.41.955 1.184v.469c0 .873-.392 1.224-.943 1.224z" fill="#D2D8DE" fill-rule="nonzero"></path><g transform="translate(0 66)"><rect stroke="#CFD6DB" fill="#FFF" x="0.5" y="0.5" width="170" height="61" rx="4"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="40.5" width="49" height="5" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="50.5" width="24" height="3" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="149.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="131.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="113.5" y="40.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="8.5" width="49" height="5" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="8.5" y="18.5" width="24" height="3" rx="1"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="149.5" y="8.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="131.5" y="8.5" width="13" height="13" rx="2"></rect><rect stroke="#E4E8EE" fill="#E4E8EE" x="113.5" y="8.5" width="13" height="13" rx="2"></rect><path fill="#D2D8DE" d="M20 31h143v1H20z"></path>
              <path d="M12.249 35.576c.937 0 1.576-.129 1.898-.281v-.756c-.416.182-1.007.293-1.886.293h-.053c-1.951 0-3.604-1.201-3.604-3.697v-.27c0-2.344 1.577-3.79 3.639-3.79h.047c2.209 0 3.451 1.523 3.451 3.228v.205c0 1.377-.521 1.998-1.096 1.998-.398 0-.709-.235-.709-.697v-2.866h-.85v.668h-.046c-.106-.334-.486-.75-1.16-.75-1.02 0-1.588.78-1.588 1.899v.539c0 1.142.557 1.922 1.535 1.922.691 0 1.19-.434 1.29-.815h.058c.082.393.521.815 1.353.815 1.172 0 2.028-1.037 2.028-2.649v-.299c0-2.033-1.5-3.943-4.266-3.943h-.047c-2.566 0-4.477 1.752-4.477 4.5v.34c0 2.935 1.987 4.406 4.43 4.406h.053zm-.129-3.123c-.55 0-.943-.363-.943-1.271v-.364c0-.85.41-1.242.931-1.242.533 0 .955.41.955 1.184v.469c0 .873-.392 1.224-.943 1.224z" fill="#D2D8DE" fill-rule="nonzero"></path></g></g>
              </svg>

              <h4 className="mt-4">Nothing here now</h4>
              <p className="mt-2">No data yet, please go back</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
