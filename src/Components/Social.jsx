import React from "react";
import '../index.css'

const Social = () => {
  return (
    <div className="social-container">
      <div className="social-header">
        <h1 className="social-header-bold">
          Have you ever posted any photo on social media?
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          blanditiis harum repellat? Nihil eaque culpa dicta tempore quo sint
          doloremque!
        </h1>
      </div>

      <div className="social-center">
        <div className="info">
          <div>
            <h4>Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatibus illo eos autem minima reiciendis!
            </p>
          </div>
          <div>
            <h4>Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatibus illo eos autem minima reiciendis!
            </p>
          </div>
          <div>
            <h4>Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatibus illo eos autem minima reiciendis!
            </p>
          </div>
        </div>

        <div className="image">
          {/* Background image is set through css here */}
        </div>
      </div>
    </div>
  );
};

export default Social;
