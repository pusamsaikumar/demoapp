import React from "react";
import UseApiRequestCustomHook from "../customHooks/UseApiRequestCustomHook";
import UseFetchMethodCustomHook from "../customHooks/useFetchMethodCustomHook";
import UseFetchWithoutUserEffect from "../customHooks/UseFetchWithoutUserEffect";
import { Button, Table } from "react-bootstrap";

const UsersDetails = () => {
  //   const { data, loading, error } = UseApiRequestCustomHook(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   const { data, loading, error } = UseFetchMethodCustomHook(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  const { data, loading, error, fetchData } = UseFetchWithoutUserEffect(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <p>Loading .........</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div
      className="bg-purple-500 m-5 text-white p-4"
      style={{ background: "Purple" }}
    >
      <h2 className="mb-5">
        {" "}
        Display users details using useApiRequest custom Hook{" "}
      </h2>
      {data.length === 0 && (
        <Button className="mb-2" onClick={() => fetchData()}>
          Fetch Users
        </Button>
      )}
      {data?.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered table-stripped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{item?.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item?.address?.city}</td>
                    <td>{item?.address?.zipcode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <Table bordered striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{item?.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item?.address?.city}</td>
                    <td>{item?.address?.zipcode}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}
        </div>
      )}
    </div>
  );
};

export default UsersDetails;
