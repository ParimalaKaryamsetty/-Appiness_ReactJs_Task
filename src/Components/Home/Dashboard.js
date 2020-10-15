import React from "react";

const HomeDashboard = ({ Users }) => {
  return (
    <section className="row">
      <div className="col-md-12">
        {Users.map((item, key) => (
          <div className="card inline-block m-1 shadow p-4 mb-4 bg-white">
            <img
              className="card-img-top rounded-circle card-img"
              src="https://i7.pngguru.com/preview/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg"
              alt="Card image"
            />
            <div className="card-body p-0">
              <h4 className="card-title text-center pt-1"> {item.name}</h4>
              <p className="card-text">
                <h6>Age : </h6>
                {item.age}
              </p>
              <p className="card-text">
                <h6>Gender : </h6>
                {item.gender}
              </p>
              <p className="card-text">
                <h6>Email : </h6>
                {item.email}
              </p>
              <p className="card-text">
                <h6>Phone Number : </h6>
                {item.phoneNo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeDashboard;
