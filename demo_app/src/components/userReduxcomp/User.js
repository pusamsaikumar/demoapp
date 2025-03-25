import React, { useState, useEffect, use, useReducer, useRef } from "react";
import { FaEye, FaFontAwesome, FaSlash, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetPOSTDetailsAPI } from "../redux/Actions";
import { Spinner } from "react-bootstrap";
import OnCircleMouse from "../onMouseEvents/OnCircleMouse";
import CursorFollower from "../onMouseEvents/CursorFollower";
import CusorFollwoerOnMovseEvent from "../onMouseEvents/CusorFollwoerOnMovseEvent";
import OnMouseMoveStateValuePosition from "../onMouseEvents/OnMouseMoveStateValuePosition";
import Navbar from "../portpolio/Navbar/Navbar";

const User = () => {
  // using ref attributes
  const circle = useRef(null);

  const hanldeMouseMoveRef = (event) => {
    if (circle.current) {
      circle.current.style.left = `${event.clientX - 25}px`;
      circle.current.style.top = `${event.clientY - 25}px`;
    }
  };

  // using state value:
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMoveState = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const getPostDetailsReducer = useSelector(
    (state) => state.getpostDetailsReducer
  );

  // Accessing specific values from `getpostDetailsReducer`
  const getPostDetailsData = getPostDetailsReducer.getPostDataDetails;
  const getPostDetailsLoading = getPostDetailsReducer.getPostDetailsLoading;
  const getPostDetailsMessage = getPostDetailsReducer.getPostDetailsMessage;

  // Optionally logging values
  console.log("Post Details Data:", getPostDetailsData);
  const [pass, setPass] = useState(true);
  const [passText, setPassText] = useState("");
  const handleTogglePass = () => setPass(!pass);
  const dispatch = useDispatch();
  console.log("data", getPostDetailsReducer);
  //
  useEffect(() => {
    dispatch(GetPOSTDetailsAPI());
  }, [dispatch]);

  const [postData, setPostData] = useState(null);
  useEffect(() => {
    if (getPostDetailsData && Object?.keys(getPostDetailsData)?.length > 0) {
      setPostData(getPostDetailsData);
    }
  }, [getPostDetailsData]);
  if (getPostDetailsLoading) {
    return <Spinner animation="border" variant="success" className="mx-auto" />;
  }

  return (
    <div
      // onMouseMove={hanldeMouseMoveRef} // using ref
      onMouseMove={handleMouseMoveState}
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      {/* <CursorFollower /> */}
      {/* <CusorFollwoerOnMovseEvent ref={circle} />   */}
      <OnMouseMoveStateValuePosition position={position} />
      <div className="border border-red-500  m-2 p-2 bg-black-100">
        <h2 className="bg-blue-500 text-gray p-2">
          Explain about redux stores and actions and reducers
        </h2>
        <p>
          Understand concepts about state management efficient flow compare to
          others contextAPI and useReducers
        </p>
      </div>
      <div>
        <div
          className="  border border-gray-300 p-3  m-5 w-1/2"
          style={{ maxWidth: "300px", width: "auto" }}
        >
          <div className="flex">
            <input
              type={`${pass ? "password" : "text"}`}
              name="passText"
              placeholder="Password"
              value={passText}
              onChange={(e) => setPassText(e.target.value)}
              style={{
                border: "0px",
                outline: "none",
              }}
            />
            <span style={{ marginRight: "5px" }} onClick={handleTogglePass}>
              {pass ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
      </div>
      <div>
        <table className="table table-bordered table-stripped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Dislikes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <>
              {postData?.posts?.length > 0 &&
                postData?.posts?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item?.id}</td>
                      <td>{item?.title}</td>
                      <td>{item?.reactions?.likes}</td>
                      <td>{item?.reactions?.dislikes}</td>
                    </tr>
                  );
                })}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
