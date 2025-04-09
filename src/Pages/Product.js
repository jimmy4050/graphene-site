import React from "react";
import img1 from "../Images/Graphene Oxide (GO).png";
import img2 from "../Images/Modified Liquid Graphene Oxide (MLGO).jpg";
import img3 from "../Images/Functionalized Liquid Graphene Oxide (FLGO).jpg";
import img4 from "../Images/Reduced Graphene Oxide (rGO).jpg";
import "../CSS/Product.css";

const Product = () => {
  return (
    <div className="product-container">
     <div className="product-hero-section">
        <h1>Product</h1>
        <hr></hr>
        <p>Innovating with Graphene Technology</p>
      </div>

      <div className="product-row">
        <div className="col-md-5 product-image-container">
          <img src={img1} alt="Graphene Oxide" className="product-image" />
        </div>
        <div className="col-md-6 product-text-content">
          <h2>Graphene Oxide (GO)</h2>
          <p>
            Graphene Oxide is a single-atom-thick material with oxygenated functional groups
            attached to its surface. These groups make graphene oxide highly hydrophilic, which
            facilitates its dispersion in water or other solvents. This property is highly
            useful in a variety of applications, such as energy storage, sensors, and biomedical
            devices. It’s an excellent starting material for synthesizing other derivatives like
            Reduced Graphene Oxide (rGO).
          </p>
        </div>
      </div>

      <div className="product-row">
        <div className="col-md-6 product-text-content">
          <h2>Multilayered Graphene Oxide (MLGO)</h2>
          <p>
            MLGO is a modified version of graphene oxide that has been processed to enhance
            its properties, often making it more stable or tunable for specific
            applications. This material retains the dispersion capabilities of
            GO but with improved characteristics such as increased conductivity or
            better integration into various composites and materials.
          </p>
        </div>
        <div className="col-md-5 product-image-container-left">
          <img src={img2} alt="MLGO" className="product-image" />
        </div>
      </div>

      <div className="product-row">
        <div className="col-md-5 product-image-container">
          <img src={img3} alt="FLGO" className="product-image" />
        </div>
        <div className="col-md-6 product-text-content">
          <h2>Few Layered Graphene Oxide (FLGO)</h2>
          <p>
            Few Layered Graphene Oxide is a further modified version of GO, where
            functional groups are added to the graphene oxide sheets, which can enhance their
            performance for specific uses. The functional groups can include various organic or
            inorganic molecules, providing new chemical reactivity or facilitating better
            compatibility with other materials.
          </p>
        </div>
      </div>

      <div className="product-row">
        <div className="col-md-6 product-text-content">
          <h2>Reduced Graphene Oxide (rGO)</h2>
          <p>
            Reduced Graphene Oxide is created by chemically reducing graphene oxide to
            restore some of the electrical conductivity that was lost during oxidation.
            This material has improved properties over GO, especially in terms of electrical
            conductivity and mechanical strength, making it suitable for more demanding
            applications in electronics and energy storage.
          </p>
        </div>
        <div className="col-md-5 product-image-container-left">
          <img src={img4} alt="RGO" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default Product;
